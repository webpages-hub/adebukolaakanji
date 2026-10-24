import { Link } from "react-router-dom";
import Reveal from "@/components/ui/reveal";
import { caseStudies } from "@/data/case-studies";

interface WorkListProps {
  /** Render the heading as the page's h1 (used on the case studies page). */
  asPageTitle?: boolean;
}

const WorkList = ({ asPageTitle = false }: WorkListProps) => {
  const Heading = asPageTitle ? "h1" : "h2";

  return (
    <section id="work" className="bg-background pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
          <div>
            <p className="mb-2 font-mono-tag text-[13px] uppercase tracking-[0.06em] text-foreground">Selected work</p>
            <Heading className="m-0 font-heading text-[30px] font-bold leading-[1.1] text-foreground md:text-[40px]">
              Case studies
            </Heading>
          </div>
          <p className="m-0 max-w-[420px] text-muted-foreground">
            Each one starts with a real user problem and ends with what changed. Read the headline number, then dive in.
          </p>
        </Reveal>

        <Reveal className="flex flex-col">
          {caseStudies.map((study, index) => {
            const number = String(index + 1).padStart(2, "0");
            const label = `${study.summary.company} · ${study.summary.type}`;
            return (
              <Link
                key={study.path}
                to={study.path}
                className="group flex items-center gap-4 border-t border-border py-6 text-inherit no-underline last:border-b md:gap-8 md:py-8"
              >
                <div className="min-w-0 flex-1 md:flex md:items-baseline md:gap-6">
                  <span className="font-mono-tag text-xs tracking-[0.04em] text-muted-foreground md:text-sm">
                    {number}
                    <span className="md:hidden"> · {label}</span>
                  </span>
                  <div className="mt-2 min-w-0 md:mt-0">
                    <h3 className="m-0 font-heading text-lg font-semibold leading-[1.35] text-foreground group-hover:underline md:text-2xl md:leading-[1.3]">
                      {study.title}
                    </h3>
                    <p className="mt-1.5 hidden text-[15px] text-muted-foreground md:block">{label}</p>
                    <p className="mt-2 flex flex-wrap items-baseline gap-1.5 md:hidden">
                      <span className="font-heading text-lg font-bold text-foreground">{study.summary.metric}</span>
                      <span className="text-sm text-muted-foreground">{study.summary.metricLabel}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center md:w-[260px] md:justify-between md:gap-4">
                  <div className="hidden md:block">
                    <p className="m-0 font-heading text-[28px] font-bold leading-[1.1] text-foreground">{study.summary.metric}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{study.summary.metricLabel}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent text-[17px] font-semibold text-foreground transition-transform group-hover:translate-x-1 md:h-11 md:w-11 md:text-lg"
                  >
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default WorkList;
