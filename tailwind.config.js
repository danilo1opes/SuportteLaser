/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        libre: ['Libre Baskerville', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          mainBg: '#f5f5f5',
          primary: '#000',
          secundary: '#fff',
          gray: '#374151',
          softGray: '#D1D5DB',
          brandGold: '#FACC15',
        },
      },
    },
  },
  plugins: [],
};
