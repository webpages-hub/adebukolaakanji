import { Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const iconLink =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#333333] text-white transition-colors hover:border-[#666666] hover:bg-[#333333]";

interface SiteFooterProps {
  /** Draw a divider line above the footer row (use when it follows a dark section). */
  divider?: boolean;
}

const SiteFooter = ({ divider = false }: SiteFooterProps) => (
  <footer className="bg-foreground text-[#B3B3B3]">
    <div
      className={cn(
        "mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm sm:px-6",
        divider && "border-t border-[#333333]"
      )}
    >
      <p className="m-0">© {new Date().getFullYear()} {site.name}</p>
      <div className="flex flex-wrap items-center gap-4">
        <p className="m-0">{site.location}</p>
        <div className="flex gap-2">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
            <Linkedin className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className={iconLink}>
            <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
