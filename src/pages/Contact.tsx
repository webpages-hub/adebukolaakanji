import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import SiteFooter from "@/components/site/SiteFooter";
import ContactSection from "@/components/site/ContactSection";

const Contact = () => (
  <div className="flex min-h-screen flex-col bg-background text-[17px] leading-[1.6] text-[#333333]">
    <SEO
      title="Contact — Adebukola Akanji"
      description="Get in touch with Adebukola Akanji about product roles, collaborations, and consulting."
      path="/contact"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Adebukola Akanji",
        url: "https://adebukolaakanji.com/contact",
        mainEntity: {
          "@type": "Person",
          name: "Adebukola Akanji",
          email: "adebukolaakanji@gmail.com",
          sameAs: ["https://www.linkedin.com/in/aadebukola/"],
        },
      }}
    />
    <Navigation />

    <main className="flex-1 bg-foreground">
      <ContactSection asPageTitle />
    </main>

    <SiteFooter divider />
  </div>
);

export default Contact;
