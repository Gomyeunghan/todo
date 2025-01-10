import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/global-layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          800: "#1E293B",
          900: "#0F172A",
        },
        primary: "#7C3AED",
        rose: "#F43F5E",
        bgLight: "#EDE9FE",
        yellowGreen: "#BEF264",
        brown: "#92400E",
        violet100: "#EDE9FE",
      },
      fontFamily: {
        nanum: ["NanumSquare", "sans-serif"],
      },
      fontSize: {
        20: ["20px", { lineHeight: "1.5" }],
        18: ["18px", { lineHeight: "1.5" }],
        16: ["16px", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".plus": {
          backgroundImage: "url('/plus.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
          width: "1em",
          height: "1em",
        },
      });
    },
  ],
};

export default config;
