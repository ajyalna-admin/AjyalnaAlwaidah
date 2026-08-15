export function MetroLineDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl glass-card p-4">
      <svg viewBox="0 0 420 640" className="mx-auto w-full max-w-sm" role="img">
        <title>مخطط خط مترو الجامعة</title>

        {/* المسار الحلقي: أزرق (تصاعدي) وبنفسجي (تنازلي) بشكل متوازٍ */}
        <path
          d="M150 580 L150 140 Q150 60 230 60 Q310 60 310 140 L310 580"
          fill="none"
          stroke="#7c3aed"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M170 580 L170 140 Q170 80 230 80 Q290 80 290 140 L290 580"
          fill="none"
          stroke="#2563eb"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* الفرع الأحمر: بين A4 وA5 يتجه إلى S1 وS2 */}
        <path
          d="M170 460 L90 460 L90 560"
          fill="none"
          stroke="#dc2626"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* الفرع الأخضر: بين A8 وA9 يتجه إلى F1 وF2 */}
        <path
          d="M290 220 L370 220 L370 320"
          fill="none"
          stroke="#16a34a"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* محطات المسار الرئيسي A1 إلى A10 */}
        {[
          { id: "A1", x: 230, y: 580 },
          { id: "A2", x: 230, y: 520 },
          { id: "A3", x: 230, y: 460 },
          { id: "A4", x: 170, y: 460 },
          { id: "A5", x: 170, y: 380 },
          { id: "A6", x: 230, y: 320 },
          { id: "A7", x: 230, y: 260 },
          { id: "A8", x: 290, y: 220 },
          { id: "A9", x: 290, y: 160 },
          { id: "A10", x: 230, y: 100 },
        ].map((s) => (
          <g key={s.id}>
            <circle cx={s.x} cy={s.y} r="9" fill="#f6f2ea" stroke="#16223f" strokeWidth="3" />
            <text
              x={s.x}
              y={s.y - 16}
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="#16223f"
            >
              {s.id}
            </text>
          </g>
        ))}

        {/* محطات الفرع الأحمر */}
        {[
          { id: "S1", x: 90, y: 500 },
          { id: "S2", x: 90, y: 560 },
        ].map((s) => (
          <g key={s.id}>
            <circle cx={s.x} cy={s.y} r="8" fill="#f6f2ea" stroke="#dc2626" strokeWidth="3" />
            <text x={s.x - 24} y={s.y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#16223f">
              {s.id}
            </text>
          </g>
        ))}

        {/* محطات الفرع الأخضر */}
        {[
          { id: "F1", x: 370, y: 270 },
          { id: "F2", x: 370, y: 320 },
        ].map((s) => (
          <g key={s.id}>
            <circle cx={s.x} cy={s.y} r="8" fill="#f6f2ea" stroke="#16a34a" strokeWidth="3" />
            <text x={s.x + 24} y={s.y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#16223f">
              {s.id}
            </text>
          </g>
        ))}
      </svg>
      <p className="mt-3 text-center text-[11px] text-navy/60">
        مخطط تخطيطي مبسّط لمسار القطار ومحطاته الرئيسية
      </p>
    </div>
  );
}
