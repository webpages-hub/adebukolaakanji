import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Target, Trophy, Users, TrendingUp, Zap, CheckCircle2, BarChart3, Sparkles, Star, Award, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import gamificationHero from "@/assets/gamification-hero.jpg";

const Gamification = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Making Payments Fun
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              How I Launched a Gamification System That Boosted Retention by 10%
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={gamificationHero} 
              alt="Gamification Project Hero" 
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
                  Our BNPL product was great, but engagement was dipping. People would use it once or twice, then forget about it. I wanted to fix that.
                </p>
              </div>
            </div>

            {/* Hook */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-accent" />
                Hook
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Let's be honest. Payments can feel boring.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  You pay. You leave. End of story.
                </p>
                <div className="bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 rounded-xl p-8 my-8 border border-accent/30">
                  <p className="text-xl leading-relaxed font-semibold text-accent">
                    But what if making payments could feel rewarding?
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    That was the question that sparked the idea for a gamified experience inside our app, one that didn't just let users transact but actually made them want to come back.
                  </p>
                </div>
              </div>
            </div>

            {/* The Challenge */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Our data showed a steady decline in returning users on the BNPL (Buy Now, Pay Later) product.
                </p>
                <div className="bg-muted rounded-xl p-6 my-8">
                  <p className="font-semibold mb-4">The problem?</p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    People would use BNPL once or twice, then drift away. No loyalty, no stickiness.
                  </p>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  And if users only show up for a single transaction, it's hard to build lifetime value.
                </p>
                <p className="text-lg leading-relaxed">
                  So I asked myself, how do we keep them coming back without relying solely on discounts or cashback?
                </p>
                <p className="text-lg leading-relaxed mt-6 font-semibold">
                  That's where the idea of gamification came in.
                </p>
              </div>
            </div>

            {/* Research & Ideation */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Research & Ideation</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  I started with user interviews. I wanted to understand what would motivate people to keep using the product. Status? Savings? Competition?
                </p>
                <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-8">
                  <p className="text-lg leading-relaxed">
                    Most users said they wanted to <span className="font-bold text-accent">"feel like they were progressing"</span> financially, not just spending.
                  </p>
                  <p className="text-lg leading-relaxed mt-4 font-semibold">
                    That was the lightbulb moment.
                  </p>
                </div>
                <p className="text-lg leading-relaxed">
                  We decided to design a rewards system built around progress and achievement, not just perks.
                </p>
                <p className="text-lg leading-relaxed mt-6">
                  Each level would have its own theme and personality , and trust me, naming them was half the fun.
                </p>
              </div>
            </div>

            {/* Defining the Rules */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Defining the Rules</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  I worked on defining the entire structure of the gamification system:
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: Trophy,
                    title: "Level names and criteria",
                    description: "Designed tier progression with meaningful milestones"
                  },
                  {
                    icon: TrendingUp,
                    title: "Progress metrics",
                    description: "How users earned points, unlocked levels, and maintained streaks"
                  },
                  {
                    icon: Award,
                    title: "Reward logic",
                    description: "What users got at each stage"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-base border-l-4 border-accent">
                    <div className="flex-shrink-0">
                      <item.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed mt-8">
                Every rule had to balance fun with fairness — and make sense financially.
              </p>
            </div>

            {/* Designing the Experience */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Designing the Experience</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Once the rules were set, I jumped into Figma to map the user flow.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  From the moment a user made a BNPL payment to the instant they saw their progress bar rise, every tap had to feel rewarding.
                </p>
                <p className="text-lg leading-relaxed">
                  I collaborated closely with our designer to translate my flow into a vibrant, intuitive interface that made users smile just by opening the app.
                </p>
              </div>

              {/* User Flow Visualization */}
              <div className="bg-card rounded-2xl p-8 shadow-elegant border-l-4 border-accent mt-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-accent" />
                  Gamified User Journey
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {[
                    { label: "Make Payment", icon: Target },
                    { label: "Earn Points", icon: Star },
                    { label: "Level Up", icon: Trophy },
                    { label: "Unlock Rewards", icon: Award }
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

            {/* The Impact */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">The Impact</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed">
                  Within three months of launch:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card rounded-2xl p-8 shadow-elegant text-center border-t-4 border-accent">
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">10%</div>
                  <p className="text-muted-foreground">Retention Increase</p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-elegant text-center border-t-4 border-accent">
                  <BarChart3 className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">↑</div>
                  <p className="text-muted-foreground">BNPL Engagement</p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-elegant text-center border-t-4 border-accent">
                  <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">+</div>
                  <p className="text-muted-foreground">Repeat Usage</p>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-8">
                <p className="text-lg leading-relaxed font-semibold">
                  We saw a spike in repeat usage. Proof that people were coming back, not because they had to… but because they wanted to.
                </p>
              </div>
            </div>

            {/* Reflection */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Reflection</h2>
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/30">
                <p className="text-lg leading-relaxed mb-6">
                  This project reminded me that users don't just engage with functionality; they engage with feelings.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-accent">
                  If you can make a product fun, intuitive, and emotionally rewarding, you've already won half the battle.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mb-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-accent/30 text-center">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                If you care about creating products that truly make life easier for users, I'd love to be part of that journey.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="accent" className="text-lg">
                  Let's talk
                </Button>
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-border">
              <Link to="/global-transfers">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Previous: Global Transfers
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="ghost" className="gap-2">
                  Next: DRC Payments
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gamification;
