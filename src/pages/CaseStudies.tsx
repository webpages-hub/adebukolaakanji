import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type Category = "all" | "live" | "vibe";

interface CaseStudy {
  name: string;
  description: string;
  tags: string[];
  href: string;
  category: Category[];
}

const caseStudies: CaseStudy[] = [
  {
    name: "DRC Payments",
    description: "Led Nomba's first international expansion into DRC, building an interoperable payments platform that onboarded 3,000+ agents, merchants, and consumers while processing $100K+ in local payment volume within six weeks.",
    tags: ["MARKET ENTRY", "USER RESEARCH", "MVP LAUNCH"],
    href: "/drc-payments",
    category: ["live"],
  },
  {
    name: "Global Expansion",
    description: "Scaled Nomba's expansion model across six markets by building a cross-border payments product for African diaspora customers, processing $1M+ transaction volume and improving onboarding conversion from 11% to 90%.",
    tags: ["DIASPORA PAYMENTS", "MARKET EXPANSION", "REMITTANCE"],
    href: "/global-expansion",
    category: ["live"],
  },
  {
    name: "Global Transfers",
    description: "Built cross-border payment infrastructure enabling businesses in DRC to make international payments, reducing transaction costs, improving settlement times, and generating $600K+ in revenue within eight months.",
    tags: ["CROSS-BORDER PAYMENTS", "GO-TO-MARKET", "REVENUE GROWTH"],
    href: "/global-transfers",
    category: ["live"],
  },
  {
    name: "Gamification",
    description: "Users weren't sticking around. Rather than spamming them with push notifications, I dug into why, then built a badge and rewards system tied directly to how they actually used the product. Retention went up 10%.",
    tags: ["RETENTION STRATEGY", "USER ENGAGEMENT", "BEHAVIORAL DESIGN"],
    href: "/gamification",
    category: ["live"],
  },
  {
    name: "Multi-Currency Wallet",
    description: "Managing money across currencies shouldn't feel like a chore. I built a wallet that made it feel effortless, and the 20% jump in daily active usage told us users agreed.",
    tags: ["PRODUCT STRATEGY", "USER EXPERIENCE", "GROWTH"],
    href: "/multi-currency-wallet",
    category: ["live"],
  },
  {
    name: "PM Log",
    description: "A side project I am driving to help aspiring and junior product managers build their skills and get better at being product managers.",
    tags: ["PRODUCT MANAGEMENT", "SKILL BUILDING", "MENTORSHIP"],
    href: "https://pmlog.vercel.app/",
    category: ["vibe"],
  },
];

const tabs: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Live Projects", value: "live" },
  { label: "Vibe Coded Projects", value: "vibe" },
];

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filtered =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category.includes(activeTab));

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Case Studies — Adebukola Akanji" description="Fintech and payments case studies from Adebukola Akanji: market entry, cross-border transfers, retention, and multi-currency wallets." path="/case-studies" />
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Case Studies
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Every case study here started with a real user problem and a team trying to figure out the right answer. Here's what we learned.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`text-sm font-medium px-5 py-[10px] rounded-full transition-base ${
                    activeTab === tab.value
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Rows */}
            <div className="divide-y divide-border">
              {filtered.map((cs) => (
                <div
                  key={cs.name}
                  className="grid grid-cols-1 md:grid-cols-[25fr_55fr_20fr] gap-6 items-center py-6 md:py-8"
                >
                  <div className="font-bold text-lg">{cs.name}</div>
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cs.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-muted-foreground uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-start md:justify-end">
                    {cs.href.startsWith("http") ? (
                      <a
                        href={cs.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline transition-base"
                      >
                        Visit Project <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        to={cs.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline transition-base"
                      >
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                No projects in this category yet. Check back soon!
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <ContactCard />

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

export default CaseStudies;
