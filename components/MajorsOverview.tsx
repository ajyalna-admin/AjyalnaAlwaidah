"use client";

import { useState } from "react";
import { ChevronDown, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { majorsOverview } from "@/lib/data";

// بطاقات قابلة للطي لكل تخصص من تخصصات الكلية — تستخدم نفس عناصر تصميم الموقع
// (glass-card / text-navy / text-sky-deep / font-display) بدل نص طويل متراص.

export function MajorsOverview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div dir="rtl" className="mt-6 grid gap-3">
      {majorsOverview.map((major, i) => {
        const isOpen = openIndex === i;
        const num = String(i + 1).padStart(2, "0");
        return (
          <div
            key={major.slug}
            className="overflow-hidden rounded-2xl glass-card"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-right"
              aria-expanded={isOpen}
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky/15 text-xs font-display font-bold text-sky-deep">
                  {num}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold leading-snug text-navy sm:text-base">
                    {major.nameAr}
                  </span>
                  <span className="mt-0.5 block text-[11.5px] text-muted">
                    {major.nameEn}
                  </span>
                </span>
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-sky-deep transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="border-t border-white/40 px-5 pb-6 pt-1">
                <p className="mt-4 text-sm leading-relaxed text-navy/85">
                  {major.intro}
                </p>

                <div className="mt-4">
                  <p className="mb-2 flex items-center gap-1.5 text-[13px] font-bold text-navy">
                    <Sparkles className="h-3.5 w-3.5 text-sky-deep" />
                    مجالات التخصص
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {major.fields.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-sky/15 px-2.5 py-1 text-[11.5px] text-navy/85"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="mb-2 flex items-center gap-1.5 text-[13px] font-bold text-navy">
                    <Briefcase className="h-3.5 w-3.5 text-sky-deep" />
                    فرص التوظيف
                  </p>
                  <p className="text-[13px] leading-relaxed text-navy/85">
                    {major.jobs.join("، ")}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="mb-1.5 text-[13px] font-bold text-navy">
                    اختلافه عن باقي تخصصات الحاسب
                  </p>
                  <p className="text-[13px] leading-relaxed text-navy/85">
                    {major.difference}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="mb-2 flex items-center gap-1.5 text-[13px] font-bold text-navy">
                    <GraduationCap className="h-3.5 w-3.5 text-sky-deep" />
                    طبيعة المواد الدراسية
                  </p>
                  <p className="text-[13px] leading-relaxed text-navy/85">
                    {major.courses}
                  </p>
                </div>

                {major.extraSections?.map((section) => (
                  <div key={section.title} className="mt-4">
                    <p className="mb-1.5 text-[13px] font-bold text-navy">
                      {section.title}
                    </p>
                    {section.text && (
                      <p className="text-[13px] leading-relaxed text-navy/85">
                        {section.text}
                      </p>
                    )}
                    {section.items && (
                      <ul className="space-y-1.5">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="text-[13px] leading-relaxed text-navy/85"
                          >
                            <span className="text-sky-deep">• </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
