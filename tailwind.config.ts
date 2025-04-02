import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./styles/**/*.css", // Ajoute cette ligne pour inclure ton CSS
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: { // Remplace "extend" par une définition directe pour forcer
      sans: ['"Sofia Pro"', "sans-serif"],
    },
    extend: {
      fontSize: {
        xxxs: "0.5rem",
        xxs: "0.625rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        dark: {
          background: "#0c0a1d",
          secondary: "#131130",
          primaryText: "#E4E4E4",
          accent1: "#A8DADC",
          accent1Muted: "#8CBEC7",
          accent2: "#FFC1CC",
          accent2Muted: "#E0A3A8",
          cta: "#B39CD0",
          ctaMuted: "#9F87B9",
          standOut: "#745cc2",
          cutyGreen: "#8bc5a2",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "secondary-dark": "#191436",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        peach: {
          300: "hsl(16, 90%, 92%)",
          400: "hsl(16, 85%, 88%)",
        },
        rose: {
          200: "hsl(340, 80%, 92%)",
          300: "hsl(340, 75%, 88%)",
        },
        green: {
          200: "hsl(140, 60%, 92%)",
          300: "hsl(140, 55%, 88%)",
        },
        purple: {
          200: "hsl(270, 60%, 92%)",
          300: "hsl(270, 55%, 88%)",
        },
      },
      backgroundImage: {
        "promo-gradient-light": "linear-gradient(90deg, hsl(16deg 100% 80%) 0%, hsl(0deg 100% 80%) 100%)",
        "promo-gradient-dark": "linear-gradient(90deg, hsl(238,100%,71%) 0%, hsl(253,100%,76%) 100%)",
        "moving-bg": "linear-gradient(to right, hsl(16, 90%, 92%), hsl(340, 80%, 92%), hsl(140, 60%, 92%), hsl(16, 90%, 92%))",
        "moving-bg-dark": "linear-gradient(to right, hsl(240, 60%, 70%), hsl(250, 50%, 60%), hsl(260, 40%, 50%), hsl(240, 60%, 70%))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "moving-gradient-progress": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "300% 0%" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "moving-gradient-progress": "moving-gradient-progress 25s linear infinite",
        "pulse-subtle": "pulse-subtle 1.5s ease-in-out infinite",
        "spin-slow": "spin-slow 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;