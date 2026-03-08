import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Wallet, Globe, Shield, TrendingUp, Zap, CheckCircle2, Users, BarChart3, ArrowRight, ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import multicurrencyWalletHero from "@/assets/multicurrency-wallet-hero.jpg";
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
  { id: "the-idea", label: "The Idea" },
  { id: "step-problem", label: "Problem", isStep: true, stepNumber: 1 },
  { id: "step-system", label: "System", isStep: true, stepNumber: 2 },
  { id: "step-experience", label: "Experience", isStep: true, stepNumber: 3 },
  { id: "step-launch", label: "Launch", isStep: true, stepNumber: 4 },
];

const MultiCurrencyWallet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex justify-center">
                <ContextTag tags={["Product Management", "Fintech", "Multi-Currency"]} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Building a Multi-Currency Wallet for Everyday Transactions
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex gap-12">
            <CaseStudyTOC sections={tocSections} />
            <div className="max-w-4xl flex-1 min-w-0">
            {/* Hero Image */}
            <ScrollReveal>
              <div className="mb-8 rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={multicurrencyWalletHero} 
                  alt="Multi-Currency Wallet User Interface" 
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant mb-16">
                <h2 className="text-3xl font-bold mb-8 text-foreground">Project Overview</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-muted-foreground mb-2">Timeline</p>
                    <p className="text-lg font-semibold mb-6">One Month</p>
                    
                    <p className="text-muted-foreground mb-2">Role</p>
                    <p className="text-lg font-semibold mb-6">Product Manager</p>

                    <p className="text-muted-foreground mb-2">Company</p>
                    <p className="text-lg font-semibold mb-6">Nomba</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2">Team</p>
                    <p className="text-lg font-semibold mb-6">Engineering, Design, Compliance, Support, Operations</p>
                    
                    <p className="text-muted-foreground mb-2">Location</p>
                    <p className="text-lg font-semibold mb-6">United Kingdom, Canada, France, Belgium, Democratic Republic of Congo</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-muted-foreground mb-2">Goal</p>
                  <p className="text-lg leading-relaxed">
                    Users and agents working across currencies were doing too much manual work just to move money. The goal was to fix that with one wallet that handled everything.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* The Idea */}
            <ScrollReveal>
              <div id="the-idea" className="mb-20 case-study-prose scroll-mt-28">
                <h2 className="text-4xl font-bold mb-6">The Idea</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  The first time I heard an agent complain, it sounded simple:
                </p>
                <UserVoiceQuote 
                  quote="I get paid in dollars, but I can't use it directly in the app. I have to convert to CDF, and then back to USD to send again."
                  attribution="DRC agent"
                />
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  It sounded like a one-off complaint. It wasn't.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  By the time I'd spoken to ten more agents, the pattern was clear. Every transaction across currencies meant manual steps, delays, and money lost to bad conversion timing.
                </p>
                <DrivingQuestion 
                  question="What if we could just let users hold and transact in multiple currencies within a single account?"
                  goldEmphasis="multiple currencies"
                />
              </div>
            </ScrollReveal>

            {/* Step 1 */}
            <ScrollReveal>
              <div className="mb-20">
                <StepHeading number={1} title="Understanding the Real Problem" accentWord="Real" />
                <div className="case-study-prose">
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    I started by mapping out how users were currently transacting across currencies. In DRC, it was mostly USD and CDF. In our global expansion, we needed EUR, GBP, CAD, and NGN.
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    But adding currencies wasn't a product decision, it was a compliance one. Each currency came with its own KYC tier, regional rules, and regulatory requirements.
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground">
                    So before touching design or engineering, I mapped out how each currency needed to behave: what KYC tier unlocked it, what limits applied, and how conversion logic would work without the user ever having to think about it.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal>
              <div className="mb-20">
                <StepHeading number={2} title="Designing the Wallet System" accentWord="System" />
                <div className="case-study-prose">
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    With the compliance logic mapped, I worked with engineering to define how the system would actually behave for users. Each wallet type had to do three things well:
                  </p>
                </div>

                <div className="max-w-[620px]">
                  {[
                    { title: "Be created independently based on user KYC level", desc: "Compliance-first approach to wallet creation" },
                    { title: "Hold and transfer value seamlessly", desc: "Instant transactions across all supported currencies" },
                    { title: "Sync in real time with our existing ledger system", desc: "Accurate balance tracking across all wallets" }
                  ].map((item, index) => (
                    <div key={index} className={`flex gap-4 py-4 border-b border-border ${index === 0 ? 'border-t' : ''}`}>
                      <span className="text-[10px] text-accent font-semibold mt-1">{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <span className="font-bold text-[14px]">{item.title}</span>
                        <span className="text-[14px] text-muted-foreground"> — {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[15px] leading-[1.75] text-muted-foreground mt-8 max-w-[640px]">
                  The result was a structure where each currency lived as its own account, but the user only ever saw one wallet.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal>
              <div className="mb-20">
                <StepHeading number={3} title="Mapping the User Experience" accentWord="Experience" />
                <div className="case-study-prose">
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    Next, I moved to the user experience. The goal was to keep it simple; users shouldn't have to think about which currency wallet to use.
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    I designed the user flow in Figma, mapping out every interaction: creating a new wallet, funding it, viewing balances, and switching between currencies.
                  </p>
                </div>

                <UserVoiceQuote quote="The design had to look effortless but handle complexity underneath." />

                <div className="case-study-prose">
                  <p className="text-[15px] leading-[1.75] text-muted-foreground">
                    We tested small micro-interactions like currency switching and transaction confirmations to make the experience feel natural and fluid.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal>
              <div className="mb-20">
                <StepHeading number={4} title="Bringing It to Life" accentWord="Life" isLast />
                <div className="case-study-prose">
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    Once the designs were finalized, I worked closely with the engineers during development to ensure everything aligned from wallet creation logic to transaction reconciliation.
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    I also collaborated with compliance and support teams to make sure we didn't miss any regulatory nuances.
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground">
                    And in just a few weeks, the multi-currency wallet went live — first in the DRC, then globally.
                  </p>
                </div>

                <ResultCallout 
                  stat="20%"
                  description="daily active usage increase — users could now hold USD, CDF, EUR, GBP, CAD, and NGN all in one app."
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dark Stats Section */}
      <DarkStatsSection
        introText="Users finally had the flexibility to transact in the currencies they actually lived and earned in. What I loved most was hearing users say, 'I don't have to think twice anymore.'"
        stats={[
          { number: "20%", description: "Daily active usage increase within weeks of launch" },
          { number: "10%", description: "Cross-currency transaction growth across all supported corridors" },
          { number: "6", description: "Currencies supported seamlessly in a single wallet" }
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
                  This project taught me how powerful simplicity can be — especially in fintech.
                </p>

                <TakeawayCards cards={[
                  "Complexity under the hood, simplicity on the surface.",
                  "Compliance can be designed around, not bolted on.",
                  "Users don't see the work — they just see that it works."
                ]} />

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-background rounded-md p-8 border border-border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-accent">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                      What Worked
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Compliance-first design approach",
                        "Single wallet abstraction for multiple currencies",
                        "Micro-interaction testing for fluid UX",
                        "Cross-team collaboration with compliance and support"
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
                        "Earlier user testing with multi-currency scenarios",
                        "Built-in conversion rate comparison tool",
                        "Better onboarding for currency switching",
                        "Analytics for currency preference patterns"
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
                  Under the hood, the system was complex: compliance mapping, currency logic, multiple regions, and technical integration. But what users saw was freedom. And that's the real magic of product management.
                </p>
              </div>
            </ScrollReveal>

            {/* CTA Section */}
            <ScrollReveal>
              <div className="mb-16 p-8 md:p-12 rounded-2xl bg-card border border-foreground/20 text-center">
                <p className="text-xl md:text-2xl leading-relaxed mb-6 text-foreground">
                  If you care about creating products that truly make life easier for users, I'd love to be part of that journey.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
                    Let's talk
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
              <Link to="/gamification" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous: Gamification</span>
                  <span className="sm:hidden">Previous</span>
                </Button>
              </Link>
              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <span className="hidden sm:inline">Next: DRC Payments</span>
                  <span className="sm:hidden">Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
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

export default MultiCurrencyWallet;
