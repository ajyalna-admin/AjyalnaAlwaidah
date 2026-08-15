const TOP_ROW = ["F2", "A6", "A7", "A8", "F1"];
const MID_LEFT = ["A5", "A4", "A3"];
const MID_RIGHT = ["A9", "A10"];
const BOTTOM_ROW = ["S1", "S2", "A2", "A1"];

function StationBlock({ id }: { id: string }) {
  return (
    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-white shadow-sm">
      <span className="text-xs font-bold">{id}</span>
    </div>
  );
}

export function CampusCityMap() {
  return (
    <div className="overflow-x-auto rounded-2xl glass-card p-5">
      <div className="mx-auto flex min-w-[420px] max-w-md flex-col items-center gap-4">
        <div className="flex gap-3">
          {TOP_ROW.map((id) => (
            <StationBlock key={id} id={id} />
          ))}
        </div>

        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col gap-3">
            {MID_LEFT.map((id) => (
              <StationBlock key={id} id={id} />
            ))}
          </div>
          <div className="mt-6 flex h-24 flex-1 items-center justify-center rounded-2xl border-2 border-dashed border-sky-deep/30">
            <span className="text-[11px] font-bold text-sky-deep/70">ساحة الجامعة</span>
          </div>
          <div className="flex flex-col gap-3">
            {MID_RIGHT.map((id) => (
              <StationBlock key={id} id={id} />
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {BOTTOM_ROW.map((id) => (
            <StationBlock key={id} id={id} />
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-[11px] text-navy/60">
        ترتيب تخطيطي مبسّط لمواقع المباني والمحطات بالمدينة الجامعية
      </p>
    </div>
  );
}
