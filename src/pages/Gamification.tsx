import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import gamificationHero from "@/assets/gamification-hero.jpg";
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Making Payments Fun
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                How I Launched a Gamification System That Boosted Retention by 10%
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={gamificationHero}
                alt="Gamification Project Hero"
                className="w-full h-auto"
              />
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
                    <p className="text-lg font-semibold mb-6">Payfi</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2">Team</p>
                    <p className="text-lg font-semibold mb-6">Engineering, Design</p>

                    <p className="text-muted-foreground mb-2">Location</p>
                    <p className="text-lg font-semibold mb-6">Nigeria</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-muted-foreground mb-2">Goal</p>
                  <p className="text-lg leading-relaxed">
                    Our BNPL product worked. Users transacted, paid back, moved on. The problem was they never came back. I wanted to fix that.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* The Problem */}
            <ScrollReveal>
              <div id="the-problem" className="mb-20 scroll-mt-28 bg-card rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  Users on the BNPL product transacted once or twice then drifted away. Discounts alone were not fixing it. The data showed returning users declining steadily and no clear reason for them to come back on their own.
                </p>
                <UserVoiceQuote
                  quote="I want to feel like I'm progressing financially, not just spending."
                  attribution="User interview insight"
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
                      title: "Ran user interviews to find the right lever",
                      desc: "I spoke to users to understand what would motivate them to return. The insight was consistent: users wanted to feel financial progress, not just spend money."
                    },
                    {
                      number: "02",
                      title: "Designed a progress and achievement system",
                      desc: "I built badges, levels, and rewards tied directly to how users actually used the product. Not generic incentives. Milestones that meant something."
                    },
                    {
                      number: "03",
                      title: "Made the experience feel alive",
                      desc: "I worked closely with the designer to turn the flows into something users felt when they opened the app. The goal was simple: open the app, feel something."
                    },
                    {
                      number: "04",
                      title: "Launched and measured intrinsic motivation",
                      desc: "I tracked repeat usage and engagement rates to confirm the system was driving users back on their own terms, not because of discounts or push notifications."
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
                  introText="Repeat usage went up. Not because we pushed users back with notifications or discounts. Because the product gave them a reason to return on their own."
                  stats={[
                    { number: "10%", description: "Retention increase within three months of launch" },
                    { number: "↑", description: "BNPL engagement increased measurably across active users" },
                    { number: "Repeat", description: "Usage growth driven by intrinsic motivation, not incentives" }
                  ]}
                />
              </div>
            </div>

            <div className="max-w-4xl min-w-0 mx-auto lg:col-start-2 lg:row-start-3">
            <ScrollReveal>
              <div id="what-i-learned" className="mb-20 scroll-mt-28">
                <h2 className="text-4xl font-bold mb-6">What I Learned</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8 max-w-[640px]">
                  Users don't engage with functionality. They engage with how something makes them feel.
                </p>

                <TakeawayCards cards={[
                  "Build for emotion, not just function — the numbers follow.",
                  "Progress feels better than discounts as a retention lever.",
                  "Simple rules, well-designed, create lasting engagement."
                ]} />

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-background rounded-md p-8 border border-border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-accent">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                      What Worked
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "User interviews surfaced the right motivation lever",
                        "Progress-based rewards outperformed discount models",
                        "Close designer collaboration made flows feel alive",
                        "Balanced fun with financial sustainability"
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
                        "A/B test reward structures earlier",
                        "Add social features for peer competition",
                        "Build analytics dashboard from day one",
                        "Test level pacing with more user segments"
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
                  This project proved that when you build for how users feel, the numbers follow.
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
