import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import SiteFooter from "@/components/site/SiteFooter";
import WorkList from "@/components/site/WorkList";
import ProcessSteps from "@/components/site/ProcessSteps";
import SideBuilds from "@/components/site/SideBuilds";
import CtaBand from "@/components/site/CtaBand";
import { impactHighlights } from "@/data/site";
import portrait from "@/assets/portrait.jpg";

const Home = () => (
  <div className="min-h-screen bg-background text-[17px] leading-[1.6] text-[#333333]">
    <SEO
      title="Adebukola Akanji - Fintech Product Manager"
      description="Portfolio of Adebukola Akanji, a Product Manager building fintech and payments products that scale globally and deliver measurable growth."
      path="/"
    />
    <Navigation />

    <main>
      <section className="mx-auto flex max-w-[1120px] flex-col gap-8 px-5 pb-10 pt-12 sm:px-6 md:flex-row md:items-center md:gap-12 md:pb-16 md:pt-20">
        <div className="min-w-0 md:flex-1">
          <p className="mb-5 inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold leading-[1.6] text-foreground">
            Product Manager · Cross-border payments · Emerging markets
          </p>
          <h1 className="m-0 max-w-[860px] text-[34px] leading-[1.05] tracking-[-0.02em] text-foreground md:text-[clamp(40px,5vw,60px)]">
            I build payment products that move money across borders.
          </h1>
          <p className="mt-7 max-w-[640px] text-lg text-[#333333] md:text-xl">
            I find the gap between what users need and what they currently get, then build the product that closes it.
            Five years across fintech, payments and international markets.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex h-10 items-center justify-center rounded-[10px] bg-accent px-4 text-sm font-medium text-foreground no-underline transition-opacity hover:opacity-90"
            >
              View case studies
            </a>
            <Link
              to="/about"
              className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[#D4D4D4] px-4 text-sm font-medium text-foreground no-underline transition-colors hover:bg-muted"
            >
              About me
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:flex-none">
          <img
            src={portrait}
            alt="Adebukola Akanji, Product Manager"
            width={320}
            height={320}
            {...{ fetchpriority: "high" }}
            decoding="async"
            className="h-[220px] w-[220px] rounded-full border-[6px] border-accent object-cover md:h-80 md:w-80"
          />
        </div>
      </section>

      <section aria-label="Impact at a glance" className="mx-auto max-w-[1120px] px-5 pb-16 sm:px-6 md:pb-24">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border shadow-[0_2px_8px_rgba(26,26,26,0.04)] sm:grid-cols-2 lg:grid-cols-4">
          {impactHighlights.map((stat) => (
            <div key={stat.label} className="bg-white p-5 md:p-7">
              <p className="m-0 whitespace-nowrap font-heading text-[32px] font-bold leading-none text-foreground">{stat.value}</p>
              <p className="mt-2.5 text-[15px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <WorkList />
      <ProcessSteps />
      <SideBuilds />
      <CtaBand />
    </main>

    <SiteFooter divider />
  </div>
);

export default Home;
