import Image from "next/image";
import { campusBuildingsTable, collegeGroundFloorRooms } from "@/lib/data";

export function CampusMapDetails() {
  return (
    <div className="mt-6 space-y-8">
      <div>
        <h4 className="mb-3 font-display text-sm font-bold text-navy">
          جدول مباني ومحطات الحرم الجامعي
        </h4>
        <div className="overflow-x-auto rounded-2xl glass-card">
          <table className="w-full text-center text-[11px]">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-2.5 font-bold">المحطة</th>
                <th className="p-2.5 font-bold">رقم المبنى</th>
                <th className="p-2.5 font-bold">اسم المبنى</th>
              </tr>
            </thead>
            <tbody>
              {campusBuildingsTable.map((row, i) => (
                <tr
                  key={row.station}
                  className={`border-t border-white/40 ${i % 2 === 1 ? "bg-sky/10" : ""}`}
                >
                  <td className="p-2.5 font-bold text-sky-deep">{row.station}</td>
                  <td className="whitespace-pre-line p-2.5 text-navy/85">{row.buildingNumbers}</td>
                  <td className="whitespace-pre-line p-2.5 text-right text-navy/85">{row.buildingNames}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="mb-3 font-display text-sm font-bold text-navy">
          أهم مرافق الطابق الأرضي — مبنى كلية علوم الحاسب والمعلومات
        </h4>
        <div className="mb-4 overflow-hidden rounded-2xl glass-card bg-cream">
          <Image
            src="/campus-college-floorplan.jpg"
            alt="مخطط الطابق الأرضي لمبنى كلية علوم الحاسب والمعلومات"
            width={1100}
            height={1213}
            className="h-auto w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2.5">
          {collegeGroundFloorRooms.map((room) => (
            <span
              key={room}
              className="rounded-full bg-sky/15 px-3.5 py-2 text-xs font-bold text-sky-deep"
            >
              {room}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
