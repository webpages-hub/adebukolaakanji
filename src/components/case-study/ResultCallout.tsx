interface ResultCalloutProps {
  label?: string;
  stat: string;
  description: string;
}

const ResultCallout = ({ label = "THE OUTCOME", stat, description }: ResultCalloutProps) => {
  return (
    <div className="border-l-[3px] border-accent bg-[hsl(43_100%_97%)] rounded-r p-5 my-7 max-w-[620px]">
      <p className="font-mono-tag text-[10px] uppercase tracking-[0.1em] text-accent mb-2">
        {label}
      </p>
      <p className="text-[14px] text-foreground leading-[1.6]">
        <span className="font-serif-display text-[20px] font-bold text-accent">{stat}</span>{' '}
        {description}
      </p>
    </div>
  );
};

export default ResultCallout;
