"use client";

import { motion } from "framer-motion";
import { FileText, Download, Info } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { resourcesSection, resourceFiles } from "@/lib/data";

export function Resources() {
  return (
    <section id="resources" className="section-pad border-b border-line">
      <div className="container-content">
        <SectionHeading
          eyebrow={resourcesSection.eyebrow}
          title={resourcesSection.title}
          description={resourcesSection.description}
        />

        <div className="flex items-start gap-2.5 mb-10 max-w-xl text-sm text-muted bg-sky/10 border border-sky/20 rounded-xl p-4">
          <Info className="h-4 w-4 shrink-0 mt-0.5 text-sky-deep" />
          <p>{resourcesSection.note}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resourceFiles.map((f, i) => (
            <motion.a
              key={f.title}
              href={f.fileUrl}
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-line p-6 flex flex-col gap-4 bg-white/40 hover:border-sky-deep/40 transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky/15">
                  <FileText className="h-4 w-4 text-sky-deep" />
                </span>
                <span className="text-[11px] font-bold text-sky-deep bg-sky/15 px-2.5 py-1 rounded-full">
                  {f.fileType}
                </span>
              </div>
              <div>
                <p className="font-display font-bold leading-snug">{f.title}</p>
                <p className="text-sm text-muted mt-2 leading-relaxed">{f.description}</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-sky-deep mt-auto">
                <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                تحميل الملف
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
