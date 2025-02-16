
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "var(--primary)", 
      text: "var(--text)",     
      dark: "var(--dark)", 
      success: "var(--success)"
    },
    borderRadius: {
      card: "var(--card-border-radius)",
    },
    boxShadow: {
      card: "var(--card-box-shadow)",
    },
  },
  plugins: [],
};

export default config;