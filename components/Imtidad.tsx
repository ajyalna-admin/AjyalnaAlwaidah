"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { imtidad } from "@/lib/data";

export function ImtidadSection() {
  return (
    <section id="imtidad" className="section-pad border-b border-line bg-cream-deep/40">
      <div className="container-content">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky/20 mb-5">
            <Sparkles className="h-5 w-5 text-sky-deep" />
          </span>
          <p className="text-sm font-bold text-sky-deep mb-3">{imtidad.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            {imtidad.title}
          </h2>
          <p className="font-display text-lg italic text-navy/80 mb-6">"{imtidad.quote}"</p>
          <p className="text-muted leading-loose">{imtidad.description}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-lg font-bold mb-6 text-center">{imtidad.howTitle}</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {imtidad.steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-xl p-4 flex items-center gap-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-cream text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-sm">{step}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={imtidad.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-8 py-3.5 text-sm font-bold hover:bg-navy-light transition-colors duration-200"
            >
              {imtidad.button}
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
