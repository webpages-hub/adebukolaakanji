import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Lightbulb, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">Product Manager</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building Products That
              <span className="block gradient-accent bg-clip-text text-transparent">
                Make an Impact
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Transforming complex challenges into elegant solutions through research, 
              design thinking, and rapid execution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/projects" className="flex items-center gap-2">
                  View Projects <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Work</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Link to="/projects" className="block group">
                <div className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-accent-glow transition-smooth h-full">
                  <div className="p-8">
                    <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm text-muted-foreground">Case Study</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">6 weeks</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-accent transition-base">
                      Building a Local Payments MVP in 6 Weeks
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Leading product strategy for a fintech solution in the DRC. From research to MVP launch, 
                      onboarding 1,000+ agents and processing millions in transactions.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Product Management", "User Research", "MVP Launch"].map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 rounded-full bg-muted text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-base">
                      Read Case Study <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/global-transfers" className="block group">
                <div className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-accent-glow transition-smooth h-full">
                  <div className="p-8">
                    <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm text-muted-foreground">Case Study</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">2 months</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-base">
                      Building Fast, Affordable Global Transfers from Africa
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Enabling cross-border payments that generated $200K+ revenue in 3 months 
                      with under 1-hour delivery times across multiple currency corridors.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Global Payments", "FX Strategy", "API Integration"].map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 rounded-full bg-muted text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-base">
                      Read Case Study <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">My Approach</h2>
              <p className="text-xl text-muted-foreground">
                I believe great products come from understanding real user needs and executing with focus.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Research First",
                  description: "Deep user research and market analysis to uncover real problems worth solving."
                },
                {
                  icon: Briefcase,
                  title: "Strategic Execution",
                  description: "Balancing business goals with user needs through clear prioritization."
                },
                {
                  icon: Rocket,
                  title: "Rapid Iteration",
                  description: "Fast MVP development with continuous learning and improvement."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-base text-center"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p>© 2025 Portfolio. Building products that matter.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
