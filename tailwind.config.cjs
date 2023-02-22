/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*[js, jsx]"],
  theme: {
    extend: {
      backgroundImage: {
        Doc: "url('./public/Doc.jpg')",
      },
    },
  },
  plugins: [],
};
