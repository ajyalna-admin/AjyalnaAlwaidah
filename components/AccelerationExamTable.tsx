import { MessageCircle, ExternalLink } from "lucide-react";
import { accelerationExamSection, accelerationExamSchedule } from "@/lib/data";

// جدول مواعيد اختبارات التسريع الأكاديمي — يستخدم نفس عناصر تصميم الموقع
// (glass-card / text-navy / text-sky-deep / font-display) بدل ألوان ثابتة منفصلة.
// ملاحظة: زر تحميل/فتح ملف المراجع بقى يظهر تلقائيًا من Resources.tsx
// (عبر fileUrl/fileLabel في بيانات الموضوع نفسه) — فما نكرره هنا.

export function AccelerationExamTable() {
  return (
    <div dir="rtl" className="mt-6">
      <div className="mb-5 flex items-start gap-2.5 rounded-xl glass-chip p-4 text-sm text-muted">
        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-deep" />
        <p>{accelerationExamSection.description}</p>
      </div>

      {(accelerationExamSection.platformUrl || accelerationExamSection.whatsappUrl) && (
        <div className="mb-5 grid gap-3 sm:grid-cols-2">
          {accelerationExamSection.platformUrl && (
            <a
              href={accelerationExamSection.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3.5 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4 shrink-0" />
              {accelerationExamSection.platformLabel}
            </a>
          )}
          {accelerationExamSection.whatsappUrl && (
            <a
              href={accelerationExamSection.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              {accelerationExamSection.whatsappLabel}
            </a>
          )}
        </div>
      )}

      {/* عرض الجدول — شاشات متوسطة وأكبر */}
      <div className="hidden overflow-hidden rounded-2xl glass-card md:block">
        <table className="w-full border-collapse text-right">
          <thead>
            <tr className="bg-navy">
              <th className="px-4 py-3.5 text-center font-display text-sm font-bold text-white">
                اليوم
              </th>
              <th className="px-4 py-3.5 text-center font-display text-sm font-bold text-white">
                التاريخ
              </th>
              <th className="px-4 py-3.5 text-center font-display text-sm font-bold text-white">
                المادة
              </th>
              <th className="px-4 py-3.5 text-center font-display text-sm font-bold text-white">
                المكان
              </th>
            </tr>
          </thead>
          <tbody>
            {accelerationExamSchedule.map((session, idx) => (
              <tr
                key={`${session.dateGregorian}-${idx}`}
                className={idx % 2 === 0 ? "bg-white/60" : "bg-sky/10"}
              >
                <td className="border-t border-line px-4 py-4 text-center align-middle font-display text-sm font-bold text-navy">
                  {session.day}
                </td>
                <td className="border-t border-line px-4 py-4 text-center align-middle">
                  <span className="block text-sm font-semibold text-navy">
                    {session.dateGregorian}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {session.dateHijri}
                  </span>
                </td>
                <td className="border-t border-line px-4 py-4 pr-5 text-right align-middle">
                  <ul className="space-y-1">
                    {session.subjects.map((subject) => (
                      <li
                        key={subject.code}
                        className="text-[13px] leading-relaxed text-navy/85"
                      >
                        <span className="text-sky-deep">• </span>
                        {subject.nameAr}{" "}
                        <span className="text-[11px] text-muted">
                          {subject.code}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border-t border-line px-4 py-4 pr-5 text-right align-middle text-[13px] leading-7 text-navy/85">
                  {session.location}
                  <br />
                  {session.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* عرض البطاقات — الجوال */}
      <div className="flex flex-col gap-3 md:hidden">
        {accelerationExamSchedule.map((session, idx) => (
          <div
            key={`${session.dateGregorian}-mobile-${idx}`}
            className="overflow-hidden rounded-2xl glass-card"
          >
            <div className="bg-navy px-4 py-3 text-center">
              <p className="font-display text-sm font-bold text-white">
                {session.day}
              </p>
              <p className="mt-0.5 text-[11.5px] text-white/70">
                {session.dateGregorian} — {session.dateHijri}
              </p>
            </div>
            <div className="px-4 py-3.5">
              <ul className="space-y-1.5">
                {session.subjects.map((subject) => (
                  <li
                    key={subject.code}
                    className="text-[13px] leading-relaxed text-navy/85"
                  >
                    <span className="text-sky-deep">• </span>
                    {subject.nameAr}{" "}
                    <span className="text-[11px] text-muted">
                      {subject.code}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-line pt-3 text-[12px] leading-6 text-muted">
                {session.location}
                <br />
                {session.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 rounded-xl glass-chip px-4 py-3 text-center text-[12.5px] font-semibold text-muted">
        {accelerationExamSection.note}
      </p>
    </div>
  );
}
