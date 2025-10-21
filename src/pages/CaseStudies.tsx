import Navigation from "@/components/Navigation";
import { Briefcase, Lightbulb, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const projects = [
    {
      href: "/projects",
      icon: Briefcase,
      timeline: "6 weeks",
      title: "Building a Local Payments MVP in 6 Weeks",
      description: "Leading product strategy for a fintech solution in the DRC. From research to MVP launch, onboarding 1,000+ agents and processing millions in transactions.",
      tags: ["Product Management", "User Research", "MVP Launch"],
      accentColor: "accent"
    },
    {
      href: "/global-transfers",
      icon: Lightbulb,
      timeline: "2 months",
      title: "Building Fast, Affordable Global Transfers from Africa",
      description: "Enabling cross-border payments that generated $200K+ revenue in 3 months with under 1-hour delivery times across multiple currency corridors.",
      tags: ["Global Payments", "FX Strategy", "API Integration"],
      accentColor: "primary"
    },
    {
      href: "/gamification",
      icon: Rocket,
      timeline: "1 month",
      title: "Making Payments Fun",
      description: "Launched a gamification system for a BNPL product that boosted user retention by 10% through progress-based rewards and level progression.",
      tags: ["Gamification", "User Engagement", "BNPL"],
      accentColor: "accent"
    },
    {
      href: "/multi-currency-wallet",
      icon: Rocket,
      timeline: "1 month",
      title: "Building a Multi-Currency Wallet for Everyday Transactions",
      description: "Built a seamless multi-currency wallet system that increased daily active usage by 20% and cross-currency transactions by 10%.",
      tags: ["Multi-Currency", "Compliance", "UX Design"],
      accentColor: "accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Case Studies
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore my journey building products that solve real problems and drive meaningful impact.
              </p>
            </div>
            
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Link 
                  key={project.href} 
                  to={project.href} 
                  className="block group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-accent-glow transition-smooth h-full border border-border hover:border-accent/50">
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className={`p-4 rounded-xl bg-${project.accentColor}/10 w-fit h-fit`}>
                          <project.icon className={`w-8 h-8 text-${project.accentColor}`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm text-muted-foreground">Case Study</span>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{project.timeline}</span>
                          </div>
                          
                          <h3 className={`text-2xl md:text-3xl font-bold mb-4 group-hover:text-${project.accentColor} transition-base`}>
                            {project.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <span 
                                key={tag} 
                                className="px-3 py-1 rounded-full bg-muted text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className={`flex items-center gap-2 text-${project.accentColor} font-medium group-hover:gap-4 transition-base`}>
                            Read Case Study <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-background border border-border p-8 rounded-2xl max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 text-center">
              If you care about creating products that truly make life easier for users, I'd love to be part of that journey.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  Let's Talk
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
            Adebukola Akanji. Building Products that Matter
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudies;
