import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import multicurrencyWalletHero from "@/assets/multicurrency-wallet-hero.jpg";
import ContextTag from "@/components/case-study/ContextTag";
import ScrollReveal from "@/components/case-study/ScrollReveal";

const metadata = [
  { label: "Role", value: "Product Manager" },
  { label: "Team", value: "Engineering, Design, Operations, Finance, Legal & Compliance" },
  { label: "Product", value: "Multicurrency wallet" },
  { label: "Markets", value: "DRC, Diaspora Markets" },
  { label: "Timeline", value: "1 Month" },
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

const SubHeading = ({ children }: { children: string }) => (
  <h3 className="text-lg font-bold mb-4 text-foreground">{children}</h3>
);

const MultiCurrencyWallet = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Multi-Currency Wallet Case Study — Adebukola Akanji" description="How I designed a multi-currency wallet that made managing money across currencies effortless and grew daily active usage by 20%." path="/multi-currency-wallet" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex justify-center">
                <ContextTag tags={["Product Management", "Fintech", "Multi-Currency"]} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Building a Multi-Currency Wallet Experience for Global Users
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={multicurrencyWalletHero}
                alt="Multi-Currency Wallet User Interface"
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
                    "Users across Nomba's markets needed a simpler way to hold, receive, and spend money across multiple currencies.",
                    "DRC users frequently used both USD and CDF for daily transactions, while diaspora users needed access to currencies such as EUR, GBP, and CAD. However, existing wallet experiences created friction because users could hold funds in one currency but could not easily use them when they needed another.",
                    "As Product Manager, I led the development of a multi-currency wallet experience that allowed users to create and manage multiple currency wallets seamlessly.",
                    "Within one month of launch, the product increased daily active usage by 20% and drove 10% growth in cross-currency transactions across supported corridors.",
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
                    "As Nomba expanded across markets, users increasingly needed the ability to manage funds across different currencies.",
                    "In DRC, users commonly interacted with both USD and CDF. A user could receive USD but still be unable to complete certain transactions if they needed CDF, creating unnecessary friction in their financial experience.",
                    "Similarly, diaspora users needed access to wallets in their local currencies, including EUR, GBP, and CAD, to receive and manage funds more conveniently.",
                    "The opportunity was to create a wallet experience that allowed users to hold multiple currencies and move between them seamlessly.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Problem Statement */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Problem Statement</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8">
                  Before the multi-currency wallet, users experienced three key challenges:
                </p>

                <SubHeading>Limited Access to Available Funds</SubHeading>
                <Paragraphs
                  items={[
                    "Users could hold money in one currency but were restricted from using those funds when a transaction required another currency.",
                    "For example, a DRC user with USD balance might need to wait for a CDF transfer before completing a local transaction.",
                  ]}
                />

                <div className="mt-8">
                  <SubHeading>Fragmented Financial Experience</SubHeading>
                  <Paragraphs
                    items={[
                      "Users had to rely on multiple platforms or manual processes to manage different currencies, creating unnecessary complexity.",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <SubHeading>Increasing Market Complexity</SubHeading>
                  <Paragraphs
                    items={[
                      "Supporting multiple markets meant managing different currencies, transaction requirements, and regulatory limits while maintaining a simple user experience.",
                    ]}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Research & Discovery */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Research & Discovery</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8">
                  My goal was to understand how users interacted with different currencies and identify the simplest way to support their needs.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                      Research Methods
                    </h3>
                    <BulletList
                      items={[
                        "Reviewed transaction patterns across supported markets.",
                        "Analyzed user behaviour across different currency corridors.",
                        "Collaborated with Operations and Compliance teams to understand regulatory requirements.",
                        "Worked with Engineering to identify technical constraints.",
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                      Key Insights
                    </h3>
                    <Paragraphs
                      items={[
                        "Users did not care about the complexity behind currency management. They simply wanted access to their money when and where they needed it.",
                        "The product experience needed to hide the underlying complexity while giving users flexibility across currencies.",
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
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8">
                  I defined the product approach around three principles:
                </p>

                <SubHeading>1. Simple Currency Management</SubHeading>
                <Paragraphs
                  items={[
                    "Users should be able to create and access multiple currency wallets without needing to understand the complexity behind currency routing and settlement.",
                  ]}
                />

                <div className="mt-8">
                  <SubHeading>2. Flexible Multi-Currency Support</SubHeading>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">The wallet needed to support:</p>
                  <BulletList
                    items={[
                      "USD and CDF for DRC users.",
                      "EUR, GBP, and CAD for diaspora users.",
                      "Additional currencies as Nomba expanded into new markets.",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <SubHeading>3. Compliance-Ready Architecture</SubHeading>
                  <Paragraphs
                    items={[
                      "Each currency required different transaction limits and KYC requirements.",
                      "The product needed to handle these requirements in the background without adding unnecessary friction to the user experience.",
                    ]}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Execution & Launch */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Execution & Launch</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8">
                  I worked closely with Engineering, Design, Operations, and Compliance teams to deliver the feature within one month.
                </p>

                <SubHeading>Product & Design</SubHeading>
                <Paragraphs
                  items={[
                    "I defined the user journeys and requirements to ensure the experience remained simple.",
                    "Key considerations included:",
                  ]}
                />
                <BulletList
                  items={[
                    "How users create and access different wallets.",
                    "How balances are displayed across currencies.",
                    "How users move funds between supported currencies.",
                    "How currency availability changes based on user location.",
                  ]}
                />
                <Paragraphs
                  items={[
                    "The goal was for users to experience a seamless wallet experience without seeing the operational complexity behind it.",
                  ]}
                />

                <div className="mt-8">
                  <SubHeading>Compliance & Operations</SubHeading>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">
                    I collaborated with Compliance to define:
                  </p>
                  <BulletList
                    items={[
                      "KYC requirements per currency.",
                      "Transaction limits.",
                      "Restrictions based on user profiles and markets.",
                    ]}
                  />
                  <Paragraphs
                    items={[
                      "These requirements were built into the experience while minimizing additional user friction.",
                    ]}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Results & Impact */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Results & Impact</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">Following launch:</p>
                <BulletList
                  items={[
                    "Increased daily active usage by 20% within weeks.",
                    "Increased cross-currency transaction activity by 10% across supported corridors.",
                    "Enabled wallet creation across five currencies.",
                    "Improved flexibility for users managing funds across different markets.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Challenges */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Challenges</h2>
                <SubHeading>Managing Complexity Without Increasing User Friction</SubHeading>
                <Paragraphs
                  items={[
                    "The biggest challenge was balancing the complexity required to support multiple currencies with the simplicity users expected.",
                    "Behind the scenes, each currency introduced additional considerations around compliance, limits, settlement, and transaction flows.",
                    "The product challenge was ensuring users experienced simplicity despite the complexity underneath.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Lessons Learned */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Lessons Learned</h2>
                <div className="rounded-xl p-6 border border-border">
                  <h3 className="text-[15px] font-bold text-foreground mb-2">
                    Complexity Under the Hood, Simplicity on the Surface
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] mb-2">
                    The best financial products hide complexity from users.
                  </p>
                  <p className="text-[14px] text-muted-foreground leading-[1.6]">
                    While multi-currency wallets require significant operational, technical, and regulatory considerations, the user experience should feel effortless.
                  </p>
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
              <Link to="/gamification" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous: Gamification</span>
                  <span className="sm:hidden">Previous</span>
                </Button>
              </Link>
              <Link to="/drc-payments" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <span className="hidden sm:inline">Next: DRC Payments</span>
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

export default MultiCurrencyWallet;
