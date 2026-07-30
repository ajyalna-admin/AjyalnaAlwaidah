"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { team, teamSection } from "@/lib/data";

export function Team() {
  return (
    <section id="team" className="section-pad border-b border-line">
      <div className="container-content">
        <SectionHeading
          eyebrow={teamSection.eyebrow}
          title={teamSection.title}
          description={teamSection.description}
        />

        <div className="grid sm:grid-cols-3 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-sky/20 flex items-center justify-center mb-4">
                <span className="font-display text-lg font-bold text-sky-deep">
                  {m.name.trim().charAt(0)}
                </span>
              </div>
              <p className="font-display font-bold">{m.name}</p>
              <p className="text-sm text-muted mt-1">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
