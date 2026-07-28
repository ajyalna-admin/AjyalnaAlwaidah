import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/data";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
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
        className={`${cairo.variable} ${tajawal.variable} font-body antialiased bg-cream text-navy`}
      >
        {children}
      </body>
    </html>
  );
}
