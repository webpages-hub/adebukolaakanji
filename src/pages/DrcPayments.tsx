import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/drc-payments-hero.jpg";
import ContextTag from "@/components/case-study/ContextTag";
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

const DrcPayments = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="DRC Payments Case Study — Adebukola Akanji" description="How I launched a locally compliant payment product in the DRC in six weeks and drove rapid adoption across a brand new market." path="/drc-payments" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex justify-center">
                <ContextTag tags={["Product Management", "Fintech", "DRC"]} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Building a Local Payments MVP in 6 Weeks
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                What six weeks in a brand new market actually looks like.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="DRC Payments Project Hero"
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
                    <p className="text-lg font-semibold mb-6">6 weeks (research to MVP launch)</p>

                    <p className="text-muted-foreground mb-2">Role</p>
                    <p className="text-lg font-semibold mb-6">Product Manager</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2">Team</p>
                    <p className="text-lg font-semibold mb-6">Engineering, Design, Partnerships, Operations, Legal and Compliance</p>

                    <p className="text-muted-foreground mb-2">Location</p>
                    <p className="text-lg font-semibold mb-6">Democratic Republic of Congo (DRC)</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-muted-foreground mb-2">Goal</p>
                  <p className="text-lg leading-relaxed">
                    Build and launch a local payment product that agents and merchants in the DRC could trust from day one — fast, reliable, and built around how they actually move money.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* The Problem */}
            <ScrollReveal>
              <div id="the-problem" className="mb-20 scroll-mt-28 bg-card rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">The Problem</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  Agents and merchants in the DRC were working across fragmented payment systems. Settlement took too long, tracking was manual, and there was no single reliable solution. The question was whether six weeks was enough to build one that they would actually trust from day one.
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
                      title: "Ran on-ground market and user research",
                      desc: "I interviewed agents, merchants, and mobile money operators to understand what trust meant in this specific market before touching any solution."
                    },
                    {
                      number: "02",
                      title: "Mapped the full agent journey",
                      desc: "I mapped every step from onboarding to first transaction, then worked with the designer to turn those flows into a mobile-first experience that needed no training."
                    },
                    {
                      number: "03",
                      title: "Identified and vetted local partners",
                      desc: "I sourced partners to handle agent verification and float funding, solving two of the biggest blockers to launch before build started."
                    },
                    {
                      number: "04",
                      title: "Shipped the MVP in six weeks",
                      desc: "We onboarded agents quietly and watched closely before scaling. The product worked. Agents referred others without any paid acquisition."
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
            <div id="results" className="lg:col-start-1 lg:col-span-2 lg:row-start-2 scroll-mt-28">
              <div className="-mx-6">
                <DarkStatsSection
                  introText="We rolled out the MVP quietly, onboarding a small batch of agents to test the system in real conditions. Within two months, it was clear: It worked."
                  stats={[
                    { number: "1,000+", description: "Agents onboarded within two months of MVP launch" },
                    { number: "6 wks", description: "From research to live product in market" },
                    { number: "Organic", description: "Agent referrals driven by word of mouth, no paid acquisition" }
                  ]}
                />
              </div>
            </div>

            <div className="max-w-4xl min-w-0 mx-auto lg:col-start-2 lg:row-start-3">
            <ScrollReveal>
              <div id="what-i-learned" className="mb-20 scroll-mt-28">
                <h2 className="text-4xl font-bold mb-6">What I Learned</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8 max-w-[640px]">
                  This project changed how I think about building products.
                </p>

                <TakeawayCards cards={[
                  "Local context trumps global assumptions.",
                  "Speed doesn't have to sacrifice quality.",
                  "Launch is really just the beginning — not the end."
                ]} />

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-background rounded-md p-8 border border-border">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-accent">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                      What Worked
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Prioritized user feedback early and often",
                        "Daily standups kept momentum high",
                        "MVP scope was ruthlessly focused",
                        "Local partnerships accelerated adoption"
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
                        "Involve agents in usability testing earlier",
                        "Integrate analytics from day one",
                        "Plan for scalability sooner",
                        "Document decisions in real-time"
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
                  If I were to do it again, I'd involve agents even earlier in usability testing and integrate
                  analytics from day one. But I wouldn't change the pace. The energy of those six weeks built
                  momentum that carried the product long after MVP.
                </p>
              </div>
            </ScrollReveal>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 border-b border-border">
              <Link to="/multi-currency-wallet" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous: Multi-Currency Wallet</span>
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

export default DrcPayments;
