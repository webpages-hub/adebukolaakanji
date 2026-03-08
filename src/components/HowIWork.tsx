import { useState, useEffect, useRef, useCallback } from "react";
import { Plus, X } from "lucide-react";

const items = [
  {
    number: "01",
    label: "Understand",
    content: "Before I touch a roadmap or wireframe, I want to know who I'm building for and what's actually in their way. That means user interviews, market surveys, and digging into behavioral data until the pattern becomes clear.",
  },
  {
    number: "02",
    label: "Define",
    content: "A problem well-defined is half solved. I translate research into something the whole team can build toward: a clear problem statement, a prioritized backlog, and a shared understanding of what success looks like.",
  },
  {
    number: "03",
    label: "Build and Test",
    content: "I work closely with design and engineering to turn direction into product. I prototype, test early, and stay involved through to launch, because the best surprises are the ones you catch before shipping.",
  },
  {
    number: "04",
    label: "Launch and Drive Adoption",
    content: "Shipping is only half the job. I partner with sales and marketing to shape the go-to-market strategy, making sure the right people know about the product and know how to use it.",
  },
  {
    number: "05",
    label: "Measure and Iterate",
    content: "Launch is not the finish line. I track what actually happens after users get their hands on it, then use that data to decide what's next.",
  },
];

const CYCLE_INTERVAL = 3500;

const HowIWork = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [userClicked, setUserClicked] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycling = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setUserClicked(false);
    setOpenIndex(0);
    timerRef.current = setInterval(() => {
      setOpenIndex((prev) => {
        const next = ((prev ?? -1) + 1) % items.length;
        return next;
      });
    }, CYCLE_INTERVAL);
  }, []);

  const stopCycling = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCycling();
        } else {
          stopCycling();
          setUserClicked(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      stopCycling();
    };
  }, [startCycling, stopCycling]);

  useEffect(() => {
    if (userClicked) {
      stopCycling();
    }
  }, [userClicked, stopCycling]);

  const toggle = (index: number) => {
    setUserClicked(true);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">My Process</h2>

          <div className="divide-y divide-border">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.number}
                  className="transition-base"
                  style={isOpen ? { backgroundColor: '#EFEFEF' } : {}}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center gap-4 py-4 md:py-5 px-4 text-left"
                  >
                    <span className="text-sm italic text-muted-foreground min-w-[24px]">
                      {item.number}
                    </span>
                    <span className="flex-1 font-bold text-lg md:text-xl">
                      {item.label}
                    </span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-accent text-accent-foreground">
                      {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-5 pl-12">
                      <p className="text-sm md:text-base leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
