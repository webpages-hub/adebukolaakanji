import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import SiteFooter from "@/components/site/SiteFooter";
import ContactSection from "@/components/site/ContactSection";
import aboutPortrait1 from "@/assets/about-portrait-1.jpg";
import aboutPortrait2 from "@/assets/about-portrait-2.jpg";

const experience = [
  {
    name: "Nomba Financial Services",
    detail: "Founding PM, Global Expansion · April 2023 – Present",
    text: "Built cross-border payments infrastructure across six markets and owned the Global Payouts and Collections API end to end.",
  },
  {
    name: "Payfinancials (Techstars-backed)",
    detail: "Product Manager · October 2022 – March 2023",
    text: "Led retention strategy for the BNPL product, including a gamification system that lifted retention by 10%.",
  },
  {
    name: "Top Metrix Media Solutions",
    detail: "Product Manager · January 2021 – September 2022",
    text: "Managed delivery of five concurrent media products and led a cross-functional team of 15+.",
  },
];

const education = [
  {
    name: "University of Ilorin",
    detail: "B.Sc. Library and Information Science, First Class Honours",
    text: "Best Graduating Student in the department, 2021",
  },
  {
    name: "University of Alberta (Coursera)",
    detail: "Product Management certification",
  },
];

const focusAreas = [
  "Cross-border payments",
  "Market entry",
  "Payouts and collections APIs",
  "KYC and onboarding",
  "Wallets and FX",
  "Retention",
];

const Entry = ({ name, detail, text }: { name: string; detail: string; text?: string }) => (
  <div className="border-t border-[#E0E0E0] py-5 last:border-b">
    <p className="m-0 text-[19px] font-semibold text-foreground">{name}</p>
    <p className="mt-0.5">{detail}</p>
    {text && <p className="mt-2 text-[15px] text-muted-foreground">{text}</p>}
  </div>
);

const About = () => (
  <div className="min-h-screen bg-background text-[17px] leading-[1.6] text-[#333333]">
    <SEO
      title="About — Adebukola Akanji"
      description="Get to know Adebukola Akanji, a Product Manager leading fintech expansions across global markets."
      path="/about"
    />
    <Navigation />

    <main>
      <section className="mx-auto flex max-w-[1120px] flex-col gap-10 px-5 pb-12 pt-12 sm:px-6 md:flex-row md:items-start md:gap-12 md:pb-16 md:pt-20">
        <div className="grid w-full max-w-[360px] grid-cols-2 gap-3 md:w-[300px] md:max-w-none md:flex-none">
          <img
            src={aboutPortrait1}
            alt="Adebukola Akanji"
            loading="lazy"
            decoding="async"
            className="block aspect-[3/4] w-full rounded-xl object-cover"
          />
          <img
            src={aboutPortrait2}
            alt="Adebukola Akanji smiling"
            loading="lazy"
            decoding="async"
            className="mt-8 block aspect-[3/4] w-full rounded-xl object-cover"
          />
        </div>
        <div className="min-w-0 md:flex-1">
          <p className="mb-4 font-mono-tag text-[13px] uppercase tracking-[0.06em] text-foreground">About</p>
          <h1 className="m-0 text-[clamp(30px,4.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-foreground">
            Product Manager, problem-solver, and student of user behaviour.
          </h1>
          <p className="mt-6 text-lg md:text-[19px]">
            I sit where user needs, business goals and technical reality meet, and I make the case for the version where
            all three overlap.
          </p>
          <p className="mt-4">
            That has meant going from zero to a live product in the DRC in six weeks, generating $600K in cross-border
            revenue in eight months, and growing daily active usage by 20% on a multi-currency wallet. My start was
            unconventional: a degree in Library and Information Science and a self-funded pivot into product. It taught me
            to research before I build.
          </p>
          <p className="mt-4">
            I also write about market entry, product strategy and the lessons you only learn by shipping.
          </p>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-[1120px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12 px-5 py-16 sm:px-6 md:py-20">
          <div>
            <h2 className="mb-6 text-[26px] text-foreground md:text-[30px]">Experience</h2>
            <div>
              {experience.map((item) => (
                <Entry key={item.name} {...item} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-[26px] text-foreground md:text-[30px]">Education</h2>
            <div>
              {education.map((item) => (
                <Entry key={item.name} {...item} />
              ))}
            </div>
            <h2 className="mb-4 mt-12 text-[26px] text-foreground md:text-[30px]">Focus areas</h2>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {focusAreas.map((area) => (
                <li key={area} className="rounded-full border border-[#E0E0E0] bg-white px-3.5 py-1.5 text-[15px] text-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>

    <SiteFooter divider />
  </div>
);

export default About;
