interface DrivingQuestionProps {
  label?: string;
  question: string;
  goldEmphasis?: string;
}

const DrivingQuestion = ({ label = "THE QUESTION", question, goldEmphasis }: DrivingQuestionProps) => {
  const renderQuestion = () => {
    if (!goldEmphasis) return question;
    const parts = question.split(goldEmphasis);
    return (
      <>
        {parts[0]}
        <span className="font-bold text-accent">{goldEmphasis}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="relative bg-foreground rounded p-7 my-7 max-w-[620px] overflow-hidden">
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[120px] text-background/[0.04] font-bold select-none leading-none">
        ?
      </span>
      <p className="font-mono-tag text-[10px] uppercase tracking-[0.1em] text-accent mb-3">
        {label}
      </p>
      <p className="text-[15px] text-background/90 leading-[1.7] font-light relative z-10">
        {renderQuestion()}
      </p>
    </div>
  );
};

export default DrivingQuestion;
