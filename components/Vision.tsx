"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { vision } from "@/lib/data";

export function Vision() {
  return (
    <section id="vision" className="section-pad border-b border-line bg-cream-deep/40">
      <div className="container-content">
        <SectionHeading eyebrow={vision.eyebrow} title={vision.title} />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl font-display font-bold leading-relaxed max-w-2xl border-r-4 border-sky pr-6 mb-14"
        >
          {vision.visionStatement}
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-5">
          {vision.goals.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 flex items-start gap-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky/20">
                <Target className="h-4 w-4 text-sky-deep" />
              </span>
              <div>
                <p className="font-display font-bold leading-snug">{g.title}</p>
                <p className="text-sm text-muted mt-1.5 leading-relaxed">{g.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
