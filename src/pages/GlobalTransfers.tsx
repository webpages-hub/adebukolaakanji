import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Clock, DollarSign, Zap, Users, ArrowRight, CheckCircle2, Target, BarChart3, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import globalTransfersHero from "@/assets/global-transfers-hero.jpg";

const GlobalTransfers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="mb-16 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#1A1A1A" }}>
            Building Fast, Affordable Global Transfers from Africa
          </h1>

          {/* Hero Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={globalTransfersHero} 
              alt="Global Transfers User Interface" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Project Meta Cards */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant mb-8">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1A1A1A" }}>Project Overview</h2>
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
        </div>

        {/* Currency Network Visualization - REMOVED */}

        {/* Hook Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-primary" />
            The Moment It Hit Me
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I still remember the first time I saw it.
            </p>
            <p className="text-lg leading-relaxed">
              A customer had tried to send $1000 to the United Arab Emirates from the Democratic Republic of Congo, and it took <span className="font-bold text-primary">five days</span> to get to the receiver.
            </p>
            
            <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/30">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-destructive" />
                <span className="font-semibold">Five whole days.</span>
              </div>
              <p className="text-muted-foreground">
                And when it finally landed, the receiver got less than expected. Fees. Exchange losses. Delays.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              That was the moment I knew: <span className="font-bold">the global money transfer system was broken for ordinary users.</span>
            </p>
            <p className="text-lg leading-relaxed">
              So we decided to fix it, to make international transfers faster, cheaper, and more transparent. And I was leading the product charge.
            </p>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            International money transfers sound simple until you're the one building them.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The existing rails were slow and expensive. Users waited days, sometimes a week. Partners took high fees. Currency spreads were unpredictable.
          </p>

          <h3 className="text-2xl font-bold mb-4">The Goal</h3>
          <p className="text-lg leading-relaxed mb-4">We needed to build a product that could:</p>
          <div className="space-y-4">
            <div className="p-5 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>Move money across borders within minutes, not days</div>
              </div>
            </div>
            <div className="p-5 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>Offer competitive exchange rates without losing margin</div>
              </div>
            </div>
            <div className="p-5 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>Stay compliant while integrating licensed global partners</div>
              </div>
            </div>
            <div className="p-5 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>Scale seamlessly once adoption began</div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1: Research */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              1
            </div>
            <h2 className="text-3xl font-bold">Researching the Global Flows</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            We started by asking: <span className="font-bold">where do our users actually send money?</span>
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
              <div className="text-2xl font-bold mb-2">🌍 → 🇪🇺</div>
              <div className="font-semibold mb-1">Africa → Europe</div>
              <div className="text-sm text-muted-foreground">UK and France</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30">
              <div className="text-2xl font-bold mb-2">🌍 → 🇨🇳</div>
              <div className="font-semibold mb-1">Africa → Asia</div>
              <div className="text-sm text-muted-foreground">Trade settlements</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
              <div className="text-2xl font-bold mb-2">💱</div>
              <div className="font-semibold mb-1">Top Pairs</div>
              <div className="text-sm text-muted-foreground">USD/CNY, USD/NGN, EUR/USD</div>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            I dug into currency behaviors, volatility patterns, and average delivery times. Then I benchmarked competitors like Wise, Remitly, and Sendwave. What were they charging, how fast were they delivering, and how could we stand out?
          </p>
        </section>

        {/* Transaction Flow */}
        <section className="mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-background to-primary/5 border border-primary/20">
            <h3 className="text-xl font-bold mb-6 text-center">Optimized Transaction Flow</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 p-6 rounded-xl bg-background border border-primary/30 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="font-semibold mb-1">Sender</div>
                <div className="text-sm text-muted-foreground">Initiates transfer</div>
              </div>
              
              <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
              
              <div className="flex-1 p-6 rounded-xl text-center text-white shadow-accent-glow" style={{ backgroundColor: "#FFB703" }}>
                <Zap className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Partner API</div>
                <div className="text-sm opacity-90">Real-time processing</div>
              </div>
              
              <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
              
              <div className="flex-1 p-6 rounded-xl bg-background border border-accent/30 text-center">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="font-semibold mb-1">Recipient</div>
                <div className="text-sm text-muted-foreground">Receives funds</div>
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Average delivery: <span className="font-bold text-primary">Under 1 hour</span>
            </div>
          </div>
        </section>

        {/* Step 3: FX Rates */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              3
            </div>
            <h2 className="text-3xl font-bold">Setting the Right FX Rates</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Global transfers live and die by their rates. If you set them too high, users leave. Too low, and your business bleeds. To solve this, I collaborated with finance and data teams to build a bid-ask rate model:
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex gap-4 p-4 rounded-lg bg-card">
              <div className="text-3xl">⬇️</div>
              <div>
                <div className="font-bold text-xl mb-2">Bid Rate</div>
                <p className="text-muted-foreground">The price users buy foreign currency at</p>
              </div>
            </li>
            
            <li className="flex gap-4 p-4 rounded-lg bg-card">
              <div className="text-3xl">⬆️</div>
              <div>
                <div className="font-bold text-xl mb-2">Ask Rate</div>
                <p className="text-muted-foreground">The rate we get from our partner or liquidity provider</p>
              </div>
            </li>
          </ul>

          <div className="p-6 rounded-xl border border-primary/30" style={{ backgroundColor: "#FFB703" }}>
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-6 h-6 text-white" />
              <div className="font-bold text-lg text-white">The Spread = Our Margin</div>
            </div>
            <p className="text-white/90">
              A delicate balance between user value and revenue. We monitored FX movements across key pairs daily and adjusted automatically based on volatility.
            </p>
          </div>
        </section>

        {/* Step 4: Design */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              4
            </div>
            <h2 className="text-3xl font-bold">Designing the Experience</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Speed and affordability don't matter if the experience feels confusing. So I worked with designers to create a simple, transparent flow:
          </p>

          <div className="space-y-3">
            {[
              'Choose country and currency',
              'Enter amount',
              'Instantly see delivery time, fees, and exchange rate',
              'Confirm and send'
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="font-medium">{step}</div>
              </div>
            ))}
          </div>

          <p className="text-lg leading-relaxed mt-6">
            We added a real-time rate refresh timer so users always felt in control.
          </p>
        </section>

        {/* Step 5: Launch Results */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              5
            </div>
            <h2 className="text-3xl font-bold">Launching and Scaling</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            We rolled out gradually, starting with limited corridors. Then, as adoption grew, we expanded coverage and optimized delivery speed through batch processing and better partner routing.
          </p>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/30 mb-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">First 3 Months Results</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-background/50">
                <DollarSign className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  $200K+
                </div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-background/50">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Millions
                </div>
                <div className="text-sm text-muted-foreground">Transaction Value</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-background/50">
                <Clock className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  &lt;1 Hour
                </div>
                <div className="text-sm text-muted-foreground">Avg. Delivery Time</div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-lg font-semibold">Users loved it. Agents trusted it.</p>
            <p className="text-lg font-semibold">And leadership saw it as a blueprint for global expansion.</p>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What I Learned</h2>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              This project taught me that global payments aren't just a financial problem, they're a trust problem.
            </p>
            
            <p className="text-lg leading-relaxed">
              Users don't just want cheaper transfers. They want to know exactly what happens between "Send" and "Received."
            </p>

            <div className="p-8 rounded-xl bg-white border-2 border-primary/40 shadow-lg">
              <div className="font-bold text-2xl mb-4 text-primary">I learned how to:</div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-lg">Balance profitability with user trust through rate setting</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-lg">Manage complex integrations without sacrificing speed</div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-lg">Launch a global-facing product under strict compliance and time pressure</div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="p-8 md:p-12 rounded-2xl bg-white border border-foreground/20 text-center">
            <p className="text-xl md:text-2xl leading-relaxed mb-6 text-foreground">
              If you care about creating products that truly make life easier for users, I'd love to be part of that journey.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
                Let's talk
              </Button>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <section>
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
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Adebukola Akanji. Building Products that Matter
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GlobalTransfers;