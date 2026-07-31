"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-pad border-b border-line">
      <div className="container-content">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        <div className="max-w-2xl space-y-5">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-muted leading-loose"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
