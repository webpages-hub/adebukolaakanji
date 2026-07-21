import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import multicurrencyWalletHero from "@/assets/multicurrency-wallet-hero.jpg";
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
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[12rem_1fr] lg:[grid-template-rows:auto_auto_auto] gap-x-12">
            <CaseStudyTOC sections={tocSections} className="lg:col-start-1 lg:row-start-1 lg:row-span-full" />

            <div className="max-w-4xl min-w-0 mx-auto lg:col-start-2 lg:row-start-1">
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

            {/* The Problem */}
            <ScrollReveal>
              <div id="the-problem" className="mb-20 scroll-mt-28 bg-card rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  Users working across currencies were doing too much manual work to move money. A DRC agent put it plainly: they received dollars, had to convert to CDF, then convert back to USD to send again. Every transaction across currencies meant manual steps, delays, and money lost to bad conversion timing.
                </p>
                <UserVoiceQuote
                  quote="I get paid in dollars, but I can't use it directly in the app. I have to convert to CDF, and then back to USD to send again."
                  attribution="DRC agent"
                />
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
                      title: "Mapped the compliance requirements first",
                      desc: "Before touching design or engineering, I mapped how each currency needed to behave: what KYC tier unlocked it, what limits applied, and how conversion logic would work without the user ever thinking about it."
                    },
                    {
                      number: "02",
                      title: "Designed the wallet system with engineering",
                      desc: "Each wallet type needed to be created independently based on KYC level, hold and transfer value seamlessly, and sync in real time with the existing ledger system."
                    },
                    {
                      number: "03",
                      title: "Made complexity invisible to the user",
                      desc: "I worked with the designer to make the experience feel effortless. We tested micro-interactions like currency switching and transaction confirmations until the complexity underneath disappeared completely."
                    },
                    {
                      number: "04",
                      title: "Launched in DRC first then globally",
                      desc: "I collaborated with compliance and support teams to ensure no regulatory nuances were missed across regions before rolling out to all supported markets."
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
                  introText="Users finally had the flexibility to transact in the currencies they actually lived and earned in. What I loved most was hearing users say, 'I don't have to think twice anymore.'"
                  stats={[
                    { number: "20%", description: "Daily active usage increase within weeks of launch" },
                    { number: "10%", description: "Cross-currency transaction growth across all supported corridors" },
                    { number: "6", description: "Currencies supported seamlessly in a single wallet" }
                  ]}
                />
              </div>
            </div>

            <div className="max-w-4xl min-w-0 mx-auto lg:col-start-2 lg:row-start-3">
            <ScrollReveal>
              <div id="what-i-learned" className="mb-20 scroll-mt-28">
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
            </div>

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
