import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Target, Lightbulb, Clock, TrendingUp, Zap, Eye, Code, BarChart3, Brain, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/drc-payments-hero.jpg";
import ContextTag from "@/components/case-study/ContextTag";
import StepHeading from "@/components/case-study/StepHeading";
import UserVoiceQuote from "@/components/case-study/UserVoiceQuote";
import DrivingQuestion from "@/components/case-study/DrivingQuestion";
import DarkStatsSection from "@/components/case-study/DarkStatsSection";
import TakeawayCards from "@/components/case-study/TakeawayCards";
import ResultCallout from "@/components/case-study/ResultCallout";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
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
          
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={heroImage} 
              alt="DRC Payments Project Hero" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
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

            {/* Where It Began */}
            <div className="mb-20 case-study-prose">
              <h2 className="text-4xl font-bold mb-6">Where it all began</h2>
              <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                It started with one big question:
              </p>
              <UserVoiceQuote quote="Can we make everyday payments simpler for people in the DRC?" />
              <p className="text-[15px] leading-[1.75] text-muted-foreground">
                Nomba had already built a product that worked in Nigeria. But a new market meant new users, new infrastructure constraints, and new reasons people might not trust you. My job was to figure out what "simple" actually meant here, before we wrote a single line of code.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-8">What I Owned</h2>
              <div className="max-w-[620px]">
                {[
                  "Ran on-ground market and user research, interviewing agents, merchants, and mobile money operators to understand what trust actually meant in this market.",
                  "Mapped the full agent journey from onboarding to first transaction, then worked with the designer to turn those flows into a mobile-first experience that made sense without training.",
                  "Identified and vetted local partners to handle agent verification and float funding, solving two of the biggest blockers to launch.",
                  "Shipped the MVP in six weeks, onboarding 1,000+ agents and processing millions in local currency transactions within the first two months."
                ].map((text, index) => (
                  <div key={index} className={`flex gap-4 py-4 border-b border-border ${index === 0 ? 'border-t' : ''}`}>
                    <span className="text-[10px] text-accent font-semibold mt-1">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-[14px] text-foreground leading-[1.6]">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Challenge */}
            <div className="mb-20 case-study-prose">
              <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
              <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                Agents and merchants in the DRC were already used to local mobile money systems. But there was a gap.
              </p>
              <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                Payments were fragmented. Settlement took too long. Agents wanted a single, reliable solution to serve 
                customers and track transactions easily without juggling multiple accounts or sim cards.
              </p>
              <p className="text-[15px] leading-[1.75] text-muted-foreground">
                The task was clear. What wasn't clear was whether six weeks was enough to do it right.
              </p>
            </div>

            {/* Step 1: Research */}
            <div className="mb-20">
              <StepHeading number={1} title="Finding the Story in the Market" accentWord="Story" />
              <div className="case-study-prose">
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  I started with research. Always.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  I interviewed agents, small shop owners, and mobile money operators to understand how they actually 
                  moved money daily.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  I also conducted a mini-competitor audit; what other wallets existed, what users complained about 
                  in reviews, and what "trust" meant in this market.
                </p>
              </div>

              {/* Insight Grid */}
              <div className="grid grid-cols-2 max-w-[620px] my-8">
                {[
                  "Speed mattered more than fancy features.",
                  "Downtime killed adoption.",
                  "Agents cared more about liquidity than commissions.",
                  "Merchants wanted tools, not dashboards."
                ].map((insight, index) => (
                  <div key={index} className="flex items-start gap-3 p-5 border border-border">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    <p className="text-[14px] text-foreground leading-[1.5]">{insight}</p>
                  </div>
                ))}
              </div>

              <div className="case-study-prose">
                <p className="text-[15px] leading-[1.75] text-muted-foreground">
                  I summarized these insights into personas and core use cases, and that became our blueprint.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[hsl(43_100%_97%)] rounded-md p-8 border border-border">
                  <Brain className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold mb-3">Research Artifacts</h3>
                  <ul className="space-y-2 text-[14px] text-muted-foreground list-disc list-inside">
                    <li>Persona development</li>
                    <li>Journey mapping</li>
                    <li>Pain point analysis</li>
                    <li>Competitive insights</li>
                  </ul>
                </div>
                <div className="bg-[hsl(0_0%_96%)] rounded-md p-8 border border-border">
                  <Eye className="w-10 h-10 text-foreground mb-4" />
                  <h3 className="text-lg font-bold mb-3">Key Discovery</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    Trust and speed were the critical factors. Agents needed a solution that felt reliable from day one, 
                    with instant settlement and zero downtime.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Design */}
            <div className="mb-20">
              <StepHeading number={2} title='Designing What "Simple" Should Feel Like' accentWord="Simple" />
              <div className="case-study-prose">
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  Once the insights were clear, I opened Figma and started sketching the experience.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  I wasn't trying to make it beautiful. I wanted it to make sense.
                </p>
              </div>

              {/* Numbered list box */}
              <div className="border border-border rounded-md overflow-hidden max-w-[620px] my-8">
                {[
                  "How would an agent onboard?",
                  "How do they accept a payment?",
                  "How does a merchant check if a payment was successful?"
                ].map((question, index) => (
                  <div key={index} className={`flex items-baseline gap-4 px-6 py-4 ${index > 0 ? 'border-t border-border' : ''}`}>
                    <span className="ld text-accent">{index + 1}</span>
                    <p className="text-[14px] text-foreground">{question}</p>
                  </div>
                ))}
              </div>

              <div className="case-study-prose">
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  I mapped the end-to-end user journey from onboarding to transaction confirmation and worked closely 
                  with the designer to translate flows into wireframes.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  We decided on a clean, three-step onboarding process and prioritized clarity over complexity.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  When we tested it with a few agents, their feedback was short but powerful:
                </p>
              </div>

              <UserVoiceQuote quote="This looks easy. I can use this." attribution="DRC agent, usability test" />

              <p className="text-[15px] leading-[1.75] text-muted-foreground mt-4">That was all I needed to hear.</p>

              {/* Design Journey Flow */}
              <div className="border border-border rounded-md overflow-hidden mt-8 max-w-[620px]">
                <div className="bg-foreground px-5 py-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-mono-tag text-text-[10px] uppercase tracking-[0.1em] text-background/70 font-semiboldJourney</span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-3 p-6">
                  {["Sign Up", "Verify", "Accept Payment", "Track Transactions"].map((step, index, array) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-[hsl(43_100%_95%)] border border-[hsl(43_100%_85%)] rounded-full px-4 py-2">
                        <span className="text-[13px] font-medium text-foreground">{step}</span>
                      </div>
                      {index < array.length - 1 && (
                        <span className="text-accent hidden md:block">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Engineering */}
            <div className="mb-20">
              <StepHeading number={3} title="Working with Engineers and Moving Fast" accentWord="Moving Fast" />
              <div className="case-study-prose">
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  Design locked. Now the question was whether we could build it without scope creeping our way past the deadline.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  I held two-week sprints and daily check-ins with engineers, mostly to unblock decisions quickly.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  I simplified specs, clarified API dependencies, and made sure we didn't overbuild.
                </p>
              </div>

              <DrivingQuestion 
                question={"Every week had one question: \"What's the minimum we can launch that still delivers value?\""}
                goldEmphasis="minimum we can launch"
              />

              <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8">
                By week six, we had a working product.
              </p>
              
              {/* Sprint table */}
              <div className="border border-border rounded-md overflow-hidden">
                <div className="grid md:grid-cols-3">
                  {[
                    { week: "Weeks 1–2", title: "Foundation", items: ["API specs defined", "Core architecture", "Database design", "Authentication flow"] },
                    { week: "Weeks 3–4", title: "Development", items: ["Frontend development", "Backend integration", "Payment processing", "Agent dashboard"] },
                    { week: "Weeks 5–6", title: "Refinement", items: ["Testing & QA", "Bug fixes", "Performance tuning", "Soft launch prep"] }
                  ].map((phase, index) => (
                    <div key={index} className={`p-6 ${index > 0 ? 'md:border-l border-t md:border-t-0 border-border' : ''}`}>
                      <div className="font-mono-tag text-[10px] text-accent uppercase tracking-[0.1em] mb-1">{phase.week}</div>
                      <h4 className="text-lg font-bold mb-4">{phase.title}</h4>
                      <ul className="space-y-2 text-[13px] text-muted-foreground">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Launch */}
            <div className="mb-20">
              <StepHeading number={4} title="Launching the MVP" accentWord="MVP" isLast />
              <div className="case-study-prose">
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  We rolled out the MVP quietly, onboarding a small batch of agents to test the system in real conditions.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  Within two months, the answer was clear. It worked.
                </p>
              </div>
              
              <ResultCallout 
                stat="1,000+" 
                description="agents onboarded within two months of MVP launch, processing millions in local currency transactions." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dark Stats Section */}
      <DarkStatsSection
        introText="We rolled out the MVP quietly, onboarding a small batch of agents to test the system in real conditions. Within two months, it was clear: It worked."
        stats={[
          { number: "1,000+", description: "Agents onboarded within two months of MVP launch" },
          { number: "6 wks", description: "From research to live product in market" },
          { number: "Organic", description: "Agent referrals driven by word of mouth, no paid acquisition" }
        ]}
      />

      {/* What I Learned */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-20">
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

            {/* CTA Section */}
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

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
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

export default Projects;
