"use client";
import { ReactNode, useRef, useState } from "react";
import { motion, useInView, UseInViewOptions, Variant, Transition, useReducedMotion } from "framer-motion";

export type InViewProps = {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: React.ElementType;
  once?: boolean;
  className?: string;
};

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = "div",
  once = true,
  className,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);
  const reduceMotion = useReducedMotion();
  const [isViewed, setIsViewed] = useState(false);

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView || isViewed ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
      onAnimationComplete={() => {
        if (once) setIsViewed(true);
      }}
    >
      {children}
    </MotionComponent>
  );
}
