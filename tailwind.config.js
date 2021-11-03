module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "abstract-pattern": "url('/assets/abstract-timekeeper.svg')",
      },
      colors: {
        black: {
          base: "#0B0C10",
          light: "#1F2833",
        },
        blue: {
          electric: "#66FCF1",
          "darker-electric": "#45A29E",
        },
        gray: {
          taupe: "#8E8D8A",
          dm: "#C5C6C7",
        },
        eggshell: {
          light: "#EAE7DC",
          dark: "D8C3A5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
