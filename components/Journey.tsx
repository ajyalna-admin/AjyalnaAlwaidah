"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { journeySection, journeyStages } from "@/lib/data";

export function Journey() {
  return (
    <section id="journey" className="section-pad border-b border-line bg-cream-deep/40">
      <div className="container-content">
        <SectionHeading
          eyebrow={journeySection.eyebrow}
          title={journeySection.title}
          description={journeySection.description}
        />

        <div className="relative max-w-xl mx-auto">
          <div
            className="absolute right-6 top-2 bottom-2 w-px bg-gradient-to-b from-sky-deep/40 via-sky-deep/20 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-3">
            {journeyStages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center gap-5 pr-0"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream border-2 border-sky-deep/40 text-lg shadow-sm">
                  {stage.emoji}
                </span>
                <span className="glass-card rounded-xl px-5 py-3.5 flex-1 font-display font-bold text-sm sm:text-base">
                  {stage.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
