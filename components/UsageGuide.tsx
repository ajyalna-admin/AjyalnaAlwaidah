"use client";

import { motion } from "framer-motion";
import { guideSection } from "@/lib/data";

export function UsageGuide() {
  return (
    <section className="section-pad py-14 sm:py-16 border-b border-line">
      <div className="container-content">
        <p className="text-sm font-bold text-sky-deep mb-6 text-center">{guideSection.title}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {guideSection.steps.map((s, i) => (
            <motion.div
              key={s.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-chip rounded-2xl p-5 flex items-start gap-3"
            >
              <span className="text-2xl shrink-0">{s.emoji}</span>
              <p className="text-sm leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
