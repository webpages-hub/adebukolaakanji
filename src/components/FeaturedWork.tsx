import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import drcHero from "@/assets/drc-payments-hero.jpg";
import globalHero from "@/assets/global-transfers-hero.jpg";
import gamificationHero from "@/assets/gamification-hero.jpg";
import multicurrencyHero from "@/assets/multicurrency-wallet-hero.jpg";

const projects = [
  {
    number: "2024",
    name: "DRC Payments",
    description: "Leading product strategy for a fintech solution in the DRC. From research to MVP launch, onboarding 1,000+ agents.",
    tags: ["PRODUCT MANAGEMENT", "USER RESEARCH", "MVP LAUNCH"],
    href: "/projects",
    image: drcHero,
  },
  {
    number: "02",
    name: "Global Transfers",
    description: "Enabling cross-border payments that generated $200K+ revenue in 3 months with under 1-hour delivery times.",
    tags: ["GLOBAL PAYMENTS", "FX STRATEGY", "API INTEGRATION"],
    href: "/global-transfers",
    image: globalHero,
  },
  {
    number: "03",
    name: "Gamification",
    description: "Launched a gamification system for a BNPL product that boosted user retention by 10% through rewards.",
    tags: ["GAMIFICATION", "USER ENGAGEMENT", "BNPL"],
    href: "/gamification",
    image: gamificationHero,
  },
  {
    number: "04",
    name: "Multi-Currency Wallet",
    description: "Built a seamless multi-currency wallet system that increased daily active usage by 20%.",
    tags: ["MULTI-CURRENCY", "COMPLIANCE", "UX DESIGN"],
    href: "/multi-currency-wallet",
    image: multicurrencyHero,
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Work</h2>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <div
                key={project.name}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="text-sm italic text-muted-foreground">{project.number}</span>

                  <div className="flex flex-wrap items-center gap-x-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className="flex items-center gap-2">
                        {tag}
                        {i < project.tags.length - 1 && <span className="text-border">|</span>}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <Link
                    to={project.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-foreground text-foreground transition-base hover:bg-primary hover:text-primary-foreground"
                  >
                    View Case Study <ArrowRight className="w-4 h-4 animate-arrow-bounce" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
