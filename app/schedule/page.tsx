import { scheduleSection } from "@/lib/data";

export const metadata = {
  title: scheduleSection.title,
};

export default function SchedulePage() {
  return (
    <main className="pt-32 pb-24">
      <div className="container-content px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wide text-navy/60">
            {scheduleSection.eyebrow}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-navy">
            {scheduleSection.title}
          </h1>
          <p className="mt-4 text-navy/70 leading-relaxed">{scheduleSection.description}</p>
        </div>

        <div className="mt-10 glass-card rounded-3xl p-4 sm:p-6">
          <a
            href={scheduleSection.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={scheduleSection.imageUrl}
              alt={scheduleSection.title}
              className="w-full h-auto rounded-2xl"
            />
          </a>
          <p className="mt-4 text-center text-xs text-navy/50">
            اضغطي على الصورة لفتحها بحجمها الكامل
          </p>
        </div>
      </div>
    </main>
  );
}
