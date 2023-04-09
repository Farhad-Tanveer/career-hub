/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#27db99",

          secondary: "#f9bbe1",

          accent: "#f29b10",

          neutral: "#181E25",

          "base-100": "#EAEAEB",

          info: "#3095F3",

          success: "#63EEB2",

          warning: "#B49913",

          error: "#ED457D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
