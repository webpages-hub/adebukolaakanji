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
          <a href={site.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium" className={iconLink}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
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
