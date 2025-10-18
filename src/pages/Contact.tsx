import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              I'm always excited to discuss product opportunities, collaborations, or just have a conversation about building great user experiences.
            </p>

            <div className="grid gap-6 mb-12">
              <a 
                href="mailto:your.email@example.com" 
                className="p-6 rounded-xl bg-card shadow-elegant hover:shadow-accent-glow transition-base border border-border hover:border-accent/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-muted-foreground">your.email@example.com</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/yourprofile" 
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

              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-card shadow-elegant hover:shadow-accent-glow transition-base border border-border hover:border-accent/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Github className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold mb-1">GitHub</div>
                  <div className="text-muted-foreground">Check out my work</div>
                </div>
              </a>

              <a 
                href="https://twitter.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-card shadow-elegant hover:shadow-accent-glow transition-base border border-border hover:border-accent/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Twitter className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-semibold mb-1">Twitter</div>
                  <div className="text-muted-foreground">Follow my journey</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
