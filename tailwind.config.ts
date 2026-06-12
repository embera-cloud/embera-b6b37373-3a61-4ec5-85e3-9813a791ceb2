```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030014",
        "primary-dark": "#111827",
        "primary-light": "#1F2937",
        "accent-purple": "#8A2BE2",
        "accent-gold": "#FFD700",
        "accent-blue": "#00BFFF",
        "glow-purple-start": "rgba(138, 43, 226, 0.5)",
        "glow-purple-end": "rgba(138, 43, 226, 0)",
        "glow-gold-start": "rgba(255, 215, 0, 0.5)",
        "glow-gold-end": "rgba(255, 215, 0, 0)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-cinzel)", "serif"],
      },
      animation: {
        "aurora": "aurora 60s linear infinite",
        "subtle-pulse": "subtle-pulse 4s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "subtle-pulse": {
          "0%, 100%": { boxShadow: "0 0 15px 5px rgba(138, 43, 226, 0.3)" },
          "50%": { boxShadow: "0 0 25px 8px rgba(138, 43, 226, 0.5)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 15px 5px rgba(138, 43, 226, 0.4)',
        'glow-gold': '0 0 15px 5px rgba(255, 215, 0, 0.4)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```