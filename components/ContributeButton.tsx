"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { courseHub, brand } from "@/lib/data";

export function ContributeButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-8 py-3.5 text-sm font-bold hover:bg-navy-light transition-colors duration-200"
      >
        <Sparkles className="h-4 w-4" />
        {courseHub.contributeTitle}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-navy-deep/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md glass-card rounded-3xl p-7 sm:p-9"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                aria-label="إغلاق"
              >
                <X className="h-4 w-4" />
              </button>

              <h3 className="font-display text-lg font-bold mb-4">{courseHub.contributeTitle}</h3>

              <div className="flex flex-wrap gap-2 mb-5">
                {courseHub.contributeOptions.map((o) => (
                  <span key={o} className="glass-chip rounded-full px-3 py-1.5 text-xs font-medium">
                    {o}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted leading-relaxed mb-5">
                {courseHub.contributeComingSoon}
              </p>

              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center justify-center w-full rounded-full bg-navy text-cream px-6 py-3 text-sm font-bold hover:bg-navy-light transition-colors duration-200"
              >
                تواصلي معنا الآن
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
