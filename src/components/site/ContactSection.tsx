import { Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { site } from "@/data/site";

const tile =
  "block rounded-xl border border-[#333333] p-5 text-white no-underline transition-colors hover:border-[#666666] hover:bg-[#242424]";

interface ContactSectionProps {
  /** Render the heading as the page's h1 (used on the contact page). */
  asPageTitle?: boolean;
}

const ContactSection = ({ asPageTitle = false }: ContactSectionProps) => {
  const Heading = asPageTitle ? "h1" : "h2";

  return (
    <section id="contact" className="bg-foreground text-white">
      <Reveal className="mx-auto max-w-[1120px] px-5 pb-16 pt-16 sm:px-6 md:pt-[88px]">
        <p className="mb-3 font-mono-tag text-[13px] uppercase tracking-[0.06em] text-accent">Contact</p>
        <Heading className="max-w-[720px] font-heading text-[clamp(30px,4vw,48px)] font-bold leading-[1.1] text-white">
          Hiring a PM, want to collaborate, or just want to talk product?
        </Heading>
        <p className="mt-4 max-w-[560px] text-[#B3B3B3]">
          I'm always happy to discuss product roles, collaborations and consulting.
        </p>
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
          <a href={`mailto:${site.email}`} className={tile}>
            <span className="flex items-center gap-2 text-[13px] text-[#B3B3B3]">
              <Mail className="h-4 w-4" aria-hidden="true" /> Email
            </span>
            <span className="mt-1 block break-words font-semibold">{site.email}</span>
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={tile}>
            <span className="flex items-center gap-2 text-[13px] text-[#B3B3B3]">
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </span>
            <span className="mt-1 block font-semibold">{site.name} →</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default ContactSection;
