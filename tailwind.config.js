module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff1801',
        'primary-light': '#ffffff',
        'primary-dark': '#000000',
      },
      screens: {
        xs: '380px',
      },
    },
  },
  plugins: [],
};
