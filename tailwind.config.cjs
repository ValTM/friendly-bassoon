module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      white: '#fff',
      black: '#000',
      gray: {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
      },
      // Colors for Loopstudio project
      loopDarkGray: '#696969',
    },
  },
  plugins: [],
};
