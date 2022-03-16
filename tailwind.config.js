module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4.5xl': '2.5rem',
      },
      screens: {
        'xs': '320px',
      },
      width: {
        '352': '22rem',
        '392': '24.5rem',
        '480': '30rem',
        '520': '32.5rem',
        '672': '42rem',
      },
      colors: {
        'scloudblue': '#2666CF',
        'scloudblue-light': '#E6EFFF',
        'scloudblue-dark': '#1C417E',
      }
    },
   
      
  },
  plugins: [],
}
