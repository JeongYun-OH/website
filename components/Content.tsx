import { blogUrl, posts } from "@/lib/content";
import Reveal from "./ui/Reveal";
import ProjectIllustration from "./ProjectIllustration";

export default function Content() {
  return (
    <section id="content" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Content
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Blog
            </h2>
          </Reveal>
          <Reveal>
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              블로그 전체 보기 <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

        {/* 세로 리스트 — 좌측 썸네일 + 카테고리 태그 + 제목 + 날짜 */}
        <div className="mt-12 flex flex-col">
          {posts.map((p, i) => (
            <Reveal key={p.href} delay={i * 0.06}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 border-t border-line py-6 last:border-b sm:gap-8"
              >
                {/* 플랫 일러스트 썸네일 (PROJECT와 동일 스타일) */}
                <div className="aspect-video w-32 shrink-0 overflow-hidden sm:w-44">
                  <ProjectIllustration variant={i + 4} />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="inline-block rounded-none bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-3 line-clamp-2 text-lg font-bold transition-colors group-hover:text-brand sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.date}</p>
                </div>

                <span
                  aria-hidden
                  className="hidden shrink-0 text-xl text-line transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand sm:block"
                >
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
