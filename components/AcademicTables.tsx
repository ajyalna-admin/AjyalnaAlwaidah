import { gradeSymbolsTable, absenceHoursTable } from "@/lib/data";

export function AcademicTables() {
  return (
    <div className="mt-6 space-y-8">
      <div>
        <h4 className="mb-3 font-display text-sm font-bold text-navy">
          رموز ومعاني التقديرات في السجل الأكاديمي
        </h4>
        <div className="overflow-x-auto rounded-2xl glass-card">
          <table className="w-full text-center text-[11px]">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-2.5 font-bold">الدرجة المئوية</th>
                <th className="p-2.5 font-bold">التقدير</th>
                <th className="p-2.5 font-bold">وزن النقاط (من 5)</th>
                <th className="p-2.5 font-bold">المعنى</th>
              </tr>
            </thead>
            <tbody>
              {gradeSymbolsTable.map((row, i) => (
                <tr
                  key={row.grade}
                  className={`border-t border-white/40 ${i % 2 === 1 ? "bg-sky/10" : ""}`}
                >
                  <td className="p-2.5 text-navy/85">{row.percentage}</td>
                  <td className="p-2.5 font-bold text-sky-deep">
                    {row.grade} ({row.gradeAr})
                  </td>
                  <td className="p-2.5 text-navy/85">{row.points}</td>
                  <td className="p-2.5 text-navy/85">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="mb-3 font-display text-sm font-bold text-navy">
          احتساب ساعات الغياب
        </h4>
        <div className="overflow-x-auto rounded-2xl glass-card">
          <table className="w-full text-center text-[11px]">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-2.5 font-bold">عدد ساعات المقرر</th>
                <th className="p-2.5 font-bold">الإنذار الأول 10%</th>
                <th className="p-2.5 font-bold">الإنذار الثاني 20%</th>
                <th className="p-2.5 font-bold">حرمان 25%</th>
              </tr>
            </thead>
            <tbody>
              {absenceHoursTable.map((row, i) => (
                <tr
                  key={row.courseHours}
                  className={`border-t border-white/40 ${i % 2 === 1 ? "bg-sky/10" : ""}`}
                >
                  <td className="p-2.5 font-bold text-navy/85">{row.courseHours}</td>
                  <td className="p-2.5 text-navy/85">{row.warning10}</td>
                  <td className="p-2.5 text-navy/85">{row.warning20}</td>
                  <td className="p-2.5 font-bold text-sky-deep">{row.denial25}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
