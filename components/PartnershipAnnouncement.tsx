"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PartyPopper, X, Sparkles } from "lucide-react";
import { partnerships } from "@/lib/data";

type PartnershipAnnouncementProps = {
  /** Unique key per page — e.g. "home" or "partnerships" — so each surface has its own once-per-session reveal. */
  storageKey: string;
  /** Which partnership entry to feature. Defaults to the first (currently جريدة السبت). */
  partnerSlug?: string;
};

export function PartnershipAnnouncement({ storageKey, partnerSlug }: PartnershipAnnouncementProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const partner = partnerSlug
    ? partnerships.find((p) => p.slug === partnerSlug) ?? partnerships[0]
    : partnerships[0];

  useEffect(() => {
    if (!partner) return;
    const flagKey = `announcement-seen-${storageKey}`;
    try {
      if (sessionStorage.getItem(flagKey)) return;
      sessionStorage.setItem(flagKey, "1");
    } catch {
      // sessionStorage unavailable (e.g. privacy mode) — show anyway, just won't persist.
    }
    const timer = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  const close = () => {
    setVisible(false);
    setTimeout(() => setMounted(false), 250);
  };

  if (!mounted || !partner) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-6 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={partner.collabTitle}
    >
      <button
        onClick={close}
        aria-label="إغلاق"
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
      />

      <div
        className={`relative w-full max-w-md overflow-hidden rounded-3xl bg-cream shadow-2xl transition-all duration-300 ${
          visible ? "scale-100 translate-y-0" : "scale-95 translate-y-3"
        }`}
      >
        {/* decorative confetti dots */}
        <span className="pointer-events-none absolute -top-4 -right-4 h-16 w-16 rounded-full bg-sky/30" />
        <span className="pointer-events-none absolute top-10 left-6 h-3 w-3 rounded-full bg-navy/30" />
        <span className="pointer-events-none absolute top-20 right-10 h-2.5 w-2.5 rounded-full bg-sky/60" />
        <span className="pointer-events-none absolute bottom-24 left-10 h-4 w-4 rounded-full bg-navy/20" />
        <span className="pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-sky/20" />

        <button
          onClick={close}
          aria-label="إغلاق"
          className="absolute top-4 left-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy/10 text-navy hover:bg-navy/20 transition-colors duration-200"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative flex flex-col items-center gap-4 px-8 pb-8 pt-10 text-center">
          <span className="flex items-center gap-1.5 rounded-full bg-navy px-4 py-1.5 text-xs font-semibold text-cream">
            <PartyPopper className="h-3.5 w-3.5" />
            شراكة جديدة
          </span>

          <h3 className="text-xl font-bold text-navy leading-relaxed">{partner.collabTitle}</h3>
          <p className="text-sm font-medium text-navy/70">{partner.tagline}</p>

          <div className="w-full rounded-2xl border border-line bg-white/70 px-5 py-4">
            <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-sky/20 px-2.5 py-1 text-[11px] font-semibold text-navy">
              <Sparkles className="h-3 w-3" />
              {partner.issue.badge}
            </span>
            <p className="text-sm font-bold text-navy">{partner.issue.title}</p>
          </div>

          <Link
            href="/partnerships"
            onClick={close}
            className="mt-1 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-medium text-cream hover:bg-navy-light transition-colors duration-200"
          >
            استكشفي العدد
          </Link>
        </div>
      </div>
    </div>
  );
}
