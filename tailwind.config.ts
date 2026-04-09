import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
        'custom-shadow': '0px 1px 2px -1px rgba(0,0,0,0.5), 0px 1px 3px 0px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};

export default config;