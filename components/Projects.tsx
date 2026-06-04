"use client";

import { useState } from "react";
import { projects, sideProjects, skills } from "@/lib/content";
import type { Project } from "@/lib/types";
import Reveal from "./ui/Reveal";
import ProjectModal from "./ProjectModal";
import ProjectIllustration from "./ProjectIllustration";

// SKILLS & SIDE PROJECT — funnel.io 스타일 단순 라인 아이콘 (sideProjects 순서와 매칭)
const skillIcons = [
  // 데이터 환경 구축 — 데이터베이스
  <svg key="db" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
    <ellipse cx="20" cy="9" rx="12" ry="4.5" />
    <path d="M8 9 v22 c0 2.5 5.4 4.5 12 4.5 s12 -2 12 -4.5 V9" />
    <path d="M8 20 c0 2.5 5.4 4.5 12 4.5 s12 -2 12 -4.5" />
  </svg>,
  // AI 블로그 자동화 — 펜/편집
  <svg key="pen" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
    <path d="M27 6 l7 7 -19 19 -8.5 1.5 1.5 -8.5 z" />
    <path d="M23.5 9.5 l7 7" />
  </svg>,
  // AI 마케팅 분석 자동화 — 막대 그래프
  <svg key="chart" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
    <path d="M7 6 V33 H34" />
    <rect x="12" y="24" width="5" height="9" rx="1" />
    <rect x="21" y="18" width="5" height="15" rx="1" />
    <rect x="30" y="12" width="5" height="21" rx="1" />
  </svg>,
];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group flex h-full flex-col overflow-hidden border border-white/10 bg-dark-soft text-left transition-colors hover:border-brand/60"
    >
      {/* 상단 플랫 일러스트 */}
      <div className="aspect-[16/9] w-full overflow-hidden">
        <ProjectIllustration variant={index} />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="text-xs font-semibold tracking-[0.18em] text-white/50">
          {project.company}
        </span>
        <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
          {project.summary}
        </p>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white/70 transition-colors group-hover:text-brand">
          더 알아보기 <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </button>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="scroll-mt-16 bg-dark py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-bright">
            Work
          </p>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            문제를 정의하고, 성과로 증명한
            <br />
            프로젝트
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/50">
            주도적으로 문제를 해결하며 성과를 만들어낸 대표 프로젝트입니다.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} index={i} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>

        {/* SKILLS & SIDE PROJECT */}
        <div className="mt-24">
          {/* Skills — 카테고리별 도구·역량 태그 */}
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Skills
            </h3>
          </Reveal>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {skills.map((s) => (
              <Reveal key={s.category}>
                <div className="grid gap-3 py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
                  <span className="text-sm font-semibold text-white/55">
                    {s.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-none border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm text-white/80"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Side Project */}
          <div className="mt-16">
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Side Project
              </h3>
            </Reveal>
            <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {sideProjects.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-brand">{skillIcons[i]}</span>
                    <p className="mt-5 font-bold text-white">{s.title}</p>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/55">
                      {s.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
