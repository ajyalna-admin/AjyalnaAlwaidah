=import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const FONT_STACK = "Tahoma, Arial, 'Segoe UI', sans-serif";

// يحوّل أي رابط خام داخل النص إلى زر كحلي قابل للضغط،
// عشان تقدر تكتبين أكثر من رابط بنص الرسالة نفسه وكل واحد يطلع كزر منفصل
function linkifyText(text: string): string {
  const urlRegex = /(https?:\/\/[^\s<]+)/g;
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(
    urlRegex,
    (url) =>
      `<a href="${url}" style="display:inline-block;background-color:#16223f;color:#f6f2ea;padding:10px 22px;border-radius:24px;text-decoration:none;font-weight:bold;font-size:13px;margin:6px 2px;">فتح الرابط</a>`
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
      emails = [targetEmail.trim().toLowerCase()];
    } else {
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
      ? `<tr><td align="center" style="padding-top:20px;">
           <a href="${url}" style="display:inline-block;background-color:#16223f;color:#f6f2ea;padding:13px 28px;border-radius:26px;text-decoration:none;font-weight:bold;font-size:14px;">اضغطي هنا للاطلاع</a>
         </td></tr>`
      : "";

    // بنية بسيطة بدون <html>/<head>/خطوط خارجية، عشان Gmail ما يقص أي جزء منها
    const html = `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f2ea;padding:32px 16px;font-family:${FONT_STACK};" dir="rtl">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background-color:#ffffff;border-radius:24px;border:1px solid #e3ddd0;">
        <tr>
          <td style="background-color:#16223f;padding:26px 32px;text-align:center;border-radius:24px 24px 0 0;">
            <div style="color:#f6f2ea;font-size:19px;font-weight:bold;">أجيالنا الواعدة</div>
            <div style="color:#8fb5bd;font-size:12px;margin-top:6px;">جيلٌ يُمكّن جيلاً</div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="color:#16223f;font-size:19px;font-weight:bold;padding-bottom:14px;">${subject}</td>
              </tr>
              <tr>
                <td style="color:#16223f;font-size:14.5px;line-height:2;">${bodyHtml}</td>
              </tr>
              ${linkHtml}
            </table>
          </td>
        </tr>
        <tr>
          <td style="background-color:#f6f2ea;padding:18px 32px;text-align:center;border-top:1px solid #e3ddd0;border-radius:0 0 24px 24px;">
            <div style="color:#16223f;font-size:12px;">أجيالنا الواعدة — منصة الإرشاد الجامعي</div>
            <div style="color:#5f95a0;font-size:12px;margin-top:4px;">ajyalnaalwaidah.com</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
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
