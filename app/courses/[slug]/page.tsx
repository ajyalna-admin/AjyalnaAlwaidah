import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Star, FileText, Lightbulb, MessageSquare, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { majorsCourses, courseDetailLabels } from "@/lib/data";

function findCourse(slug: string) {
  for (const major of majorsCourses) {
    for (const level of major.levels) {
      const course = level.courses.find((c) => c.slug === slug);
      if (course) return { course, major, level };
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
  const { course, major, level } = found;

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
            {major.name} — {level.level}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-black tracking-tight mb-10">
            {course.name}
          </h1>

          <div className="grid gap-6 max-w-2xl">
            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-4">{courseDetailLabels.infoTitle}</h2>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted text-xs mb-1">اسم المقرر</dt>
                  <dd className="font-medium">{course.name}</dd>
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
                  <dt className="text-muted text-xs mb-1">المتطلب السابق</dt>
                  <dd className="font-medium">{course.prerequisite}</dd>
                </div>
              </dl>
            </section>

            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <Star className="h-4 w-4 text-sky-deep" />
                {courseDetailLabels.ratingTitle}
              </h2>
              <p className="text-sm text-muted">{courseDetailLabels.noDataYet}</p>
            </section>

            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-sky-deep" />
                {courseDetailLabels.effortTitle}
              </h2>
              <ul className="space-y-2">
                {courseDetailLabels.effortOptions.map((o) => (
                  <li key={o} className="text-sm text-muted flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-deep/50" />
                    {o}
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-sky-deep" />
                {courseDetailLabels.reviewsTitle}
              </h2>
              <p className="text-sm text-muted">{courseDetailLabels.noDataYet}</p>
            </section>

            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-sky-deep" />
                {courseDetailLabels.tipsTitle}
              </h2>
              <p className="text-sm text-muted">{courseDetailLabels.noDataYet}</p>
            </section>

            <section className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-bold mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4 text-sky-deep" />
                {courseDetailLabels.filesTitle}
              </h2>
              <p className="text-sm text-muted">{courseDetailLabels.noDataYet}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
