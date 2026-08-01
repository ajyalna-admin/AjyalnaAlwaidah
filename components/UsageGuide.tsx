"use client";

import { motion } from "framer-motion";
import { Compass, FolderOpen, BookMarked, MessageCircle, type LucideIcon } from "lucide-react";
import { guideSection } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Compass,
  FolderOpen,
  BookMarked,
  MessageCircle,
};

export function UsageGuide() {
  return (
    <section className="section-pad py-14 sm:py-16 border-b border-line">
      <div className="container-content">
        <p className="text-sm font-bold text-sky-deep mb-6 text-center">{guideSection.title}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {guideSection.steps.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Compass;
            return (
              <motion.div
                key={s.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-chip rounded-2xl p-5 flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky/20">
                  <Icon className="h-4 w-4 text-sky-deep" />
                </span>
                <p className="text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
