import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import globalTransfersHero from "@/assets/global-transfers-hero.jpg";
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Building Fast, Affordable Global Transfers from Africa
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
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
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[12rem_1fr] lg:[grid-template-rows:auto_auto_auto] gap-x-12">
            <CaseStudyTOC sections={tocSections} className="lg:col-start-1 lg:row-start-1 lg:row-span-full" />

            <div className="max-w-4xl min-w-0 mx-auto lg:col-start-2 lg:row-start-1">

          {/* Project Meta Cards */}
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Project Overview</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-2">Timeline</p>
                  <p className="text-lg font-semibold mb-6">Six Weeks</p>

                  <p className="text-muted-foreground mb-2">Role</p>
                  <p className="text-lg font-semibold mb-6">Product Manager</p>

                  <p className="text-muted-foreground mb-2">Company</p>
                  <p className="text-lg font-semibold mb-6">Nomba</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Team</p>
                  <p className="text-lg font-semibold mb-6">Engineering, Design, Partnerships, Operations, Legal and Compliance</p>

                  <p className="text-muted-foreground mb-2">Location</p>
                  <p className="text-lg font-semibold mb-6">UK, Canada, France, Belgium, Germany, DRC</p>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground mb-2">Goal</p>
                <p className="text-lg leading-relaxed">
                  Enable fast, affordable cross-border payments worldwide.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* The Problem */}
          <ScrollReveal>
            <div id="the-problem" className="mb-20 scroll-mt-28 bg-card rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">The Problem</h2>
              <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                A customer tried to send $1,000 from the DRC to the UAE. It took five days and arrived short. The existing rails were slow, expensive, and unpredictable. Users waited days, sometimes a week, and currency spreads were never transparent upfront.
              </p>
              <UserVoiceQuote
                quote="Five whole days. And when it finally landed, the receiver got less than expected. Fees. Exchange losses. Delays."
                attribution="Customer pain point"
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
                    title: "Mapped where money actually moves",
                    desc: "I researched the highest-value corridors and understood what users needed to feel confident hitting send. Speed and transparency were the two non-negotiables."
                  },
                  {
                    number: "02",
                    title: "Negotiated competitive rates",
                    desc: "I worked with partners to offer competitive exchange rates while protecting business margin. Balancing user trust with profitability was the hardest part of this product."
                  },
                  {
                    number: "03",
                    title: "Designed for clarity not features",
                    desc: "I stripped the flow to four steps: choose country, enter amount, see fees and rate instantly, confirm and send. We added a real-time rate refresh timer so users always felt in control."
                  },
                  {
                    number: "04",
                    title: "Launched and expanded methodically",
                    desc: "We started with a handful of corridors, watched closely, then expanded coverage and cut delivery times further through smarter partner routing and batch processing."
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
                  introText="We started with a handful of corridors and watched closely. As adoption picked up, we expanded coverage — and the numbers followed."
                  stats={[
                    { number: "$600K+", description: "In fee revenue generated within eight months" },
                    { number: "Millions", description: "In transfers processed across multiple corridors" },
                    { number: "<1 hr", description: "Average delivery time, down from days" }
                  ]}
                />
              </div>
            </div>

            <div className="max-w-4xl min-w-0 mx-auto lg:col-start-2 lg:row-start-3">
            <ScrollReveal>
              <div id="what-i-learned" className="mb-20 scroll-mt-28">
                <h2 className="text-4xl font-bold mb-6">What I Learned</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8 max-w-[640px]">
                  The biggest lesson had nothing to do with rates or APIs. Global payments are a trust problem first.
                </p>

                <TakeawayCards cards={[
                  "Users want transparency between 'Send' and 'Received.'",
                  "Balance profitability with user trust through rate setting.",
                  "Launch a global product under strict compliance and time pressure."
                ]} />

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-background rounded-md p-8 border border-border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-accent">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                      What Worked
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Balance profitability with user trust through rate setting",
                        "Manage complex integrations without sacrificing speed",
                        "Real-time rate refresh built user confidence"
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
                        "Earlier partner testing for edge-case corridors",
                        "More granular error messaging for failed transfers",
                        "Proactive rate alerts for users"
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
                  Users came back. Agents referred others. Leadership used it as the blueprint for every market expansion that followed.
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
