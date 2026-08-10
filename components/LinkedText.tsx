import { ExternalLink } from "lucide-react";

const URL_REGEX = /(https?:\/\/[^\s)]+)/g;

// يحوّل أي رابط داخل النص إلى شارة صغيرة "فتح الرابط" بدل الرابط الخام الطويل
// split() بمجموعة ملتقطة (capture group) يرجّع النص والروابط بالتناوب دائمًا:
// عنصر بفهرس فردي = رابط مطابق، عنصر بفهرس زوجي = نص عادي
export function LinkedText({ text }: { text: string }) {
  const parts = text.split(URL_REGEX);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 inline-flex items-center gap-1 rounded-full bg-sky/15 px-2.5 py-1 align-middle text-[12px] font-bold text-sky-deep transition-colors hover:bg-sky/25"
          >
            <ExternalLink className="h-3 w-3" />
            فتح الرابط
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
