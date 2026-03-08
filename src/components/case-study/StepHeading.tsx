interface StepHeadingProps {
  number: number;
  title: string;
  accentWord?: string;
  isLast?: boolean;
}

const StepHeading = ({ number, title, accentWord, isLast = false }: StepHeadingProps) => {
  const renderTitle = () => {
    if (!accentWord) return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-accent italic">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="flex items-start gap-4 md:gap-6 mb-6">
      <div
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-[1.5px] border-accent flex items-center justify-center flex-shrink-0 ${
          isLast ? 'bg-foreground' : 'bg-background'
        }`}
      >
        <span className={`text-[18px] md:text-[20px] font-bold ${isLast ? 'text-background' : 'text-accent'}`}>
          {String(number).padStart(2, '0')}
        </span>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-[1.2] tracking-tight pt-2 md:pt-3">
        {renderTitle()}
      </h2>
    </div>
  );
};

export default StepHeading;
