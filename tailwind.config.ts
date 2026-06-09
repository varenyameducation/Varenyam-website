import type { Config } from "tailwindcss";

// Varenyam premium design system.
//   navy   #081A2F → deep #07111F — hero / footer family (the bookends)
//   teal   #0E6E84 → cyan #22D3EE — brand gradient   · accent #00B8C4
//   orange #FF6B1A — CTA accent (from the logo's warm mark)
//   gold   #F2B33D — highlight
//   cream  #FFF4EC — warm CTA band
//   surface#F5F7FA — soft section background
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#020617", 800: "#0b1220", 700: "#111c30" },
        navy: { DEFAULT: "#081A2F", deep: "#07111F", 700: "#0d2742", 600: "#11355c" },
        surface: "#F5F7FA",
        cream: { DEFAULT: "#FFF4EC", 100: "#FFF7F2", 200: "#FFEFE4", 300: "#FFE3D2" },
        brand: {
          teal: "#0E6E84",
          "teal-dark": "#0A5868",
          "teal-light": "#15889F",
          accent: "#00B8C4",
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
        // premium light-surface elevation
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.12)",
        lift: "0 2px 4px rgba(15,23,42,0.05), 0 28px 56px -20px rgba(14,110,132,0.30)",
        nav: "0 1px 0 rgba(15,23,42,0.06), 0 12px 30px -16px rgba(8,26,47,0.25)",
        cta: "0 30px 70px -28px rgba(255,107,26,0.45)",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "slide-in-right": "slide-in-right 0.9s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        marquee: "marquee 44s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
