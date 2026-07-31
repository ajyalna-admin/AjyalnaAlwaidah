"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { joinSection, brand } from "@/lib/data";

export function JoinUs() {
  return (
    <section id="join" className="section-pad">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="glass-card rounded-3xl p-10 sm:p-14 text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-[1.2] mb-4">
            {joinSection.title}
          </h2>
          <p className="text-muted leading-loose max-w-xl mx-auto mb-8">{joinSection.description}</p>
          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-8 py-3.5 text-sm font-bold hover:bg-navy-light transition-colors duration-200"
          >
            {joinSection.button}
            <ArrowLeft className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
