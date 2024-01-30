/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "body1": ["Figtree"],
        "body2": ["Public Sans"]

      },
      colors:{
        "primary": {
          "100": "#0562EF",
          "200": "#2F7CF2",
          "300": "#03419F",
          "400": "#5896F4",
          "500": "#033178",
          "600": "#022150",
          "ContactBg": "rgba(205, 224, 252, 0.30",
          'formBg': "rgba(205, 224, 252, 0.30)"
        },
        "secondary": {
          "100": "#CC7306",
          "200Bg": "rgba(49, 28, 1, 0.5)",
          "300": "#FDE8CD",
        },
        "tertiary": {
          "100": "#310A31",
          "200": "#190519"
        },
        "black": {
          "100": "#313031",
          "200": "rgba(186, 173, 186, 0.71)",
          "bodyBgColor": "#F3F2F2",
          "copyrigh": "rgba(186, 173, 186, 0.71",
        }
      }
    },
  },
  plugins: [],
}

