import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          light: "#6366F1",
          dark: "#3730A3",
        },
        accent: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
        },
        ink: {
          DEFAULT: "#0F172A",
          dark: "#090D16",
          light: "#1E293B",
          card: "#182238",
        },
        // Fallbacks & Semantic Colors
        navy: { DEFAULT: "#0F172A", dark: "#090D16" },
        cyan: { DEFAULT: "#4F46E5", dark: "#4338CA" },
        obsidian: "#0F172A",
        charcoal: "#111827",
        "snow-white": "#F8FAFC",
        "safe-green": "#10B981",
        "warning-amber": "#F59E0B",
        "danger-red": "#EF4444",
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
