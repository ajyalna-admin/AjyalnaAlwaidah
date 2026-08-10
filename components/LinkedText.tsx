import { ExternalLink, Phone } from "lucide-react";

// يتعرف على روابط http/https وكذلك أرقام الهاتف (tel:+9665xxxxxxxx) داخل النص
const URL_REGEX = /(https?:\/\/[^\s)]+|tel:\+?[0-9\-]+)/g;

// يحوّل أي رابط أو رقم هاتف داخل النص إلى شارة صغيرة قابلة للضغط بدل النص الخام الطويل
// split() بمجموعة ملتقطة (capture group) يرجّع النص والروابط بالتناوب دائمًا:
// عنصر بفهرس فردي = رابط مطابق، عنصر بفهرس زوجي = نص عادي
export function LinkedText({ text }: { text: string }) {
  const parts = text.split(URL_REGEX);

  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 !== 1) return <span key={i}>{part}</span>;

        const isPhone = part.startsWith("tel:");
        return (
          <a
            key={i}
            href={part}
            target={isPhone ? undefined : "_blank"}
            rel={isPhone ? undefined : "noopener noreferrer"}
            className="mx-1 inline-flex items-center gap-1 rounded-full bg-sky/15 px-2.5 py-1 align-middle text-[12px] font-bold text-sky-deep transition-colors hover:bg-sky/25"
          >
            {isPhone ? <Phone className="h-3 w-3" /> : <ExternalLink className="h-3 w-3" />}
            {isPhone ? "اتصال" : "فتح الرابط"}
          </a>
        );
      })}
    </>
  );
}
