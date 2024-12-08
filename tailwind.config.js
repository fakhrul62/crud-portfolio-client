/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  daisyui: {
    themes: ["black"],
  },
  theme: {
    extend: {
      colors: {
        accent: "#D1B055",
        accenth: "#e3b63b"
      },
      fontFamily: {
        heading: "Outfit, sans-serif",
        body: "Inter, sans-serif",
      },
      dropShadow: {
        'me': [
            '0px 0px 10px #00000098'
        ]
      }
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};