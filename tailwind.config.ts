import type { Config } from "tailwindcss";

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
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "720px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#10110f",
          muted: "#2a2a26",
        },
        paper: {
          DEFAULT: "#eceae4",
          muted: "#9a968c",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "title": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
