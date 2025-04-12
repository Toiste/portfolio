/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-right-custom': 'linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))',
        "hero-pattern": "url('/src/assets/herobg.png')",
        'orange-gradient': 'linear-gradient(to bottom,#252525, #252525,#191919 )',
      },
      animation: {
        slides: 'slides 30s linear infinite',
      },
      keyframes: {
        slides: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-40%)' }, // Exemplo para animação de slide horizontal
        },
      },
      colors: {
        primary: "#191919",
        secondary: "#cacaca",
        tertiary: "#252525",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

        hero: "#ff7849",
        customnav: "#0000006b",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
