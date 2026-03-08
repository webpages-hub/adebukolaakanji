import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import drcHero from "@/assets/drc-payments-hero.jpg";
import globalHero from "@/assets/global-transfers-hero.jpg";
import gamificationHero from "@/assets/gamification-hero.jpg";
import walletHero from "@/assets/multicurrency-wallet-hero.jpg";

const projects = [
  {
    name: "DRC Payments",
    description: "Leading product strategy for a fintech solution in the DRC. From research to MVP launch, onboarding 1,000+ agents.",
    image: drcHero,
    tags: ["Product Management", "User Research", "MVP Launch"],
    href: "/projects",
  },
  {
    name: "Global Transfers",
    description: "Enabling cross-border payments that generated $200K+ revenue in 3 months with under 1-hour delivery times.",
    image: globalHero,
    tags: ["Global Payments", "FX Strategy", "API Integration"],
    href: "/global-transfers",
  },
  {
    name: "Gamification",
    description: "Launched a gamification system for a BNPL product that boosted user retention by 10% through rewards.",
    image: gamificationHero,
    tags: ["Gamification", "User Engagement", "BNPL"],
    href: "/gamification",
  },
  {
    name: "Multi-Currency Wallet",
    description: "Built a seamless multi-currency wallet system that increased daily active usage by 20%.",
    image: walletHero,
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
                className="grid grid-cols-1 md:grid-cols-[15%_30%_25%_30%] gap-6 items-center py-6 md:py-8"
              >
                {/* Col 1: Project Name */}
                <div className="font-bold text-lg">{project.name}</div>

                {/* Col 2: Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Col 3: Preview Image */}
                <div className="rounded-lg overflow-hidden aspect-video bg-muted">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Col 4: Tags + CTA */}
                <div className="flex flex-col items-start md:items-end gap-3">
                  <div className="flex flex-col gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-border text-xs font-medium w-fit"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.href}
                    className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-[20px] px-4 py-2 hover:border-foreground transition-base"
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
