import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "DRC Payments",
    description: "Leading product strategy for a fintech solution in the DRC. From research to MVP launch, onboarding 1,000+ agents.",
    tags: ["Product Management", "User Research", "MVP Launch"],
    href: "/projects",
  },
  {
    name: "Global Transfers",
    description: "Enabling cross-border payments that generated $200K+ revenue in 3 months with under 1-hour delivery times.",
    tags: ["Global Payments", "FX Strategy", "API Integration"],
    href: "/global-transfers",
  },
  {
    name: "Gamification",
    description: "Launched a gamification system for a BNPL product that boosted user retention by 10% through rewards.",
    tags: ["Gamification", "User Engagement", "BNPL"],
    href: "/gamification",
  },
  {
    name: "Multi-Currency Wallet",
    description: "Built a seamless multi-currency wallet system that increased daily active usage by 20%.",
    tags: ["Multi-Currency", "Compliance", "UX Design"],
    href: "/multi-currency-wallet",
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Work</h2>

          <div className="divide-y divide-border">
            {projects.map((project) => (
              <div
                key={project.name}
                className="grid grid-cols-1 md:grid-cols-[15%_35%_25%_25%] gap-6 items-center py-6 md:py-8"
              >
                {/* Col 1: Project Name */}
                <div className="font-bold text-lg">{project.name}</div>

                {/* Col 2: Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Col 3: Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#fadd93', color: '#1A1A1A' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Col 4: CTA */}
                <div className="flex justify-start md:justify-end">
                  <Link
                    to={project.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-[22px] transition-base hover:opacity-90"
                    style={{ backgroundColor: '#111111' }}
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
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
