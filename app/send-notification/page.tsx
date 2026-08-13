"use client";

import { useState } from "react";

// صفحة داخلية بسيطة لإرسال تنبيه + بريد للمشتركين — لا تُربط من القائمة الرئيسية

export default function SendNotificationPage() {
  const [adminSecret, setAdminSecret] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("/");
  const [sendPush, setSendPush] = useState(true);
  const [sendEmail, setSendEmail] = useState(true);
  const [sendToSpecific, setSendToSpecific] = useState(false);
  const [targetEmail, setTargetEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    setStatus(null);
    const results: string[] = [];

    try {
      if (sendPush && !sendToSpecific) {
        const res = await fetch("/api/push/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ adminSecret, title, body, url }),
        });
        const data = await res.json();
        results.push(
          res.ok
            ? `تنبيهات: نجح ${data.sent} / فشل ${data.failed} من ${data.total}`
            : `تنبيهات: خطأ — ${data.error}`
        );
      }

      if (sendEmail) {
        const fullUrl = url?.startsWith("http")
          ? url
          : `${window.location.origin}${url || "/"}`;
        const res = await fetch("/api/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            adminSecret,
            subject: title,
            body,
            url: fullUrl,
            targetEmail: sendToSpecific ? targetEmail : undefined,
          }),
        });
        const data = await res.json();
        results.push(
          res.ok
            ? `بريد إلكتروني: نجح ${data.sent} / فشل ${data.failed} من ${data.total}`
            : `بريد إلكتروني: خطأ — ${data.error}`
        );
      }

      setStatus(results.join("  •  "));
    } catch {
      setStatus("خطأ بالاتصال");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" className="mx-auto max-w-lg px-6 py-16">
      <h1 className="mb-6 text-xl font-bold text-navy">إرسال تنبيه جديد</h1>

      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-navy">
            كلمة السر الإدارية
          </label>
          <input
            type="password"
            value={adminSecret}
            onChange={(e) => setAdminSecret(e.target.value)}
            className="w-full rounded-xl border border-line px-4 py-2.5 text-sm"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-navy">
            عنوان التنبيه / موضوع البريد
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="مثال: جديد في أجيالنا الواعدة"
            className="w-full rounded-xl border border-line px-4 py-2.5 text-sm"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-navy">
            النص
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="مثال: ضفنا موضوع خدمة التسريع الأكاديمي كامل — شوفيه الحين"
            rows={3}
            className="w-full rounded-xl border border-line px-4 py-2.5 text-sm"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-navy">
            الرابط عند الضغط (اختياري)
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="/#partial-acceleration"
            className="w-full rounded-xl border border-line px-4 py-2.5 text-sm"
          />
        </div>

        <div className="rounded-xl border border-line p-3.5 space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-navy">
            <input
              type="checkbox"
              checked={sendToSpecific}
              onChange={(e) => setSendToSpecific(e.target.checked)}
            />
            إرسال لإيميل محدد بدل الجميع
          </label>

          {sendToSpecific && (
            <>
              <input
                type="email"
                value={targetEmail}
                onChange={(e) => setTargetEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full rounded-xl border border-line px-4 py-2.5 text-sm"
              />
              <p className="text-[11px] text-muted">
                ملاحظة: بهذا الوضع يُرسل بريد إلكتروني فقط لهذا العنوان (تنبيه
                المتصفح غير متاح لإيميل محدد لأنه مرتبط بجهاز الزائرة لا بريدها).
              </p>
            </>
          )}
        </div>

        {!sendToSpecific && (
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm text-navy">
              <input
                type="checkbox"
                checked={sendPush}
                onChange={(e) => setSendPush(e.target.checked)}
              />
              إرسال تنبيه متصفح
            </label>
            <label className="flex items-center gap-2 text-sm text-navy">
              <input
                type="checkbox"
                checked={sendEmail}
                onChange={(e) => setSendEmail(e.target.checked)}
              />
              إرسال بريد إلكتروني
            </label>
          </div>
        )}

        <button
          onClick={handleSend}
          disabled={
            loading ||
            !adminSecret ||
            !title ||
            !body ||
            (sendToSpecific ? !targetEmail : !sendPush && !sendEmail)
          }
          className="w-full rounded-xl bg-navy px-4 py-3 text-sm font-bold text-white disabled:opacity-50"
        >
          {loading ? "جارٍ الإرسال..." : sendToSpecific ? "إرسال لهذا الإيميل" : "إرسال للجميع"}
        </button>

        {status && <p className="text-sm text-navy">{status}</p>}
      </div>
    </div>
  );
}
