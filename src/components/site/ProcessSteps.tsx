import Reveal from "@/components/ui/reveal";
import { processSteps } from "@/data/site";

const ProcessSteps = () => (
  <section id="process" className="mx-auto max-w-[1120px] scroll-mt-4 px-5 py-16 sm:px-6 md:py-24">
    <Reveal>
      <p className="mb-2 font-mono-tag text-[13px] uppercase tracking-[0.06em] text-foreground">How I work</p>
      <h2 className="mb-8 max-w-[640px] font-heading text-[30px] font-bold leading-[1.1] text-foreground md:mb-10 md:text-[40px]">
        Understand the real problem before touching the solution.
      </h2>
    </Reveal>
    <Reveal as="ol" className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-4 p-0">
      {processSteps.map((step, index) => (
        <li key={step.title} className="border-t-2 border-foreground pt-4">
          <p className="m-0 font-mono-tag text-[13px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mb-2 mt-1.5 text-[21px] text-foreground">{step.title}</h3>
          <p className="m-0 text-[15px]">{step.text}</p>
        </li>
      ))}
    </Reveal>
  </section>
);

export default ProcessSteps;
