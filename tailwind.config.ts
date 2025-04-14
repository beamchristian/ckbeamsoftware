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
        // Suggested names based on usage in your code:
        brand: {
          light: "#48AFDE", // The blue from the gradient and shadow base
          DEFAULT: "#47AEDE", // The slightly different blue used for buttons/text
        },
        "dark-text": "#223740", // Dark color used for headings and button contrast
        "light-bg": {
          DEFAULT: "#EEF7FB", // Lightest color from the gradient
          alt: "#d9eef7", // Alternative light background
        },
      },
    },
  },
  plugins: [],
};
export default config;
