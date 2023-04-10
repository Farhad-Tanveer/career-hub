/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef6407",

          secondary: "#e2618e",

          accent: "#7eff28",

          neutral: "#161C23",

          "base-100": "#ECEAF5",

          info: "#7E90FE",

          success: "#21AB5A",

          warning: "#F0C966",

          error: "#FA3D4A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
