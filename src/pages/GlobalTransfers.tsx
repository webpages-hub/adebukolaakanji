import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import globalTransfersHero from "@/assets/global-transfers-hero.jpg";
import ContextTag from "@/components/case-study/ContextTag";
import ScrollReveal from "@/components/case-study/ScrollReveal";

const metadata = [
  { label: "Role", value: "Founding Product Manager" },
  { label: "Team", value: "Engineering, Design, Partnerships, Finance, Operations, Legal & Compliance" },
  { label: "Location", value: "Democratic Republic of Congo (DRC)" },
  { label: "Timeline", value: "Two months" },
];

const Paragraphs = ({ items }: { items: string[] }) => (
  <>
    {items.map((p, i) => (
      <p key={i} className="text-[15px] leading-[1.75] text-muted-foreground mb-4 last:mb-0">
        {p}
      </p>
    ))}
  </>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 mb-4 last:mb-0">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-[15px] text-muted-foreground leading-[1.6]">
        <span className="text-accent mt-1">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const LabeledBulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 mb-4 last:mb-0">
    {items.map((item, i) => {
      const [label, ...rest] = item.split(": ");
      return (
        <li key={i} className="flex gap-3 text-[15px] text-muted-foreground leading-[1.6]">
          <span className="text-accent mt-1">•</span>
          <span>
            <span className="font-semibold text-foreground">{label}:</span> {rest.join(": ")}
          </span>
        </li>
      );
    })}
  </ul>
);

const SubHeading = ({ children }: { children: string }) => (
  <h3 className="text-lg font-bold mb-4 text-foreground">{children}</h3>
);

