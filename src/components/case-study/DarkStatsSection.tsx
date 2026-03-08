interface StatRow {
  number: string;
  description: string;
}

interface DarkStatsSectionProps {
  heading?: string;
  introText: string;
  stats: StatRow[];
}

const DarkStatsSection = ({ heading = "The Result", introText, stats }: DarkStatsSectionProps) => {
  return (
    <section className="bg-[hsl(0_0%_7%)] text-background -mx-6 px-6 py-16 md:py-20 my-20 rounded-none">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[35%_65%] gap-10 md:gap-16">
          {/* Left column */}
          <div>
            <h2 className="text-[24px] md:text-[28px] font-bold text-background mb-4">{heading}</h2>
            <p className="text-[14px] text-[hsl(0_0%_67%)] leading-[1.7]">{introText}</p>
          </div>

          {/* Right column - stat rows */}
          <div>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-6 md:py-7 border-b border-[hsl(0_0%_16%)] ${index === 0 ? 'border-t' : ''}`}
              >
                <div className="text-[36px] sm:text-[48px] md:text-[60px] font-extralight text-background leading-none sm:min-w-[140px]">
                  {stat.number}
                </div>
                <p className="text-[14px] text-[hsl(0_0%_67%)] leading-[1.6]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkStatsSection;
