/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        "2" : 2
      },
      fontFamily: {
        sans: [ "sohne-var", "Helvetica Neue", "Arial", "sans-serif"]
      },
      letterSpacing: {
      '3': ['-3px']
      },
      colors:{
        buttonColor: "hsla(0,0%,100%,0.2)",
        light:"rgb(246, 249, 252)",
        skyBlue: "#635BFF",
        lightBlack: "#0A2540",
        lightslate: "#425466",
        chocolate: "#3A3A3A",
        indigo: "#00D4FF",
        purple: "#7A73FF",
        lightBlue: "#ADBDCC",
        Cyan: "#90e0ff",
        yellow: "#ffcb57",
        lightPurple: "#a960ee",
        
      },
      translate:{
        "60":"60%",
        "100":"100%",
        "10":"10%",
        "15":"15%"
      },
      screens:{
        'lsm': '400px',
        'ssm': '330px',
      }
    },
  },
  plugins: [],
}
