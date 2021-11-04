module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "abstract-pattern": "url('/assets/abstract-timekeeper.svg')",
      },
      colors: {
        'rich-black': "#0B0C10",
        'bunker': "#1F2833",
        'electric-blue': "#66FCF1",
        'electric-blue-dark': "#45A29E",
        'light-gray': "#C5C6C7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
