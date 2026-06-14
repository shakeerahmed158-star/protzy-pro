"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  ReactNode,
  MouseEvent,
} from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({
  children,
  className,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  function handleMouseMove(
    e: MouseEvent<HTMLButtonElement>
  ) {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const offsetX =
      e.clientX - rect.left - width / 2;

    const offsetY =
      e.clientY - rect.top - height / 2;

    x.set(offsetX * 0.25);
    y.set(offsetY * 0.25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.button>
  );
}