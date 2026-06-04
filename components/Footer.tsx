import { site, socials } from "@/lib/content";
import Reveal from "./ui/Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-[clamp(3rem,12vw,9rem)] font-extrabold leading-none tracking-tighter text-white">
            THANK YOU
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-white/50">함께 성장할 이야기가 있다면</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block text-xl font-bold text-white transition-colors hover:text-brand sm:text-2xl"
              >
                {site.email}
              </a>
            </div>

            <ul className="flex flex-wrap gap-5 text-sm font-medium text-white/70">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-transparent pb-0.5 transition-colors hover:border-white hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mt-16 text-xs text-white/30">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
