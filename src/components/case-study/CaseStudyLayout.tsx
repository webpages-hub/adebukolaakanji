import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/ui/reveal";
import CaseStudyBlocks from "./CaseStudyBlocks";
import { CaseStudyData, CaseStudyFigure, CaseStudySection } from "./types";

const wrap = "mx-auto w-full max-w-[1120px] px-5 sm:px-6";
const cardShadow = "shadow-[0_2px_8px_rgba(26,26,26,0.04)]";

const GlanceCard = ({ label, text, emphasis = false }: { label: string; text: string; emphasis?: boolean }) => (
  <div className={`rounded-xl border border-border bg-white p-5 md:p-6 ${cardShadow}`}>
    <p
      className={`mb-2 font-mono-tag text-[13px] uppercase tracking-[0.06em] ${emphasis ? "text-foreground" : "text-muted-foreground"}`}
    >
      {label}
    </p>
    <p className="m-0 font-medium text-foreground">{text}</p>
  </div>
);

const NumberedSection = ({
  number,
  section,
  first,
  last,
}: {
  number: number;
  section: CaseStudySection;
  first: boolean;
  last: boolean;
}) => (
  <Reveal
    as="section"
    className={`${wrap} grid gap-4 min-[900px]:grid-cols-[240px_minmax(0,1fr)] min-[900px]:gap-x-10 ${
      first ? "pt-10 md:pt-14" : "pt-12 md:pt-[72px]"
    } ${last ? "pb-16 md:pb-24" : ""}`}
  >
    <div>
      <p className="m-0 inline-block rounded-full bg-accent px-3 py-0.5 font-mono-tag text-sm font-medium text-foreground">
        {String(number).padStart(2, "0")}
      </p>
      <h2 className="mt-1 text-[26px] text-foreground md:text-[32px]">{section.title}</h2>
    </div>
    <CaseStudyBlocks blocks={section.blocks} />
  </Reveal>
);

const Figure = ({ figure }: { figure: CaseStudyFigure }) => (
  <figure className={`${wrap} m-0 pt-10 md:pt-12`}>
    <div className="rounded-[20px] bg-muted p-3 sm:p-6">
      <img src={figure.src} alt={figure.alt} loading="lazy" decoding="async" className="block h-auto w-full rounded-xl" />
    </div>
    <figcaption className="mt-3 text-center text-[15px] text-muted-foreground">{figure.caption}</figcaption>
  </figure>
);

/**
 * Reusable case study page. Everything on the page comes from `data`, so a new
 * case study only needs a new data file (see `src/data/case-studies`).
 */
const CaseStudyLayout = ({ data }: { data: CaseStudyData }) => {
  const sectionCount = data.items.filter((item) => item.kind === "section").length;
  let sectionNumber = 0;

  return (
    <div className="min-h-screen bg-background text-[17px] leading-[1.6] text-[#333333]">
      <SEO title={data.seo.title} description={data.seo.description} path={data.path} />
      <Navigation />

      <main>
        <section className={`${wrap} pb-10 pt-10 md:pb-12 md:pt-14`}>
          <Link to="/case-studies" className="block w-fit py-2.5 font-medium text-foreground no-underline hover:underline">
            ← All case studies
          </Link>
          <p className="mb-4 mt-4 inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold leading-[1.6] text-foreground">
            {data.tag}
          </p>
          <h1 className="m-0 max-w-[900px] text-[30px] leading-[1.08] tracking-[-0.02em] text-foreground md:text-[clamp(36px,5vw,56px)]">
            {data.title}
          </h1>
          <p className="mt-6 max-w-[720px] text-lg md:text-xl">{data.lede}</p>
          <dl className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 border-t border-border pt-6">
            {data.meta.map((item) => (
              <div key={item.label}>
                <dt className="text-[13px] uppercase tracking-[0.05em] text-muted-foreground">{item.label}</dt>
                <dd className="m-0 mt-1 font-semibold text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-label="Impact" className="bg-foreground">
          <div className={`${wrap} grid grid-cols-2 gap-x-4 gap-y-7 py-8 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:gap-8 md:py-12`}>
            {data.impact.map((stat) => (
              <div key={stat.label}>
                <p className="m-0 font-heading text-[30px] font-bold leading-none text-accent md:text-5xl">{stat.value}</p>
                <p className="mt-2.5 text-[15px] text-[#B3B3B3]">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-label="At a glance" className={`${wrap} pb-6 pt-14 md:pt-[72px]`}>
          <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            <GlanceCard label="Problem" text={data.glance.problem} />
            <GlanceCard label="Solution" text={data.glance.solution} />
            <GlanceCard label="Result" text={data.glance.result} emphasis />
          </Reveal>
        </section>

        {data.items.map((item, i) => {
          if (item.kind === "figure") return <Figure key={i} figure={item} />;
          sectionNumber += 1;
          return (
            <NumberedSection
              key={i}
              number={sectionNumber}
              section={item}
              first={sectionNumber === 1}
              last={sectionNumber === sectionCount}
            />
          );
        })}

        <Link to={data.next.href} className="block bg-muted text-inherit no-underline transition-colors hover:bg-[#EFEFEF]">
          <div className={`${wrap} flex flex-wrap items-center justify-between gap-4 py-12 md:py-14`}>
            <div>
              <p className="mb-1.5 text-sm text-muted-foreground">{data.next.eyebrow}</p>
              <p className="m-0 font-heading text-[22px] font-bold text-foreground md:text-[28px]">{data.next.title}</p>
            </div>
            <span className="font-semibold text-foreground">Read next →</span>
          </div>
        </Link>
      </main>

      <SiteFooter />
    </div>
  );
};

export default CaseStudyLayout;
