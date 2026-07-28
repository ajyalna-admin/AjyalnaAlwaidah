"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { hero } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 flex justify-start">
        <div className="relative w-[55%] sm:w-[45%] h-full opacity-90">
          <Image
            src="/hero-photo.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ maskImage: "linear-gradient(to left, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to left, black 40%, transparent 100%)" }}
            priority
          />
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative container-content px-6 sm:px-10 lg:px-16 pt-40 pb-28"
      >
        <motion.p variants={item} className="text-sm font-medium text-sky-deep mb-6">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-extrabold tracking-tight leading-[1.05] text-5xl sm:text-6xl lg:text-7xl max-w-3xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p variants={item} className="mt-5 font-display text-2xl sm:text-3xl text-sky-deep font-bold">
          {hero.tagline}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-loose text-muted">
          {hero.description}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#programs"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 bg-navy text-cream px-6 py-3.5 rounded-full font-medium text-sm hover:bg-navy-light transition-colors duration-200"
          >
            {hero.ctaPrimary}
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 border border-navy/20 px-6 py-3.5 rounded-full font-medium text-sm hover:border-navy/40 transition-colors duration-200"
          >
            {hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
