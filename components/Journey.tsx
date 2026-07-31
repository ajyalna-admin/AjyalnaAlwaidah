"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { journeySection, journeyStages } from "@/lib/data";

const barColors = [
  "bg-navy",
  "bg-sky-deep",
  "bg-sky",
  "bg-navy-light",
];

export function Journey() {
  return (
    <section id="journey" className="section-pad border-b border-line bg-cream-deep/40">
      <div className="container-content">
        <SectionHeading
          eyebrow={journeySection.eyebrow}
          title={journeySection.title}
          description={journeySection.description}
        />

        <div className="overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
          <div className="min-w-[860px] sm:min-w-0 grid grid-flow-col auto-cols-fr">
            {journeyStages.map((stage, i) => {
              const isTop = i % 2 === 0;
              const color = barColors[i % barColors.length];
              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: isTop ? -14 : 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col items-center"
                >
                  {isTop && (
                    <>
                      <span
                        className={`flex h-16 w-16 items-center justify-center rounded-full ${color} text-2xl shadow-md mb-1`}
                      >
                        {stage.emoji}
                      </span>
                      <span className="h-6 w-px bg-navy/25" aria-hidden="true" />
                    </>
                  )}

                  <span className={`relative w-full h-2.5 ${color} first:rounded-r-full last:rounded-l-full`}>
                    <span className="absolute right-1/2 translate-x-1/2 -top-[3px] h-2 w-2 rounded-full bg-cream border border-navy/20" />
                  </span>

                  {!isTop && (
                    <>
                      <span className="h-6 w-px bg-navy/25" aria-hidden="true" />
                      <span
                        className={`flex h-16 w-16 items-center justify-center rounded-full ${color} text-2xl shadow-md mt-1`}
                      >
                        {stage.emoji}
                      </span>
                    </>
                  )}

                  <p className="mt-3 text-center text-xs sm:text-sm font-display font-bold px-2 leading-snug max-w-[120px]">
                    {stage.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
