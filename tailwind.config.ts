import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/config/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        panel: "#0a0a0a",
        line: "rgba(255,255,255,0.18)",
        redline: "#d60000",
        signal: "#25D366",
        graphite: "#b8b8b8",
        chrome: "#ffffff",
      },
      fontFamily: {
        sans: ["Avenir Next", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.45)",
        red: "0 18px 55px rgba(214, 0, 0, 0.26)",
      },
    },
  },
  plugins: [],
};

export default config;
