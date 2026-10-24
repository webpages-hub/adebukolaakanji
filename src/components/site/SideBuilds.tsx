import Reveal from "@/components/ui/reveal";
import { sideBuilds } from "@/data/site";

const SideBuilds = () => (
  <section className="mx-auto max-w-[1120px] px-5 pb-16 sm:px-6 md:pb-24">
    <Reveal>
      <p className="mb-2 font-mono-tag text-[13px] uppercase tracking-[0.06em] text-foreground">Side builds</p>
      <h2 className="mb-8 font-heading text-[26px] font-bold leading-[1.1] text-foreground md:text-[32px]">
        Things I build outside work
      </h2>
    </Reveal>
    <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
      {sideBuilds.map((build) => (
        <a
          key={build.name}
          href={build.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-border bg-white p-6 text-inherit no-underline shadow-[0_2px_8px_rgba(26,26,26,0.04)] transition-colors hover:border-foreground/30"
        >
          <h3 className="mb-2 text-xl text-foreground">{build.name}</h3>
          <p className="m-0 text-[15px]">{build.description}</p>
        </a>
      ))}
    </Reveal>
  </section>
);

export default SideBuilds;
