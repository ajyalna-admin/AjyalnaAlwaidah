"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { faqSection, faqItems } from "@/lib/data";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad border-b border-line bg-cream-deep/40">
      <div className="container-content">
        <SectionHeading eyebrow={faqSection.eyebrow} title={faqSection.title} />

        <div className="grid gap-3.5 max-w-2xl">
          {faqItems.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={f.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base">{f.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-sky-deep transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 pt-1 text-sm text-muted leading-relaxed border-t border-white/40 mt-1 pt-4">
                        {f.answer}
                      </p>
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
