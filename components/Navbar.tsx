"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { brand } from "@/lib/data";

const MAIN_LINKS = [
  { id: "hero", label: "الرئيسية" },
  { id: "about", label: "من نحن" },
  { id: "impact", label: "أثرنا" },
];

const MORE_LINKS = [
  { href: "/vision", label: "رؤيتنا وأهدافنا" },
  { href: "/summary", label: "ملخص المحتوى" },
  { href: "/resources", label: "موضوعات الإرشاد" },
  { href: "/journey", label: "رحلتك معنا" },
  { href: "/courses", label: "دليل المقررات" },
  { href: "/tracks", label: "مساراتنا" },
  { href: "/imtidad", label: "امتداد" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const goToSection = (id: string) => {
    setOpen(false);
    setMoreOpen(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(id === "hero" ? "/" : `/#${id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="container-content flex items-center justify-between px-6 sm:px-10 lg:px-16 h-20">
        <button
          onClick={() => goToSection("hero")}
          className="flex items-center gap-2.5"
          aria-label={brand.name}
        >
          <Image src="/logo.png" alt={brand.name} width={40} height={32} className="h-8 w-auto" />
        </button>

        <nav className="hidden lg:flex items-center gap-0.5">
          {MAIN_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => goToSection(l.id)}
              className="px-3 py-2 text-[13px] font-medium text-navy/70 hover:text-navy transition-colors duration-200 whitespace-nowrap"
            >
              {l.label}
            </button>
          ))}

          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-navy/70 hover:text-navy transition-colors duration-200"
            >
              المزيد
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
            </button>

            {moreOpen && (
              <div className="absolute top-full mt-2 left-0 min-w-[190px] glass-card rounded-2xl p-2 flex flex-col">
                {MORE_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMoreOpen(false)}
                    className="text-right px-3.5 py-2.5 rounded-xl text-[13px] font-medium text-navy/80 hover:bg-sky/15 hover:text-navy transition-colors duration-200 whitespace-nowrap"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => goToSection("contact")}
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
          <div className="flex flex-col px-6 py-4 gap-1 max-h-[75vh] overflow-y-auto">
            {MAIN_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => goToSection(l.id)}
                className="text-right py-2.5 text-base font-bold text-navy"
              >
                {l.label}
              </button>
            ))}
            <div className="h-px bg-line my-1.5" />
            {MORE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-right py-2.5 text-base text-navy/80"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
