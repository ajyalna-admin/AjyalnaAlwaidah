"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, Info, Clock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { resourcesSection, topics } from "@/lib/data";

export function Resources() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="resources" className="section-pad border-b border-line">
      <div className="container-content">
        <SectionHeading
          eyebrow={resourcesSection.eyebrow}
          title={resourcesSection.title}
          description={resourcesSection.description}
        />

        <div className="flex items-start gap-2.5 mb-10 max-w-xl text-sm text-muted glass-chip rounded-xl p-4">
          <Info className="h-4 w-4 shrink-0 mt-0.5 text-sky-deep" />
          <p>{resourcesSection.note}</p>
        </div>

        <div className="grid gap-4">
          {topics.map((t, i) => {
            const isOpen = openIndex === i;
            const hasContent = Boolean(t.content);
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky/15 text-xs font-display font-bold text-sky-deep">
                      {num}
                    </span>
                    <span className="font-display font-bold leading-snug text-sm sm:text-base">
                      {t.title}
                    </span>
                  </span>
                  <span className="flex items-center gap-2 shrink-0">
                    {!hasContent && <Clock className="h-3.5 w-3.5 text-muted" />}
                    <ChevronDown
                      className={`h-4 w-4 text-sky-deep transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 pt-1 border-t border-white/40">
                        {hasContent ? (
                          <p className="whitespace-pre-line text-sm leading-relaxed text-navy/85 mt-5">
                            {t.content}
                          </p>
                        ) : (
                          <div className="flex items-center gap-2.5 mt-5 text-sm text-muted">
                            <BookOpen className="h-4 w-4 text-sky-deep shrink-0" />
                            <p>هذا الموضوع قيد الإعداد حاليًا، وسيُضاف قريبًا بإذن الله.</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
