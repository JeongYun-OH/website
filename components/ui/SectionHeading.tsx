import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  dark = false,
  className = "",
}: Props) {
  return (
    <Reveal className={className}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold tracking-[0.2em] uppercase ${
            dark ? "text-brand" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
