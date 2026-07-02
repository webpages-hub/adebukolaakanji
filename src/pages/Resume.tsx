import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Adebukola_Akanji_Product_Manager.pdf';
    link.download = 'Adebukola_Akanji_Product_Manager.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Resume — Adebukola Akanji" description="Resume and experience of Adebukola Akanji, Product Manager in fintech and global payments." path="/resume" />
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        {/* Download Button */}
        <div className="flex justify-end mb-6 print:hidden">
          <Button onClick={handleDownloadPDF} variant="outline" className="gap-2 text-muted-foreground border-border hover:text-foreground">
            <Download className="w-4 h-4" />
            Save as PDF
          </Button>
        </div>
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading">
            ADEBUKOLA AKANJI
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:adebukolaakanji@gmail.com" className="hover:text-accent transition-base">
                adebukolaakanji@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+2347065197102</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-base">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Professional Summary</h2>
          <div className="glass-card p-6">
            <p className="text-muted-foreground leading-relaxed">
              Product Manager specialising in cross-border payments and emerging markets expansion. Over 4.5 years in fintech, I have taken products from zero to live across six markets, built payment infrastructure that generated $600K in fee revenue within eight months, and scaled a global expansion product to process over $1M in total payment volume. I build financial products that work in the markets businesses find too complex to enter.
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Professional Experience</h2>
          
          {/* Nomba */}
          <div className="glass-card p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Nomba Financial Services</h3>
                <p className="text-sm text-muted-foreground">Lagos State, Nigeria</p>
              </div>
              <div className="text-sm text-muted-foreground md:text-right mt-2 md:mt-0">
                <p className="font-bold text-foreground md:text-left">Product Manager</p>
                <p>April 2023 – Present</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic mb-4">
              A B2B fintech with $58.5M in funding, providing payment infrastructure and solutions to 1M+ businesses across multiple markets.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Served as the founding PM for Nomba's global business expansion, taking a product from zero to live across six markets in under six weeks: UK, Canada, France, Belgium, Germany, and DRC.",
                "Scaled the expansion product to process over $1M in total payment volume across four currency corridors within twelve months of launch.",
                "Built the DRC payments infrastructure from scratch, launching a cross-border corridor that generated $600K in fee revenue within eight months.",
                "Owned end-to-end product strategy, roadmap, and delivery for Nomba's Global Payouts and Collections API product, collaborating with engineering on system design and validating API workflows.",
                "Built and scaled a multi-currency wallet, increasing daily active usage by 20% and cross-currency transactions by 10% within the first months of launch.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payfi */}
          <div className="glass-card p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Payfi Financials</h3>
                <p className="text-sm text-muted-foreground">Lagos State, Nigeria</p>
              </div>
              <div className="text-sm text-muted-foreground md:text-right mt-2 md:mt-0">
                <p className="font-medium text-foreground">Product Manager</p>
                <p>October 2022 – March 2023</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic mb-4">
              A Techstars-backed Buy Now Pay Later (BNPL) fintech helping users improve financial flexibility.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Developed the go-to-market strategy for Canada expansion, aligning product, compliance, and partnership workstreams to prepare for market entry.",
                "Reduced bug rates and improved conversion through data-driven decision frameworks, improving product outcomes by 25%.",
                "Launched a gamification and rewards feature that increased user retention by 10%.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Metrix */}
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Top Metrix Media Solutions</h3>
                <p className="text-sm text-muted-foreground">Lagos State, Nigeria</p>
              </div>
              <div className="text-sm text-muted-foreground md:text-right mt-2 md:mt-0">
                <p className="font-medium text-foreground">Product Manager</p>
                <p>January 2021 – September 2022</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic mb-4">
              A startup specializing in YouTube growth & digital content strategies.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Managed end-to-end delivery of five concurrent media products, improving on-time delivery by 30% and reducing project costs by 20%.",
                "Led a cross-functional team of 15+ designers, editors, and marketing specialists to launch a multi-channel content product that increased audience engagement by 40%.",
                "Introduced a structured product management framework across the team, improving delivery efficiency by 25% and reducing tracking errors by 35%.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Education</h2>
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-foreground">University of Ilorin, Nigeria</h3>
              <p className="text-sm font-medium text-foreground">GPA: 4.59/5.0</p>
            </div>
            <p className="text-muted-foreground mb-2">B.Sc. Library and Information Science | First Class Honors</p>
            <p className="text-sm text-foreground">Award: Best Graduating Student, Department of Library and Information Science.</p>
          </div>
        </section>

        {/* Key Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Product Management", desc: "Go-to-Market Strategy, Product Lifecycle Management, Growth Strategy, Stakeholder Management, Market Research, Agile & Scrum." },
              { title: "Fintech & Payments", desc: "Cross-Border Payments, Multi-Currency Wallets, International Expansion, Remittance Solutions, Regulatory Compliance, Market Localization." },
              { title: "Technical & Analytical", desc: "SQL, Product Analytics, Cohort Analysis, A/B Testing, Mixpanel, Jira, Figma." },
              { title: "Leadership & Strategy", desc: "OKRs, Product Strategy Alignment, Cross-Functional Collaboration, Partner Management." },
              { title: "AI & Productivity Tools", desc: "Claude, Perplexity AI, Lovable, NotebookLM, Cursor, Claude Code, Notion." },
            ].map((skill) => (
              <div key={skill.title} className="glass-card p-6">
                <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

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

export default Resume;
