/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")
],
  content: ["./src/**/*.{html,js}",
  "./index.html"],
  theme: {
    extend:  { animation: {
      'rgb': 'delay-75 infinite',},
      keyframes: {
      rgb: {
          '0%': {
            'background-color': '#04A3F8'
          },
          '25%': {
            'background-color': '#31AFF3'
          },
          '50%': {
            'background-color': '#3D9ACD'
          },
          '75%': {
            'background-color': '#0D5075'
          },
          '100%': {
            'background-color': '#056BA4'
          }
        }
      },
  },
  plugins:[
    require('daisyui'),
  ], 
    }
  }
  
