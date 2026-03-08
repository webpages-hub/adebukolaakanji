import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";
import MarqueeStrip from "@/components/MarqueeStrip";
import FeaturedWork from "@/components/FeaturedWork";
import HowIWork from "@/components/HowIWork";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { Mail, Phone, Linkedin } from "lucide-react";

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

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
                
                <button
                  onClick={scrollToAbout}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white px-[22px] py-[10px] rounded-[22px] transition-base hover:opacity-90"
                  style={{ backgroundColor: '#111111' }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
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

      {/* Marquee Strip */}
      <MarqueeStrip />

      {/* Featured Work */}
      <FeaturedWork />

      {/* How I Work (My Approach Accordion) */}
      <HowIWork />

      {/* About Section */}
      <AboutSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Contact Me Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center" style={{ color: "#1A1A1A" }}>
            Contact Me
          </h2>
          <div className="max-w-2xl mx-auto grid gap-6">
            <a 
              href="mailto:adebukolaakanji@gmail.com" 
              className="p-6 rounded-xl bg-card shadow-elegant hover:shadow-accent-glow transition-base border border-border hover:border-accent/50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left flex-1">
                <div className="font-semibold mb-1">Email</div>
                <div className="text-muted-foreground">adebukolaakanji@gmail.com</div>
              </div>
            </a>

            <a 
              href="tel:+2347065197102" 
              className="p-6 rounded-xl bg-card shadow-elegant hover:shadow-accent-glow transition-base border border-border hover:border-accent/50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
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
              className="p-6 rounded-xl bg-card shadow-elegant hover:shadow-accent-glow transition-base border border-border hover:border-accent/50 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left flex-1">
                <div className="font-semibold mb-1">LinkedIn</div>
                <div className="text-muted-foreground">Connect with me</div>
              </div>
            </a>
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
