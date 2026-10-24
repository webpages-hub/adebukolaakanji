import { Link } from "react-router-dom";
import Reveal from "@/components/ui/reveal";

const CtaBand = () => (
  <section className="bg-foreground text-white">
    <Reveal className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-8 px-5 py-16 sm:px-6 md:py-20">
      <div className="max-w-[620px]">
        <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.15] text-white md:text-4xl">
          Building in payments or entering new markets?
        </h2>
        <p className="mt-3.5 text-[#B3B3B3]">I'd love to talk about product roles, collaborations or anything product.</p>
      </div>
      <Link
        to="/contact"
        className="inline-flex h-10 items-center justify-center rounded-[10px] bg-white px-4 text-sm font-medium text-foreground no-underline transition-opacity hover:opacity-90"
      >
        Get in touch
      </Link>
    </Reveal>
  </section>
);

export default CtaBand;
