import { ArrowRight } from "lucide-react";

const MarqueeStrip = () => {
  return (
    <div className="w-full overflow-hidden" style={{ backgroundColor: '#111111', height: '100px' }}>
      <div className="flex items-center h-full animate-marquee whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="text-white font-heading font-extrabold uppercase text-5xl md:text-7xl tracking-tight">
              Featured Work
            </span>
            <ArrowRight className="w-8 h-8 text-accent flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
