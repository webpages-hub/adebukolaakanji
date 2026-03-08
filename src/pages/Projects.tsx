import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Target, Lightbulb, Clock, TrendingUp, Zap, Eye, Code, BarChart3, Brain, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/drc-payments-hero.jpg";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
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
              <h2 className="text-3xl font-bold mb-8" style={{ color: "#1A1A1A" }}>Project Overview</h2>
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
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Where it all began</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  It started with one big question:
                </p>
                <blockquote className="bg-white border-l-4 border-accent rounded-r-xl p-6 my-6">
                  <p className="text-xl leading-relaxed font-semibold" style={{ color: "#1A1A1A" }}>
                    "Can we make everyday payments simpler for people in the DRC?"
                  </p>
                </blockquote>
                <p className="text-lg leading-relaxed">
                  Nomba had already built a product that worked in Nigeria. But a new market meant new users, new infrastructure constraints, and new reasons people might not trust you. My job was to figure out what "simple" actually meant here, before we wrote a single line of code.
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-8">What I Owned</h2>
              <div className="grid gap-6">
                {[
                  {
                    icon: Target,
                    text: "Ran on-ground market and user research, interviewing agents, merchants, and mobile money operators to understand what trust actually meant in this market."
                  },
                  {
                    icon: Users,
                    text: "Mapped the full agent journey from onboarding to first transaction, then worked with the designer to turn those flows into a mobile-first experience that made sense without training."
                  },
                  {
                    icon: CheckCircle2,
                    text: "Identified and vetted local partners to handle agent verification and float funding, solving two of the biggest blockers to launch."
                  },
                  {
                    icon: TrendingUp,
                    text: "Shipped the MVP in six weeks, onboarding 1,000+ agents and processing millions in local currency transactions within the first two months."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-base">
                    <div className="flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-lg leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Challenge */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Agents and merchants in the DRC were already used to local mobile money systems. But there was a gap.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Payments were fragmented. Settlement took too long. Agents wanted a single, reliable solution to serve 
                  customers and track transactions easily without juggling multiple accounts or sim cards.
                </p>
                <p className="text-lg leading-relaxed">
                  The task was clear. What wasn't clear was whether six weeks was enough to do it right.
                </p>
              </div>
            </div>

            {/* Step 1: Research */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-accent" />
                <h2 className="text-4xl font-bold">Step 1: Understanding the Market Before Assuming Anything</h2>
              </div>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  I started with research. Always.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I interviewed agents, small shop owners, and mobile money operators to understand how they actually 
                  moved money daily.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I also conducted a mini-competitor audit; what other wallets existed, what users complained about 
                  in reviews, and what "trust" meant in this market.
                </p>
                <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-8">
                  <p className="font-semibold mb-4" style={{ color: "#1A1A1A" }}>Four things came up over and over again:</p>
                  <ul className="space-y-2">
                    <li>👉 Speed mattered more than fancy features.</li>
                    <li>👉 Downtime killed adoption.</li>
                    <li>👉 Agents cared more about liquidity than commissions.</li>
                    <li>👉 Merchants wanted tools, not dashboards.</li>
                  </ul>
                </div>
                <p className="text-lg leading-relaxed">
                  I summarized these insights into personas and core use cases, and that became our blueprint.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
                  <Brain className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Research Artifacts</h3>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Persona development</li>
                    <li>Journey mapping</li>
                    <li>Pain point analysis</li>
                    <li>Competitive insights</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-border">
                  <Eye className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Key Discovery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trust and speed were the critical factors. Agents needed a solution that felt reliable from day one, 
                    with instant settlement and zero downtime.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Design */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Step 2: Designing What "Simple" Should Feel Like</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  Once the insights were clear, I opened Figma and started sketching the experience.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I wasn't trying to make it beautiful. I wanted it to make sense.
                </p>
                <div className="bg-card rounded-xl p-6 my-8 border border-border">
                  <ol className="space-y-2 text-lg">
                    <li>1. How would an agent onboard?</li>
                    <li>2. How do they accept a payment?</li>
                    <li>3. How does a merchant check if a payment was successful?</li>
                  </ol>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  I mapped the end-to-end user journey from onboarding to transaction confirmation and worked closely 
                  with the designer to translate flows into wireframes.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We decided on a clean, three-step onboarding process and prioritized clarity over complexity.
                </p>
                <div className="bg-white rounded-xl p-6 my-8">
                  <p className="text-lg leading-relaxed">
                    When we tested it with a few agents, their feedback was short but powerful:
                  </p>
                  <blockquote className="bg-white border-l-4 border-accent rounded-r-xl p-6 my-4">
                    <p className="text-2xl font-bold" style={{ color: "#1A1A1A" }}>"This looks easy. I can use this."</p>
                  </blockquote>
                  <p className="text-lg leading-relaxed bg-white p-4 rounded-lg mt-4">That was all I needed to hear.</p>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-elegant border-l-4 border-accent mt-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-accent" />
                  Simplified Agent Journey for MVP
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {[
                    { label: "Sign Up", icon: Users },
                    { label: "Verify", icon: CheckCircle2 },
                    { label: "Accept Payment", icon: Target },
                    { label: "Track Transactions", icon: BarChart3 }
                  ].map((step, index, array) => (
                    <div key={index} className="flex items-center gap-4 w-full md:w-auto">
                      <div className="flex-1 md:flex-initial">
                        <div className="bg-accent/10 rounded-xl p-4 text-center">
                          <step.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                          <p className="font-semibold">{step.label}</p>
                        </div>
                      </div>
                      {index < array.length - 1 && (
                        <div className="hidden md:block text-accent text-2xl">→</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Engineering */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Step 3: Working with Engineers (and Moving Fast)</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  Design locked. Now the question was whether we could build it without scope creeping our way past the deadline.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I held two-week sprints and daily check-ins with engineers, mostly to unblock decisions quickly.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I simplified specs, clarified API dependencies, and made sure we didn't overbuild.
                </p>
                <div className="bg-card rounded-xl p-6 my-8 border-l-4 border-accent">
                  <p className="text-lg leading-relaxed">
                    Every week had one question: <span className="font-bold text-accent">"What's the minimum we can launch that still delivers value?"</span>
                  </p>
                </div>
                <p className="text-lg leading-relaxed">
                  By week six, we had a working product.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-2xl p-8 mt-8 border border-accent/20">
                <h3 className="text-xl font-bold mb-6 text-center">Six-Week Sprint Breakdown</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { week: "Weeks 1-2", title: "Foundation", items: ["API specs defined", "Core architecture", "Database design", "Authentication flow"] },
                    { week: "Weeks 3-4", title: "Development", items: ["Frontend development", "Backend integration", "Payment processing", "Agent dashboard"] },
                    { week: "Weeks 5-6", title: "Refinement", items: ["Testing & QA", "Bug fixes", "Performance tuning", "Soft launch prep"] }
                  ].map((phase, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-md">
                      <div className="text-sm text-accent font-semibold mb-2">{phase.week}</div>
                      <h4 className="text-lg font-bold mb-4">{phase.title}</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Code className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
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
              <h2 className="text-4xl font-bold mb-6">Step 4: Launching the MVP</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  We rolled out the MVP quietly, onboarding a small batch of agents to test the system in real conditions.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Within two months, it was clear: It worked.
                </p>
                <div className="bg-accent/10 rounded-xl p-8 my-8">
                  <p className="text-lg leading-relaxed mb-4">
                    We onboarded over <span className="font-bold text-accent text-2xl">1,000 agents</span>, processed 
                    millions in local currency transactions, and got consistent feedback that the product was easier 
                    and faster than what they were used to.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-card rounded-2xl p-8 shadow-elegant text-center border-t-4 border-accent">
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">1,000+</div>
                  <p className="text-muted-foreground">Agents Onboarded</p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-elegant text-center border-t-4 border-accent">
                  <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">Millions</div>
                  <p className="text-muted-foreground">Transactions Processed</p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-elegant text-center border-t-4 border-accent">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">Organic</div>
                  <p className="text-muted-foreground">Agent Referrals</p>
                </div>
              </div>
            </div>

            {/* Learnings */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">What I Learned</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  This project changed how I think about building products.
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  {[
                    "Local context trumps global assumptions.",
                    "Speed doesn't have to sacrifice quality.",
                    "Launch is really just the beginning — not the end."
                  ].map((learning, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-md border-t-4 border-accent">
                      <p className="text-lg font-semibold">{learning}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  The six-week sprint wasn't just a timeline. It was a test of clarity, focus, and belief.
                </p>
                <p className="text-lg leading-relaxed">
                  If I were to do it again, I'd involve agents even earlier in usability testing and integrate 
                  analytics from day one. But I wouldn't change the pace. The energy of those six weeks built 
                  momentum that carried the product long after MVP.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-accent">
                    <CheckCircle2 className="w-7 h-7 text-accent" />
                    What Worked
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-lg">✓</span>
                      <span className="text-lg">Prioritized user feedback early and often</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-lg">✓</span>
                      <span className="text-lg">Daily standups kept momentum high</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-lg">✓</span>
                      <span className="text-lg">MVP scope was ruthlessly focused</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent text-lg">✓</span>
                      <span className="text-lg">Local partnerships accelerated adoption</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <Lightbulb className="w-7 h-7 text-primary" />
                    What I'd Improve
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-lg">→</span>
                      <span className="text-lg">Involve agents in usability testing earlier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-lg">→</span>
                      <span className="text-lg">Integrate analytics from day one</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-lg">→</span>
                      <span className="text-lg">Plan for scalability sooner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-lg">→</span>
                      <span className="text-lg">Document decisions in real-time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mb-16 p-8 md:p-12 rounded-2xl bg-white border border-foreground/20 text-center">
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
