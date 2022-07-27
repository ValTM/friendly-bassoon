module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      // Main custom colors
      white: '#fff',
      black: '#000',
      gray: {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
      },

      // Colors for Loopstudio project
      loopDarkGray: '#696969',

      // Colors for Equalizer project
      eqGreen: '#66E2DC',
      eqOrange: '#FA7453',
      eqYellow: '#FFB964',
      eqBlack: '#191826',
      eqWhite: '#FCFAF9',
      //Colors for Tips Calculator project
      tipsCyan: '#26c0ab',
      tipsDarkCyan: '#00494d',
      tipsGrayishCyan: '#5e7a7d',
      tipsLightGrayishCyan: '#c5e4e7',
      tipsWhiteColor: '#f3f9fa',
      // Colors for Githun App project
      gLightBlue: '#0079ff',
      gLightGray: '#697c9a',
      gLightDarkBlue: '#4b6a9b',
      gLightDarkGray: '#2b3442',
      gLightLightGray: '#f6f8ff',
      gDarkDarGray: '#141D2F',
      gDarkBlue: '#1E2A47',
    },
  },
  plugins: [],
};
