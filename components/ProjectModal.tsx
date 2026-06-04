"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/types";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const open = project !== null;

  // ESC 닫기 + 배경 스크롤 잠금
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* 백드롭 */}
          <button
            type="button"
            aria-label="닫기"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* 패널 */}
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-bg p-7 outline-none sm:rounded-2xl sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="닫기"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-line hover:text-ink"
            >
              ✕
            </button>

            <span className="text-xs font-semibold tracking-[0.18em] text-muted">
              {project.company} · {project.period}
            </span>
            <h3
              id="project-modal-title"
              className="mt-3 pr-8 text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
              {project.title}
            </h3>

            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 font-semibold text-muted">Role</dt>
                <dd>{project.detail.role}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 font-semibold text-muted">Goal</dt>
                <dd>{project.detail.goal}</dd>
              </div>
              <div className="flex gap-3 sm:col-span-2">
                <dt className="w-20 shrink-0 font-semibold text-muted">기여</dt>
                <dd>{project.detail.contribution}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-5">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-xl font-extrabold text-brand">{m.value}</p>
                  <p className="text-[11px] uppercase tracking-wide text-muted">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-6 text-sm leading-relaxed sm:text-base">
              <div>
                <h4 className="mb-2 font-bold">문제</h4>
                <p className="text-muted">{project.detail.problem}</p>
              </div>
              <div>
                <h4 className="mb-2 font-bold">접근</h4>
                <ul className="space-y-2 text-muted">
                  {project.detail.approach.map((a, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-bold">결과</h4>
                <p className="text-muted">{project.detail.result}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
