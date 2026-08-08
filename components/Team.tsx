"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UserRound, Linkedin, Link2, Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import {
  teamSection,
  leadership,
  guidanceCommittees,
  subCommittees,
  type CommitteeEntry,
  type LeadershipMember,
} from "@/lib/data";

function LeadershipCard({ member, index }: { member: LeadershipMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-2xl p-7 text-center"
    >
      <div className="mx-auto h-16 w-16 rounded-full bg-sky/20 flex items-center justify-center mb-4">
        <span className="font-display text-lg font-bold text-sky-deep">
          {member.name.trim().charAt(0)}
        </span>
      </div>
      <p className="font-display font-bold text-lg">{member.name}</p>
      <p className="text-sm text-muted mt-1">{member.role}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-sky/15 px-4 py-1.5 text-xs font-bold text-sky-deep hover:bg-sky/25 transition-colors duration-200"
        >
          <Linkedin className="h-3.5 w-3.5" />
          LinkedIn
        </a>
      )}
    </motion.div>
  );
}

function CommitteeCard({ committee, index }: { committee: CommitteeEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-2xl p-6"
    >
      <p className="font-display font-bold leading-snug mb-4">{committee.name}</p>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky/20">
            <UserRound className="h-3.5 w-3.5 text-sky-deep" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-muted">القائدة</p>
            <p className="text-sm font-medium flex items-center gap-1.5">
              {committee.leader}
              {committee.leaderLinkedin && (
                <a
                  href={committee.leaderLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`لينكدإن ${committee.leader}`}
                >
                  <Linkedin className="h-3 w-3 text-sky-deep shrink-0" />
                </a>
              )}
            </p>
            {committee.leaderQuote && (
              <p className="whitespace-pre-line text-xs text-muted italic leading-relaxed mt-1.5">
                "{committee.leaderQuote}"
              </p>
            )}
          </div>
        </div>
        {committee.deputy && (
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky/10">
              <UserRound className="h-3.5 w-3.5 text-sky-deep" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-muted">النائبة</p>
              <p className="text-sm font-medium flex items-center gap-1.5">
                {committee.deputy}
                {committee.deputyLinkedin && (
                  <a
                    href={committee.deputyLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`لينكدإن ${committee.deputy}`}
                  >
                    <Linkedin className="h-3 w-3 text-sky-deep shrink-0" />
                  </a>
                )}
              </p>
              {committee.deputyQuote && (
                <p className="whitespace-pre-line text-xs text-muted italic leading-relaxed mt-1.5">
                  "{committee.deputyQuote}"
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Team() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#team`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // تجاهل فشل النسخ (متصفح لا يدعم Clipboard API مثلًا)
    }
  };

  return (
    <section id="team" className="section-pad border-b border-line scroll-mt-24">
      <div className="container-content">
        <SectionHeading
          eyebrow={teamSection.eyebrow}
          title={teamSection.title}
          description={teamSection.description}
        />

        <button
          type="button"
          onClick={handleCopyLink}
          className="mb-10 -mt-6 inline-flex items-center gap-1.5 rounded-full glass-chip px-3.5 py-1.5 text-xs font-bold text-sky-deep transition-colors hover:bg-sky/15"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              تم نسخ الرابط
            </>
          ) : (
            <>
              <Link2 className="h-3.5 w-3.5" />
              نسخ رابط هذا القسم
            </>
          )}
        </button>

        <div className="mb-14">
          <h3 className="font-display text-lg font-bold mb-6">{teamSection.leadershipNote}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl">
            {leadership.map((m, i) => (
              <LeadershipCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h3 className="font-display text-lg font-bold mb-6">{teamSection.guidanceNote}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guidanceCommittees.map((c, i) => (
              <CommitteeCard key={c.name} committee={c} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold mb-6">{teamSection.subNote}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subCommittees.map((c, i) => (
              <CommitteeCard key={c.name} committee={c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
