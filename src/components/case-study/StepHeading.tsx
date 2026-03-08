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
        <em className="text-accent">{accentWord}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="flex items-start gap-6 mb-6">
      <div
        className={`w-16 h-16 rounded-full border-[1.5px] border-accent flex items-center justify-center flex-shrink-0 ${
          isLast ? 'bg-foreground' : 'bg-background'
        }`}
      >
        <span className={`font-serif-display text-[22px] font-bold ${isLast ? 'text-background' : 'text-accent'}`}>
          {String(number).padStart(2, '0')}
        </span>
      </div>
      <h2 className="font-serif-display text-[34px] font-bold leading-[1.15] tracking-[-0.02em] pt-3">
        {renderTitle()}
      </h2>
    </div>
  );
};

export default StepHeading;
