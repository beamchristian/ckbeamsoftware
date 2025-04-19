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
        "dark-bg": "#476571",
        "dark-text-2": "#47626D",
        // [#F7FBFD] need to add
      },
      backgroundImage: {
        // You can also define reusable gradients here if needed
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
