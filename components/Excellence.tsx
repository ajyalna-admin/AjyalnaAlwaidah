"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { excellenceSection, excellenceList } from "@/lib/data";

export function Excellence() {
  return (
    <section id="excellence" className="section-pad border-b border-line bg-cream-deep/40">
      <div className="container-content">
        <SectionHeading
          eyebrow={excellenceSection.eyebrow}
          title={excellenceSection.title}
          description={excellenceSection.description}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {excellenceList.map((c, i) => (
            <motion.div
              key={c.committeeName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky/20">
                  <Star className="h-4 w-4 text-sky-deep" />
                </span>
                <p className="font-display font-bold leading-snug">{c.committeeName}</p>
              </div>
              <ul className="space-y-2">
                {c.members.map((m, mi) => (
                  <li key={mi} className="text-sm text-muted flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-deep shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
