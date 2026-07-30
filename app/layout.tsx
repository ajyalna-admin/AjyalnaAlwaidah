import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { brand } from "@/lib/data";

const notoKufiArabic = localFont({
  src: [
    { path: "./fonts/NotoKufiArabic-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/NotoKufiArabic-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/NotoKufiArabic-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-noto-kufi",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`,
  },
  description:
    "مبادرة طالبية ضمن كلية علوم الحاسب والمعلومات بجامعة الأميرة نورة بنت عبدالرحمن، تهتم بدعم وتوجيه الطالبات الجديدات.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${notoKufiArabic.variable} font-body antialiased bg-cream text-navy`}
      >
        <div className="bg-orbs" aria-hidden="true">
          <span className="h-[460px] w-[460px] bg-sky/60 -top-32 -right-32" />
          <span className="h-[420px] w-[420px] bg-periwinkle-deep/45 top-[38%] -left-44" />
          <span className="h-[380px] w-[380px] bg-navy/15 bottom-[-80px] right-1/4" />
          <span className="h-[300px] w-[300px] bg-mist/50 top-[70%] left-1/3" />
        </div>
        {children}
      </body>
    </html>
  );
}
