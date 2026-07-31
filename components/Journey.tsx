"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
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

        <div className="max-w-xl mx-auto">
          {journeyStages.map((stage, i) => (
            <div key={stage.number}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-cream font-display font-bold text-sm">
                  {stage.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold mb-1.5">{stage.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{stage.description}</p>
                </div>
              </motion.div>

              {i < journeyStages.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-4 w-4 text-sky-deep/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
