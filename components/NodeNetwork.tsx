"use client";

import { useEffect, useRef } from "react";

// 노드 색: 연한 회색 / 연결선 색: 대표 블루(#2D3BFF)보다 조금 연한 파랑
const NODE_COLOR = "#D1D5DB";
const LINE_RGB = "109, 124, 255";
const LINK_DIST = 120; // 노드 간 연결 임계 거리
const MOUSE_DIST = 150; // 마우스 연결 임계 거리

type Node = { x: number; y: number; vx: number; vy: number };

export default function NodeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    const mouse: { x: number | null; y: number | null } = { x: null, y: null };

    const buildNodes = () => {
      // 면적 비례로 노드 수 결정 (작은 박스에서도 과밀하지 않게)
      const count = Math.round(Math.min(42, Math.max(20, (w * h) / 9000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    const drawFrame = (animateNodes: boolean) => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (animateNodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }

        // 노드 간 연결선 (연한 파랑)
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dist = Math.hypot(n.x - m.x, n.y - m.y);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(${LINE_RGB}, ${0.5 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // 마우스 근처 노드 연결 (살짝 강조)
        if (mouse.x != null && mouse.y != null) {
          const dist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (dist < MOUSE_DIST) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${LINE_RGB}, ${0.85 * (1 - dist / MOUSE_DIST)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // 노드
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = NODE_COLOR;
        ctx.fill();
      }
    };

    let raf = 0;
    const loop = () => {
      drawFrame(true);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reduce) {
      drawFrame(false); // 정적 1프레임
    } else {
      canvas.addEventListener("mousemove", onMove);
      canvas.addEventListener("mouseleave", onLeave);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}
