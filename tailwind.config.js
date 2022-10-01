/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      flexBasis: {
        '48': '32%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
