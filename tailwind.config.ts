import type { Config } from "tailwindcss";

// Varenyam premium dark system.
//   ink   #020617 — deep navy base (matches hero artwork)
//   teal  #0E6E84 → cyan #22D3EE — brand gradient
//   orange #FF6B1A — CTA accent (from the logo's warm mark)
//   gold  #F2B33D — highlight
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#020617", 800: "#0b1220", 700: "#111c30" },
        brand: {
          teal: "#0E6E84",
          "teal-dark": "#0A5868",
          "teal-light": "#15889F",
          cyan: "#22D3EE",
          red: "#D63D2F",
          orange: "#FF6B1A",
          "orange-dark": "#F2520E",
          gold: "#F2B33D",
        },
      },
      fontFamily: {
        display: ['"General Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Satoshi"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", lg: "2rem" },
        screens: { "2xl": "1280px" },
      },
      boxShadow: {
        glass: "0 20px 50px rgba(0,0,0,0.35)",
        "glass-lg": "0 30px 80px rgba(0,0,0,0.45)",
        glow: "0 0 60px rgba(34,211,238,0.25)",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.75" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "slide-in-right": "slide-in-right 0.9s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
