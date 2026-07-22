import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import drcHero from "@/assets/drc-payments-hero.jpg";
import globalExpansionHero from "@/assets/global-expansion-hero.jpg";
import globalHero from "@/assets/global-transfers-hero.jpg";
import gamificationHero from "@/assets/gamification-hero.jpg";
import multicurrencyHero from "@/assets/multicurrency-wallet-hero.jpg";

const projects = [
  {
    number: "2024",
    name: "DRC Payments",
    description: "Led Nomba's first international expansion into DRC, building an interoperable payments platform that onboarded 3,000+ agents, merchants, and consumers while processing $100K+ in local payment volume within six weeks.",
    tags: ["MARKET ENTRY", "USER RESEARCH", "MVP LAUNCH"],
    href: "/projects",
    image: drcHero,
  },
  {
    number: "2025",
    name: "Global Expansion",
    description: "Scaled Nomba's expansion model across six markets by building a cross-border payments product for African diaspora customers, processing $1M+ transaction volume and improving onboarding conversion from 11% to 90%.",
    tags: ["DIASPORA PAYMENTS", "MARKET EXPANSION", "REMITTANCE"],
    href: "/global-expansion",
    image: globalExpansionHero,
  },
  {
    number: "2025",
    name: "Global Transfers",
    description: "Built cross-border payment infrastructure enabling businesses in DRC to make international payments, reducing transaction costs, improving settlement times, and generating $600K+ in revenue within eight months.",
    tags: ["CROSS-BORDER PAYMENTS", "GO-TO-MARKET", "REVENUE GROWTH"],
    href: "/global-transfers",
    image: globalHero,
  },
  {
    number: "2023",
    name: "Gamification",
    description: "Improved BNPL retention by designing a gamification experience that encouraged repeat usage through behavioural incentives, increasing user retention by 10% within three months of launch.",
    tags: ["RETENTION STRATEGY", "USER ENGAGEMENT", "BEHAVIORAL DESIGN"],
    href: "/gamification",
    image: gamificationHero,
  },
  {
    number: "2024",
    name: "Multi-Currency Wallet",
    description: "Built Nomba's multi-currency wallet experience, enabling users to hold and manage five currencies seamlessly while increasing daily active usage by 20% and driving 10% growth in cross-currency transactions.",
    tags: ["PRODUCT STRATEGY", "USER EXPERIENCE", "GROWTH"],
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
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center ${idx === projects.length - 1 ? '' : 'pb-12 border-b border-border md:pb-0 md:border-b-0'}`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className={`overflow-hidden aspect-[4/3] ${project.name === "Global Expansion" ? "" : "rounded-2xl"}`}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{project.number}</span>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold tracking-wider text-muted-foreground uppercase bg-muted px-3 py-1 rounded-full"
                      >
                        {tag}
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
                    className="group inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border transition-base bg-accent border-accent text-accent-foreground hover:opacity-90 md:bg-transparent md:border-foreground md:text-foreground md:hover:opacity-100 md:hover:bg-primary md:hover:text-primary-foreground"
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
