"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";

export function InteractiveGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    function handleMouseMove(
      e: MouseEvent
    ) {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[1]
        h-[400px]
        w-[400px]
        rounded-full
        bg-blue-500/10
        blur-3xl
      "
    />
  );
}