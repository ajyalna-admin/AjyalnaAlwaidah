import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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
      `<a href="${url}" style="display:inline-block;background-color:#16223f;color:#f6f2ea;padding:10px 22px;border-radius:24px;text-decoration:none;font-weight:bold;font-size:13px;margin:6px 2px;font-family:'IBM Plex Sans Arabic',Tahoma,Arial,sans-serif;">فتح الرابط</a>`
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
      ? `<div style="text-align:center;margin-top:20px">
           <a href="${url}" style="display:inline-block;background-color:#16223f;color:#f6f2ea;padding:13px 28px;border-radius:26px;text-decoration:none;font-weight:bold;font-size:14px;font-family:'IBM Plex Sans Arabic',Tahoma,Arial,sans-serif;">اضغطي هنا للاطلاع</a>
         </div>`
      : "";

    const html = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style="margin:0;padding:0;background-color:#f6f2ea;font-family:'IBM Plex Sans Arabic',Tahoma,Arial,sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f2ea;padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width:480px;background-color:#ffffff;border-radius:24px;overflow:hidden;border:1px solid rgba(22,34,63,0.08);">

                <!-- الهيدر بهوية الموقع -->
                <tr>
                  <td style="background-color:#16223f;padding:28px 32px;text-align:center;">
                    <p style="margin:0;color:#f6f2ea;font-size:19px;font-weight:700;">أجيالنا الواعدة</p>
                    <p style="margin:6px 0 0;color:#5f95a0;font-size:12px;">جيلٌ يُمكّن جيلاً</p>
                  </td>
                </tr>

                <!-- المحتوى -->
                <tr>
                  <td style="padding:32px;">
                    <h2 style="margin:0 0 16px;color:#16223f;font-size:20px;font-weight:700;line-height:1.5;">${subject}</h2>
                    <p style="margin:0;color:#16223f;font-size:14.5px;line-height:2;opacity:0.9;">${bodyHtml}</p>
                    ${linkHtml}
                  </td>
                </tr>

                <!-- الفوتر -->
                <tr>
                  <td style="background-color:#f6f2ea;padding:20px 32px;text-align:center;border-top:1px solid rgba(22,34,63,0.08);">
                    <p style="margin:0;color:#16223f;opacity:0.7;font-size:12px;">أجيالنا الواعدة — منصة الإرشاد الجامعي</p>
                    <p style="margin:6px 0 0;color:#5f95a0;font-size:12px;">ajyalnaalwaidah.com</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
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
