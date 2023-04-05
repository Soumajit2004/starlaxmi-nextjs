/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', "display"],
        sans: ['var(--font-sans)', "sans"],
      },
      scale:{
        "102": "1.02",
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF0000",

          "secondary": "#950101",

          "accent": "#FFD933",

          "neutral": "#000000",

          "base-100": "#3D0000",

          "info": "#1D7AED",

          "success": "#D3ECA7",

          "warning": "#fef08a",

          "error": "#ef4444",
        },
      },
    ],
  },
};
