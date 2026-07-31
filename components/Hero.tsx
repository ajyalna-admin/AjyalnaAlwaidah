"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, CheckCircle2, Clock } from "lucide-react";
import { hero, journeySelector } from "@/lib/data";

type Step = "closed" | "university" | "college" | "major" | "comingSoonUni" | "comingSoonCollege";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
  const [step, setStep] = useState<Step>("closed");

  const close = () => setStep("closed");

  const handleUniversityPick = (isTarget: boolean) => {
    setStep(isTarget ? "college" : "comingSoonUni");
  };

  const handleCollegePick = (isTarget: boolean) => {
    setStep(isTarget ? "major" : "comingSoonCollege");
  };

  const handleMajorPick = () => {
    close();
    scrollToId("resources");
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="container-content section-pad pt-36 sm:pt-44 pb-24">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p variants={item} className="text-sm font-medium text-sky-deep mb-6">
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]"
          >
            {hero.title}
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-lg text-muted leading-loose max-w-xl">
            {hero.description}
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setStep("university")}
              className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-7 py-3.5 text-sm font-bold hover:bg-navy-light transition-colors duration-200"
            >
              {hero.ctaPrimary}
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToId("about")}
              className="inline-flex items-center gap-2 rounded-full glass-card px-7 py-3.5 text-sm font-bold text-navy"
            >
              {hero.ctaSecondary}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {step !== "closed" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-navy-deep/50 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto glass-card rounded-3xl p-7 sm:p-9"
            >
              <button
                onClick={close}
                className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                aria-label="إغلاق"
              >
                <X className="h-4 w-4" />
              </button>

              {step === "university" && (
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    {journeySelector.universityStep.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {journeySelector.universityStep.description}
                  </p>

                  <p className="text-xs font-bold text-sky-deep mb-3">
                    {journeySelector.universityStep.availableNote}
                  </p>
                  <button
                    onClick={() => handleUniversityPick(true)}
                    className="w-full flex items-center justify-between gap-3 rounded-xl bg-sky/15 border border-sky/30 px-5 py-4 text-right mb-6 hover:bg-sky/25 transition-colors duration-200"
                  >
                    <span className="font-bold text-sm">{journeySelector.universityStep.available}</span>
                    <CheckCircle2 className="h-4 w-4 text-sky-deep shrink-0" />
                  </button>

                  <p className="text-xs font-bold text-muted mb-3">
                    {journeySelector.universityStep.upcomingGroupLabel}
                  </p>
                  <div className="space-y-2">
                    {journeySelector.universityStep.upcoming.map((u) => (
                      <button
                        key={u}
                        onClick={() => handleUniversityPick(false)}
                        className="w-full flex items-center justify-between gap-3 rounded-xl border border-line px-5 py-3.5 text-right hover:border-sky-deep/40 transition-colors duration-200"
                      >
                        <span className="text-sm">{u}</span>
                        <Clock className="h-3.5 w-3.5 text-muted shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === "college" && (
                <div>
                  <h3 className="font-display text-xl font-bold mb-6">
                    {journeySelector.collegeStep.title}
                  </h3>
                  <p className="text-xs font-bold text-sky-deep mb-3">
                    {journeySelector.collegeStep.availableNote}
                  </p>
                  <button
                    onClick={() => handleCollegePick(true)}
                    className="w-full flex items-center justify-between gap-3 rounded-xl bg-sky/15 border border-sky/30 px-5 py-4 text-right hover:bg-sky/25 transition-colors duration-200"
                  >
                    <span className="font-bold text-sm">{journeySelector.collegeStep.available}</span>
                    <CheckCircle2 className="h-4 w-4 text-sky-deep shrink-0" />
                  </button>
                </div>
              )}

              {step === "major" && (
                <div>
                  <h3 className="font-display text-xl font-bold mb-6">
                    {journeySelector.majorStep.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {journeySelector.majorStep.majors.map((m) => (
                      <button
                        key={m}
                        onClick={handleMajorPick}
                        className="rounded-xl border border-line px-4 py-3.5 text-sm font-medium text-center hover:border-sky-deep/40 hover:bg-sky/10 transition-colors duration-200"
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {(step === "comingSoonUni" || step === "comingSoonCollege") && (
                <div className="text-center py-6">
                  <div className="mx-auto h-14 w-14 rounded-full bg-sky/20 flex items-center justify-center mb-5">
                    <Clock className="h-6 w-6 text-sky-deep" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {step === "comingSoonUni"
                      ? journeySelector.comingSoonUniversity.title
                      : journeySelector.comingSoonCollege.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step === "comingSoonUni"
                      ? journeySelector.comingSoonUniversity.description
                      : journeySelector.comingSoonCollege.description}
                  </p>
                  <button
                    onClick={close}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy text-cream px-6 py-2.5 text-sm font-bold hover:bg-navy-light transition-colors duration-200"
                  >
                    حسنًا
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
