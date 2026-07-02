import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lightbulb, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import globalExpansionHero from "@/assets/global-expansion-hero.jpg";
import ContextTag from "@/components/case-study/ContextTag";
import UserVoiceQuote from "@/components/case-study/UserVoiceQuote";
import DarkStatsSection from "@/components/case-study/DarkStatsSection";
import TakeawayCards from "@/components/case-study/TakeawayCards";
import ScrollReveal from "@/components/case-study/ScrollReveal";
import CaseStudyTOC from "@/components/case-study/CaseStudyTOC";

const tocSections = [
  { id: "the-problem", label: "The Problem" },
  { id: "what-i-did", label: "What I Did" },
  { id: "results", label: "Results" },
  { id: "what-i-learned", label: "What I Learned" },
];

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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Six Markets. Six Weeks. One Product.
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Building a remittance product for the African diaspora across UK, Canada, France, Belgium, Germany, and DRC.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
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
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[12rem_1fr] lg:[grid-template-rows:auto_auto_auto] gap-x-12">
            <CaseStudyTOC sections={tocSections} className="lg:col-start-1 lg:row-start-1 lg:row-span-full" />

            <div className="max-w-4xl min-w-0 mx-auto lg:col-start-2 lg:row-start-1">

              {/* Project Overview */}
              <ScrollReveal>
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-foreground">Project Overview</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-muted-foreground mb-2">Timeline</p>
                      <p className="text-lg font-semibold mb-6">Six Weeks (research to launch)</p>

                      <p className="text-muted-foreground mb-2">Role</p>
                      <p className="text-lg font-semibold mb-6">Founding Product Manager</p>

                      <p className="text-muted-foreground mb-2">Company</p>
                      <p className="text-lg font-semibold mb-6">Nomba</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-2">Team</p>
                      <p className="text-lg font-semibold mb-6">Engineering, Design, Partnerships, Compliance, Operations</p>

                      <p className="text-muted-foreground mb-2">Markets</p>
                      <p className="text-lg font-semibold mb-6">UK, Canada, France, Belgium, Germany, DRC</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <p className="text-muted-foreground mb-2">Goal</p>
                    <p className="text-lg leading-relaxed">
                      Give African diaspora users across six markets a faster, fairer way to send money home to Nigeria and DRC — with better rates than existing alternatives and a product experience built around how they actually live.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* The Problem */}
              <ScrollReveal>
                <div id="the-problem" className="mb-20 scroll-mt-28 bg-card rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    African diaspora users across six countries had one consistent complaint about sending money home: the rates were bad and the experience was worse. For DRC specifically, the problem ran deeper. Users were still finding agents to complete digital transactions for them. Not because they preferred it. Because every digital solution they had tried had let them down.
                  </p>
                  <UserVoiceQuote
                    quote="Most of them were still relying on agents to help them complete remittance transactions."
                    attribution="User research finding"
                  />
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mt-6">
                    The goal was not just to build a remittance product. It was to build one worth switching to — across six markets simultaneously, each with its own language, currency behaviour, and compliance requirements, all in six weeks.
                  </p>
                </div>
              </ScrollReveal>

              {/* What I Did */}
              <ScrollReveal>
                <div id="what-i-did" className="mb-20 scroll-mt-28 bg-[#FDF5F0] rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-8">What I Did</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        number: "01",
                        title: "Researched the real barriers",
                        desc: "I spoke to users across the target markets and found three consistent blockers: bad rates were the primary decision driver, DRC remittance was uniquely broken, and trust had to be earned through a great first experience."
                      },
                      {
                        number: "02",
                        title: "Secured three strategic partnerships",
                        desc: "Before a single line of code was written, I identified and closed partnerships for KYC verification, licensed open banking infrastructure, and EUR and GBP account issuance. All three were in place before launch."
                      },
                      {
                        number: "03",
                        title: "Fixed a broken onboarding flow",
                        desc: "The first version asked for too much upfront. Only 11% of users completed account creation. I redesigned onboarding around a tiered compliance approach, collecting only what was needed for the first transaction. Completion went from 11% to 90%."
                      },
                      {
                        number: "04",
                        title: "Launched across six markets in six weeks",
                        desc: "With infrastructure in place and onboarding rebuilt, we launched across UK, Canada, France, Belgium, Germany, and DRC. The product reached users in nine countries, three of which we never targeted."
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-background border border-border rounded-xl p-6">
                        <span className="text-xs font-semibold text-accent mb-3 block">{item.number}</span>
                        <h3 className="text-[15px] font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-[14px] text-muted-foreground leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Results */}
            <div id="results" className="lg:col-start-2 lg:row-start-2 scroll-mt-28">
              <div className="-mr-6">
                <DarkStatsSection
                  introText="A product built for six markets, used in nine. The infrastructure was complex. The experience was not."
                  stats={[
                    { number: "$1M+", description: "Total payment volume processed across four currency corridors" },
                    { number: "90%", description: "Onboarding completion rate after tiered approach was introduced" },
                    { number: "9", description: "Countries reached, including 3 with no marketing spend" },
                  ]}
                />
              </div>
            </div>

            <div className="max-w-4xl min-w-0 mx-auto lg:col-start-2 lg:row-start-3">
            <ScrollReveal>
              <div id="what-i-learned" className="mb-20 scroll-mt-28">
                <h2 className="text-4xl font-bold mb-6">What I Learned</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8 max-w-[640px]">
                  Launching across multiple markets at once teaches you that the product is rarely the hardest part. The context around it is.
                </p>

                <TakeawayCards cards={[
                  "Localisation is not translation. It is understanding how people live.",
                  "Compliance and good UX are not opposites — tiered onboarding proved that.",
                  "Infrastructure partnerships are a product decision, not just a procurement one.",
                ]} />

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-background rounded-md p-8 border border-border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-accent">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                      What Worked
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Securing all three partnerships before build started",
                        "Tiered onboarding unlocked conversion from 11% to 90%",
                        "Research-led localisation for each market",
                        "Building on existing codebase to hit the six week timeline",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent text-sm">✓</span>
                          <span className="text-[14px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-background rounded-md p-8 border border-border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Lightbulb className="w-6 h-6 text-muted-foreground" />
                      What I'd Improve
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Test the onboarding flow with real users before launch",
                        "Build analytics into the flow from day one",
                        "Plan for organic market spillover earlier",
                        "Invest in in-app language switching sooner",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-muted-foreground text-sm">→</span>
                          <span className="text-[14px]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Navigation */}
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
