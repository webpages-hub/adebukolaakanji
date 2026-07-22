import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import gamificationHero from "@/assets/gamification-hero.jpg";
import ContextTag from "@/components/case-study/ContextTag";
import ScrollReveal from "@/components/case-study/ScrollReveal";

const metadata = [
  { label: "Role", value: "Product Manager" },
  { label: "Team", value: "Engineering, Design, Growth, Operations" },
  { label: "Company", value: "Payfi" },
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

const Gamification = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Gamification Case Study — Adebukola Akanji" description="How a custom badge and rewards system tied to real product behavior lifted user retention by 10%." path="/gamification" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex justify-center">
                <ContextTag tags={["Product Management", "BNPL", "Retention"]} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Improving BNPL Retention Through Gamification
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={gamificationHero}
                alt="Gamification Project Hero"
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
                    "At Payfi, I worked on improving retention for our Buy Now, Pay Later (BNPL) product.",
                    "A key challenge with BNPL products is that usage is naturally episodic. Customers typically return when they need financing, meaning there is limited reason for them to regularly engage with the app between transactions.",
                    "I led the product strategy for a gamification system designed to encourage repeat engagement by rewarding positive user behaviours. Within three months of launch, the feature increased retention by 10% and improved BNPL engagement among active users.",
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
                    "BNPL products often have a built-in engagement challenge.",
                    "Unlike products users interact with daily, customers typically use BNPL only when they need to make a purchase or access financing. After completing a transaction, there was limited motivation for users to return to the app.",
                    "The business opportunity was to create more reasons for users to stay engaged while building behaviours that increased long-term product adoption.",
                    "My goal was to design a retention strategy that encouraged repeat usage without relying only on transactional needs.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Problem Statement */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Problem Statement</h2>

                <SubHeading>Low Frequency Usage</SubHeading>
                <Paragraphs
                  items={[
                    "Users primarily interacted with the app when they needed BNPL financing, resulting in low engagement between transactions.",
                  ]}
                />

                <div className="mt-8">
                  <SubHeading>Limited Reasons to Return</SubHeading>
                  <Paragraphs
                    items={[
                      "After completing repayment or accessing credit, users had little incentive to continue interacting with the product.",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <SubHeading>Need for Meaningful Engagement</SubHeading>
                  <Paragraphs
                    items={[
                      "The challenge was to create engagement loops that aligned with valuable user behaviours rather than adding superficial rewards.",
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
                  I focused on understanding what behaviours indicated stronger product adoption and what incentives could encourage users to return.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                      Research Methods
                    </h3>
                    <BulletList
                      items={[
                        "Analyzed user behaviour patterns across the BNPL journey.",
                        "Reviewed engagement points within the product.",
                        "Collaborated with Growth and Product teams to identify repeat usage opportunities.",
                        "Evaluated gamification patterns from consumer products.",
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                      Key Insights
                    </h3>
                    <Paragraphs
                      items={[
                        "Users were more likely to continue engaging when they had visible progress, achievable milestones, and meaningful rewards.",
                        "The gamification system needed to reinforce behaviours that were valuable to both users and the business.",
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
                  I designed a gamification framework built around three components:
                </p>
                <NumberedLabeledList
                  items={[
                    "Badges: Created achievement milestones tied to meaningful user actions, such as completing key product activities and maintaining positive repayment behaviours.",
                    "Levels: Introduced progression mechanics that gave users a sense of advancement and encouraged continued engagement.",
                    "Rewards: Mapped rewards directly to user behaviours to ensure incentives encouraged valuable actions rather than short-term activity.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Execution & Launch */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Execution & Launch</h2>
                <Paragraphs
                  items={[
                    "I worked with Design and Engineering to translate the gamification framework into a simple and intuitive experience.",
                    "Key responsibilities included:",
                  ]}
                />
                <BulletList
                  items={[
                    "Defining badge criteria and progression logic.",
                    "Mapping user behaviours to rewards.",
                    "Creating requirements and user flows.",
                    "Prioritizing MVP scope with Engineering.",
                  ]}
                />
                <Paragraphs
                  items={[
                    "Collaborating with Design to ensure the experience felt motivating without distracting from the core BNPL journey.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Results & Impact */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Results & Impact</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">Within three months of launch:</p>
                <BulletList
                  items={[
                    "Increased user retention by 10%.",
                    "Improved BNPL engagement among active users.",
                    "Created a repeat engagement mechanism for a product category with naturally low usage frequency.",
                  ]}
                />
              </div>
            </ScrollReveal>

            {/* Challenges */}
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Challenges</h2>
                <SubHeading>Balancing Engagement With Product Value</SubHeading>
                <Paragraphs
                  items={[
                    "The challenge was ensuring gamification supported meaningful product behaviours rather than encouraging users to engage only for rewards.",
                    "The system needed to reinforce actions that improved the user's relationship with the product over time.",
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
                    Engagement Features Should Reinforce User Value
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6] mb-2">
                    Gamification works best when it encourages behaviours that are already valuable to users and the business.
                  </p>
                  <p className="text-[14px] text-muted-foreground leading-[1.6]">
                    Adding rewards alone does not create retention. The strongest engagement loops connect user goals with business outcomes.
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
              <Link to="/global-transfers" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous: Global Transfers</span>
                  <span className="sm:hidden">Previous</span>
                </Button>
              </Link>
              <Link to="/multi-currency-wallet" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <span className="hidden sm:inline">Next: Multi-Currency Wallet</span>
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

export default Gamification;
