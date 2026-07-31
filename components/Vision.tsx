"use client";

import { motion } from "framer-motion";
import { Target, Compass, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { visionMission, goalsSection, valuesSection } from "@/lib/data";

export function Vision() {
  return (
    <section id="vision" className="section-pad border-b border-line bg-cream-deep/40">
      <div className="container-content">
        <SectionHeading eyebrow="رؤيتنا ورسالتنا" title="ما نسعى إلى تحقيقه" />

        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl p-7"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky/20 mb-5">
              <Compass className="h-5 w-5 text-sky-deep" />
            </span>
            <h3 className="font-display text-lg font-bold mb-3">{visionMission.visionTitle}</h3>
            <p className="text-sm text-muted leading-relaxed">{visionMission.visionText}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl p-7"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky/20 mb-5">
              <Target className="h-5 w-5 text-sky-deep" />
            </span>
            <h3 className="font-display text-lg font-bold mb-3">{visionMission.missionTitle}</h3>
            <p className="text-sm text-muted leading-relaxed">{visionMission.missionText}</p>
          </motion.div>
        </div>

        <div className="mb-16">
          <h3 className="font-display text-lg font-bold mb-6">{goalsSection.title}</h3>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {goalsSection.goals.map((g, i) => (
              <motion.div
                key={g}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-3 glass-chip rounded-xl p-4"
              >
                <CheckCircle2 className="h-4 w-4 text-sky-deep shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{g}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold mb-6">{valuesSection.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {valuesSection.values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-6"
              >
                <p className="font-display font-bold mb-2">{v.title}</p>
                <p className="text-sm text-muted leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
