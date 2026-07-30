"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { brand } from "@/lib/data";

const LINKS = [
  { id: "about", label: "من نحن" },
  { id: "vision", label: "أهدافنا" },
  { id: "structure", label: "الهيكلة" },
  { id: "programs", label: "برامجنا" },
  { id: "resources", label: "المواضيع" },
  { id: "excellence", label: "التميز" },
  { id: "impact", label: "أثرنا" },
  { id: "team", label: "الفريق" },
  { id: "contact", label: "تواصل" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="container-content flex items-center justify-between px-6 sm:px-10 lg:px-16 h-20">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5"
          aria-label={brand.name}
        >
          <Image src="/logo.png" alt={brand.name} width={40} height={32} className="h-8 w-auto" />
        </button>

        <nav className="hidden lg:flex items-center gap-0.5">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-2.5 py-2 text-[13px] font-medium text-navy/70 hover:text-navy transition-colors duration-200 whitespace-nowrap"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:inline-flex items-center gap-2 bg-navy text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-navy-light transition-colors duration-200"
          >
            تواصلي معنا
          </button>
          <button
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full border border-line"
            onClick={() => setOpen((v) => !v)}
            aria-label="القائمة"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden glass-nav">
          <div className="flex flex-col px-6 py-4 gap-1">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-right py-2.5 text-base text-navy/80"
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
