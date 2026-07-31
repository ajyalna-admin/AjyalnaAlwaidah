"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { summarySection, summaryCards } from "@/lib/data";

export function Summary() {
  return (
    <section id="summary" className="section-pad border-b border-line">
      <div className="container-content">
        <SectionHeading
          eyebrow={summarySection.eyebrow}
          title={summarySection.title}
          description={summarySection.description}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {summaryCards.map((card, i) => (
            <motion.div
              key={card}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-5 flex flex-col items-center text-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky/20">
                <FileText className="h-4 w-4 text-sky-deep" />
              </span>
              <p className="text-sm font-bold leading-snug">{card}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
