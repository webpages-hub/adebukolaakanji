import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lightbulb, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import globalExpansionHero from "@/assets/global-expansion-hero.jpg";
import ContextTag from "@/components/case-study/ContextTag";
import StepHeading from "@/components/case-study/StepHeading";
import UserVoiceQuote from "@/components/case-study/UserVoiceQuote";
import DrivingQuestion from "@/components/case-study/DrivingQuestion";
import DarkStatsSection from "@/components/case-study/DarkStatsSection";
import TakeawayCards from "@/components/case-study/TakeawayCards";
import ResultCallout from "@/components/case-study/ResultCallout";
import ScrollReveal from "@/components/case-study/ScrollReveal";
import CaseStudyTOC from "@/components/case-study/CaseStudyTOC";

const tocSections = [
  { id: "the-insight", label: "The Insight" },
  { id: "the-challenge", label: "The Challenge" },
  { id: "step-research", label: "Research", isStep: true, stepNumber: 1 },
  { id: "step-partnerships", label: "Partnerships", isStep: true, stepNumber: 2 },
  { id: "step-onboarding", label: "Onboarding", isStep: true, stepNumber: 3 },
  { id: "step-launch", label: "Launch", isStep: true, stepNumber: 4 },
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
          <div className="max-w-5xl mx-auto flex gap-12">
            <CaseStudyTOC sections={tocSections} />
            <div className="max-w-4xl flex-1 min-w-0 mx-auto">

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

              {/* The Insight */}
              <ScrollReveal>
                <div id="the-insight" className="mb-20 case-study-prose scroll-mt-28">
                  <h2 className="text-4xl font-bold mb-6">The Insight That Started Everything</h2>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    When I spoke to users sending money to the DRC, I expected to hear complaints about fees or slow transfers. What I didn't expect was this:
                  </p>

                  <UserVoiceQuote
                    quote="Most of them were still relying on agents to complete their remittance transactions for them."
                    attribution="User research finding"
                  />

                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    In 2024. With smartphones in their pockets. They were physically finding agents to move money because every digital solution they had tried had let them down — bad rates, confusing flows, or transfers that simply never arrived.
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground">
                    That was the brief. Not just build a remittance product. Build one that was actually worth switching to.
                  </p>
                </div>
              </ScrollReveal>

              {/* The Challenge */}
              <ScrollReveal>
                <div id="the-challenge" className="mb-20 case-study-prose scroll-mt-28">
                  <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    Launching a remittance product in one market is hard. Launching across six simultaneously is a different problem entirely.
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    Each market came with its own language, its own currency behaviour, and its own compliance requirements. What worked for a user in the UK did not automatically work for a user in Belgium or Canada. And what worked for sending to Nigeria did not automatically work for sending to DRC.
                  </p>

                  <DrivingQuestion
                    question="How do you build one product that feels local in six different markets, launches in six weeks, and gives users a reason to stop trusting agents?"
                    goldEmphasis="feels local in six different markets"
                  />
                </div>
              </ScrollReveal>

              {/* Step 1: Research */}
              <ScrollReveal>
                <div id="step-research" className="mb-20 scroll-mt-28">
                  <StepHeading number={1} title="Understanding the Real Barriers" accentWord="Barriers" />
                  <div className="case-study-prose">
                    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                      I started with user conversations across the target markets. The goal was not to validate assumptions — it was to find the ones I hadn't made yet.
                    </p>
                    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                      Three things came up consistently across every market:
                    </p>
                  </div>

                  <div className="max-w-[620px]">
                    {[
                      { title: "Rates were the primary decision driver", desc: "Users compared rates obsessively before every transaction. Existing alternatives were losing on this consistently." },
                      { title: "DRC remittance was uniquely broken", desc: "Slow transfers, unreliable delivery, and a near-total dependence on human agents to complete digital transactions." },
                      { title: "Trust had to be earned quickly", desc: "Users had been burned before. A clean experience and fast first transfer mattered more than any marketing." },
                    ].map((item, index) => (
                      <div key={index} className={`flex gap-4 py-4 border-b border-border ${index === 0 ? 'border-t' : ''}`}>
                        <span className="text-[10px] text-accent font-semibold mt-1">{String(index + 1).padStart(2, '0')}</span>
                        <div>
                          <p className="text-[14px] font-semibold text-foreground mb-1">{item.title}</p>
                          <p className="text-[14px] text-muted-foreground leading-[1.6]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 2: Partnerships */}
              <ScrollReveal>
                <div id="step-partnerships" className="mb-20 scroll-mt-28">
                  <StepHeading number={2} title="Building the Infrastructure to Make It Work" accentWord="Infrastructure" />
                  <div className="case-study-prose">
                    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                      The product vision was clear. The harder question was what infrastructure would make it possible at the speed we needed.
                    </p>
                    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                      I identified and secured three strategic partnerships before a single line of code was written for the expansion:
                    </p>
                  </div>

                  <div className="border border-border rounded-md overflow-hidden max-w-[620px] my-8">
                    {[
                      { label: "KYC Verification", desc: "A partner to verify diaspora users compliantly across all six markets without friction." },
                      { label: "Licensed Open Banking Provider", desc: "A regulated partner to handle the financial infrastructure underlying the product." },
                      { label: "EUR and GBP Account Issuance", desc: "A partner to issue local currency accounts so users could fund in their own currency seamlessly." },
                    ].map((item, index, array) => (
                      <div key={index} className={`flex items-start gap-4 px-6 py-4 ${index > 0 ? 'border-t border-border' : ''}`}>
                        <span className="text-[22px] font-bold text-accent">{index + 1}</span>
                        <div>
                          <p className="text-[14px] font-semibold text-foreground mb-1">{item.label}</p>
                          <p className="text-[14px] text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="case-study-prose">
                    <p className="text-[15px] leading-[1.75] text-muted-foreground">
                      All three were in place before launch. Without them, the product could not have gone live compliantly across six markets in six weeks.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 3: Onboarding */}
              <ScrollReveal>
                <div id="step-onboarding" className="mb-20 scroll-mt-28">
                  <StepHeading number={3} title="Fixing the Conversion Problem" accentWord="Conversion" />
                  <div className="case-study-prose">
                    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                      The first version of account creation had a problem. Compliance requirements meant we were asking users for a lot of information upfront. The result was painful:
                    </p>
                  </div>

                  <ResultCallout
                    stat="11%"
                    description="of users completed account creation in the first version. 89% dropped off before they ever made a transfer."
                  />

                  <div className="case-study-prose">
                    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                      The compliance requirements hadn't changed. But I realised we didn't have to collect everything at once. I redesigned the onboarding around a tiered approach — collect only what was needed to get users to their first transaction, then layer in additional verification progressively as they unlocked higher limits.
                    </p>
                    <p className="text-[15px] leading-[1.75] text-muted-foreground">
                      The logic was simple: earn trust through a great first experience, then ask for more. Not the other way around.
                    </p>
                  </div>

                  <ResultCallout
                    stat="90%"
                    description="completion rate after tiered onboarding was introduced — an 8x improvement on the original flow."
                  />
                </div>
              </ScrollReveal>

              {/* Step 4: Launch */}
              <ScrollReveal>
                <div id="step-launch" className="mb-20 scroll-mt-28">
                  <StepHeading number={4} title="Launching Across Six Markets" accentWord="Six Markets" isLast />
                  <div className="case-study-prose">
                    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                      With the infrastructure in place, the onboarding fixed, and the product localised for language, currency, and compliance across each market, we launched.
                    </p>
                    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                      Six markets. Six weeks from research to live product. And a product that users in nine countries found and used — three of which we had never targeted.
                    </p>
                  </div>

                  <ResultCallout
                    stat="$1M+"
                    description="in total payment volume processed across four currency corridors within twelve months of launch."
                  />
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* Dark Stats Section */}
      <DarkStatsSection
        introText="A product built for six markets, used in nine. The infrastructure was complex. The experience was not."
        stats={[
          { number: "$1M+", description: "Total payment volume processed across four currency corridors" },
          { number: "90%", description: "Onboarding completion rate after tiered approach was introduced" },
          { number: "9", description: "Countries reached, including 3 with no marketing spend" },
        ]}
      />

      {/* What I Learned */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-20">
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

                <p className="text-[15px] leading-[1.75] text-muted-foreground mt-8 max-w-[640px]">
                  The 11% to 90% onboarding improvement is the moment I'm most proud of on this product. Not because the number is big, but because it came from understanding users well enough to redesign around their reality instead of our compliance checklist.
                </p>
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
