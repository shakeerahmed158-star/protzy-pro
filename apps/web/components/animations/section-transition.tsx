"use client";

import {
  motion,
  useInView,
} from "framer-motion";

import {
  ReactNode,
  useRef,
} from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
}

export function SectionTransition({
  children,
  className,
}: SectionTransitionProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
        y: 80,
        filter: "blur(20px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}