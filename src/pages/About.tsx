import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroPhoto from "@/assets/hero-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Left Column ~45% - Photo Collage */}
            <div className="md:w-[45%] relative flex justify-center items-start min-h-[400px]">
              <div className="relative w-full max-w-[360px]">
                <div
                  className="w-[260px] h-[320px] rounded-lg overflow-hidden absolute top-0 left-0 z-10"
                  style={{ transform: 'rotate(-3deg)' }}
                >
                  <img
                    src={profilePhoto}
                    alt="Adebukola Akanji"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="w-[260px] h-[320px] rounded-lg overflow-hidden absolute top-12 left-16 z-20"
                  style={{ transform: 'rotate(3deg)' }}
                >
                  <img
                    src={heroPhoto}
                    alt="Adebukola working"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column ~55% - Text Content */}
            <div className="md:w-[55%]">
              <h1 className="text-3xl md:text-4xl font-bold font-heading mb-10">Meet Adebukola</h1>

              <div className="space-y-12">
                <div>
                  <span className="text-sm italic text-accent mb-2 block">Who I am</span>
                  <p className="text-base leading-relaxed text-foreground/90">
                    I've always been fascinated by how money moves. How a single transaction can connect people, businesses, and even countries. It's more than just numbers on a screen to me. It's the heartbeat of economies, the quiet bridge between opportunity and access. That curiosity started in university, where I first discovered software development while studying Library and Information Science. I became obsessed with how technology could simplify complex systems.
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

          {/* CTA Section */}
          <div className="mt-16 bg-background border border-border p-8 rounded-2xl">
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
          </div>
        </div>
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

export default About;
