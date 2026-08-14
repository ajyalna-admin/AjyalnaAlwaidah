"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, Info, Clock, Link2, Check, FileDown, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AccelerationExamTable } from "@/components/AccelerationExamTable";
import { MajorsOverview } from "@/components/MajorsOverview";
import { EnglishExemptionTables } from "@/components/EnglishExemptionTables";
import { LoginCredentials } from "@/components/LoginCredentials";
import { BlackboardNavList } from "@/components/BlackboardNavList";
import { AcademicTables } from "@/components/AcademicTables";
import { resourcesSection, topics } from "@/lib/data";
import { LinkedText } from "@/components/LinkedText";

export function Resources() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  // فتح الموضوع المطابق تلقائيًا لو الرابط يحتوي على #slug (رابط مباشر منسوخ)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const idx = topics.findIndex((t) => t.slug === hash);
    if (idx !== -1) {
      setOpenIndex(idx);
      requestAnimationFrame(() => {
        document
          .getElementById(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  const handleCopyLink = async (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedSlug(slug);
      window.setTimeout(() => setCopiedSlug(null), 1800);
    } catch {
      // تجاهل فشل النسخ (متصفح لا يدعم Clipboard API مثلًا)
    }
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

        <div className="grid gap-4">
          {topics.map((t, i) => {
            const isOpen = openIndex === i;
            const hasContent = Boolean(t.content) || Boolean(t.sections && t.sections.length > 0);
            const isCopied = copiedSlug === t.slug;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={t.title}
                id={t.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl overflow-hidden scroll-mt-24"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky/15 text-xs font-display font-bold text-sky-deep">
                      {num}
                    </span>
                    <span className="font-display font-bold leading-snug text-sm sm:text-base">
                      {t.title}
                    </span>
                  </span>
                  <span className="flex items-center gap-2 shrink-0">
                    {!hasContent && (
                      <span className="flex items-center gap-1 rounded-full bg-sky/15 px-2.5 py-1 text-[11px] font-bold text-sky-deep">
                        <Clock className="h-3 w-3" />
                        قريبًا
                      </span>
                    )}
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={(e) => handleCopyLink(e, t.slug)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleCopyLink(e as unknown as React.MouseEvent, t.slug);
                        }
                      }}
                      title="نسخ رابط هذا الموضوع"
                      aria-label="نسخ رابط هذا الموضوع"
                      className="flex h-7 w-7 items-center justify-center rounded-full text-sky-deep/70 transition-colors hover:bg-sky/15 hover:text-sky-deep"
                    >
                      {isCopied ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Link2 className="h-3.5 w-3.5" />
                      )}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-sky-deep transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

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
                        {hasContent ? (
                          <>
                            {t.content && (
                              <p className="whitespace-pre-line text-sm leading-relaxed text-navy/85 mt-5">
                                <LinkedText text={t.content} />
                              </p>
                            )}
                            {t.sections && t.sections.length > 0 && (
                              <div className="mt-5 space-y-6">
                                {t.sections.map((section, si) => (
                                  <div
                                    key={section.title}
                                    className={si > 0 ? "border-t border-dashed border-sky-deep/25 pt-6" : ""}
                                  >
                                    <h4 className="mb-3 flex items-center gap-2.5 font-display text-sm font-bold text-navy">
                                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
                                        {si + 1}
                                      </span>
                                      {section.title}
                                    </h4>
                                    <p className="whitespace-pre-line text-sm leading-relaxed text-navy/85">
                                      <LinkedText text={section.content} />
                                    </p>
                                    {section.links && section.links.length > 0 && (
                                      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                                        {section.links.map((link) => (
                                          <a
                                            key={link.url}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-xl glass-chip px-4 py-3 text-xs font-bold text-navy transition-colors hover:bg-sky/15"
                                          >
                                            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-sky-deep" />
                                            <span>{link.label}</span>
                                          </a>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                            {t.fileUrl && (
                              <a
                                href={t.fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                              >
                                <FileDown className="h-4 w-4" />
                                {t.fileLabel ?? "تحميل الملف"}
                              </a>
                            )}
                            {t.links && t.links.length > 0 && (
                              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                                {t.links.map((link) => (
                                  <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-xl glass-chip px-4 py-3 text-xs font-bold text-navy transition-colors hover:bg-sky/15"
                                  >
                                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-sky-deep" />
                                    <span>{link.label}</span>
                                  </a>
                                ))}
                              </div>
                            )}
                            {t.slug === "partial-acceleration" && (
                              <AccelerationExamTable />
                            )}
                            {t.slug === "intro-majors" && <MajorsOverview />}
                            {t.slug === "placement-test-courses" && (
                              <EnglishExemptionTables />
                            )}
                            {t.slug === "banner-system" && <LoginCredentials />}
                            {t.slug === "blackboard-system" && <BlackboardNavList />}
                            {t.slug === "study-plan" && <AcademicTables />}
                          </>
                        ) : (
                          <div className="flex items-center gap-2.5 mt-5 text-sm text-muted">
                            <BookOpen className="h-4 w-4 text-sky-deep shrink-0" />
                            <p>هذا الموضوع قيد الإعداد حاليًا، وسيُضاف قريبًا بإذن الله.</p>
                          </div>
                        )}
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
