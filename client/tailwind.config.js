/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': '1536px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'xs': '475px',
      'xxs': '375px',
    },
    fontFamily: {
      inter: "Inter, sans-serif",
      HelveticaNeueCyr: "HelveticaNeueCyr",
      ibm: "IBM Plex Sans, sans-serif"
    },
  },
  plugins: [],
}