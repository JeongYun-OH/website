import { colleagues } from "@/lib/content";
import Reveal from "./ui/Reveal";
import { HighlightText } from "./ui/Highlight";

export default function Colleagues() {
  return (
    <div className="mt-12 border-t border-line pt-8 sm:mt-14">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {colleagues.map((c, i) => (
          <Reveal key={i} delay={(i % 2) * 0.1}>
            <div>
              <p className="text-sm leading-relaxed sm:text-base">
                “<HighlightText text={c.quote} highlights={c.highlights} />”
              </p>
              <p className="mt-3 text-sm text-muted">— {c.author}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
