"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, CheckCircle2, Clock } from "lucide-react";
import { hero, journeySelector, regions } from "@/lib/data";

type Step = "closed" | "university" | "college" | "comingSoonUni" | "comingSoonCollege";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
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
  const router = useRouter();

  const close = () => setStep("closed");

  const handleUniversityPick = (available: boolean) => {
    setStep(available ? "college" : "comingSoonUni");
  };

  const handleCollegePick = (available: boolean) => {
    if (available) {
      close();
      router.push("/summary");
    } else {
      setStep("comingSoonCollege");
    }
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
          <motion.p variants={item} className="mt-3 text-lg sm:text-xl font-bold text-sky-deep">
            {hero.subtitle}
          </motion.p>
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

                  <div className="space-y-6">
                    {regions.map((region) => (
                      <div key={region.name}>
                        <p className="text-xs font-bold text-sky-deep mb-3">{region.name}</p>
                        <div className="space-y-2">
                          {region.universities.map((u) => (
                            <button
                              key={u.name}
                              onClick={() => handleUniversityPick(u.available)}
                              className={`w-full flex items-center justify-between gap-3 rounded-xl px-5 py-3.5 text-right transition-colors duration-200 ${
                                u.available
                                  ? "bg-sky/15 border border-sky/30 hover:bg-sky/25"
                                  : "border border-line hover:border-sky-deep/40"
                              }`}
                            >
                              <span className={`text-sm ${u.available ? "font-bold" : ""}`}>{u.name}</span>
                              {u.available ? (
                                <CheckCircle2 className="h-4 w-4 text-sky-deep shrink-0" />
                              ) : (
                                <Clock className="h-3.5 w-3.5 text-muted shrink-0" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
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
                    className="w-full flex items-center justify-between gap-3 rounded-xl bg-sky/15 border border-sky/30 px-5 py-4 text-right mb-2 hover:bg-sky/25 transition-colors duration-200"
                  >
                    <span className="font-bold text-sm">{journeySelector.collegeStep.available}</span>
                    <CheckCircle2 className="h-4 w-4 text-sky-deep shrink-0" />
                  </button>
                  <button
                    onClick={() => handleCollegePick(false)}
                    className="w-full flex items-center justify-between gap-3 rounded-xl border border-line px-5 py-3.5 text-right hover:border-sky-deep/40 transition-colors duration-200"
                  >
                    <span className="text-sm">كليات أخرى</span>
                    <Clock className="h-3.5 w-3.5 text-muted shrink-0" />
                  </button>
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
