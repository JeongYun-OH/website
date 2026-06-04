import { about } from "@/lib/content";
import Reveal from "./ui/Reveal";
import { HighlightText } from "./ui/Highlight";
import Colleagues from "./Colleagues";
import Timeline from "./Timeline";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            About
          </p>
          <p className="max-w-3xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
            <HighlightText text={about.headline} highlights={about.keywords} />
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {about.sub}
          </p>
        </Reveal>

        <Colleagues />
        <Timeline />
      </div>
    </section>
  );
}
