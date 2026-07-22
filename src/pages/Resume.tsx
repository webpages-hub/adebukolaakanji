import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";
import { Mail, Phone, Linkedin, MapPin, Download, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
              <a href="https://www.linkedin.com/in/aadebukola/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-base">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <Link to="/" className="hover:text-accent transition-base">
                Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Professional Summary</h2>
          <div className="glass-card p-6">
            <p className="text-muted-foreground leading-relaxed">
              Product Manager specialising in cross-border payments, fintech infrastructure, and emerging market expansion. Over 5 years of experience building financial products across complex markets, including launching products across six countries, developing payment infrastructure in the DRC, and scaling solutions that generated millions in transaction volume and revenue. Experienced in product strategy, market expansion, partnerships, and cross-functional execution.
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
                <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
              </div>
              <div className="text-sm text-muted-foreground md:text-right mt-2 md:mt-0">
                <p className="font-bold text-foreground md:text-left">Product Manager, International Expansion</p>
                <p>April 2023 – Present</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic mb-4">
              Nomba is a B2B fintech building payment infrastructure and financial solutions for businesses across emerging markets.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Led product strategy and execution for international payment expansion across six markets (UK, Canada, France, Belgium, Germany, and DRC), taking products from concept to launch within six weeks.",
                "Built DRC's local payment infrastructure through partnerships with mobile money operators and banks, launching an interoperable platform used by agents, developers, and merchants to process local transactions.",
                "Led the development and scaling of DRC's cross-border payment infrastructure, partnering with banks, payment providers, compliance, and engineering teams to launch payment capabilities that generated $600K+ in revenue within eight months.",
                "Expanded payment capabilities across four currency corridors, scaling the global expansion product to process $1M+ in total payment volume within twelve months of launch.",
                "Owned API payment products supporting external integrations, including authentication, webhooks, transaction status, and settlement flows, maintaining 99% uptime for partner-facing payment services.",
                "Launched a multi-currency wallet supporting USD and CDF payments within five weeks, increasing daily active users by 20% and cross-currency transactions by 10%.",
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
                <h3 className="text-xl font-semibold text-foreground">Payfinancials Technology</h3>
                <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
              </div>
              <div className="text-sm text-muted-foreground md:text-right mt-2 md:mt-0">
                <p className="font-medium text-foreground">Product Manager</p>
                <p>October 2022 – March 2023</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic mb-4">
              Payfi was a fintech platform providing digital financial services including buy-now-pay-later solutions and payment products.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Developed go-to-market strategy for Canada expansion, aligning product, compliance, and partnership workstreams to support market entry.",
                "Owned roadmap execution for lending and payment products including BNPL, Ride Now Pay Later (RNPL), virtual wallet, and bill payments.",
                "Improved product outcomes by 25% through data-driven decision frameworks that reduced bugs and optimized conversion across customer journeys.",
                "Designed and launched a gamification and rewards experience that increased user retention by 10%.",
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
                <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
              </div>
              <div className="text-sm text-muted-foreground md:text-right mt-2 md:mt-0">
                <p className="font-medium text-foreground">Product Manager</p>
                <p>January 2021 – September 2022</p>
              </div>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Managed delivery of five concurrent media products, improving on-time delivery by 30% and reducing project costs by 20%.",
                "Led a cross-functional team of 15+ to launch a multi-channel content product that increased audience engagement by 40%.",
                "Introduced product management frameworks that improved delivery efficiency by 25% and reduced tracking errors by 35%.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education & Certification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Education & Certification</h2>
          <div className="glass-card p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-foreground">University of Alberta via Coursera</h3>
              <p className="text-sm font-medium text-foreground">2022</p>
            </div>
            <p className="text-muted-foreground">Software Product Management</p>
          </div>
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-foreground">University of Ilorin, Nigeria</h3>
              <p className="text-sm font-medium text-foreground">2021</p>
            </div>
            <p className="text-muted-foreground mb-2">B.Sc. Library and Information Science | First Class Honours (GPA: 4.59/5.0)</p>
            <p className="text-sm text-foreground">Award: Best Graduating Student, Department of Library and Information Science</p>
          </div>
        </section>

        {/* Core Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Core Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Product Strategy", desc: "Product Vision & Roadmap, Market Expansion, Product Discovery, Business Case Development, Go-to-Market Strategy, Product Analytics." },
              { title: "Payments", desc: "Cross-Border Payments, Remittance Infrastructure, Payment Corridors, Settlement Systems, Multi-Currency Wallets, Payment APIs, Webhooks, Transaction Lifecycle Management." },
              { title: "Market & Partnerships", desc: "Partner Evaluation, Payment Provider Integrations, Banking Partnerships, Regulatory Collaboration, Emerging Markets." },
              { title: "Tools", desc: "SQL, Mixpanel, Amplitude, Jira, Linear, Notion, Confluence, Figma, Miro." },
              { title: "API & Technical Products", desc: "API Workflow Testing, Sandbox Testing, System Design Collaboration, Merchant Integration Support, Documentation Architecture." },
              { title: "Growth", desc: "Funnel Analysis, Conversion Optimization, Retention, Referral Programs, Experiment Design." },
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
