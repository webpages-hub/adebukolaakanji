import { ElementType, ReactNode } from "react";
import { InView } from "@/components/ui/in-view";

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/** Gentle fade-and-rise when the content scrolls into view. */
const Reveal = ({ children, className, as }: { children: ReactNode; className?: string; as?: ElementType }) => (
  <InView
    as={as}
    variants={variants}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
    className={className}
  >
    {children}
  </InView>
);

export default Reveal;
