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
              <h1 className="text-3xl md:text-4xl font-bold font-heading mb-10">Hi, I'm Bukola</h1>

              <div className="space-y-12">
                <div>
                  <span className="text-sm italic text-accent mb-2 block">Who I am</span>
                  <h2 className="text-xl font-semibold font-heading mb-4 text-foreground">Hi, I'm Bukola</h2>
                  <p className="text-base leading-relaxed text-foreground/90">
                    Somewhere between a library full of information and building products people use, I found my thing. I didn't take the straight road into product. I studied Library and Information Science, graduated top of my department, and then a single coursework module changed everything. It showed me that understanding how people look for things, and why they fail to find them, is exactly the problem product management exists to solve.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/90 mt-4">
                    Five years later, I've built payment products that cross borders, led market entry into five countries, and shipped things used by over a million people. The unconventional start turned out to be the whole point.
                  </p>
                </div>

                <div>
                  <span className="text-sm italic text-accent mb-2 block">What I do</span>
                  <p className="text-base leading-relaxed text-foreground/90">
                    I sit at the intersection of user needs, business goals, and what's actually possible to build, then I make the case for the version where all three overlap.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/90 mt-4">
                    In practice, that's meant going from zero to a live product in the DRC in six weeks, generating $600K in cross-border payment revenue in seven months, and growing daily active usage by 20% on a multi-currency wallet. The through-line in all of it is the same: understand the real problem before touching the solution.
                  </p>
                </div>

                <div>
                  <span className="text-sm italic text-accent mb-2 block">What gets me going</span>
                  <p className="text-base leading-relaxed text-foreground/90">
                    Honestly? I love when the data says something nobody expected. That moment when a user behavior pattern quietly tells you the whole product assumption was slightly off, and you get to be the person who caught it.
                  </p>
                  <p className="text-base leading-relaxed text-foreground/90 mt-4">
                    I also write. About market entry, product strategy, user behavior, and the things you only learn by shipping. Writing is how I process the work and stay sharp between projects.
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
            Adebukola Akanji. Product Manager, problem-solver, and occasional overthinker about user behavior.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
