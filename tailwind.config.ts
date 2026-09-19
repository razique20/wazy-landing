import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#23236B", dark: "#1E1B4B" },
        cyan: { DEFAULT: "#00E5FF", dark: "#00B8D4" },
        emerald: { DEFAULT: "#00E676" },
        obsidian: "#0A0E1A",
        charcoal: "#111827",
        "snow-white": "#F8FAFC",
        "safe-green": "#10B981",
        "warning-amber": "#FFD740",
        "danger-red": "#FF5252",
      },
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
