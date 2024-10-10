/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { 50: "#2f4799" }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hover-primary-style': {
          '@apply hover:bg-primary-50 hover:text-white hover:border-primary-50': {},
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

