"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

type ScheduleAnnouncementProps = {
  /** Unique key per page — e.g. "home" — so each surface has its own once-per-session reveal. */
  storageKey: string;
  /** Delay (ms) before the popup fades in. Defaults to 500. */
  delayMs?: number;
};

export function ScheduleAnnouncement({ storageKey, delayMs = 500 }: ScheduleAnnouncementProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // لا تظهر داخل صفحة الجدول نفسها — الطالبة أصلًا موجودة هناك.
    if (pathname?.startsWith("/schedule")) return;
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
    }, delayMs);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, pathname, delayMs]);

  const close = () => {
    setVisible(false);
    setTimeout(() => setMounted(false), 250);
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-6 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="الجدول الدراسي"
    >
      <button
        onClick={close}
        aria-label="إغلاق"
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
      />

      <div
        className={`relative w-full max-w-sm overflow-hidden rounded-3xl bg-cream shadow-2xl transition-all duration-300 ${
          visible ? "scale-100 translate-y-0" : "scale-95 translate-y-3"
        }`}
      >
        <button
          onClick={close}
          aria-label="إغلاق"
          className="absolute top-3 left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy/70 text-cream hover:bg-navy transition-colors duration-200 backdrop-blur-sm"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/schedule/schedule-announcement.jpg"
            alt="تقويم أجيالنا الواعدة للفصل الدراسي الأول 1448هـ"
            className="w-full h-auto block"
          />

          <div className="p-5">
            <Link
              href="/schedule"
              onClick={close}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-cream hover:bg-navy-light transition-colors duration-200"
            >
              الاطلاع على الجدول
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
