import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { transitionSession } from "@/lib/data";

export const metadata = {
  title: transitionSession.title,
};

export default function TransitionSessionPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="container-content px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-wide text-navy/60">
            {transitionSession.sessionType}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-navy">
            {transitionSession.title}
          </h1>
          <p className="mt-4 text-navy/70 leading-relaxed">{transitionSession.description}</p>

          <a
            href={transitionSession.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-cream hover:bg-navy-light transition-colors duration-200"
          >
            سجّلي الآن
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={transitionSession.posterUrl}
            alt={transitionSession.title}
            className="w-full h-auto rounded-3xl shadow-xl"
          />

          <div className="flex flex-col gap-8">
            <div className="glass-card rounded-3xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-navy/80">
                <Calendar className="h-4 w-4 shrink-0" />
                <span className="text-sm font-medium">{transitionSession.date}</span>
              </div>
              <div className="flex items-center gap-3 text-navy/80">
                <Clock className="h-4 w-4 shrink-0" />
                <span className="text-sm font-medium">{transitionSession.time}</span>
              </div>
              <div className="flex items-center gap-3 text-navy/80">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="text-sm font-medium">{transitionSession.location}</span>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-navy mb-4">متحدثو الجلسة الحوارية</h2>
              <div className="flex flex-col gap-4">
                {transitionSession.speakers.map((speaker) => (
                  <div
                    key={speaker.name}
                    className="glass-card rounded-2xl p-4 flex flex-col gap-1"
                  >
                    <span className="w-fit rounded-full bg-sky/20 px-2.5 py-0.5 text-[11px] font-semibold text-navy">
                      {speaker.role}
                    </span>
                    <p className="mt-1 text-sm font-bold text-navy">{speaker.name}</p>
                    <p className="text-sm text-navy/70 leading-relaxed">{speaker.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white/60 p-4 text-sm text-navy/80 leading-relaxed">
              {transitionSession.perksNote}
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-navy/50">
              <span>الرعاة والداعمون:</span>
              {transitionSession.sponsors.map((sponsor) => (
                <span key={sponsor} className="text-navy/70 font-semibold">
                  {sponsor}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
