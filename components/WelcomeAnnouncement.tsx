"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, Mail } from "lucide-react";

const DISMISS_KEY = "email-feature-announcement-dismissed-v1";

type FloatingIcon = {
  id: number;
  left: number;
  duration: number;
  scale: number;
  color: string;
  kind: "bell" | "mail";
};

const ICON_COLORS = ["#16223f", "#5f95a0", "#c7d9dc"];
let iconIdCounter = 0;

// خلفية زخرفية دائمة: أيقونات بريد وأجراس صغيرة ترتفع بهدوء بكل صفحات الموقع،
// بنفس ثيم ميزة الاشتراك بالتنبيهات والبريد الإلكتروني اللي أُعلن عنها
function RisingElements() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const spawn = () => {
      const icon: FloatingIcon = {
        id: iconIdCounter++,
        left: 4 + Math.random() * 92,
        duration: 16 + Math.random() * 10,
        scale: 0.5 + Math.random() * 0.5,
        color: ICON_COLORS[Math.floor(Math.random() * ICON_COLORS.length)],
        kind: Math.random() < 0.5 ? "bell" : "mail",
      };
      setIcons((prev) => [...prev.slice(-5), icon]);
    };

    spawn();
    const interval = window.setInterval(spawn, 6500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {icons.map((ic) => {
        const IconComp = ic.kind === "bell" ? Bell : Mail;
        return (
          <motion.div
            key={ic.id}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-15vh", opacity: [0, 0.35, 0.35, 0] }}
            transition={{ duration: ic.duration, ease: "linear" }}
            onAnimationComplete={() =>
              setIcons((prev) => prev.filter((x) => x.id !== ic.id))
            }
            style={{ position: "absolute", left: `${ic.left}%`, color: ic.color }}
          >
            <IconComp style={{ width: 22 * ic.scale, height: 22 * ic.scale }} fill="currentColor" strokeWidth={0} />
          </motion.div>
        );
      })}
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
        )}
      </AnimatePresence>
    </>
  );
}
