import { Train, Cross, DoorOpen, Baby, Bus } from "lucide-react";
import { metroLines, metroStationsTable, campusMapLegend, type MapLegendItem } from "@/lib/data";
import { MetroLineDiagram } from "@/components/MetroLineDiagram";
import { CampusCityMap } from "@/components/CampusCityMap";

const LEGEND_ICONS: Record<MapLegendItem["icon"], typeof Train> = {
  train: Train,
  hospital: Cross,
  gate: DoorOpen,
  daycare: Baby,
  bus: Bus,
};

export function MetroMapDetails() {
  return (
    <div className="mt-6 space-y-8">
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
          مخطط خط المترو
        </h4>
        <MetroLineDiagram />
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
        <CampusCityMap />
      </div>

      <div>
        <h4 className="mb-3 font-display text-sm font-bold text-navy">
          دليل رموز مخطط المدينة الجامعية
        </h4>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {campusMapLegend.map((item) => {
            const Icon = LEGEND_ICONS[item.icon];
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-2xl glass-card p-3.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-xs font-bold text-navy">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
