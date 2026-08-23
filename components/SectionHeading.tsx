"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12 sm:mb-14"
    >
      <p className="text-sm font-bold text-sky-deep mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base sm:text-lg max-w-xl leading-loose">
          {description}
        </p>
      )}
    </motion.div>
  );
}
