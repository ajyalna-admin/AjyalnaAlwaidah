import Image from "next/image";
import { metroLines, metroStationsTable } from "@/lib/data";

export function MetroMapDetails() {
  return (
    <div className="mt-6 space-y-8">
      <div className="overflow-hidden rounded-2xl glass-card">
        <Image
          src="/metro-info-poster.jpg"
          alt="قطار الجامعة (المترو) — مسارات المحطات ورموزها"
          width={900}
          height={1273}
          className="h-auto w-full"
        />
      </div>

      <div>
        <h4 className="mb-3 font-display text-sm font-bold text-navy">
          مسارات القطار بالتفصيل
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {metroLines.map((line) => (
            <div
              key={line.name}
              className="flex items-center gap-3 rounded-2xl glass-card p-4"
            >
              <span
                className="h-4 w-4 shrink-0 rounded-full"
                style={{ backgroundColor: line.color }}
              />
              <div>
                <p className="text-xs font-bold text-navy">
                  المسار {line.name}{" "}
                  <span className="font-normal text-navy/60">({line.direction})</span>
                </p>
                <p className="mt-0.5 text-[11px] text-navy/70">{line.route}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 font-display text-sm font-bold text-navy">
          مخطط خط المترو التفصيلي
        </h4>
        <div className="overflow-hidden rounded-2xl glass-card">
          <Image
            src="/metro-lines-diagram.jpg"
            alt="مخطط خط مترو الجامعة التفصيلي بكل المحطات"
            width={900}
            height={1273}
            className="h-auto w-full"
          />
        </div>
      </div>

      <div>
        <h4 className="mb-3 font-display text-sm font-bold text-navy">
          دليل المحطات وأهم مرافقها
        </h4>
        <div className="overflow-x-auto rounded-2xl glass-card">
          <table className="w-full text-center text-[11px]">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-2.5 font-bold">المحطة</th>
                <th className="p-2.5 font-bold">أهم المرافق</th>
              </tr>
            </thead>
            <tbody>
              {metroStationsTable.map((row, i) => (
                <tr
                  key={row.station}
                  className={`border-t border-white/40 ${i % 2 === 1 ? "bg-sky/10" : ""}`}
                >
                  <td className="p-2.5 font-bold text-sky-deep">{row.station}</td>
                  <td className="whitespace-pre-line p-2.5 text-right text-navy/85">
                    {row.facilities}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="mb-3 font-display text-sm font-bold text-navy">
          مخطط المدينة الجامعية
        </h4>
        <div className="overflow-hidden rounded-2xl glass-card">
          <Image
            src="/metro-city-map.jpg"
            alt="مخطط المدينة الجامعية بالكامل مع دليل الرموز"
            width={900}
            height={1273}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
