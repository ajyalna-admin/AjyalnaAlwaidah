"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { impact } from "@/lib/data";

export function Impact() {
  return (
    <section id="impact" className="section-pad border-b border-line bg-navy text-cream">
      <div className="container-content">
        <p className="text-sm font-bold text-sky mb-3">{impact.eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] max-w-2xl mb-4">
          {impact.title}
        </h2>

        <div className="flex items-start gap-2.5 mb-14 max-w-xl text-cream/60 text-sm bg-cream/5 border border-cream/10 rounded-xl p-4">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <p>{impact.note}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {impact.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-sky">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-cream/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
