import { timeline } from "@/lib/content";
import Reveal from "./ui/Reveal";

export default function Timeline() {
  return (
    <div className="mt-20 sm:mt-28">
      <Reveal>
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          연혁
        </p>
      </Reveal>

      {/* 데스크탑: 가로 타임라인 */}
      <Reveal className="mt-10 hidden sm:block">
        <div className="relative">
          {/* 연속된 가로선 (점 아래에 깔림) */}
          <div className="absolute inset-x-0 top-[1.55rem] h-px bg-line" />
          <div className="grid grid-cols-3 gap-4">
            {timeline.map((t) => (
              <div key={t.date} className="relative pt-8">
                <span className="absolute left-0 top-0 text-xs font-semibold text-muted">
                  {t.date}
                </span>
                {/* 선 위로 드러나는 점 */}
                <span className="absolute left-0 top-[1.55rem] z-10 h-3 w-3 -translate-y-1/2 rounded-full bg-brand ring-4 ring-bg" />
                <h4 className="relative text-sm font-bold">{t.title}</h4>
                <p className="relative mt-1.5 text-xs leading-relaxed text-muted">
                  {t.description}
                </p>
                <span className="relative mt-2 inline-block text-[11px] font-medium text-muted">
                  {t.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 모바일: 세로 타임라인 */}
      <div className="mt-8 space-y-6 sm:hidden">
        {timeline.map((t, i) => (
          <Reveal key={t.date} delay={i * 0.06}>
            <div className="relative border-l-2 border-line pl-5">
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-brand" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-muted">{t.date}</span>
                <span className="text-[11px] font-medium text-muted">
                  {t.duration}
                </span>
              </div>
              <h4 className="mt-1 text-sm font-bold">{t.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {t.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
