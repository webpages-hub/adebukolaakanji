import Navigation from "@/components/Navigation";
import ContactCard from "@/components/ContactCard";
import aboutPhoto1 from "@/assets/about-photo-1.jpg";
import aboutPhoto2 from "@/assets/about-photo-2.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Left Column ~45% - Two-frame grid */}
            <div className="md:w-[45%] flex justify-center items-start">
              <div className="grid grid-cols-2 gap-3 w-full max-w-[420px]">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src={aboutPhoto1}                    alt="Adebukola Akanji"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                  <img
                    src={aboutPhoto2}
                    alt="Adebukola working"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column ~55% - Text Content */}
            <div className="md:w-[55%] mt-8 md:mt-0">
              <h1 className="text-3xl md:text-4xl font-bold font-heading mb-10">Meet Adebukola</h1>

              <div className="space-y-12">
                <div>
                  <span className="text-sm italic text-accent mb-2 block">Who I am</span>
                  <p className="text-base leading-relaxed text-foreground/90">
                    Somewhere between a library full of information and a fintech serving a million users, I found my thing.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/90 mt-4">
                    My name is Adebukola Akanji, but most people call me Bukola. I'm a Product Manager who gets genuinely excited about the moment a real person's life gets a little easier because of something I helped build. The kind of excited where I'm still thinking about a user research session three days later, turning it over, asking better questions.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/90 mt-4">
                    I've spent five years figuring out how to turn messy, complicated problems into products that work. Products that cross borders. Products that move money for families separated by continents. Products that actually grow.
                  </p>
                </div>

                <div>
                  <span className="text-sm italic text-accent mb-2 block">What I do</span>
                  <p className="text-base leading-relaxed text-foreground/90">
                    I've helped build and scale fintech products that power payments and expand financial access across borders. In the DRC, I led the launch of an agent network that onboarded over 1,000 agents in six weeks and processed millions in transactions. I helped launch a cross-border payments solution that generated $200K in revenue within three months. I also designed a gamification system that improved user retention by 10%.
                  </p>
                </div>

                <div>
                  <span className="text-sm italic text-accent mb-2 block">What I love</span>
                  <p className="text-base leading-relaxed text-foreground/90">
                    My approach blends data-driven strategy with deep market empathy. I move between using Mixpanel for insights and designing user flows that convert on FigJam. But beyond the tools, my real strength lies in turning user pain points into scalable solutions that move the business forward. I thrive in complex environments where products must bridge regulatory, cultural, and technical gaps to succeed.
                  </p>
                </div>
              </div>

              <p className="mt-12 text-accent italic text-lg">
                Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Card */}
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

export default About;
