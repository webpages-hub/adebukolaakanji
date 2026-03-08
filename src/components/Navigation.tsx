import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Name */}
          <Link to="/" className="text-xl font-bold font-heading transition-base hover:text-accent">
            Adebukola Akanji
          </Link>
          
          {/* Centre: Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-base px-[18px] py-2 rounded-full",
                  location.pathname === link.href
                    ? "bg-[#EFEFEF] text-foreground"
                    : "text-foreground hover:text-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white px-[22px] py-[10px] rounded-[22px] transition-base hover:opacity-90"
            style={{ backgroundColor: '#111111' }}
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-base"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 bg-background/95 backdrop-blur-md rounded-xl p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={handleLinkClick}
                className={cn(
                  "text-sm font-medium transition-base py-2 px-4 rounded-full",
                  location.pathname === link.href
                    ? "bg-[#EFEFEF] text-foreground"
                    : "text-foreground hover:text-accent"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white px-[22px] py-[10px] rounded-[22px] mt-2 transition-base hover:opacity-90"
              style={{ backgroundColor: '#111111' }}
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
