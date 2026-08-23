import Link from "next/link";
import { FileText, ExternalLink } from "lucide-react";
import { partnershipsSection, partnerships } from "@/lib/data";
import { PartnershipAnnouncement } from "@/components/PartnershipAnnouncement";

export const metadata = {
  title: partnershipsSection.title,
};

export default function PartnershipsPage() {
  return (
    <main className="pt-32 pb-24">
      <PartnershipAnnouncement storageKey="partnerships" />

      <div className="container-content px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wide text-navy/60">
            {partnershipsSection.eyebrow}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-navy">
            {partnershipsSection.title}
          </h1>
          <p className="mt-4 text-navy/70 leading-relaxed">{partnershipsSection.description}</p>
        </div>

        <div className="mt-14 flex flex-col gap-10">
          {partnerships.map((partner) => (
            <section
              key={partner.slug}
              className="glass-card rounded-3xl p-6 sm:p-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
            >
              <div>
                <h2 className="text-2xl font-bold text-navy">{partner.collabTitle}</h2>
                <p className="mt-1 text-sm font-medium text-navy/60">{partner.tagline}</p>

                <div className="mt-6 flex flex-col gap-4 text-navy/80 leading-relaxed text-[15px]">
                  {partner.description.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={partner.issue.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-cream hover:bg-navy-light transition-colors duration-200"
                  >
                    <FileText className="h-4 w-4" />
                    فتح العدد
                  </a>
                  <a
                    href={partner.archiveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-navy hover:bg-sky/15 transition-colors duration-200"
                  >
                    {partner.archiveLabel}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[280px]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl bg-[linear-gradient(155deg,#3a2350_0%,#5c3d6e_28%,#2f7d80_62%,#1f5f66_100%)]">
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                    <span className="inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold backdrop-blur-sm">
                      {partner.issue.badge}
                    </span>

                    <p className="text-xl font-bold leading-snug">{partner.issue.title}</p>

                    <div className="flex items-center justify-between text-[11px] font-medium text-white/80">
                      <span>{partner.partnerName}</span>
                      <span>أجيالنا الواعدة</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
