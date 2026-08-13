"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell } from "lucide-react";

const DISMISS_KEY = "email-feature-announcement-dismissed-v1";

type FloatingBell = {
  id: number;
  left: number;
  duration: number;
  scale: number;
  color: string;
};

const BELL_COLORS = ["#16223f", "#5f95a0", "#c7d9dc"];
let bellIdCounter = 0;

// خلفية زخرفية دائمة: أجراس صغيرة ترتفع وتتأرجح (كأنها ترن) بكل صفحات الموقع،
// ترمز مباشرة لميزة التنبيهات المُعلنة
function RisingElements() {
  const [bells, setBells] = useState<FloatingBell[]>([]);

  useEffect(() => {
    const spawn = () => {
      const bell: FloatingBell = {
        id: bellIdCounter++,
        left: 4 + Math.random() * 92,
        duration: 16 + Math.random() * 10,
        scale: 0.5 + Math.random() * 0.5,
        color: BELL_COLORS[Math.floor(Math.random() * BELL_COLORS.length)],
      };
      setBells((prev) => [...prev.slice(-5), bell]);
    };

    spawn();
    const interval = window.setInterval(spawn, 6500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {bells.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: "110vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "-15vh",
            opacity: [0, 0.4, 0.4, 0],
            rotate: [0, -14, 12, -10, 8, -6, 0], // يتأرجح كأنه يرن أثناء ارتفاعه
          }}
          transition={{
            y: { duration: b.duration, ease: "linear" },
            opacity: { duration: b.duration, ease: "linear" },
            rotate: { duration: 1.1, repeat: Infinity, ease: "easeInOut" },
          }}
          onAnimationComplete={() =>
            setBells((prev) => prev.filter((x) => x.id !== b.id))
          }
          style={{ position: "absolute", left: `${b.left}%`, color: b.color, transformOrigin: "50% 0%" }}
        >
          <Bell style={{ width: 22 * b.scale, height: 22 * b.scale }} fill="currentColor" strokeWidth={0} />
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
      <RisingElements />

      <AnimatePresence>
        {!dismissed && (
          <>
            {/* شريط إشعار منفصل أعلى الصفحة */}
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-0 z-50 mx-auto max-w-md px-4 pt-4"
            >
              <div className="flex items-center gap-2.5 rounded-2xl glass-card px-5 py-3.5 shadow-lg">
                <Bell className="h-4 w-4 shrink-0 text-sky-deep" />
                <p className="text-sm font-bold text-navy">
                  تحديث جديد على موقع أجيالنا الواعدة!
                </p>
              </div>
            </motion.div>

            {/* نافذة البوستر المنبثقة، مستقلة تمامًا عن الشريط أعلاه */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 flex items-center justify-center bg-navy/50 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[340px] overflow-hidden rounded-3xl shadow-2xl"
              >
                <button
                  type="button"
                  onClick={handleDismiss}
                  aria-label="إغلاق الإعلان"
                  className="absolute top-3 left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition-colors hover:bg-white"
                >
                  <X className="h-4 w-4" />
                </button>

                <Image
                  src="/email-feature-poster.jpg"
                  alt="جديد أجيالنا يصلك أولًا — تم إطلاق خاصية الاشتراك في تنبيهات المواضيع"
                  width={900}
                  height={1600}
                  className="h-auto w-full"
                  priority
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
