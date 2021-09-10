module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#645cff",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.875rem",
      },
    },
    // screens: {
    //   sm: "100%",
    //   md: "100%",
    //   lg: "1140px",
    // },
  },

  variants: {
    extend: {
      margin: ["last"],
    },
  },
  plugins: [],
}
