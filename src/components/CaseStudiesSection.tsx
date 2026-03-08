import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    name: "DRC Payments MVP",
    description: "Leading product strategy for a fintech solution in the DRC. From research to MVP launch, onboarding 1,000+ agents.",
    tags: ["Product Management", "User Research", "MVP Launch"],
    href: "/projects",
    category: ["live"],
  },
  {
    name: "Global Transfers",
    description: "Enabling cross-border payments that generated $200K+ revenue in 3 months with under 1-hour delivery times.",
    tags: ["Global Payments", "FX Strategy", "API Integration"],
    href: "/global-transfers",
    category: ["live"],
  },
  {
    name: "Gamification",
    description: "Launched a gamification system for a BNPL product that boosted user retention by 10% through rewards.",
    tags: ["Gamification", "User Engagement", "BNPL"],
    href: "/gamification",
    category: ["live"],
  },
  {
    name: "Multi-Currency Wallet",
    description: "Built a seamless multi-currency wallet system that increased daily active usage by 20%.",
    tags: ["Multi-Currency", "Compliance", "UX Design"],
    href: "/multi-currency-wallet",
    category: ["live"],
  },
];

const tabs: { label: string; value: "all" | "live" | "vibe" }[] = [
  { label: "All", value: "all" },
  { label: "Live Projects", value: "live" },
  { label: "Vibe Coded Projects", value: "vibe" },
];

const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState<"all" | "live" | "vibe">("all");

  const filtered =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category.includes(activeTab));

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Case Studies</h2>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`text-sm font-medium px-5 py-[10px] rounded-full transition-base ${
                  activeTab === tab.value
                    ? "text-white"
                    : "text-foreground hover:text-accent"
                }`}
                style={activeTab === tab.value ? { backgroundColor: '#111111' } : {}}
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
                className="grid grid-cols-1 md:grid-cols-[20%_35%_20%_25%] gap-6 items-center py-6 md:py-8"
              >
                {/* Col 1: Name */}
                <div className="font-bold text-lg">{cs.name}</div>

                {/* Col 2: Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cs.description}
                </p>

                {/* Col 3: Image placeholder */}
                <div className="rounded-lg aspect-video bg-muted flex items-center justify-center text-xs text-muted-foreground">
                  [IMAGE]
                </div>

                {/* Col 4: Tags + CTA */}
                <div className="flex flex-col items-start md:items-end gap-3">
                  <div className="flex flex-col gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-border text-xs font-medium w-fit"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={cs.href}
                    className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-[20px] px-4 py-2 hover:border-foreground transition-base"
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
  );
};

export default CaseStudiesSection;
