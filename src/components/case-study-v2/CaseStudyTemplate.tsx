import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ContextTag from "@/components/case-study/ContextTag";
import ScrollReveal from "@/components/case-study/ScrollReveal";
import CaseStudyTOC from "@/components/case-study/CaseStudyTOC";
import { CaseStudyData } from "./types";

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "research-discovery", label: "Research & Discovery" },
  { id: "product-strategy", label: "Product Strategy" },
  { id: "execution", label: "Execution" },
  { id: "results", label: "Results" },
  { id: "key-takeaways", label: "Key Takeaways" },
];

const Paragraphs = ({ items }: { items: string[] }) => (
  <>
    {items.map((p, i) => (
      <p key={i} className="text-[15px] leading-[1.75] text-muted-foreground mb-4 last:mb-0">
        {p}
      </p>
    ))}
  </>
);

const CaseStudyTemplate = ({ data }: { data: CaseStudyData }) => {
  const { seo, hero, metadata, overview, research, productStrategy, execution, results, takeaways, navigation } = data;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="flex justify-center">
                <ContextTag tags={hero.tags} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {hero.title}
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex gap-12">
            <CaseStudyTOC sections={tocSections} />

            <div className="max-w-4xl flex-1 min-w-0 mx-auto">
              {/* Metadata Bar */}
              <ScrollReveal>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-card rounded-2xl p-6 md:p-8 mb-16 shadow-elegant">
                  {metadata.map((item) => (
                    <div key={item.label}>
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold mb-1.5">
                        {item.label}
                      </p>
                      <p className="text-base font-bold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Overview */}
              <ScrollReveal>
                <div id="overview" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Overview</h2>
                  <Paragraphs items={overview.paragraphs} />
                </div>
              </ScrollReveal>

              {/* Research & Discovery */}
              <ScrollReveal>
                <div id="research-discovery" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold mb-8 text-foreground">Research & Discovery</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                        Research Methods
                      </h3>
                      <ul className="space-y-3">
                        {research.methods.map((method, i) => (
                          <li key={i} className="flex gap-3 text-[15px] text-muted-foreground leading-[1.6]">
                            <span className="text-accent mt-1">•</span>
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                        Key Findings
                      </h3>
                      <Paragraphs items={research.findings} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Product Strategy */}
              <ScrollReveal>
                <div id="product-strategy" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Product Strategy</h2>
                  <Paragraphs items={productStrategy.paragraphs} />
                </div>
              </ScrollReveal>

              {/* Execution */}
              <ScrollReveal>
                <div id="execution" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Execution</h2>
                  {execution.intro && (
                    <p className="text-[15px] leading-[1.75] text-muted-foreground mb-8">{execution.intro}</p>
                  )}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {execution.cards.map((card) => (
                      <div key={card.number} className="bg-card border border-border rounded-xl p-6">
                        <span className="text-xs font-semibold text-accent mb-3 block">{card.number}</span>
                        <h3 className="text-[15px] font-bold text-foreground mb-2">{card.title}</h3>
                        <p className="text-[14px] text-muted-foreground leading-[1.6]">{card.description}</p>
                      </div>
                    ))}
                  </div>
                  {execution.extra && <Paragraphs items={execution.extra} />}
                </div>
              </ScrollReveal>

              {/* Results */}
              <ScrollReveal>
                <div id="results" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold mb-8 text-foreground">Results</h2>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {results.metrics.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                        <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center">
                          <Icon className="w-8 h-8 text-accent mx-auto mb-4" />
                          <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">{metric.value}</p>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                        </div>
                      );
                    })}
                  </div>
                  {results.extra && (
                    <ul className="space-y-2 mb-4">
                      {results.extra.map((item, i) => (
                        <li key={i} className="flex gap-3 text-[15px] text-muted-foreground leading-[1.6]">
                          <span className="text-accent mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>

              {/* Key Takeaways */}
              <ScrollReveal>
                <div id="key-takeaways" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold mb-8 text-foreground">Key Takeaways</h2>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {takeaways.cards.map((card, i) => (
                      <div key={i} className="bg-[#FDF5F0] rounded-xl p-6">
                        <span className="text-xs font-bold text-accent mb-3 block">#{i + 1}</span>
                        <h3 className="text-[15px] font-bold text-foreground mb-2">{card.title}</h3>
                        <p className="text-[14px] text-muted-foreground leading-[1.6]">{card.description}</p>
                      </div>
                    ))}
                  </div>
                  {takeaways.extra && <Paragraphs items={takeaways.extra} />}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 border-b border-border">
              <Link to={navigation.prev.href} className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous: {navigation.prev.label}</span>
                  <span className="sm:hidden">Previous</span>
                </Button>
              </Link>
              <Link to={navigation.next.href} className="w-full sm:w-auto">
                <Button variant="ghost" className="gap-2 w-full sm:w-auto">
                  <span className="hidden sm:inline">Next: {navigation.next.label}</span>
                  <span className="sm:hidden">Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <ScrollReveal>
              <ContactCard />
            </ScrollReveal>
          </div>
        </div>
      </section>

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

export default CaseStudyTemplate;
