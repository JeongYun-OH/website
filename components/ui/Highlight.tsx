import type { ReactNode } from "react";

export default function Highlight({ children }: { children: ReactNode }) {
  return <span className="marker">{children}</span>;
}

/**
 * 문장 안의 특정 구절들만 마커 강조. highlights에 포함된 부분 문자열을 감싼다.
 */
export function HighlightText({
  text,
  highlights,
}: {
  text: string;
  highlights: string[];
}) {
  if (highlights.length === 0) return <>{text}</>;

  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));

  return (
    <>
      {parts.map((part, i) =>
        highlights.includes(part) ? <Highlight key={i}>{part}</Highlight> : part
      )}
    </>
  );
}
