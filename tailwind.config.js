/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
        'fredoka-one': ['Fredoka One', 'sans-serif'],
      },
      colors: {
        'pastel-blue': '#E0F2FE',
        'pastel-pink': '#FCE7F3',
        'pastel-green': '#ECFDF5',
        'pastel-yellow': '#FEFCE8',
        'pastel-purple': '#F3E8FF',
      },
    },
  },
  plugins: [],
};
