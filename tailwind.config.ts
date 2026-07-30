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
        cream: "#FAF7F2",
        "cream-deep": "#F4F2EF",
        sand: "#DED8CF",
        navy: {
          DEFAULT: "#121F3E",
          light: "#24345C",
          deep: "#0B1429",
        },
        sky: {
          DEFAULT: "#8EADBC",
          deep: "#6F93A6",
        },
        mist: "#B7CBD4",
        periwinkle: {
          DEFAULT: "#D6E0F3",
          deep: "#B8C8E2",
        },
        ice: "#EEF3FB",
        line: "rgba(18,31,62,0.12)",
        muted: "#6F93A6",
      },
      fontFamily: {
        display: ["var(--font-noto-kufi)", "system-ui", "sans-serif"],
        body: ["var(--font-noto-kufi)", "system-ui", "sans-serif"],
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
