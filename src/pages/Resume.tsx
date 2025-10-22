import Navigation from "@/components/Navigation";
import { Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";
import { Link } from "react-router-dom";
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
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        {/* Download Button */}
        <div className="flex justify-end mb-6 print:hidden">
          <Button onClick={handleDownloadPDF} className="gap-2">
            <Download className="w-4 h-4" />
            Save as PDF
          </Button>
        </div>
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
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
              Product Manager with a strong track record in scaling fintech products, cross-border payment growth, and international market expansion. Experienced in leading go-to-market strategies across Africa, Europe, and North America, and aligning products with regulatory and user needs. Adept at driving measurable business growth through data-driven decisions, strategic partnerships, and customer-centric innovation.
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
              A fintech with $58.5M in funding, providing payment solutions to 1M+ users across multiple markets.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Drove international expansion into four new markets (UK, Canada, France, and Belgium) within two months, leveraging user research and product localization to achieve rapid go-to-market readiness.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Led market entry into the Democratic Republic of Congo, localizing the product for regulatory and cultural fit within six weeks, resulting in rapid user adoption and strong transaction growth.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Launched a cross-border payment product that generated $200K in revenue within 3 months, driving early adoption in high-value remittance corridors.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Built and scaled a multi-currency wallet, increasing daily active usage by 20% and boosting cross-currency transactions by 10%.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Designed a rewards-based agent acquisition model, improving onboarding efficiency by 15% and agent engagement by 25%, strengthening network growth in emerging markets.</span>
              </li>
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
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Developed a go-to-market strategy for Canada, aligning product compliance, user behavior insights, and partnerships to position Payfi for global expansion.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Implemented data-driven decision frameworks through A/B testing, cohort analysis, and user feedback loops that improved product outcomes by 25%.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Launched a gamification and rewards system, improving user retention by 10% and increasing BNPL customer engagement.</span>
              </li>
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
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Managed 5+ media projects, improving on-time delivery by 30% and reducing costs by 20% through efficient project management and process improvements.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Launched multi-channel campaigns that increased audience engagement by 40% through data-backed optimization.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">•</span>
                <span>Introduced a project management system that improved team efficiency by 35%.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Education</h2>
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <h3 className="text-xl font-semibold text-foreground">University of Ilorin, Nigeria</h3>
              <p className="text-sm font-medium" style={{ color: "#1A1A1A" }}>GPA: 4.59/5.0</p>
            </div>
            <p className="text-muted-foreground mb-2">B.Sc. Library and Information Science | First Class Honors</p>
            <p className="text-sm" style={{ color: "#1A1A1A" }}>Award: Best Graduating Student, Department of Library and Information Science.</p>
          </div>
        </section>

        {/* Key Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Key Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-foreground mb-2">Product Management</h3>
              <p className="text-sm text-muted-foreground">
                Go-to-Market Strategy, Product Lifecycle Management, Growth Strategy, Stakeholder Management, Market Research, Agile & Scrum.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-foreground mb-2">Fintech & Payments</h3>
              <p className="text-sm text-muted-foreground">
                Cross-Border Payments, Multi-Currency Wallets, International Expansion, Remittance Solutions, Regulatory Compliance, Market Localization.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-foreground mb-2">Technical & Analytical</h3>
              <p className="text-sm text-muted-foreground">
                SQL, Product Analytics, Cohort Analysis, A/B Testing, Mixpanel, Jira, Figma.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-foreground mb-2">Leadership & Strategy</h3>
              <p className="text-sm text-muted-foreground">
                OKRs, Product Strategy Alignment, Cross-Functional Collaboration, Partner Management.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background border border-border p-8 rounded-2xl">
          <p className="text-lg text-muted-foreground mb-6 text-center">
            If you care about creating products that truly make life easier for users, I'd love to be part of that journey.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Let's Talk
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Adebukola Akanji. Building Products that Matter
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
