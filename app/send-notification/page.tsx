"use client";

import { useState } from "react";

// صفحة داخلية بسيطة لإرسال تنبيه للمشتركين — لا تُربط من القائمة الرئيسية،
// يُفضّل حفظ رابطها خاصًا (مثلًا: yoursite.com/send-notification)

export default function SendNotificationPage() {
  const [adminSecret, setAdminSecret] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("/");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/push/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminSecret, title, body, url }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus(`خطأ: ${data.error || "فشل الإرسال"}`);
      } else {
        setStatus(`تم الإرسال ✅ — نجح: ${data.sent} / فشل: ${data.failed} من أصل ${data.total}`);
      }
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
            عنوان التنبيه
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
            نص التنبيه
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

        <button
          onClick={handleSend}
          disabled={loading || !adminSecret || !title || !body}
          className="w-full rounded-xl bg-navy px-4 py-3 text-sm font-bold text-white disabled:opacity-50"
        >
          {loading ? "جارٍ الإرسال..." : "إرسال للجميع"}
        </button>

        {status && <p className="text-sm text-navy">{status}</p>}
      </div>
    </div>
  );
}
