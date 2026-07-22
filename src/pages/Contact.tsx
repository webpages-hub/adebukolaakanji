import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
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
            telephone: "+2347065197102",
            sameAs: ["https://www.linkedin.com/in/aadebukola/"],
          },
        }}
      />
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-foreground">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              I'm always excited to discuss product opportunities, collaborations, or just have a conversation about building great user experiences.
            </p>

            <div className="grid gap-6 mb-12">
              <a 
                href="mailto:adebukolaakanji@gmail.com" 
                className="p-6 rounded-xl bg-card shadow-elegant hover:shadow-lg transition-base border border-border hover:border-foreground/30 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-muted-foreground">adebukolaakanji@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+2347065197102" 
                className="p-6 rounded-xl bg-card shadow-elegant hover:shadow-lg transition-base border border-border hover:border-foreground/30 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold mb-1">Phone</div>
                  <div className="text-muted-foreground">+234 706 519 7102</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/aadebukola/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-card shadow-elegant hover:shadow-lg transition-base border border-border hover:border-foreground/30 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold mb-1">LinkedIn</div>
                  <div className="text-muted-foreground">Connect with me</div>
                </div>
              </a>
            </div>
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

export default Contact;
