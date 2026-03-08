interface TakeawayCardsProps {
  cards: string[];
}

const TakeawayCards = ({ cards }: TakeawayCardsProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 my-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border border-border border-t-[3px] border-t-accent rounded-md p-6 bg-background"
        >
          <p className="text-[14px] font-medium text-foreground leading-[1.5]">{card}</p>
        </div>
      ))}
    </div>
  );
};

export default TakeawayCards;
