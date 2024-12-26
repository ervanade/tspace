/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#E0582A"
      },
      fontFamily: {
        bebas: ['var(--font-bebas-neue)'],
        poppins: ['var(--font-poppins)'],
        montserrat: ['var(--font-montserrat)'],
      },
      textColor: {
        textDark: "#303638",
        textSecondary: '#E0582A'
      },
      backgroundImage: {
        'bg-dark': "url('/bg-section.png')",
      },

    },
  },
  plugins: [],
};
