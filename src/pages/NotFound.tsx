import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import SiteFooter from "@/components/site/SiteFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-[17px] leading-[1.6] text-[#333333]">
      <SEO
        title="Page not found — Adebukola Akanji"
        description="The page you were looking for does not exist. Head back to the portfolio."
        path="/404"
      />
      <Navigation />
      <main className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col items-start justify-center px-5 py-16 sm:px-6">
        <p className="mb-3 font-mono-tag text-[13px] uppercase tracking-[0.06em] text-foreground">404</p>
        <h1 className="m-0 text-[34px] leading-[1.1] tracking-[-0.02em] text-foreground md:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-[480px]">The page you were looking for does not exist or has moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex h-10 items-center justify-center rounded-[10px] bg-accent px-4 text-sm font-medium text-foreground no-underline transition-opacity hover:opacity-90"
        >
          Back to home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
