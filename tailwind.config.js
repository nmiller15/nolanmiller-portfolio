/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      /** CSS DARK THEME PRIMARY COLORS */
      "primary-100": "#3f51b5",
      "primary-200": "#5962be",
      "primary-300": "#7074c6",
      "primary-400": "#8587ce",
      "primary-500": "#9a9ad7",
      "primary-600": "#aeaddf",
      "surface-100": "#121212",
      "surface-200": "#282828",
      "surface-300": "#3f3f3f",
      "surface-400": "#575757",
      "surface-500": "#717171",
      "surface-600": "#8b8b8b",
      "surface-mixed-100": "#181820",
      "surface-mixed-200": "#2d2d35",
      "surface-mixed-300": "#44444b",
      "surface-mixed-400": "#5c5b62",
      "surface-mixed-500": "#75747a",
      "surface-mixed-600": "#8f8f93",
      white: "#e1e1e1",
      /**
       * Dark/Mixed - 100: For body background color
        Dark/Mixed - 200: For cards background color
        Dark/Mixed - 300: For chips buttons, dropdowns background color
        Dark/Mixed - 400: For sidebars, navbar background color
        Dark/Mixed - 500: For modal, dialogs background color
        Dark/Mixed - 600: For on background texts color
       */
    },
    fontFamily: {
      serif: [
        "Inter",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {},
  },
  plugins: [],
};
