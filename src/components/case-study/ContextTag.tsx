interface ContextTagProps {
  tags: string[];
}

const ContextTag = ({ tags }: ContextTagProps) => {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-5 h-[1.5px] bg-accent flex-shrink-0" />
      <p className="font-mono-tag text-[10px] sm:text-[11px] uppercase tracking-[0.06em] text-accent whitespace-nowrap">
        {tags.join(' · ')}
      </p>
    </div>
  );
};

export default ContextTag;
