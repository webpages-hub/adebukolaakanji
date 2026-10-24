import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import SiteFooter from "@/components/site/SiteFooter";
import WorkList from "@/components/site/WorkList";
import SideBuilds from "@/components/site/SideBuilds";
import CtaBand from "@/components/site/CtaBand";

const CaseStudies = () => (
  <div className="min-h-screen bg-background text-[17px] leading-[1.6] text-[#333333]">
    <SEO
      title="Case Studies — Adebukola Akanji"
      description="Fintech and payments case studies from Adebukola Akanji: market entry, cross-border transfers, retention, and multi-currency wallets."
      path="/case-studies"
    />
    <Navigation />

    <main>
      <WorkList asPageTitle />
      <SideBuilds />
      <CtaBand />
    </main>

    <SiteFooter divider />
  </div>
);

export default CaseStudies;
