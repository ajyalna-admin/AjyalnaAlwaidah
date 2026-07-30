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
        cream: "#F1F6FB",
        "cream-deep": "#E3EDF7",
        navy: {
          DEFAULT: "#0F2A4A",
          light: "#1B3F6B",
        },
        sky: {
          DEFAULT: "#4FA8DA",
          deep: "#1D82BC",
        },
        line: "rgba(15,42,74,0.10)",
        muted: "#51607A",
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
