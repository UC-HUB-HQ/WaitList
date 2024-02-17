/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {

    screens: {
      'xlg': {'max': '1920px'},
      // => @media (max-width: 1920px) { ... }
      'lg': {'max': '1440px'},
      // => @media (max-width: 1440px) { ... }
      'md': {'max': '1030px'},
      // => @media (max-width: 1030px) { ... }
      'tab': {'max': '800px'},
      // => @media (max-width: 768px) { ... }
      'sm-tab': {'max': '600px'},
      // => @media (max-width: 600px) { ... }
      'mobile': {'max': '430px'},
      // => @media (max-width: 430px) { ... }
      'smobile': {'max': '380px'},
      // => @media (max-width: 360px) { ... }
    },

    fontFamily:{
      "body1": ["Figtree"],
      "body2": ["Public Sans"]

    },

    extend: {

      animation: {
				newContent: 'fadeIn 1s linear',
        animated: 'fadeOut 1s  linear',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},

        fadeOut: {
          from: { opacity: 1 },
					to: { opacity: 0 },
        }
			},

      colors:{
        "primary": {
          "100": "#0562EF",
          "200": "#2F7CF2",
          "300": "#03419F",
          "400": "#5896F4",
          "500": "#033178",
          "600": "#022150",
          "700": "#0452C7",
          "ContactBg": "rgba(205, 224, 252, 0.30)",
          'formBg': "rgba(205, 224, 252, 0.30)"
        },
        "secondary": {
          "100": "#CC7306",
          "200Bg": "rgba(49, 28, 1, 0.5)",
          "300": "#FDE8CD",
          "cardBg": "#5E1313",
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







