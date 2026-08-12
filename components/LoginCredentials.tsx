const CREDENTIAL_GROUPS = [
  {
    title: "شبكة الجامعة ونظامي البلاك بورد والبانر",
    fields: [
      { label: "اسم المستخدم", value: "رقمكِ الجامعي (مثال: 44800xxxxx)" },
      { label: "كلمة المرور", value: "Pnu@ + رقم الهوية الوطنية" },
    ],
  },
  {
    title: "البريد الجامعي",
    fields: [
      { label: "صيغة البريد", value: "44800xxxxx@pnu.edu.sa" },
      { label: "كلمة المرور", value: "Pnu@ + رقم الهوية الوطنية" },
    ],
  },
];

export function LoginCredentials() {
  return (
    <div className="mt-6 space-y-4">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-sky/15 px-3 py-1 text-[11px] font-bold text-sky-deep">
        عام 1448هـ
      </span>

      <div className="grid gap-4 sm:grid-cols-2">
        {CREDENTIAL_GROUPS.map((group) => (
          <div key={group.title} className="overflow-hidden rounded-2xl glass-card">
            <div className="bg-navy px-4 py-2.5 text-center text-xs font-bold text-white">
              {group.title}
            </div>
            <div className="space-y-3 p-4">
              {group.fields.map((field) => (
                <div key={field.label}>
                  <p className="mb-1 text-[11px] font-bold text-sky-deep">{field.label}</p>
                  <p className="rounded-full bg-sky/15 px-3 py-2 text-center text-xs font-bold text-navy">
                    {field.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
