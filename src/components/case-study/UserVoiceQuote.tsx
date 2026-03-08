interface UserVoiceQuoteProps {
  quote: string;
  attribution?: string;
}

const UserVoiceQuote = ({ quote, attribution }: UserVoiceQuoteProps) => {
  return (
    <div className="relative bg-background border border-border rounded-md p-7 my-7 max-w-[620px]">
      <span className="absolute top-3 left-5 text-[80px] leading-none text-accent/25 select-none font-bold">
        "
      </span>
      <p className="italic text-[17px] text-foreground leading-[1.65] pt-8 pl-2">
        {quote}
      </p>
      {attribution && (
        <p className="text-[11px] text-muted-foreground tracking-[0.06em] uppercase mt-3 pl-2">
          — {attribution}
        </p>
      )}
    </div>
  );
};

export default UserVoiceQuote;
