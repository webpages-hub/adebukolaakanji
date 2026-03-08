import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Target, Trophy, Users, TrendingUp, Zap, CheckCircle2, BarChart3, Sparkles, Star, Award, ArrowRight, ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import gamificationHero from "@/assets/gamification-hero.jpg";
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
  { id: "the-challenge", label: "The Challenge" },
  { id: "step-research", label: "Research", isStep: true, stepNumber: 1 },
  { id: "step-rules", label: "Rules", isStep: true, stepNumber: 2 },
  { id: "step-design", label: "Design", isStep: true, stepNumber: 3 },
  { id: "step-impact", label: "Impact", isStep: true, stepNumber: 4 },
];

const Gamification = () => {
  return (
    <div className="min-h-screen bg-background">
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
          <div className="max-w-5xl mx-auto flex gap-12">
            <CaseStudyTOC sections={tocSections} />
            <div className="max-w-4xl flex-1 min-w-0">
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

            {/* The Idea */}
            <ScrollReveal>
              <div id="the-idea" className="mb-20 case-study-prose scroll-mt-28">
                <h2 className="text-4xl font-bold mb-6">The Idea</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  Let's be honest. Payments can feel boring.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  You pay. You leave. Done.
                </p>
                <UserVoiceQuote quote="But what if making payments could feel rewarding?" />
                <p className="text-[15px] leading-[1.75] text-muted-foreground">
                  That question became the brief. Build something inside the product that made coming back feel worth it.
                </p>
              </div>
            </ScrollReveal>

            {/* The Challenge */}
            <ScrollReveal>
              <div id="the-challenge" className="mb-20 case-study-prose scroll-mt-28">
                <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                  The data was clear. Returning users on the BNPL product were declining steadily, and discounts alone weren't going to fix it.
                </p>
                <DrivingQuestion 
                  question="People would use BNPL once or twice, then drift away. No loyalty, no stickiness. How do we keep them coming back without relying solely on discounts or cashback?"
                  goldEmphasis="keep them coming back"
                />
                <p className="text-[15px] leading-[1.75] text-muted-foreground">
                  That's when I started asking whether the product itself could be the reason people came back.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 1 */}
            <ScrollReveal>
              <div id="step-research" className="mb-20 scroll-mt-28">
                <StepHeading number={1} title="Uncovering What Drives Users Back" accentWord="Drives" />
                <div className="case-study-prose">
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    Before designing anything, I ran user interviews. I needed to understand what would actually motivate someone to come back. Status? Savings? A sense of progress?
                  </p>
                </div>
                
                <UserVoiceQuote 
                  quote="I want to feel like I'm progressing financially, not just spending."
                  attribution="User interview insight"
                />

                <div className="case-study-prose">
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    That was the insight everything else was built on.
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground">
                    So we designed a rewards system built around progress and achievement. Not discounts, not cashback. The feeling of moving forward. Each level had its own theme and personality.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal>
              <div id="step-rules" className="mb-20 scroll-mt-28">
                <StepHeading number={2} title="Defining the Rules of the Game" accentWord="Rules" />
                <div className="case-study-prose">
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    I worked on defining the entire structure of the gamification system:
                  </p>
                </div>

                <div className="max-w-[620px]">
                  {[
                    { title: "Level names and criteria", desc: "Designed tier progression with meaningful milestones" },
                    { title: "Progress metrics", desc: "How users earned points, unlocked levels, and maintained streaks" },
                    { title: "Reward logic", desc: "What users got at each stage" }
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
                  Every rule had to balance fun with fairness, and make sense financially.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal>
              <div id="step-design" className="mb-20 scroll-mt-28">
                <StepHeading number={3} title="Designing the Experience to Feel Alive" accentWord="Alive" />
                <div className="case-study-prose">
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    Once the rules were set, I jumped into Figma to map the user flow.
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    From the moment a user made a BNPL payment to the instant they saw their progress bar rise, every tap had to feel rewarding.
                  </p>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground">
                    I worked closely with our designer to turn the flows into something that felt alive. The goal was simple: open the app, feel something.
                  </p>
                </div>

                {/* User Flow Visualization */}
                <div className="border border-border rounded-md overflow-hidden mt-8 max-w-[620px]">
                  <div className="bg-foreground px-5 py-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-[10px] uppercase tracking-[0.1em] text-background/70 font-semibold">Gamified User Journey</span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-3 p-6">
                    {["Make Payment", "Earn Points", "Level Up", "Unlock Rewards"].map((step, index, array) => (
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
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal>
              <div id="step-impact" className="mb-20 scroll-mt-28">
                <StepHeading number={4} title="Measuring the Impact" accentWord="Impact" isLast />
                <div className="case-study-prose">
                  <p className="text-[15px] leading-[1.75] text-muted-foreground mb-6">
                    Within three months of launch, the results were clear.
                  </p>
                </div>
                
                <ResultCallout 
                  stat="10%"
                  description="retention increase — repeat usage went up because the product gave users a reason to return on their own."
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dark Stats Section */}
      <DarkStatsSection
        introText="Repeat usage went up. Not because we pushed users back with notifications or discounts. Because the product gave them a reason to return on their own."
        stats={[
          { number: "10%", description: "Retention increase within three months of launch" },
          { number: "↑", description: "BNPL engagement increased measurably across active users" },
          { number: "Repeat", description: "Usage growth driven by intrinsic motivation, not incentives" }
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
