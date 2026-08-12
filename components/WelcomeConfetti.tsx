"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ألوان متناسقة مع هوية الموقع + لمسات احتفالية زاهية
const COLORS = ["#16223f", "#5f95a0", "#f6c453", "#e8734a", "#9fd8c9", "#c9a6e8"];

type Piece = {
  id: number;
  left: number; // نسبة مئوية من عرض الشاشة
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotate: number;
};

function generatePieces(count: number): Piece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.6,
    duration: 2.4 + Math.random() * 1.4,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 6 + Math.random() * 8,
    rotate: Math.random() * 360,
  }));
}

export function WelcomeConfetti() {
  const [pieces, setPieces] = useState<Piece[] | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // يشتغل مرة وحدة بس لكل جلسة تصفح، عشان ما يتكرر مع كل تنقل بين الصفحات
    const alreadyShown = sessionStorage.getItem("welcome-confetti-shown");
    if (alreadyShown) return;

    sessionStorage.setItem("welcome-confetti-shown", "1");
    setPieces(generatePieces(60));
    setShow(true);

    const timer = window.setTimeout(() => setShow(false), 4000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!pieces) return null;

  return (
    <AnimatePresence>
      {show && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          {pieces.map((p) => (
            <motion.span
              key={p.id}
              initial={{ y: "110vh", opacity: 0, rotate: 0 }}
              animate={{ y: "-10vh", opacity: [0, 1, 1, 0], rotate: p.rotate }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                left: `${p.left}%`,
                width: p.size,
                height: p.size * 1.4,
                backgroundColor: p.color,
                borderRadius: 2,
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