const GlobalTransfers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Global Transfers Case Study — Adebukola Akanji" description="How I built a cross-border transfer product that delivered money home in under an hour and grew to $600K in fee revenue within eight months." path="/global-transfers" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex justify-center">
                <ContextTag tags={["Product Management", "Fintech", "Cross-Border"]} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Building Cross-Border Payment Infrastructure from DRC to International Markets
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={globalTransfersHero}
                alt="Global Transfers User Interface"
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Metadata Bar */}
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-card rounded-2xl p-6 md:p-8 mb-16 shadow-elegant">
                {metadata.map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold mb-1.5">
                      {item.label}
                    </p>
                    <p className="text-base font-bold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Overview */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Overview</h2>
                <Paragraphs
                  items={[
                    "As part of Nomba's expansion into DRC, I led the development of a cross-border payments product that enabled businesses to send payments internationally.",
                    "The existing market was constrained by high transaction fees, slow settlement times, and limited destination coverage from existing providers.",
                    "I owned the product strategy, payment flow design, and partner integrations required to launch the solution. Within eight months of launch, the product generated over $600K in revenue while improving settlement speed and reducing transaction costs for businesses.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Background & Context */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Background & Context</h2>
                <Paragraphs
                  items={[
                    "Businesses operating in DRC needed reliable ways to make international payments, but existing solutions created significant friction.",
                    "Many businesses relied on fragmented providers that came with high fees, slower settlement times, and limited access to certain destinations.",
                    "The opportunity was to build a cross-border payments product that simplified international transfers while improving affordability, reliability, and coverage.",
                    "My role was to define the product requirements, align teams around the payment experience, and work with partners to bring the solution to market.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Problem Statement */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Problem Statement</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
                  Through customer research, I identified three major challenges businesses faced:
                </p>
                <LabeledBulletList
                  items={[
                    "High Transaction Costs: Existing providers charged high transfer fees, reducing the value businesses received when making international payments.",
                    "Slow Settlement Times: Businesses experienced delays in payment delivery, affecting their ability to operate efficiently.",
                    "Limited Destination Coverage: Many existing providers supported only a limited number of destinations, making it difficult for businesses to pay international partners and vendors.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Research & Discovery */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Research & Discovery</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8">
                  Before defining the product solution, I focused on understanding how businesses currently managed international payments and where existing solutions fell short.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                      Research Methods
                    </h3>
                    <BulletList
                      items={[
                        "Conducted interviews with businesses and potential users.",
                        "Reviewed existing cross-border payment workflows.",
                        "Analyzed provider capabilities, destination coverage, and settlement processes.",
                        "Identified operational requirements across different payment corridors.",
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                      Key Insights
                    </h3>
                    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
                      Businesses needed more than the ability to send money internationally. They needed a reliable payment infrastructure that provided:
                    </p>
                    <BulletList
                      items={[
                        "More destination coverage",
                        "Faster settlement",
                        "Predictable transaction costs",
                        "Support for different currencies and payment methods",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Product Strategy */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Product Strategy</h2>
                <Paragraphs
                  items={["Based on research findings, I defined the product requirements around flexibility and scalability."]}
                />
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
                  The solution needed to support:
                </p>
                <BulletList
                  items={[
                    "Multiple destination countries",
                    "Different currencies",
                    "Various payment methods",
                    "Destination-specific payment requirements",
                    "Transaction limits based on currency and regulatory requirements",
                  ]}
                />
                <Paragraphs
                  items={[
                    "The goal was to create a flexible payment layer that could support different international payment corridors without rebuilding the product for each market.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Execution & Launch */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Execution & Launch</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8">
                  I worked across Engineering, Design, Partnerships, Finance, and Compliance teams to deliver the product.
                </p>

                <SubHeading>Product & Engineering</SubHeading>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
                  I worked with Engineering and Design to define:
                </p>
                <BulletList
                  items={[
                    "Supported destinations and currencies.",
                    "Payment methods available per destination.",
                    "Country-specific payment requirements.",
                    "Transaction limits and operational rules.",
                  ]}
                />
                <Paragraphs
                  items={[
                    "I translated complex payment flows into clear product requirements and user journeys to ensure the experience was intuitive while supporting the operational complexity behind cross-border payments.",
                  ]}
                />

                <div className="mt-8">
                  <SubHeading>Partnerships</SubHeading>
                  <Paragraphs
                    items={[
                      "To enable international payment coverage, I worked with the Partnerships team to evaluate and integrate payment providers.",
                      "Key responsibilities included:",
                    ]}
                  />
                  <BulletList
                    items={[
                      "Identifying suitable payment vendors.",
                      "Assessing coverage, reliability, and operational capabilities.",
                      "Supporting integration requirements.",
                    ]}
                  />
                  <Paragraphs
                    items={[
                      "We successfully secured and integrated three payment vendors to expand destination coverage and improve payment delivery.",
                    ]}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Results & Impact */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Results & Impact</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
                  Within eight months of launch:
                </p>
                <BulletList
                  items={[
                    "Generated over $600K in revenue from the cross-border payments product.",
                    "Reduced transaction fees by 0.5% compared to existing market alternatives.",
                    "Improved settlement timelines for international payments.",
                    "Expanded access to international payment destinations for businesses in DRC.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Challenges */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Challenges</h2>
                <SubHeading>Designing for Scale</SubHeading>
                <Paragraphs
                  items={[
                    "As transaction volumes and supported payment corridors expanded, we identified that some initial product modules were not designed for future scalability.",
                    "This required refactoring parts of the system architecture to support additional destinations, payment methods, and future growth.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Lessons Learned */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Lessons Learned</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Cross-Border Payments Require Deep Systems Thinking",
                      description:
                        "Building cross-border payment products involves more than moving money from one country to another. It requires considering multiple dependencies including currencies, regulations, payment providers, settlement flows, and operational processes.",
                    },
                    {
                      title: "Design for Future Complexity",
                      description:
                        "Payment products often start with a small number of supported flows, but successful products expand quickly. Designing flexible foundations early helps reduce costly rework later.",
                    },
                  ].map((card, i) => (
                    <div key={i} className="rounded-xl p-6 border border-border">
                      <span className="text-xs font-bold text-accent mb-3 block">#{i + 1}</span>
                      <h3 className="text-[15px] font-bold text-foreground mb-2">{card.title}</h3>
                      <p className="text-[14px] text-muted-foreground leading-[1.6]">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 border-b border-border">
              <Link to="/drc-payments" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous: DRC Payments</span>
                  <span className="sm:hidden">Previous</span>
                </Button>
              </Link>
              <Link to="/gamification" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <span className="hidden sm:inline">Next: Gamification</span>
                  <span className="sm:hidden">Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <ScrollReveal>
              <ContactCard />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Adebukola Akanji. Product Manager, problem-solver, and occasional overthinker about user behavior.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GlobalTransfers;
