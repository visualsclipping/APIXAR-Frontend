const defaultTheme = require("tailwindcss/defaultTheme");
const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  mode: "jit",
  purge: {
    // enabled : true, //comment this when run on development/local server, but un-comment this when push on vercel or build for production by "npm run build".
    enabled: false, //do opposite of previous one, means un-comment this when only run on development/local server
    content: [
      "./index.html",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    colors: {
      primaryOn: "#FFFFFF",
      primary: "#2854CC",
      primaryContainer: "#DCE1FF",
      primaryContainerOn: "#00164E",
      secondary: "#565D79",
      secondaryContainerOn: "#131A33",
      tertiary: "#7C5076",
      Warning: "#BA1A1A",
      bgBlack: "#32333E",
      bgLight: "#FEFBFF",
      surfaceLight: "#E2E1EC",
      surfaceDark: "#45464F",
      surfaceOutline: "#767680",
      surfaceVariant: "#F3F3FC",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        bottom:
          "0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)",
      },
      height: {
        28: "100px",
        sm: "350px",
        md: "400px",
        330: "330px",
        440: "440px",
        lg: "500px",
        xl: "600px",
      },
      width: {
        80: "80px",
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
      },
      padding: {
        2.5: "10px",
      },
      screens: {
        "2xl": "1440px",
        xl: "1280px",
        lg: "1024px",
        ipad: { min: "960px", max: "1023px" },
        md: "768px",
        sm: "640px",
        xs: "420px",
        xss: "320px",
      },
      inset: {
        "-1": "-1rem",
        "-2": "-2rem",
        "-3": "-3rem",
        "-4": "-4rem",
        "-5": "-5rem",
        "-6": "-6rem",
        "-7": "-7rem",
        "-8": "-8rem",
        "-9": "-9rem",
        "-10": "-10rem",
        1: "1rem",
        2: "2rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        9: "9rem",
        10: "10rem",
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    //require('tailwind-scrollbar')
  ],
});
