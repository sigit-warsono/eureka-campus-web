import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "black-colorNew": "rgba(0,0,0,0.4)",
        "black-colorVid": "rgba(0,0,0,0.6)",
        "black-colorModal": "rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
export default config;
