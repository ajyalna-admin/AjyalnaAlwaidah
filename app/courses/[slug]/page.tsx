import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  FileText,
  Lightbulb,
  MessageSquare,
  Clock,
  GraduationCap,
  Video,
  Compass,
  Users,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ContributeButton } from "@/components/ContributeButton";
import { majorsCourses, courseHub, learningPlatforms } from "@/lib/data";
import { supabase } from "@/lib/supabase";

function findCourse(slug: string) {
  for (const major of majorsCourses) {
    for (const level of major.levels) {
      const course = level.courses.find((c) => c.slug === slug);
      if (course) return { course, major };
    }
  }
  return null;
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = findCourse(slug);
  if (!found) notFound();
  const { course, major } = found;

  const { data: approved } = await supabase
    .from("submissions")
    .select("*")
    .eq("course_slug", slug)
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  const reviews = (approved ?? []).filter((s) => s.type === "review");
  const dbTips = (approved ?? []).filter((s) => s.type === "tip");
  const files = (approved ?? []).filter((s) => s.type === "file");
  const ambassadors = (approved ?? []).filter((s) => s.type === "ambassador");
  const allTips = [...(course.tips ?? []), ...dbTips.map((t) => t.payload.content)];

  return (
    <>
      <Navbar />
      <main className="section-pad pt-36 sm:pt-44">
        <div className="container-content">
          <Link
            href="/#courses"
            className="inline-flex items-center gap-2 text-sm text-sky-deep font-bold mb-8"
          >
            <ArrowRight className="h-4 w-4" />
            رجوع إلى دليل المقررات
          </Link>

          <p className="text-sm font-medium text-sky-deep mb-2">
            {major.name} — {course.level}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-black tracking-tight mb-1.5">
            {course.nameAr}
          </h1>
          <p className="text-lg text-muted mb-10" dir="ltr">
            {course.name}
          </p>

          <div className="grid gap-6 max-w-2xl">
            {/* معلومات المقرر */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-sky-deep" />
                {courseHub.infoTitle}
              </h2>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted text-xs mb-1">اسم المقرر</dt>
                  <dd className="font-medium">
                    {course.nameAr}
                    <span className="block text-xs text-muted mt-0.5" dir="ltr">{course.name}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted text-xs mb-1">رمز المقرر</dt>
                  <dd className="font-medium">{course.code}</dd>
                </div>
                <div>
                  <dt className="text-muted text-xs mb-1">عدد الساعات</dt>
                  <dd className="font-medium">{course.hours}</dd>
                </div>
                <div>
                  <dt className="text-muted text-xs mb-1">المستوى الدراسي</dt>
                  <dd className="font-medium">{course.level}</dd>
                </div>
                <div>
                  <dt className="text-muted text-xs mb-1">المتطلب السابق</dt>
                  <dd className="font-medium">{course.prerequisite}</dd>
                </div>
                <div>
                  <dt className="text-muted text-xs mb-1">التخصص</dt>
                  <dd className="font-medium">{major.name}</dd>
                </div>
              </dl>
            </section>

            {/* تقييمات الطالبات */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <Star className="h-4 w-4 text-sky-deep" />
                {courseHub.ratingTitle}
              </h2>
              <p className="text-sm text-muted mb-4">{courseHub.noDataYet}</p>
              <div className="flex flex-wrap gap-2">
                {["سهولة المقرر", "عبء المقرر", "صعوبة الاختبارات", "صعوبة المشاريع", "جودة المحتوى"].map(
                  (label) => (
                    <span key={label} className="glass-chip rounded-full px-3 py-1.5 text-xs font-medium">
                      {label}
                    </span>
                  )
                )}
              </div>
            </section>

            {/* تجارب الطالبات */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-sky-deep" />
                {courseHub.experiencesTitle}
              </h2>
              {reviews.length > 0 ? (
                <div className="space-y-3">
                  {reviews.map((r) => (
                    <p key={r.id} className="text-sm glass-chip rounded-xl p-4 leading-relaxed">
                      "{r.payload.content}"
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted">{courseHub.noDataYet}</p>
              )}
            </section>

            {/* نصائح */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-sky-deep" />
                {courseHub.tipsTitle}
              </h2>
              {allTips.length > 0 ? (
                <ul className="space-y-2">
                  {allTips.map((t, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-deep/60 mt-1.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted">{courseHub.noDataYet}</p>
              )}
            </section>

            {/* متوسط الجهد */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-sky-deep" />
                متوسط الجهد
              </h2>
              <ul className="space-y-2">
                {courseHub.effortOptions.map((o) => (
                  <li key={o} className="text-sm text-muted flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-deep/50" />
                    {o}
                  </li>
                ))}
              </ul>
            </section>

            {/* بنك الملفات */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4 text-sky-deep" />
                {courseHub.filesTitle}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {courseHub.fileTabs.map((tab) => (
                  <span key={tab} className="glass-chip rounded-full px-3 py-1.5 text-xs font-bold">
                    {tab}
                  </span>
                ))}
              </div>
              {files.length > 0 ? (
                <div className="space-y-2">
                  {files.map((f) => (
                    <a
                      key={f.id}
                      href={f.payload.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block glass-chip rounded-xl p-3.5 text-sm hover:bg-sky/15 transition-colors duration-200"
                    >
                      {f.payload.content}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted">{courseHub.noDataYet}</p>
              )}
            </section>

            {/* شروحات امتداد */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <Video className="h-4 w-4 text-sky-deep" />
                {courseHub.imtidadTitle}
              </h2>
              <p className="text-sm text-muted">{courseHub.noDataYet}</p>
            </section>

            {/* منصات موصى بها */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-4 flex items-center gap-2">
                <Compass className="h-4 w-4 text-sky-deep" />
                {courseHub.platformsTitle}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {learningPlatforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-chip rounded-xl p-4 flex flex-col gap-1.5 hover:bg-sky/15 transition-colors duration-200"
                  >
                    <span className="flex items-center justify-between">
                      <span className="font-bold text-sm">{p.name}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-sky-deep shrink-0" />
                    </span>
                    <span className="text-xs text-muted leading-relaxed">{p.description}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* مدرسون خصوصيون */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-sky-deep" />
                {courseHub.tutorsTitle}
              </h2>
              <p className="text-sm text-muted">{courseHub.noDataYet}</p>
            </section>

            {/* سفراء المقرر */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-sky-deep" />
                {courseHub.ambassadorsTitle}
              </h2>
              {ambassadors.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-3">
                  {ambassadors.map((a) => (
                    <div key={a.id} className="glass-chip rounded-xl p-4">
                      <p className="font-bold text-sm mb-1">{a.payload.name}</p>
                      <p className="text-xs text-muted leading-relaxed">{a.payload.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted">{courseHub.noDataYet}</p>
              )}
            </section>

            {/* الأسئلة الشائعة */}
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-sky-deep" />
                {courseHub.faqTitle}
              </h2>
              {course.faqs && course.faqs.length > 0 ? (
                <div className="space-y-4">
                  {course.faqs.map((f) => (
                    <div key={f.question}>
                      <p className="font-bold text-sm mb-1">{f.question}</p>
                      <p className="text-sm text-muted leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted">{courseHub.noDataYet}</p>
              )}
            </section>

            {/* ساهم في هذا المقرر */}
            <div className="text-center py-6">
              <ContributeButton defaultCourseSlug={course.slug} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
