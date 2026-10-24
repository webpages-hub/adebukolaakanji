import { Block, MiniCardData } from "./types";

const cardShadow = "shadow-[0_2px_8px_rgba(26,26,26,0.04)]";

/** Renders **double-asterisk** spans as bold text. */
const Inline = ({ text }: { text: string }) => (
  <>
    {text.split("**").map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="text-foreground">
          {part}
        </strong>
      ) : (
        part
      )
    )}
  </>
);

const MiniCard = ({ card }: { card: MiniCardData }) => (
  <div className={`rounded-xl border border-border bg-white p-5 ${cardShadow}`}>
    {card.stat ? (
      <p className="font-heading text-[22px] font-bold text-foreground md:text-[28px]">{card.stat}</p>
    ) : (
      <p className="font-semibold text-foreground">{card.title}</p>
    )}
    <p className="mt-1 text-[15px]">{card.text}</p>
  </div>
);

const BlockView = ({ block }: { block: Block }) => {
  switch (block.type) {
    case "paragraphs":
      return (
        <div className="space-y-4">
          {block.items.map((text, i) => (
            <p key={i} className="m-0">
              {text}
            </p>
          ))}
        </div>
      );

    case "lede":
      return <p className="m-0">{block.text}</p>;

    case "cards":
      return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
          {block.items.map((card, i) => (
            <MiniCard key={i} card={card} />
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote className="m-0 rounded-xl border border-border bg-muted p-5 font-heading text-lg leading-[1.35] text-foreground md:p-6 md:text-[22px]">
          {block.text}
        </blockquote>
      );

    case "callout":
      return (
        <div className="rounded-xl border border-foreground p-6">
          <p className="mb-1.5 font-mono-tag text-[13px] uppercase tracking-[0.06em] text-muted-foreground">{block.label}</p>
          <p className="m-0 text-[19px] font-semibold text-foreground">{block.title}</p>
          <p className="mt-2 mb-0">{block.text}</p>
        </div>
      );

    case "list":
      return (
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 p-0">
          {block.items.map((item, i) => (
            <li key={i} className="border-b border-border py-3">
              {item}
            </li>
          ))}
        </ul>
      );

    case "bullets":
      return (
        <ul className="m-0 list-disc space-y-2.5 pl-5">
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      );

    case "beforeAfter":
      return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] items-stretch gap-3">
          <div className="rounded-xl bg-muted p-6">
            <p className="mb-1.5 font-mono-tag text-[13px] uppercase tracking-[0.06em] text-muted-foreground">{block.before.label}</p>
            <p className="mb-3 font-heading text-[40px] font-bold leading-none text-foreground">{block.before.value}</p>
            <p className="m-0 text-[15px]">{block.before.text}</p>
          </div>
          <div className={`rounded-xl border border-[#FFE08A] bg-[#FFF4D1] p-6 ${cardShadow}`}>
            <p className="mb-1.5 font-mono-tag text-[13px] uppercase tracking-[0.06em] text-foreground">{block.after.label}</p>
            <p className="mb-3 font-heading text-[40px] font-bold leading-none text-foreground">{block.after.value}</p>
            <p className="m-0 text-[15px]">{block.after.text}</p>
          </div>
        </div>
      );

    case "learnings":
      return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {block.items.map((item, i) => (
            <div key={i} className={`rounded-xl border border-border bg-white p-6 ${cardShadow}`}>
              <p className="mb-1.5 font-semibold text-foreground">{item.title}</p>
              <p className="m-0 text-[15px]">{item.text}</p>
            </div>
          ))}
        </div>
      );
  }
};

/** Stacks blocks with consistent spacing between them. */
const CaseStudyBlocks = ({ blocks }: { blocks: Block[] }) => (
  <div className="min-w-0 space-y-6">
    {blocks.map((block, i) => (
      <BlockView key={i} block={block} />
    ))}
  </div>
);

export default CaseStudyBlocks;
