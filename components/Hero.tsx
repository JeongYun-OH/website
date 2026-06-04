"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { achievements, hero } from "@/lib/content";
import NodeNetwork from "./NodeNetwork";

export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="top" className="relative scroll-mt-16 pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* 좌: 카피 + 대표 성과 */}
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
          >
            <motion.h1
              variants={item}
              className="text-[length:var(--text-display)] font-extrabold leading-[1.05] tracking-[-0.03em]"
            >
              {hero.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-md text-lg leading-relaxed text-muted sm:text-xl"
            >
              {hero.sub}
            </motion.p>

            {/* 대표 성과 — 한눈에 보이도록 */}
            <motion.dl
              variants={item}
              className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-8"
            >
              {achievements.map((a) => (
                <div key={a.title}>
                  <dd className="text-2xl font-extrabold text-brand sm:text-3xl">
                    {a.metric}
                  </dd>
                  <dt className="mt-1 text-sm font-semibold sm:text-base">
                    {a.title}
                  </dt>
                  <dd className="mt-0.5 text-xs text-muted">{a.description}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* 우: 노드 네트워크 시각화 (마우스 인터랙션) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden"
          >
            <NodeNetwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
