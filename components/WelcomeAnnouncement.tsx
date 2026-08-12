"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DISMISS_KEY = "hubour-day-banner-dismissed-v2";

// شكل منطاد صغير مبسّط، يُستخدم فقط بالمنطادات المتحركة بالخلفية
function BalloonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 64" className={className} fill="none">
      {/* غلاف المنطاد */}
      <path
        d="M20 2C10 2 4 14 4 24C4 34 11 41 16 44L15 48H25L24 44C29 41 36 34 36 24C36 14 30 2 20 2Z"
        fill="currentColor"
      />
      {/* خطوط الفصوص تعطي إحساس القماش المضلّع */}
      <path d="M20 2C16 10 14 30 15 48" stroke="#16223f" strokeWidth="0.7" opacity="0.25" fill="none" />
      <path d="M20 2C24 10 26 30 25 48" stroke="#16223f" strokeWidth="0.7" opacity="0.25" fill="none" />
      <path d="M20 2C20 12 20 36 20 48" stroke="#16223f" strokeWidth="0.7" opacity="0.2" fill="none" />
      {/* فوهة المنطاد */}
      <path d="M15 48H25L23 52H17Z" fill="currentColor" opacity="0.9" />
      {/* حبال */}
      <line x1="17" y1="51" x2="12" y2="58" stroke="currentColor" strokeWidth="0.9" opacity="0.75" />
      <line x1="23" y1="51" x2="28" y2="58" stroke="currentColor" strokeWidth="0.9" opacity="0.75" />
      {/* السلة */}
      <rect x="12" y="58" width="16" height="6" rx="1.5" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

type Balloon = {
  id: number;
  left: number;
  duration: number;
  scale: number;
  color: string;
};

const BALLOON_COLORS = ["#16223f", "#5f95a0", "#c7d9dc"];
let balloonIdCounter = 0;

// خلفية زخرفية دائمة: منطادات صغيرة ترتفع بهدوء بكل صفحات الموقع،
// تفضل شغالة سواء أغلقت الزائرة بانر الإعلان أو لأ
function RisingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const spawn = () => {
      const balloon: Balloon = {
        id: balloonIdCounter++,
        left: 4 + Math.random() * 92,
        duration: 14 + Math.random() * 10,
        scale: 0.5 + Math.random() * 0.6,
        color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
      };
      setBalloons((prev) => [...prev.slice(-6), balloon]);
    };

    spawn();
    const interval = window.setInterval(spawn, 5500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-20vh", opacity: [0, 0.5, 0.5, 0] }}
          transition={{ duration: b.duration, ease: "linear" }}
          onAnimationComplete={() =>
            setBalloons((prev) => prev.filter((x) => x.id !== b.id))
          }
          style={{ position: "absolute", left: `${b.left}%`, width: 40 * b.scale, color: b.color }}
        >
          <BalloonIcon className="w-full" />
        </motion.div>
      ))}
    </div>
  );
}

export function WelcomeAnnouncement() {
  const [dismissed, setDismissed] = useState(true); // نبدأ مخفي لحد ما نتأكد من localStorage (لتفادي وميض بالعرض)

  useEffect(() => {
    const alreadyDismissed = localStorage.getItem(DISMISS_KEY);
    setDismissed(Boolean(alreadyDismissed));
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <>
      <RisingBalloons />

      <AnimatePresence>
        {!dismissed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] overflow-hidden rounded-3xl bg-cream shadow-2xl"
            >
              <button
                type="button"
                onClick={handleDismiss}
                aria-label="إغلاق الإعلان"
                className="absolute top-3 left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition-colors hover:bg-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="px-5 pb-4 pt-6 text-center">
                <p className="font-display text-sm font-bold text-navy">
                  يوم الحبور
                </p>
                <p className="mt-2 text-xs leading-relaxed text-navy/75">
                  يومنا اللي نخفف فيه من جدية الجامعة شوي، ونعطي المستجدات فرصة
                  يتعرفون على بعض بعيدًا عن المواضيع الجامعية. وقت نقضيه ما بين
                  مسابقات، فيها منافسة وضحك وتعارف، والأهم نصنع مع بعض ذكرى
                  حلوة من بداية مشوارنا الجامعي. يوم الحبور هو يومنا اللي
                  نحتفل فيه بالبدايات بطريقتنا.
                </p>
              </div>

              <Image
                src="/hubour-day-poster.jpg"
                alt="في طريقه إليكم — يوم الحبور، موعد الوصول الأربعاء 12 أغسطس"
                width={900}
                height={1313}
                className="h-auto w-full"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


