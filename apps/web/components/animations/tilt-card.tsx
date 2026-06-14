"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ReactNode,
  MouseEvent,
} from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({
  children,
  className,
}: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(
    rotateX,
    {
      stiffness: 120,
      damping: 15,
    }
  );

  const smoothRotateY = useSpring(
    rotateY,
    {
      stiffness: 120,
      damping: 15,
    }
  );

  const glareX = useTransform(
    smoothRotateY,
    [-15, 15],
    ["0%", "100%"]
  );

  const glareY = useTransform(
    smoothRotateX,
    [-15, 15],
    ["0%", "100%"]
  );

  function handleMouseMove(
    e: MouseEvent<HTMLDivElement>
  ) {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX =
      e.clientX - rect.left;

    const mouseY =
      e.clientY - rect.top;

    const rotateYValue =
      ((mouseX / width) - 0.5) * 20;

    const rotateXValue =
      ((mouseY / height) - 0.5) * -20;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {/* Glare */}
      <motion.div
        style={{
          background: `
            radial-gradient(
              circle at ${glareX} ${glareY},
              rgba(255,255,255,0.18),
              transparent 60%
            )
          `,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-inherit
          z-20
        "
      />

      <div
        style={{
          transform: "translateZ(40px)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}