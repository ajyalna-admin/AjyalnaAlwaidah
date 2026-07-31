"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { coursesSection, majorsCourses } from "@/lib/data";

export function CoursesGuide() {
  const [activeMajor, setActiveMajor] = useState(majorsCourses[0].slug);
  const current = majorsCourses.find((m) => m.slug === activeMajor) ?? majorsCourses[0];
  const hasCourses = current.levels.some((l) => l.courses.length > 0);

  return (
    <section id="courses" className="section-pad border-b border-line">
      <div className="container-content">
        <SectionHeading
          eyebrow={coursesSection.eyebrow}
          title={coursesSection.title}
          description={coursesSection.description}
        />

        <div className="flex flex-wrap gap-2.5 mb-10">
          {majorsCourses.map((m) => (
            <button
              key={m.slug}
              onClick={() => setActiveMajor(m.slug)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-200 ${
                activeMajor === m.slug
                  ? "bg-navy text-cream"
                  : "glass-chip text-navy hover:bg-sky/20"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        {!hasCourses && (
          <p className="text-sm text-muted glass-chip rounded-xl p-4 max-w-lg mb-6">
            {coursesSection.note}
          </p>
        )}

        <div className="space-y-10">
          {current.levels.map((level) =>
            level.courses.length > 0 ? (
              <div key={level.level}>
                <h3 className="font-display text-lg font-bold mb-5">{level.level}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {level.courses.map((course, i) => (
                    <motion.div
                      key={course.slug}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -6 }}
                    >
                      <Link
                        href={`/courses/${course.slug}`}
                        className="glass-card rounded-2xl p-5 flex flex-col gap-2 h-full"
                      >
                        <p className="text-xs font-bold text-sky-deep">{course.code}</p>
                        <p className="font-display font-bold">{course.name}</p>
                        <span className="mt-auto inline-flex items-center gap-1.5 text-xs text-muted">
                          التفاصيل <ArrowLeft className="h-3 w-3" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
