import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#111820",
          900: "#17212b",
          800: "#23303d",
        },
        accent: {
          50: "#fff8ed",
          100: "#ffefd4",
          500: "#ef8d22",
          600: "#dc7610",
          700: "#b95b0c",
        },
      },
      boxShadow: {
        card: "0 18px 45px -28px rgba(17, 24, 32, 0.28)",
        lift: "0 22px 46px -25px rgba(17, 24, 32, 0.36)",
      },
    },
  },
  plugins: [],
};

export default config;

