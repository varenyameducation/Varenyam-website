import type { Config } from "tailwindcss";

// Brand palette carried over from the Varenyam portal (lib/export templates):
//   teal  #0E6E84 — primary
//   red   #D63D2F — accent / CTA
//   gold  #F2B33D — highlight
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#0E6E84",
          "teal-dark": "#0A5868",
          "teal-light": "#15889F",
          red: "#D63D2F",
          "red-dark": "#B5301F",
          gold: "#F2B33D",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", lg: "2rem" },
        screens: { "2xl": "1200px" },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
