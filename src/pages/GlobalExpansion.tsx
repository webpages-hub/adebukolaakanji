import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import globalExpansionHero from "@/assets/global-expansion-hero.jpg";
import ContextTag from "@/components/case-study/ContextTag";
import ScrollReveal from "@/components/case-study/ScrollReveal";

const metadata = [
  { label: "Role", value: "Founding Product Manager" },
  { label: "Team", value: "Engineering, Design, Partnerships, Operations, Finance, Data, Legal & Compliance" },
  { label: "Company", value: "Nomba" },
  { label: "Markets", value: "UK, Canada, France, Belgium, Germany, DRC" },
  { label: "Timeline", value: "6 Weeks" },
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

const NumberedLabeledList = ({ items }: { items: string[] }) => (
  <ol className="space-y-3 mb-4 last:mb-0">
    {items.map((item, i) => {
      const [label, ...rest] = item.split(": ");
      return (
        <li key={i} className="flex gap-3 text-[15px] text-muted-foreground leading-[1.6]">
          <span className="text-accent font-semibold mt-1">{i + 1}.</span>
          <span>
            <span className="font-semibold text-foreground">{label}:</span> {rest.join(": ")}
          </span>
        </li>
      );
    })}
  </ol>
);

const SubHeading = ({ children }: { children: string }) => (
  <h3 className="text-lg font-bold mb-4 text-foreground">{children}</h3>
);

const GlobalExpansion = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Global Expansion Case Study — Adebukola Akanji"
        description="How I launched a diaspora remittance product across six markets in six weeks, processing over $1M in total payment volume."
        path="/global-expansion"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex justify-center">
                <ContextTag tags={["Product Management", "Fintech", "Diaspora Payments"]} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Scaling Cross-Border Payments Across Six International Markets
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={globalExpansionHero}
                alt="Global Expansion Product"
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
                    "Following the successful launch of Nomba's first international expansion into the Democratic Republic of Congo (DRC), the business wanted to scale its expansion model into additional markets.",
                    "As the Founding Product Manager, I adapted the expansion framework to build a cross-border payments product that enabled African diaspora customers to send money to Nigeria and DRC.",
                    "I led the product strategy, market discovery, partnerships, compliance requirements, and MVP delivery across six markets. The product launched within six weeks and processed over $1M in transaction volume within 12 months with minimal paid acquisition efforts.",
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
                    "After launching Nomba's local payments solution in DRC, the next opportunity was expanding into international markets and enabling diaspora customers to send money back home.",
                    "While remittance was already a large market, existing solutions had several customer pain points around exchange rate transparency, transaction reliability, and access to certain destinations.",
                    "My role was to validate the opportunity, define the product strategy, and lead the launch of a cross-border payments experience across six markets.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Research & Discovery */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Research & Discovery</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8">
                  Before building, I focused on understanding how diaspora customers currently sent money, their biggest frustrations, and where existing providers fell short.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                      Research Methods
                    </h3>
                    <BulletList
                      items={[
                        "Reviewed historical remittance data and market reports.",
                        "Conducted user interviews with potential customers.",
                        "Ran surveys to understand customer behaviour and expectations.",
                        "Analyzed existing remittance solutions and their limitations.",
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                      Key Insights
                    </h3>
                    <LabeledBulletList
                      items={[
                        "Exchange Rate Uncertainty: Customers sending money to Nigeria were frustrated by uncompetitive rates and unexpected changes during transactions.",
                        "Limited Access to DRC: While Nigeria was relatively well-supported by remittance providers, sending money to DRC remained challenging. Many users relied on informal agents because existing platforms had limited access to DRC mobile money networks and banks.",
                        "Customers Wanted More Control: Users wanted transparency and confidence that the amount their recipient would receive would match their expectations before completing a transfer.",
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
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
                  Based on these insights, I defined three product priorities:
                </p>
                <NumberedLabeledList
                  items={[
                    "Improve Rate Transparency: I introduced a rate protection window that allowed users to lock exchange rates for a short period after initiating a transaction. This reduced uncertainty and gave users confidence that their recipient would receive the expected value.",
                    "Expand Access to DRC: I leveraged the payment infrastructure and partnerships established during the DRC expansion to enable easier transfers to DRC mobile money networks and banks.",
                    "Simplify Cross-Border Transfers: The goal was to create a seamless experience where diaspora customers could fund transfers in their local currency and send money directly to recipients in Nigeria and DRC.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Execution & Launch */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Execution & Launch</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8">
                  I led cross-functional execution to launch the MVP across six markets within six weeks.
                </p>

                <SubHeading>Compliance & User Onboarding</SubHeading>
                <Paragraphs
                  items={[
                    "One of the first priorities was defining how international users would be onboarded while meeting regulatory requirements.",
                    "I:",
                  ]}
                />
                <BulletList
                  items={[
                    "Mapped KYC requirements for users across different countries.",
                    "Evaluated and integrated a KYC provider that supported foreign documents and location verification.",
                    "Designed onboarding flows that balanced compliance needs with user experience.",
                  ]}
                />

                <div className="mt-8">
                  <SubHeading>Partnerships</SubHeading>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
                    To enable international payments, I worked with the Partnerships team to:
                  </p>
                  <BulletList
                    items={[
                      "Identify providers supporting GBP, EUR, and CAD funding.",
                      "Evaluate partners based on reliability, technical capabilities, and market coverage.",
                      "Review technical documentation and validate payment workflows before integration.",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <SubHeading>Pricing & FX Management</SubHeading>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
                    I collaborated with Data and Finance teams to:
                  </p>
                  <BulletList
                    items={[
                      "Define supported currency pairs.",
                      "Establish competitive exchange rates.",
                      "Create pricing models that protect the business from FX exposure.",
                    ]}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Challenge & Iteration */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Challenge & Iteration</h2>

                <SubHeading>Increasing Onboarding Conversion</SubHeading>
                <Paragraphs
                  items={[
                    "After launch, I identified that user onboarding was creating significant friction.",
                    "Only 11% of users who started account creation completed onboarding, and time to first transaction was longer than expected.",
                  ]}
                />

                <div className="mt-8">
                  <SubHeading>Identifying the Problem</SubHeading>
                  <Paragraphs
                    items={[
                      "I analyzed the onboarding funnel using Mixpanel and found that users were dropping off because we required too much information before allowing them to experience the product.",
                      "The initial flow required users to complete:",
                    ]}
                  />
                  <BulletList
                    items={[
                      "Personal information collection",
                      "Identity verification",
                      "Address verification",
                    ]}
                  />
                  <Paragraphs
                    items={[
                      "before completing their first transaction.",
                      "While this met compliance requirements, it created too much friction upfront.",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <SubHeading>Solution: Introducing Tiered Onboarding</SubHeading>
                  <Paragraphs
                    items={[
                      "I redesigned the onboarding experience around progressive verification.",
                      "Instead of collecting all information upfront, users could:",
                    ]}
                  />
                  <BulletList
                    items={[
                      "Complete initial registration with fewer requirements.",
                      "Start transactions within defined limits.",
                      "Provide additional verification details as their transaction needs increased.",
                    ]}
                  />
                  <Paragraphs
                    items={[
                      "This approach allowed users to experience value earlier while maintaining compliance controls.",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <SubHeading>Impact</SubHeading>
                  <Paragraphs
                    items={["Tiered onboarding increased onboarding conversion from 11% to 90%."]}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Results & Impact */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Results & Impact</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
                  Within six weeks, the product launched across:
                </p>
                <BulletList
                  items={[
                    "United Kingdom",
                    "Canada",
                    "France",
                    "Belgium",
                    "Germany",
                    "Democratic Republic of Congo",
                  ]}
                />
                <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4 mt-8">
                  Outcomes
                </h3>
                <BulletList
                  items={[
                    "Processed over $1M in transaction volume within 12 months.",
                    "Improved onboarding conversion from 11% to 90% through data-driven iteration.",
                    "Enabled diaspora customers to send money to Nigeria and DRC through a single platform.",
                    "Built on the DRC expansion foundation to accelerate future international growth.",
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
                      title: "Build Around Local User Behaviour",
                      description:
                        "Expansion frameworks provide a starting point, but each market introduces different customer expectations, behaviours, and constraints.",
                    },
                    {
                      title: "Compliance Should Enable Growth",
                      description:
                        "In financial products, regulatory requirements are necessary, but they should be designed in a way that allows users to experience value before asking for additional commitment.",
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
              <Link to="/global-transfers" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <span className="hidden sm:inline">Next: Global Transfers</span>
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

export default GlobalExpansion;
