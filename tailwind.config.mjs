/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bebas: ['var(--font-bebas-neue)'],
      },
      textColor: {
        textDark: "#303638"
      },
      backgroundImage: {
        'bg-dark': "url('/bg-section.png')",
      },

    },
  },
  plugins: [],
};
