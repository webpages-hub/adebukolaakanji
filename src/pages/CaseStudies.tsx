import Navigation from "@/components/Navigation";
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
    description: "Six weeks. That's how long it took to go from zero to a live, locally compliant payment product in the DRC. I conducted on-ground research, shaped the MVP, and drove rapid adoption across a brand new market.",
    tags: ["MARKET ENTRY", "USER RESEARCH", "MVP LAUNCH"],
    href: "/projects",
    category: ["live"],
  },
  {
    name: "Global Transfers",
    description: "People sending money home shouldn't have to wait days to know it arrived. I built the product that made it happen in under an hour, and grew it to $600K in revenue within seven months.",
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
                  className="grid grid-cols-1 md:grid-cols-[20%_40%_20%_20%] gap-6 items-center py-6 md:py-8"
                >
                  <div className="font-bold text-lg">{cs.name}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cs.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-start md:justify-end">
                    <Link
                      to={cs.href}
                      className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-[22px] transition-base hover:opacity-90 bg-primary text-primary-foreground"
                    >
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
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
