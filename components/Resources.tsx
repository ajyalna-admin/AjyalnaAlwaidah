"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, Info, Link2, Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { resourcesSection, topics } from "@/lib/data";

export function Resources() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // افتح الموضوع المطابق لرابط الصفحة تلقائيًا (deep link) وانزل له
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const idx = topics.findIndex((t) => t.slug === hash);
    if (idx !== -1) {
      setOpenIndex(idx);
      // ننتظر رسم العنصر قبل التمرير إليه
      requestAnimationFrame(() => {
        setTimeout(() => {
          cardRefs.current[topics[idx].slug]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 150);
      });
    }
  }, []);

  const handleCopyLink = async (slug: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback لو الحافظة غير متاحة
      window.prompt("انسخي الرابط:", url);
    }
    setCopiedSlug(slug);
    window.setTimeout(() => setCopiedSlug((cur) => (cur === slug ? null : cur)), 1800);
  };

  const handleToggle = (i: number, slug: string) => {
    const willOpen = openIndex !== i;
    setOpenIndex(willOpen ? i : null);
    const url = `${window.location.pathname}${willOpen ? `#${slug}` : ""}`;
    window.history.replaceState(null, "", url || window.location.pathname);
  };

  return (
    <section id="resources" className="section-pad border-b border-line">
      <div className="container-content">
        <SectionHeading
          eyebrow={resourcesSection.eyebrow}
          title={resourcesSection.title}
          description={resourcesSection.description}
        />

        <div className="flex items-start gap-2.5 mb-10 max-w-xl text-sm text-muted glass-chip rounded-xl p-4">
          <Info className="h-4 w-4 shrink-0 mt-0.5 text-sky-deep" />
          <p>{resourcesSection.note}</p>
        </div>

        <div className="grid gap-5">
          {topics.map((t, i) => {
            const isOpen = openIndex === i;
            const isCopied = copiedSlug === t.slug;
            return (
              <motion.div
                key={t.slug}
                id={t.slug}
                ref={(el) => {
                  cardRefs.current[t.slug] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl overflow-hidden scroll-mt-24"
              >
                <div className="w-full flex items-center justify-between gap-3 p-6">
                  <button
                    type="button"
                    onClick={() => handleToggle(i, t.slug)}
                    className="flex-1 flex items-center gap-3 text-right"
                    aria-expanded={isOpen}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky/15">
                      <BookOpen className="h-4 w-4 text-sky-deep" />
                    </span>
                    <span className="font-display font-bold leading-snug">{t.title}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyLink(t.slug)}
                    title="نسخ رابط الموضوع"
                    aria-label="نسخ رابط الموضوع"
                    className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full text-sky-deep hover:bg-sky/15 transition-colors"
                  >
                    {isCopied ? (
                      <Check className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Link2 className="h-4 w-4" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggle(i, t.slug)}
                    aria-label={isOpen ? "طي الموضوع" : "فتح الموضوع"}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-sky-deep transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 pt-1 border-t border-white/40">
                        <p className="whitespace-pre-line text-sm leading-relaxed text-navy/85 mt-5">
                          {t.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
