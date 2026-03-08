import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1BAE70",
        "primary-light": "#4DC98F",
        "primary-dark": "#06752E",
        cream: "#F4F6F4",
        sand: "#E8EDE8",
        dark: "#14261C",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Lato", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
