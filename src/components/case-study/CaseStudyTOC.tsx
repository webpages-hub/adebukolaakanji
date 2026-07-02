import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCSection {
  id: string;
  label: string;
  isStep?: boolean;
  stepNumber?: number;
}

interface CaseStudyTOCProps {
  sections: TOCSection[];
  className?: string;
}

const CaseStudyTOC = ({ sections, className }: CaseStudyTOCProps) => {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(section.id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={cn("hidden lg:block w-48 flex-shrink-0", className)}>
      <div className="sticky top-32">
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-6">
          On this page
        </p>
        <div className="relative">
          {sections.map((section, index) => {
            const isActive = activeId === section.id;
            const isLast = index === sections.length - 1;

            return (
              <div key={section.id} className="relative">
                {/* Connecting line */}
                {!isLast && (
                  <div className="absolute left-[5px] top-[14px] w-px h-full bg-border" />
                )}

                <button
                  onClick={() => handleClick(section.id)}
                  className="flex items-center gap-3 w-full text-left py-2 group"
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    {isActive && (
                      <div className="absolute inset-0 w-[11px] h-[11px] rounded-full bg-accent/30 animate-ping" />
                    )}
                    <div
                      className={`w-[11px] h-[11px] rounded-full border-[1.5px] transition-all duration-300 ease-out ${
                        isActive
                          ? "bg-accent border-accent scale-125"
                          : "bg-background border-muted-foreground/30 scale-100"
                      }`}
                    />
                  </div>
                  {/* Label */}
                  <span
                    className={`text-[13px] leading-tight transition-colors duration-200 ${
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {section.stepNumber !== undefined
                      ? `O${section.stepNumber} ${section.label}`
                      : section.label}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTOC;
