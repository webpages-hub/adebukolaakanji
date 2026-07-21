import { Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 bg-muted border border-border">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left: CTA */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
                Let's build something<br />
                <span className="text-3xl md:text-4xl lg:text-5xl">worth building.</span>
              </h2>
              <p className="text-muted-foreground mb-6">Whether you're looking to bring on a PM, want to collaborate, or just want to talk product, I'd love to hear from you.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-bold text-sm px-8 py-3 rounded-full transition-base hover:opacity-90 bg-primary text-primary-foreground"
              >
                GET IN TOUCH
              </Link>
            </div>

            {/* Right: Contact Options */}
            <div className="flex flex-col gap-4 md:min-w-[260px]">
              <a
                href="mailto:adebukolaakanji@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/30 transition-base"
              >
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-foreground font-semibold text-sm">Email</div>
                  <div className="text-muted-foreground text-xs">adebukolaakanji@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+2347065197102"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/30 transition-base"
              >
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-foreground font-semibold text-sm">Phone</div>
                  <div className="text-muted-foreground text-xs">+234 706 519 7102</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/aadebukola/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/30 transition-base"
              >
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-foreground font-semibold text-sm">LinkedIn</div>
                  <div className="text-muted-foreground text-xs">Connect with me</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
