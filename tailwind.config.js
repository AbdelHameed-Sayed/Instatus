/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        darkestGray: '#575757',
        darkGray1: '#616161',
        darkGray2: '#787878',
        darkGray3: '#959595',
        darkGray4: '#929292',
        mediumGray: '#E0E0DF',
        mediumGray1: '#F5F5F5',
        mediumGray2: '#DFDFDF',
        mediumGray3: '#f5f5f5b8',
        mediumGray4: '#ffffffb8',
        mediumGray5: '#ffffff75',
        lightGray: '#F8F8F8',
        lightGray1: '#FBFBFB',
        red1: '#EC1A46',
        brownStone: '#8F485D',
        black: '#000000',
        black1: '#1C1C1C',
      },
    },
  },
  plugins: [],
};
