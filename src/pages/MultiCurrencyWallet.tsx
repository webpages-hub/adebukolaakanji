import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Wallet, Globe, Shield, TrendingUp, Zap, CheckCircle2, Users, BarChart3, ArrowRight, ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import multicurrencyWalletHero from "@/assets/multicurrency-wallet-hero.jpg";

const MultiCurrencyWallet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building a Multi-Currency Wallet for Everyday Transactions
            </h1>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={multicurrencyWalletHero} 
                alt="Multi-Currency Wallet User Interface" 
                className="w-full h-auto"
              />
            </div>

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

            {/* The Idea */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">The Idea</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  The first time I heard an agent complain, it sounded simple:
                </p>
                <blockquote className="bg-white border-l-4 border-accent rounded-r-xl p-6 my-8">
                  <p className="text-lg leading-relaxed">
                    "I get paid in dollars, but I can't use it directly in the app. I have to convert to CDF, and then back to USD to send again."
                  </p>
                </blockquote>
                <p className="text-lg leading-relaxed mb-6">
                  It sounded like a one-off complaint. It wasn't.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  By the time I'd spoken to ten more agents, the pattern was clear. Every transaction across currencies meant manual steps, delays, and money lost to bad conversion timing.
                </p>
                <div className="bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 rounded-xl p-8 my-8 border border-accent/30 flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <p className="text-xl leading-relaxed font-semibold" style={{ color: "#1A1A1A" }}>
                    That's when it clicked: What if we could just let users hold and transact in multiple currencies within a single account?
                  </p>
                </div>
              </div>
            </div>

            {/* Understanding the Problem */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Understanding the Problem</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  I started by mapping out how users were currently transacting across currencies. In DRC, it was mostly USD and CDF. In our global expansion, we needed EUR, GBP, CAD, and NGN.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  But adding currencies wasn't a product decision, it was a compliance one. Each currency came with its own KYC tier, regional rules, and regulatory requirements that had to be designed around, not bolted on after.
                </p>
                <p className="text-lg leading-relaxed">
                  So before touching design or engineering, I mapped out how each currency needed to behave: what KYC tier unlocked it, what limits applied, and how conversion logic would work without the user ever having to think about it.
                </p>
              </div>
            </div>

            {/* Designing the Wallet System */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Designing the Wallet System</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  With the compliance logic mapped, I worked with engineering to define how the system would actually behave for users.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Each wallet type, USD, CDF, NGN, EUR, GBP, CAD, had to do three things well:
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Be created independently based on user KYC level",
                    description: "Compliance-first approach to wallet creation"
                  },
                  {
                    icon: Zap,
                    title: "Hold and transfer value seamlessly",
                    description: "Instant transactions across all supported currencies"
                  },
                  {
                    icon: BarChart3,
                    title: "Sync in real time with our existing ledger system",
                    description: "Accurate balance tracking across all wallets"
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
                The result was a structure where each currency lived as its own account, but the user only ever saw one wallet.
              </p>
            </div>

            {/* Mapping the User Experience */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Mapping the User Experience</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Next, I moved to the user experience. The goal was to keep it simple; users shouldn't have to think about which currency wallet to use.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I designed the user flow in Figma, mapping out every interaction: creating a new wallet, funding it, viewing balances, and switching between currencies.
                </p>
                <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-8">
                  <p className="text-lg leading-relaxed font-semibold">
                    The design had to look effortless but handle complexity underneath.
                  </p>
                </div>
                <p className="text-lg leading-relaxed">
                  We tested small micro-interactions like currency switching and transaction confirmations to make the experience feel natural and fluid.
                </p>
              </div>
            </div>

            {/* Bringing It to Life */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Bringing It to Life</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Once the designs were finalized, I worked closely with the engineers during development to ensure everything aligned from wallet creation logic to transaction reconciliation.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I also collaborated with compliance and support teams to make sure we didn't miss any regulatory nuances.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  And in just a few weeks, the multi-currency wallet went live first in the DRC, then globally.
                </p>
                <div className="bg-card rounded-xl p-8 shadow-elegant border-l-4 border-accent">
                  <p className="text-lg leading-relaxed mb-4">
                    Users could now hold USD, CDF, and NGN wallets locally…
                  </p>
                  <p className="text-lg leading-relaxed">
                    And for global users, they could manage EUR, GBP, CAD, and NGN  all in one app.
                  </p>
                </div>
              </div>
            </div>

            {/* The Impact */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">The Impact</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed">
                  Within a few weeks of launch:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card rounded-2xl p-8 shadow-elegant text-center border-t-4 border-accent">
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">20%</div>
                  <p className="text-muted-foreground">Daily Active Usage Increase</p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-elegant text-center border-t-4 border-accent">
                  <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">10%</div>
                  <p className="text-muted-foreground">Cross-Currency Transaction Growth</p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-elegant text-center border-t-4 border-accent">
                  <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">∞</div>
                  <p className="text-muted-foreground">User Flexibility</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <p className="text-lg leading-relaxed mb-4">
                  Users finally had the flexibility to transact in the currencies they actually lived and earned in.
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  What I loved most was hearing users say, "I don't have to think twice anymore. I can just send money."
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  That's when I knew we'd built something meaningful.
                </p>
              </div>
            </div>

            {/* Reflection */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-6">Reflection</h2>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: "#1A1A1A" }}>
                  This project taught me how powerful simplicity can be — especially in fintech.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: "#1A1A1A" }}>
                  Under the hood, the system was complex: compliance mapping, currency logic, multiple regions, and technical integration.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: "#1A1A1A" }}>
                  But what users saw was freedom.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-semibold mb-6" style={{ color: "#1A1A1A" }}>
                  They didn't see the work. They just saw that it worked.
                </p>
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#1A1A1A" }}>
                  And that's the real magic of product management.
                </p>
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
              <Link to="/gamification" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous: Gamification</span>
                  <span className="sm:hidden">Previous</span>
                </Button>
              </Link>
              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <span className="hidden sm:inline">Next: DRC Payments</span>
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

export default MultiCurrencyWallet;
