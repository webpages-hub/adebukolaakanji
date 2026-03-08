import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";
import FeaturedWork from "@/components/FeaturedWork";
import HowIWork from "@/components/HowIWork";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Left Column ~55% */}
              <div className="flex-1 text-center md:text-left md:w-[55%]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight" style={{ color: '#1A1A1A' }}>
                  Driving Business Growth, Creating Customer-Centric Innovation
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  I am Adebukola Akanji, a product manager with five years of experience driving business growth and expansion. I am dedicated to crafting simple user experiences that simplify people's lives.
                </p>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white px-[22px] py-[10px] rounded-[22px] transition-base hover:opacity-90"
                  style={{ backgroundColor: '#111111' }}
                >
                  Get in touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Right Column ~45% - Profile Image */}
              <div className="flex-shrink-0 md:w-[45%] flex justify-center">
                <img 
                  src={heroPhoto} 
                  alt="Adebukola Akanji - Product Manager" 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-elegant"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <FeaturedWork />

      {/* How I Work (My Approach Accordion) */}
      <HowIWork />

      {/* Contact Me Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 bg-muted border border-border">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Left: CTA */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3">
                  Do you have an<br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">awesome project?</span>
                </h2>
                <p className="text-muted-foreground mb-6">It's the perfect time to get started!</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-bold text-sm px-8 py-3 rounded-full transition-base hover:opacity-90 bg-primary text-primary-foreground"
                >
                  CONTACT ME
                </Link>
              </div>

              {/* Right: Contact Options */}
              <div className="flex flex-col gap-4 min-w-[260px]">
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

export default Home;
