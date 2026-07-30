"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { programs, programsSection } from "@/lib/data";

export function Programs() {
  return (
    <section id="programs" className="section-pad border-b border-line">
      <div className="container-content">
        <SectionHeading
          eyebrow={programsSection.eyebrow}
          title={programsSection.title}
          description={programsSection.description}
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-7"
            >
              <span className="inline-block text-xs font-bold text-sky-deep bg-sky/15 px-3 py-1 rounded-full mb-4">
                {p.tag}
              </span>
              <h3 className="font-display text-xl font-bold leading-snug">{p.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
