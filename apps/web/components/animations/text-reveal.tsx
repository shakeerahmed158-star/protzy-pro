"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({
  text,
  className,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
          className="mr-3 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}