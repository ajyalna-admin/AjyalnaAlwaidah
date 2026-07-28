"use client";

import { motion } from "framer-motion";
import { Crown, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { structure, type CommitteeEntry } from "@/lib/data";

function CommitteeCard({ committee, index }: { committee: CommitteeEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-line p-6 bg-white/40"
    >
      <p className="font-display font-bold leading-snug mb-4">{committee.name}</p>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky/20">
            <Crown className="h-3.5 w-3.5 text-sky-deep" />
          </span>
          <div>
            <p className="text-[11px] text-muted">القائدة</p>
            <p className="text-sm font-medium">{committee.leader}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky/10">
            <UserRound className="h-3.5 w-3.5 text-sky-deep" />
          </span>
          <div>
            <p className="text-[11px] text-muted">النائبة</p>
            <p className="text-sm font-medium">{committee.deputy}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Structure() {
  return (
    <section id="structure" className="section-pad border-b border-line bg-cream-deep/40">
      <div className="container-content">
        <SectionHeading
          eyebrow={structure.eyebrow}
          title={structure.title}
          description={structure.description}
        />

        <div className="mb-14">
          <h3 className="font-display text-lg font-bold mb-6">{structure.guidanceNote}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {structure.guidanceCommittees.map((c, i) => (
              <CommitteeCard key={c.name} committee={c} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold mb-6">{structure.subNote}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {structure.subCommittees.map((c, i) => (
              <CommitteeCard key={c.name} committee={c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
