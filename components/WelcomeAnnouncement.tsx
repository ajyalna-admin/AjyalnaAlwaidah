"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DISMISS_KEY = "hubour-day-banner-dismissed-v1";

// شكل منطاد صغير مبسّط، يُستخدم بالبانر وبالمنطادات المتحركة بالخلفية
function BalloonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 56" className={className} fill="none">
      <ellipse cx="20" cy="20" rx="18" ry="20" fill="currentColor" />
      <path d="M14 38 L26 38 L23 48 L17 48 Z" fill="currentColor" opacity="0.85" />
      <line x1="15" y1="37" x2="17" y2="48" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      <line x1="25" y1="37" x2="23" y2="48" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
    </svg>
  );
}

type Balloon = {
  id: number;
  left: number;
  duration: number;
  delay: number;
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
        delay: 0,
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
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 z-50"
          >
            <div
              className="relative mx-auto flex max-w-3xl items-center gap-4 rounded-b-2xl px-5 py-3.5 shadow-lg sm:px-6"
              style={{
                background: "linear-gradient(135deg, #dbe9ee 0%, #eef4f2 55%, #f6f2ea 100%)",
              }}
            >
              <BalloonIcon className="h-10 w-10 shrink-0 text-navy" />

              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-bold text-navy sm:text-base">
                  في طريقه إليكم — يوم الحبور 🎈
                </p>
                <p className="mt-0.5 text-xs text-navy/70">
                  موعد الوصول: الأربعاء | 12 أغسطس
                </p>
              </div>

              <button
                type="button"
                onClick={handleDismiss}
                aria-label="إغلاق الإعلان"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy transition-colors hover:bg-navy/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
