import { Home, MessageSquare, Bell, FileCheck, Calendar } from "lucide-react";
import { blackboardNavItems, type BlackboardNavItem } from "@/lib/data";

const ICONS: Record<BlackboardNavItem["icon"], typeof Home> = {
  home: Home,
  messages: MessageSquare,
  updates: Bell,
  grades: FileCheck,
  calendar: Calendar,
};

export function BlackboardNavList() {
  return (
    <div className="mt-6">
      <h4 className="mb-3 font-display text-sm font-bold text-navy">
        قائمة التنقل العامة في نظام البلاك بورد
      </h4>
      <p className="mb-4 text-xs leading-relaxed text-navy/70">
        توجد قائمة في أعلى الصفحة لنظام البلاك بورد، ويختلف موقعها بحسب اللغة:
        النظام باللغة الإنجليزية بأقصى اليمين، والنظام باللغة العربية بأقصى اليسار.
      </p>

      <div className="space-y-3">
        {blackboardNavItems.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl glass-card p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed text-navy/85">
                <span className="font-bold text-navy">{item.title}:</span>{" "}
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
