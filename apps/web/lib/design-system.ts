export const designSystem = {
  
  colors: {
    background: "#f5f7fb",
    foreground: "#09090b",

    primary: "#7c3aed",
    secondary: "#3b82f6",
    accent: "#06b6d4",

    glass: {
      light: "rgba(255,255,255,0.7)",
      border: "rgba(255,255,255,0.4)",
    },
  },

  typography: {
    hero: `
      text-6xl
      md:text-5xl
      font-black
      leading-tight
      tracking-tight
      text-zinc-900
    `,

    heading: `
      text-5xl
      md:text-7xl
      font-black
      leading-tight
      text-zinc-900
    `,

    subheading: `
      text-xl
      leading-relaxed
      text-zinc-600
    `,

    body: `
      text-base
      leading-relaxed
      text-zinc-600
    `,
  },

  spacing: {
    section: "py-20",
    container: "max-w-6xl mx-auto",
    padding: "px-6",
  },

  radius: {
    xl: "rounded-[32px]",
    "2xl": "rounded-[40px]",
    "3xl": "rounded-[48px]",
  },

  shadows: {
    glow: "shadow-[0_20px_80px_rgba(59,130,246,0.12)]",

    premium:
      "shadow-[0_20px_120px_rgba(139,92,246,0.18)]",
  },

  glass: `
    border
    border-white/40
    bg-white
    
  `,

  transitions: {
    smooth: "transition-all duration-300",
    premium: "transition-all duration-500",
  },
};