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
        primary: {
          light: "hsl(0, 0%, 90%)",
          DEFAULT: "hsl(199, 82%, 38%)", //  used for buttons/text
        },
        "dark-text": "hsl(240, 12%, 24%)", // Dark color used for headings and button contrast
        "light-bg": {
          DEFAULT: "#EEF7FB", // Lightest color from the gradient
          alt: "#d9eef7", // Alternative light background
        },
        "dark-bg": "#476571",
        "dark-text-2": "#47626D",
        "off-white": "#F7FBFD",
        "off-white-2": "#EAF7FC",
        "dark-gray": "#232323",
        "medium-gray": "#7b858b",
        "standard-gray": "#666666",
        "skill-border": "#63C5F1",
        "hover-light": "#405B66",
        "portfolio-detail-text": "#6A787D",
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
