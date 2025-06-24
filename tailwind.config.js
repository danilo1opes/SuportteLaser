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
        brands: {
          mainBg: '#f5f5f5',
          primary: '#000',
          secundary: '#fff',
          gray: '#374151',
        },
      },
    },
  },
  plugins: [],
};
