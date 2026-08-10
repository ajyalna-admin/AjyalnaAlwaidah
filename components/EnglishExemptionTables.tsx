import { englishExemptionSections } from "@/lib/data";

export function EnglishExemptionTables() {
  return (
    <div className="mt-6 space-y-8">
      {englishExemptionSections.map((section) => (
        <div key={section.courseCode}>
          <h4 className="mb-3 font-display text-sm font-bold text-navy">
            جدول درجات الإعفاء — {section.courseCode}
          </h4>

          <div className="grid gap-4 sm:grid-cols-2">
            {(
              [
                { key: "general" as const, label: section.generalTrackLabel },
                { key: "academic" as const, label: section.academicTrackLabel },
              ]
            ).map((track) => (
              <div
                key={track.key}
                className="overflow-x-auto rounded-2xl glass-card p-0"
              >
                <div className="bg-navy px-4 py-2.5 text-center text-xs font-bold text-white">
                  {track.label}
                </div>
                <table className="w-full text-center text-[11px]">
                  <thead>
                    <tr className="bg-sky/15 text-sky-deep">
                      <th className="p-2 text-right font-bold">الاختبار</th>
                      <th className="p-2 font-bold">الكلي</th>
                      <th className="p-2 font-bold">استماع</th>
                      <th className="p-2 font-bold">محادثة</th>
                      <th className="p-2 font-bold">قراءة</th>
                      <th className="p-2 font-bold">كتابة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row) => (
                      <tr key={row.test} className="border-t border-white/40">
                        <td className="p-2 text-right font-bold text-navy/85">{row.test}</td>
                        <td className="p-2 text-navy/85">{row[track.key].overall}</td>
                        <td className="p-2 text-navy/85">{row[track.key].listening}</td>
                        <td className="p-2 text-navy/85">{row[track.key].speaking}</td>
                        <td className="p-2 text-navy/85">{row[track.key].reading}</td>
                        <td className="p-2 text-navy/85">{row[track.key].writing}</td>
                      </tr>
                    ))}
                    {section.placementTest && (
                      <tr className="border-t border-white/40 bg-sky/10">
                        <td className="p-2 text-right font-bold text-navy/85">Placement Test</td>
                        <td colSpan={5} className="p-2 font-bold text-sky-deep">
                          {section.placementTest[track.key]}
                        </td>
                      </tr>
                    )}
                    <tr className="border-t border-white/40 bg-sky/10">
                      <td className="p-2 text-right font-bold text-navy/85">الدرجة المرصودة</td>
                      <td colSpan={5} className="p-2 font-bold text-sky-deep">
                        {section.finalGrade[track.key]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
