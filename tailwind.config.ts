import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#f7e7eb",
          DEFAULT: "#c54168",
          dark: "#8a1f3f"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(197, 65, 104, 0.2)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
