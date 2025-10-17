import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Target, Lightbulb, Clock, TrendingUp } from "lucide-react";
import heroImage from "@/assets/drc-payments-hero.jpg";
import researchBoard from "@/assets/research-board.jpg";
import userJourney from "@/assets/user-journey.jpg";
import sprintBoard from "@/assets/sprint-board.jpg";
import dashboardGrowth from "@/assets/dashboard-growth.jpg";
import reflectionNotes from "@/assets/reflection-notes.jpg";

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
              My Journey Launching in the DRC
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
              <h2 className="text-3xl font-bold mb-8 text-accent">Project Overview</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-2">Timeline</p>
                  <p className="text-lg font-semibold mb-6">6 weeks (research to MVP launch)</p>
                  
                  <p className="text-muted-foreground mb-2">Role</p>
                  <p className="text-lg font-semibold mb-6">Product Manager</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Team</p>
                  <p className="text-lg font-semibold mb-6">Engineering, Design, Partnerships, Operations</p>
                  
                  <p className="text-muted-foreground mb-2">Location</p>
                  <p className="text-lg font-semibold mb-6">Democratic Republic of Congo (DRC)</p>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground mb-2">Goal</p>
                <p className="text-lg leading-relaxed">
                  Build and launch a local payments product that enabled agents to serve customers within their 
                  communities and reduce dependence on cash transactions.
                </p>
              </div>
            </div>

            {/* Where It Began */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Where it all began</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  It started with one big question: <span className="font-semibold text-accent">"Can we make everyday payments simpler for people in the DRC?"</span>
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  At the time, Nomba had built a solid fintech product in Nigeria, but we wanted to test something new — 
                  a local payments solution that could help agents and merchants serve customers faster and more reliably.
                </p>
                <div className="bg-muted rounded-xl p-6 my-8">
                  <p className="font-semibold mb-4">The challenge?</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• A completely new market.</li>
                    <li>• Limited data.</li>
                    <li>• Tight timelines.</li>
                    <li>• And the goal to launch an MVP in just six weeks.</li>
                  </ul>
                </div>
                <p className="text-lg leading-relaxed">
                  I was the product manager on the project. And from day one, I knew this wasn't going to be about 
                  building fast, it was about building smart.
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-8">My Responsibilities</h2>
              <div className="grid gap-6">
                {[
                  {
                    icon: Target,
                    text: "Conducted market and user research to understand agent pain points, onboarding bottlenecks, and trust drivers."
                  },
                  {
                    icon: Users,
                    text: "Mapped the agent journey on Figma and collaborated with engineers to design a mobile-first onboarding experience."
                  },
                  {
                    icon: CheckCircle2,
                    text: "Screened and secured reliable local partners to streamline agent verification and float funding."
                  },
                  {
                    icon: TrendingUp,
                    text: "Launched an MVP within six weeks, leading to rapid agent adoption and consistent transaction growth."
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
                  Our task was simple on paper but complex in practice: Design, build, and launch a local payment MVP 
                  that agents and merchants could trust.
                </p>
              </div>
            </div>

            {/* Step 1: Research */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-accent" />
                <h2 className="text-4xl font-bold">Step 1: Finding the Story in the Market</h2>
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
                  <p className="font-semibold mb-4 text-accent">What stood out was eye-opening:</p>
                  <ul className="space-y-2">
                    <li>• Speed mattered more than fancy features.</li>
                    <li>• Downtime killed adoption.</li>
                    <li>• Agents cared more about liquidity than commissions.</li>
                    <li>• Merchants wanted tools, not dashboards.</li>
                  </ul>
                </div>
                <p className="text-lg leading-relaxed">
                  I summarized these insights into personas and core use cases — and that became our blueprint.
                </p>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={researchBoard} 
                  alt="Research summary board with sticky notes and persona cards" 
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center py-4 bg-card">
                  A Figma research summary board: sticky notes, pain points, and persona cards
                </p>
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
                <div className="bg-accent/10 rounded-xl p-6 my-8">
                  <p className="text-lg leading-relaxed italic">
                    When we tested it with a few agents, their feedback was short but powerful:
                  </p>
                  <p className="text-2xl font-bold text-accent mt-4">"This looks easy. I can use this."</p>
                  <p className="text-lg leading-relaxed mt-4">That was all I needed to hear.</p>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={userJourney} 
                  alt="Simplified agent journey flow" 
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center py-4 bg-card">
                  Simplified agent journey for MVP: Sign Up → Verify → Accept Payment → Track Transactions
                </p>
              </div>
            </div>

            {/* Step 3: Engineering */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Step 3: Working with Engineers (and Moving Fast)</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  With design ready, execution became everything.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I held two weeks sprints and daily check-ins with engineers — mostly to unblock decisions quickly.
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
              
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={sprintBoard} 
                  alt="Sprint planning board" 
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center py-4 bg-card">
                  Our six-week sprint plan — from design to deployment
                </p>
              </div>
            </div>

            {/* Step 4: Launch */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Step 4: Launching the MVP</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  We rolled out the MVP quietly — onboarding a small batch of agents to test the system in real conditions.
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
                  <p className="text-lg leading-relaxed font-semibold mt-6">
                    The best part? Agents started referring other agents — organic growth from people who genuinely 
                    found it useful.
                  </p>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={dashboardGrowth} 
                  alt="Dashboard showing growth metrics" 
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center py-4 bg-card">
                  Early traction from agents validating product-market fit
                </p>
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
                  analytics from day one. But I wouldn't change the pace — the energy of those six weeks built 
                  momentum that carried the product long after MVP.
                </p>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={reflectionNotes} 
                  alt="Reflection notes on sticky board" 
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center py-4 bg-card">
                  Key takeaways from launching a fintech MVP in six weeks
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-12">
              <Button size="lg" variant="accent" asChild>
                <a href="/">Back to Home</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
