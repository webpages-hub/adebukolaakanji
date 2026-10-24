import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const caseStudyPaths = [
  "/drc-payments",
  "/projects",
  "/global-expansion",
  "/global-transfers",
  "/gamification",
  "/multi-currency-wallet",
];

const links = [
  { to: "/case-studies", label: "Case studies", isActive: (path: string) => path === "/case-studies" || caseStudyPaths.includes(path) },
  { to: "/#process", label: "How I work", isActive: () => false },
  { to: "/about", label: "About", isActive: (path: string) => path === "/about" },
];

const Navigation = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-5 py-3 sm:px-6 md:py-4">
        <Link to="/" className="py-2 font-heading text-[17px] font-bold text-foreground no-underline md:text-[19px]">
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              aria-current={link.isActive(pathname) ? "page" : undefined}
              className={cn(
                "inline-flex h-10 items-center rounded-[10px] px-3 text-sm no-underline transition-colors hover:bg-muted",
                link.isActive(pathname) ? "bg-muted font-semibold text-foreground" : "font-medium text-[#333333]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center rounded-[10px] bg-foreground px-4 text-sm font-medium text-white no-underline transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-border bg-background text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-menu" aria-label="Main" className="flex flex-col gap-1 border-t border-border px-5 pb-5 pt-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              aria-current={link.isActive(pathname) ? "page" : undefined}
              className={cn(
                "flex h-11 items-center rounded-[10px] px-3 text-base no-underline transition-colors hover:bg-muted",
                link.isActive(pathname) ? "bg-muted font-semibold text-foreground" : "font-medium text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 flex h-11 items-center justify-center rounded-[10px] bg-foreground text-[15px] font-medium text-white no-underline"
          >
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
