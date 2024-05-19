import type { Config } from "tailwindcss";
import {transform} from "sucrase";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'chaos-pattern':
            "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2)), url('/img/chaosDestr.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
