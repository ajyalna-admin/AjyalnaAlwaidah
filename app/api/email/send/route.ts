import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// يحوّل أي رابط خام داخل النص إلى رابط HTML قابل للضغط تلقائيًا،
// عشان تقدر تكتبين أكثر من رابط بنص الرسالة نفسه
function linkifyText(text: string): string {
  const urlRegex = /(https?:\/\/[^\s<]+)/g;
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(
    urlRegex,
    (url) =>
      `<a href="${url}" style="color:#16223f;font-weight:bold;text-decoration:underline">${url}</a>`
  );
}

export async function POST(request: Request) {
  try {
    const { adminSecret, subject, body, url, targetEmail } = await request.json();

    if (!process.env.PUSH_ADMIN_SECRET || adminSecret !== process.env.PUSH_ADMIN_SECRET) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    if (!subject || !body) {
      return NextResponse.json({ error: "العنوان والنص مطلوبان" }, { status: 400 });
    }

    let emails: string[];

    if (targetEmail && typeof targetEmail === "string" && targetEmail.trim()) {
      // إرسال لإيميل محدد فقط، بدون حاجة للتحقق من وجوده بقائمة المشتركين
      emails = [targetEmail.trim().toLowerCase()];
    } else {
      // إرسال جماعي لكل المشتركين (السلوك الافتراضي)
      const { data: subscribers, error } = await supabaseAdmin
        .from("email_subscribers")
        .select("email");

      if (error) {
        console.error("Supabase fetch error:", error);
        return NextResponse.json({ error: "تعذّر جلب المشتركين" }, { status: 500 });
      }

      emails = (subscribers || []).map((s) => s.email);
    }

    if (emails.length === 0) {
      return NextResponse.json({ success: true, sent: 0, failed: 0, total: 0 });
    }

    const bodyHtml = linkifyText(body).replace(/\n/g, "<br />");

    const linkHtml = url
      ? `<p style="margin-top:16px"><a href="${url}" style="color:#16223f;font-weight:bold">اضغطي هنا للاطلاع</a></p>`
      : "";

    const html = `
      <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#16223f">
        <h2 style="margin:0 0 12px">${subject}</h2>
        <p style="line-height:1.7">${bodyHtml}</p>
        ${linkHtml}
        <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5" />
        <p style="font-size:12px;color:#888">أجيالنا الواعدة</p>
      </div>
    `;

    const batchSize = 45;
    const batches: string[][] = [];
    for (let i = 0; i < emails.length; i += batchSize) {
      batches.push(emails.slice(i, i + batchSize));
    }

    let sent = 0;
    let failed = 0;

    for (const batch of batches) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "أجيالنا الواعدة <onboarding@resend.dev>",
          to: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          bcc: batch,
          subject,
          html,
        }),
      });

      if (res.ok) {
        sent += batch.length;
      } else {
        failed += batch.length;
        const errText = await res.text();
        console.error("Resend error:", errText);
      }
    }

    return NextResponse.json({ success: true, sent, failed, total: emails.length });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "فشل الإرسال" }, { status: 500 });
  }
}
