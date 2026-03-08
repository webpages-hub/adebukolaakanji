import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Clock, DollarSign, Zap, Users, ArrowRight, CheckCircle2, Target, BarChart3, Shield, ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import globalTransfersHero from "@/assets/global-transfers-hero.jpg";
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
  { id: "the-moment", label: "The Moment" },
  { id: "the-challenge", label: "The Challenge" },
  { id: "step-research", label: "Research", isStep: true, stepNumber: 1 },
  { id: "step-rates", label: "Rates", isStep: true, stepNumber: 2 },
  { id: "step-design", label: "Design", isStep: true, stepNumber: 3 },
  { id: "step-launch", label: "Launch", isStep: true, stepNumber: 4 },
];

const GlobalTransfers = () => {
  return (
    <div className="min-h-screen bg-background">
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
          <div className="max-w-5xl mx-auto flex gap-12">
            <CaseStudyTOC sections={tocSections} />
            <div className="max-w-4xl flex-1 min-w-0">
          
          {/* Project Meta Cards */}
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Project Overview</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-2">Timeline</p>
                  <p className="text-lg font-semibold mb-6">Two Months</p>
                  
                  <p className="text-muted-foreground mb-2">Role</p>
                  <p className="text-lg font-semibold mb-6">Product Manager</p>

                  <p className="text-muted-foreground mb-2">Company</p>
                  <p className="text-lg font-semibold mb-6">Nomba</p>
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
                  Enable fast, affordable cross-border payments worldwide.
                </p>
              </div>
            </div>
          </ScrollReveal>

        {/* Hook Section */}
        <ScrollReveal>
          <div id="the-moment" className="mb-20 case-study-prose scroll-mt-28">
            <h2 className="text-4xl font-bold mb-6">The Moment It Hit Me</h2>
            
            <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
              I still remember the exact moment it clicked.
            </p>
            <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
              A customer had tried to send $1000 to the United Arab Emirates from the Democratic Republic of Congo, and it took <span className="font-bold text-foreground">five days</span> to get to the receiver.
            </p>
            
            <UserVoiceQuote 
              quote="Five whole days. And when it finally landed, the receiver got less than expected. Fees. Exchange losses. Delays."
              attribution="Customer pain point"
            />

            <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
              That was the moment I knew: <span className="font-bold text-foreground">the global money transfer system was broken for ordinary users.</span>
            </p>
            <p className="text-[15px] leading-[1.75] text-muted-foreground">
              So we decided to fix it. Faster delivery, fairer rates, full transparency. And I was the PM leading the build.
            </p>
          </div>
        </ScrollReveal>

        {/* Challenge Section */}
        <ScrollReveal>
          <div id="the-challenge" className="mb-20 case-study-prose scroll-mt-28">
            <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
            
            <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
              International money transfers sound simple. Until you're the one building them.
            </p>
            <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
              The existing rails were slow and expensive. Users waited days, sometimes a week. Partners took high fees. Currency spreads were unpredictable.
            </p>

            <h3 className="text-2xl font-bold mb-4">The Goal</h3>
            <p className="text-[15px] leading-[1.75] text-muted-foreground mb-4">The product had to do four things well:</p>
          </div>
        </ScrollReveal>

        {/* Insight Grid for goals */}
        <ScrollReveal>
          <div className="grid grid-cols-2 max-w-[620px] mb-20">
            {[
              "Move money across borders within minutes, not days",
              "Offer competitive exchange rates without losing margin",
              "Stay compliant while integrating licensed global partners",
              "Scale seamlessly once adoption began"
            ].map((goal, index) => (
              <div key={index} className="flex items-start gap-3 p-5 border border-border">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                <p className="text-[14px] text-foreground leading-[1.5]">{goal}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Step 1: Research */}
        <ScrollReveal>
          <div id="step-research" className="mb-20 scroll-mt-28">
            <StepHeading number={1} title="Understanding Where Money Actually Moves" accentWord="Money" />
            <div className="case-study-prose">
              <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                Before touching the product, I needed to understand the corridors that actually mattered to our users.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6 max-w-[620px]">
              {[
                { emoji: "🌍 → 🇪🇺", title: "Africa → Europe", desc: "UK and France" },
                { emoji: "🌍 → 🇨🇳", title: "Africa → Asia", desc: "Trade settlements" },
                { emoji: "💱", title: "Top Pairs", desc: "USD/CNY, USD/NGN, EUR/USD" }
              ].map((item, index) => (
                <div key={index} className="p-5 border border-border rounded-md">
                  <div className="text-2xl font-bold mb-2">{item.emoji}</div>
                  <div className="font-semibold mb-1 text-[14px]">{item.title}</div>
                  <div className="text-[13px] text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="case-study-prose">
              <p className="text-[15px] leading-[1.75] text-muted-foreground">
                I dug into currency behaviors, volatility patterns, and average delivery times. Then I benchmarked competitors like Wise, Remitly, and Sendwave.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Transaction Flow */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="border border-border rounded-md overflow-hidden max-w-[620px]">
              <div className="bg-foreground px-5 py-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-[10px] uppercase tracking-[0.1em] text-background/70 font-semibold">Optimized Transaction Flow</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3 p-6">
                {["Sender", "Partner API", "Recipient"].map((step, index, array) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`${index === 1 ? 'bg-accent text-accent-foreground' : 'bg-[hsl(43_100%_95%)] border border-[hsl(43_100%_85%)]'} rounded-full px-4 py-2`}>
                      <span className="text-[13px] font-medium">{step}</span>
                    </div>
                    {index < array.length - 1 && (
                      <span className="text-accent hidden md:block">→</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="px-6 pb-4 text-center text-[13px] text-muted-foreground">
                Average delivery: <span className="font-bold text-foreground">Under 1 hour</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 2: FX Rates */}
        <ScrollReveal>
          <div id="step-rates" className="mb-20 scroll-mt-28">
            <StepHeading number={2} title="Getting the Rates Right" accentWord="Rates" />
            <div className="case-study-prose">
              <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                Rates are where users decide whether to trust you. Set them too high and they leave. Too low and the business bleeds. I worked with finance and data to build a model that kept both sides honest.
              </p>
            </div>

            <div className="max-w-[620px] space-y-0">
              {[
                { label: "Bid Rate", desc: "The price users buy foreign currency at" },
                { label: "Ask Rate", desc: "The rate we get from our partner or liquidity provider" },
                { label: "The Spread", desc: "Our margin — a delicate balance between user value and revenue" }
              ].map((item, index) => (
                <div key={index} className={`flex gap-4 py-4 border-b border-border ${index === 0 ? 'border-t' : ''}`}>
                  <span className="text-[10px] text-accent font-semibold mt-1">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <span className="font-bold text-[14px]">{item.label}</span>
                    <span className="text-[14px] text-muted-foreground"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Step 3: Design */}
        <ScrollReveal>
          <div id="step-design" className="mb-20 scroll-mt-28">
            <StepHeading number={3} title="Designing for Clarity, Not Features" accentWord="Clarity" />
            <div className="case-study-prose">
              <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                A fast, cheap transfer that confuses the user is still a bad product. I worked with the designer to strip the flow down to exactly what someone needs to feel confident hitting send.
              </p>
            </div>

            {/* Numbered list box */}
            <div className="border border-border rounded-md overflow-hidden max-w-[620px] my-8">
              {[
                "Choose country and currency",
                "Enter amount",
                "Instantly see delivery time, fees, and exchange rate",
                "Confirm and send"
              ].map((step, index) => (
                <div key={index} className={`flex items-baseline gap-4 px-6 py-4 ${index > 0 ? 'border-t border-border' : ''}`}>
                  <span className="text-[22px] font-bold text-accent">{index + 1}</span>
                  <p className="text-[14px] text-foreground">{step}</p>
                </div>
              ))}
            </div>

            <div className="case-study-prose">
              <p className="text-[15px] leading-[1.75] text-muted-foreground">
                We added a real-time rate refresh timer so users always felt in control.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Step 4: Launch */}
        <ScrollReveal>
          <div id="step-launch" className="mb-20 scroll-mt-28">
            <StepHeading number={4} title="Shipping and Scaling" accentWord="Scaling" isLast />
            <div className="case-study-prose">
              <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                We started with a handful of corridors and watched closely. As adoption picked up, we expanded coverage and cut delivery times further through smarter partner routing and batch processing.
              </p>
            </div>

            <ResultCallout 
              stat="$200K+"
              description="revenue generated in the first three months, with millions processed in transfers."
            />
          </div>
        </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dark Stats Section */}
      <DarkStatsSection
        introText="We started with a handful of corridors and watched closely. As adoption picked up, we expanded coverage — and the numbers followed."
        stats={[
          { number: "$200K+", description: "Revenue generated in the first three months" },
          { number: "Millions", description: "In transfers processed across multiple corridors" },
          { number: "<1 hr", description: "Average delivery time, down from days" }
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
              <Link to="/projects" className="w-full sm:w-auto">
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
