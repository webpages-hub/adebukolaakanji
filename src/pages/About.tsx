import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h1>
          </div>

          {/* Profile Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={profilePhoto} 
                alt="Profile photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              I've always been fascinated by how money moves. How a single transaction can connect people, businesses, and even countries. It's more than just numbers on a screen to me. It's the heartbeat of economies, the quiet bridge between opportunity and access.
            </p>
            
            <p className="text-lg leading-relaxed">
              That curiosity started in university, where I first discovered software development while studying Library and Information Science. I became obsessed with how technology could simplify complex systems and make information flow smarter. That interest evolved into a deeper passion for product management, so I took a course in Software Product Management and decided this was it. I wanted to build products that truly made a difference.
            </p>
            
            <p className="text-lg leading-relaxed">
              Since then, I've helped build and scale fintech products that power payments and expand financial access across borders. In the DRC, I led the launch of an agent network that onboarded over 1,000 agents in six weeks and processed millions in transactions.
            </p>
            
            <p className="text-lg leading-relaxed">
              When users complained about slow and expensive transfers, I helped launch a cross-border payments solution that delivered faster, more affordable transactions and generated $200K in revenue within three months. And because retention matters just as much as growth, I designed a gamification and rewards system at Payfi that improved user retention by 10% and made payments feel rewarding.
            </p>
            
            <p className="text-lg leading-relaxed">
              My approach blends data-driven strategy with deep market empathy. I move between using Mixpanel for insights and designing user flows that convert on FigJam. But beyond the tools, my real strength lies in turning user pain points into scalable solutions that move the business forward. I thrive in complex environments where products must bridge regulatory, cultural, and technical gaps to succeed.
            </p>
            
            <p className="text-lg leading-relaxed">
              I enjoy the work I do, because every time someone sends, saves, or spends more easily because of something I helped build, it reminds me why I started.
            </p>
            
            <p className="text-lg leading-relaxed font-semibold">
              If you're building a product that's solving real problems, let's talk. I love working on ideas that make money move smarter, faster, and farther.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-2xl gradient-subtle border border-border text-center">
            <p className="text-lg mb-6">
              If you care about creating products that truly make life easier for users, I'd love to be part of that journey.{" "}
              <Link to="/contact" className="text-accent hover:underline font-semibold">
                Let's talk
              </Link>
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
