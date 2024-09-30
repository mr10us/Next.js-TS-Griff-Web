import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontSize: {
      xs: ["0.8rem", { lineHeight: "1rem" }],
      sm: [
        "clamp(0.75rem, 0.71rem + 0.189vw, 0.875rem)",
        { lineHeight: "clamp(0.875rem, 0.835rem + 0.189vw, 1rem)" },
      ],
      base: [
        "clamp(0.875rem, 0.835rem + 0.189vw, 1rem)",
        { lineHeight: "clamp(1rem, 0.96rem + 0.189vw, 1.125rem)" },
      ],
      lg: [
        "clamp(1rem, 0.96rem + 0.189vw, 1.125rem)",
        { lineHeight: "clamp(1.125rem, 1.085rem + 0.189vw, 1.25rem)" },
      ],
      xl: [
        "clamp(1.125rem, 1.085rem + 0.189vw, 1.25rem)",
        { lineHeight: "clamp(1.25rem, 1.17rem + 0.377vw, 1.5rem)" },
      ],
      "2xl": [
        "clamp(1.25rem, 1.17rem + 0.377vw, 1.5rem)",
        { lineHeight: "clamp(1.25rem, 0.75rem + 1.6vi, 1.75rem)" },
      ],
      "2.5xl": [
        "clamp(1.5rem, 1.42rem + 0.377vw, 1.75rem)",
        { lineHeight: "clamp(1.75rem, 1.67rem + 0.377vw, 2rem)" },
      ],
      "3xl": [
        "clamp(1.5rem, 1.38rem + 0.566vw, 1.875rem)",
        { lineHeight: "clamp(1.875rem, 1.755rem + 0.566vw, 2.25rem)" },
      ],
      "4xl": [
        "clamp(1.875rem, 1.755rem + 0.566vw, 2.25rem)",
        { lineHeight: "clamp(2rem, 1rem + 3.2vi, 3rem)" },
      ],
      "5xl": ["clamp(2.25rem, 2.009rem + 1.132vw, 3rem)", { lineHeight: "1" }],
      "6xl": ["clamp(3rem, 2.759rem + 1.132vw, 3.75rem)", { lineHeight: "1" }],
      "7xl": [
        "clamp(3.75rem, 3.509rem + 1.132vw, 4.5rem)",
        { lineHeight: "1" },
      ],
      "8xl": ["clamp(4.5rem, 4.019rem + 2.264vw, 6rem)", { lineHeight: "1" }],
      "9xl": ["clamp(6rem, 5.358rem + 3.019vw, 8rem)", { lineHeight: "1" }],
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "650px",
        md: "778px",
        lg: "1028px",
        xl: "1290px",
        "2xl": "1496px",
      },
    },
    extend: {
      screens: {
        "hover-supported": { raw: "(hover: hover)" },
      },
      backgroundColor: {
        primary: "hsl(var(--primary))",
      },
      boxShadow: {
        "inner-lg": "inset 0 0 6px 0px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        white: "rgb(243, 244, 246)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
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
        dirt: {
          DEFAULT: "hsl(var(--dirt))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)", ...fontFamily.sans],
        grotesk: ["var(--font-grotesk)", ...fontFamily.sans],
      },
      backgroundImage: {
        header:
          "linear-gradient(0deg, rgba(242,243,244,0) 0%, rgba(2,3,4,0.5) 100%);",
        "hero-baner":
          "linear-gradient(90deg, hsl(var(--secondary)) 0%, hsl(var(--dirt)) 100%);",
        coach:
          "linear-gradient(0deg, rgba(114,34,62,1) 0%, rgba(4,6,19,1) 35%, rgba(4,6,19,1) 65%, rgba(114,34,62,1) 100%);",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;

export default config;
