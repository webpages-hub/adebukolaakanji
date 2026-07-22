import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";
import FeaturedWork from "@/components/FeaturedWork";
import HowIWork from "@/components/HowIWork";
import ContactCard from "@/components/ContactCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const rotatingWords = ["generate revenue", "cross borders", "reach people", "actually work", "solve problems"];

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
      <SEO title="Adebukola Akanji - Fintech Product Manager" description="Portfolio of Adebukola Akanji, a Product Manager building fintech and payments products that scale globally and deliver measurable growth." path="/" />
      <Navigation />
      <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 gradient-hero overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Left Column ~55% */}
              <div className="flex-1 text-center md:text-left md:w-[55%]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight text-foreground">
                  Building products that
                  <br />
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
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  My name is Bukola. I find the gap between what users need and what they're currently getting, then I build the solution that closes it. I have spent 5 years doing that across fintech, payments, and international markets.
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
                  width={320}
                  height={320}
                  fetchPriority="high"
                  decoding="async"
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

      {/* How I Think */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-10">How I Think</h2>

            <div className="space-y-4">
              {[
                { title: "When Everyone Can Build, How Do You Win?", url: "https://medium.com/@adebukolaakanji/when-everyone-can-build-how-do-you-win-7b2b91a6f765" },
                { title: "Beyond Borders: Secrets to Launching a Product in Africa", url: "https://medium.com/@adebukolaakanji/beyond-borders-secrets-to-launching-a-product-in-africa-f4ff7f9ea411?sharedUserId=adebukolaakanji" },
                { title: "How do you know if you are building the right product?", url: "https://www.linkedin.com/posts/aadebukola_creating-a-good-product-strategy-activity-7284871891184480256-pRhp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0ecOQBAlb3BkxqK5O7JT1aEAnyXfOlqTk" },
                { title: "The Day I Realized Data is a Product's Love Language", url: "https://medium.com/@adebukolaakanji/the-day-i-realized-data-is-a-products-love-language-09062c2ba067?sharedUserId=adebukolaakanji" },
                { title: "You Don't Break Into a New Market. You Learn How to Belong.", url: "https://medium.com/@adebukolaakanji/you-dont-break-into-a-new-market-you-learn-how-to-belong-8683ce6ad782?sharedUserId=adebukolaakanji" },
              ].map((article) => (
                <a
                  key={article.title}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl bg-muted border border-border p-6 pl-8 border-l-4 border-l-accent hover:shadow-md transition-base"
                >
                  <h3 className="font-bold font-heading text-lg md:text-xl text-foreground mb-2 group-hover:text-accent transition-base">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent transition-base">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <ContactCard />
      </main>

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

export default Home;
