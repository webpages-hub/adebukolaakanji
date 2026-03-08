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
    description: "Six weeks. That's how long it took to go from zero to a live, locally compliant payment product in the DRC. I conducted on-ground research, shaped the MVP, and drove rapid adoption across a brand new market.",
    tags: ["MARKET ENTRY", "USER RESEARCH", "MVP LAUNCHojects",
    image: drcHero,
  },
  {
    number: "2025",
    name: "Global Transfers",
    description: "People sending money home shouldn't have to wait days to know it arrived. I built the product that made it happen in under an hour, and grew it to $600K in revenue within seven months.",
    tags: ["GlobalCROSS-CROSS-CROSS-BORDER PAYMENTS", "GO-TO-MARKET", "REVENUE GROWTH  href: "/global-transfers",
    image: globalHero,
  },
  {
    number: "2023",
    name: "Gamification",
    description: "Users weren't sticking around. Rather than spamming them with push notifications, I dug into why, then built a badge and rewards system tied directly to how they actually used the product. Retention went up 10%.",
    tags: ["RETENTION STRATEGY", "USER ENGAGEMENT", "BEHAVIORAL DESIGN "BEHAVIORAL DESIGN"],
    href: "/gamification",
    image: gamificationHero,
  },
  {
    number: "2024",
    name: "Multi-Currency Wallet",
    description: "Managing money across currencies shouldn't feel like a chore. I built a wallet that made it feel effortless, and the 20% jump in daily active usage told us users agrPRODUCT STRATEGY", "USER EXPERIENCE", "GROWTHliance", "UX Design"],
    href: "/multi-currency-wallet",
    image: multicurrencyHero,
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What I've Built</h2>

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
