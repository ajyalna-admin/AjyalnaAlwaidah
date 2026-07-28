import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F2ED",
        "cream-deep": "#EFEBE3",
        navy: {
          DEFAULT: "#121F3E",
          light: "#1C2E56",
        },
        sky: {
          DEFAULT: "#9DB9C8",
          deep: "#7A9DAF",
        },
        line: "rgba(18,31,62,0.10)",
        muted: "#5C6478",
      },
      fontFamily: {
        display: ["var(--font-cairo)", "system-ui", "sans-serif"],
        body: ["var(--font-tajawal)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
