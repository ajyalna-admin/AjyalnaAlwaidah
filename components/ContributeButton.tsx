"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles, CheckCircle2 } from "lucide-react";
import { courseHub, majorsCourses } from "@/lib/data";
import { supabase, type SubmissionType } from "@/lib/supabase";

const typeMap: Record<string, { type: SubmissionType; contentLabel: string; showLink: boolean; showName: boolean }> = {
  "تقييم": { type: "rating", contentLabel: "اكتبي تقييمك (مثال: سهل، عبء متوسط، جودة محتوى ممتازة)", showLink: false, showName: false },
  "تجربة": { type: "review", contentLabel: "شاركينا تجربتك مع المقرر", showLink: false, showName: false },
  "نصيحة": { type: "tip", contentLabel: "نصيحتك لمن يدرس هذا المقرر", showLink: false, showName: false },
  "ملخص": { type: "file", contentLabel: "وصف مختصر للملخص", showLink: true, showName: false },
  "سلايدات": { type: "file", contentLabel: "وصف مختصر للسلايدات", showLink: true, showName: false },
  "خرائط ذهنية": { type: "file", contentLabel: "وصف مختصر للخريطة الذهنية", showLink: true, showName: false },
  "ملفات": { type: "file", contentLabel: "وصف مختصر للملف", showLink: true, showName: false },
  "رابط مفيد": { type: "link", contentLabel: "لماذا هذا الرابط مفيد؟", showLink: true, showName: false },
  "اقتراح منصة تعليمية": { type: "platform", contentLabel: "وصف مختصر للمنصة", showLink: true, showName: true },
  "اقتراح مدرس خصوصي": { type: "tutor", contentLabel: "نبذة ووسيلة التواصل", showLink: false, showName: true },
  "التقديم كسفيرة للمقرر": { type: "ambassador", contentLabel: "نبذة قصيرة عنك ولماذا ترغبين تكونين سفيرة", showLink: false, showName: true },
};

const allCourses = majorsCourses.flatMap((m) =>
  m.levels.flatMap((l) => l.courses.map((c) => ({ slug: c.slug, label: `${m.name} — ${c.name}` })))
);

export function ContributeButton({ defaultCourseSlug }: { defaultCourseSlug?: string }) {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState<string | null>(null);
  const [courseSlug, setCourseSlug] = useState(defaultCourseSlug ?? "");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const reset = () => {
    setOption(null);
    setContent("");
    setLink("");
    setName("");
    setStatus("idle");
  };

  const close = () => {
    setOpen(false);
    reset();
  };

  const config = option ? typeMap[option] : null;

  const submit = async () => {
    if (!config || !content.trim()) return;
    setStatus("sending");
    const payload: Record<string, string> = { content: content.trim() };
    if (link.trim()) payload.link = link.trim();
    if (name.trim()) payload.name = name.trim();

    const { error } = await supabase.from("submissions").insert({
      type: config.type,
      course_slug: courseSlug || null,
      payload,
      status: "pending",
    });

    setStatus(error ? "error" : "sent");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-8 py-3.5 text-sm font-bold hover:bg-navy-light transition-colors duration-200"
      >
        <Sparkles className="h-4 w-4" />
        {courseHub.contributeTitle}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-navy-deep/50 backdrop-blur-sm" onClick={close} aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md max-h-[85vh] overflow-y-auto glass-card rounded-3xl p-7 sm:p-9"
            >
              <button
                onClick={close}
                className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                aria-label="إغلاق"
              >
                <X className="h-4 w-4" />
              </button>

              {status === "sent" ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="h-10 w-10 text-sky-deep mx-auto mb-4" />
                  <h3 className="font-display text-lg font-bold mb-2">تم إرسال مساهمتك 🎉</h3>
                  <p className="text-sm text-muted">شكرًا لك! مساهمتك الآن قيد المراجعة، وستظهر فور اعتمادها.</p>
                  <button
                    onClick={close}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy text-cream px-6 py-2.5 text-sm font-bold hover:bg-navy-light transition-colors duration-200"
                  >
                    حسنًا
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-lg font-bold mb-5">{courseHub.contributeTitle}</h3>

                  {!option ? (
                    <div className="flex flex-wrap gap-2">
                      {courseHub.contributeOptions.map((o) => (
                        <button
                          key={o}
                          onClick={() => setOption(o)}
                          className="glass-chip rounded-full px-3.5 py-2 text-xs font-bold hover:bg-sky/20 transition-colors duration-200"
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-sky-deep">{option}</p>

                      <div>
                        <label className="text-xs text-muted block mb-1.5">المقرر (اختياري)</label>
                        <select
                          value={courseSlug}
                          onChange={(e) => setCourseSlug(e.target.value)}
                          className="w-full rounded-xl border border-line bg-white/60 px-4 py-2.5 text-sm"
                        >
                          <option value="">— بدون تحديد —</option>
                          {allCourses.map((c) => (
                            <option key={c.slug} value={c.slug}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {config?.showName && (
                        <div>
                          <label className="text-xs text-muted block mb-1.5">الاسم</label>
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-line bg-white/60 px-4 py-2.5 text-sm"
                          />
                        </div>
                      )}

                      <div>
                        <label className="text-xs text-muted block mb-1.5">{config?.contentLabel}</label>
                        <textarea
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          rows={4}
                          className="w-full rounded-xl border border-line bg-white/60 px-4 py-2.5 text-sm resize-none"
                        />
                      </div>

                      {config?.showLink && (
                        <div>
                          <label className="text-xs text-muted block mb-1.5">رابط</label>
                          <input
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="https://"
                            dir="ltr"
                            className="w-full rounded-xl border border-line bg-white/60 px-4 py-2.5 text-sm"
                          />
                        </div>
                      )}

                      {status === "error" && (
                        <p className="text-xs text-red-500">صار خطأ، حاولي مرة ثانية.</p>
                      )}

                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => setOption(null)}
                          className="rounded-full px-5 py-2.5 text-sm font-bold text-muted hover:bg-white/50 transition-colors"
                        >
                          رجوع
                        </button>
                        <button
                          onClick={submit}
                          disabled={!content.trim() || status === "sending"}
                          className="flex-1 rounded-full bg-navy text-cream px-6 py-2.5 text-sm font-bold hover:bg-navy-light transition-colors duration-200 disabled:opacity-50"
                        >
                          {status === "sending" ? "جارِ الإرسال..." : "إرسال المساهمة"}
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
