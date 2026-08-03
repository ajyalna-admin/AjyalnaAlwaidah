"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { tracksSection, tracks } from "@/lib/data";

export function Tracks() {
  return (
    <section id="tracks" className="section-pad border-b border-line">
      <div className="container-content">
        <SectionHeading eyebrow={tracksSection.eyebrow} title={tracksSection.title} />

        <div className="grid sm:grid-cols-2 gap-6">
          {tracks.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-8 relative flex flex-col"
            >
              {!t.available && (
                <span className="absolute top-6 left-6 rounded-full bg-sky/20 px-3 py-1 text-[11px] font-bold text-sky-deep">
                  قريبًا بإذن الله
                </span>
              )}
              <h3 className="font-display text-xl font-bold mb-3 pl-2 max-w-[80%]">{t.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{t.description}</p>
              {t.registerUrl && (
                <a
                  href={t.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-navy text-cream px-6 py-2.5 text-sm font-bold hover:bg-navy-light transition-colors duration-200"
                >
                  سجّل في المبادرة
                  <ArrowLeft className="h-4 w-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
