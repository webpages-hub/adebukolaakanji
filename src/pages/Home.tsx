import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";
import FeaturedWork from "@/components/FeaturedWork";
import HowIWork from "@/components/HowIWork";
import ContactCard from "@/components/ContactCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const rotatingWords = ["Growth", "Impact", "Revenue", "Goals"];

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 400);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight text-foreground">
                  Driving Business{" "}
                  <span className="inline-block overflow-hidden align-bottom" style={{ height: '1.2em' }}>
                    <span
                      className="inline-block text-accent transition-transform duration-400 ease-in-out"
                      style={{
                        transform: isAnimating ? 'translateY(-100%)' : 'translateY(0)',
                        opacity: isAnimating ? 0 : 1,
                        transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out',
                      }}
                    >
                      {rotatingWords[wordIndex]}
                    </span>
                  </span>
                  , Creating Customer-Centric Innovation
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  I am Adebukola Akanji, a product manager with five years of experience driving business growth and expansion. I am dedicated to crafting simple user experiences that simplify people's lives.
                </p>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white px-[22px] py-[10px] rounded-[22px] transition-base hover:opacity-90 bg-primary"
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

      {/* Explore My Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 bg-muted border border-border text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Explore My Articles
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              I write about product management, fintech, and building products that matter. Check out my latest thoughts and insights.
            </p>
            <a
              href="https://medium.com/@adebukolaakanji"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-base hover:opacity-90 bg-primary text-primary-foreground"
            >
              Read on Medium <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <ContactCard />

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
