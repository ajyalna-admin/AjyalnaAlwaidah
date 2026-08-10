"use client";

import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { NotificationOptIn } from "@/components/NotificationOptIn";
import { EmailSubscribe } from "@/components/EmailSubscribe";

// وضع "قريبًا": يخفي نموذج الاشتراك الحقيقي مؤقتًا ويطلع بداله رسالة تشويقية،
// لحين الإعلان الرسمي عن الخاصية. لتفعيل النموذج الحقيقي، غيّري القيمة إلى false.
const COMING_SOON = true;

export function FloatingSubscribe() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-start gap-3">
      {open && (
        <div className="w-72 max-w-[calc(100vw-3rem)] rounded-2xl glass-card p-4 shadow-lg">
          {COMING_SOON ? (
            <div className="flex items-start gap-2.5">
              <Sparkles className="h-4 w-4 shrink-0 mt-0.5 text-sky-deep" />
              <div>
                <p className="text-xs font-bold text-navy">شي جديد بالطريق... ✨</p>
                <p className="mt-1 text-[11px] text-muted">
                  ترقّبي إعلاننا القريب، بتحبين هالخاصية.
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="mb-3 text-xs font-bold text-navy">
                تابعي كل جديد يُضاف للموقع أول بأول
              </p>
              <div className="flex flex-col items-stretch gap-2.5">
                <NotificationOptIn />
                <EmailSubscribe />
              </div>
            </>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "إغلاق" : "شي جديد قريبًا، اضغطي لمعرفة المزيد"}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform hover:scale-105"
      >
        {COMING_SOON && !open && (
          <>
            <span className="absolute inset-0 rounded-full bg-sky-deep/60 animate-ping" />
            <span className="absolute -top-0.5 -left-0.5 h-3 w-3 rounded-full bg-sky-deep ring-2 ring-cream" />
          </>
        )}
        {open ? <X className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
      </button>
    </div>
  );
}
