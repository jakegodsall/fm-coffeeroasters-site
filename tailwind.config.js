/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: "var(--font-fraunces)",
        barlow: "var(--font-barlow)",
      },
      colors: {
        "primary-green": "var(--primary-green)",
        "secondary-green": "var(--secondary-green)",
        "primary-beige": "var(--primary-beige)",
        "off-white": "var(--off-white)",
        grey: "var(--grey)",
      },
    },
  },
  plugins: [],
};
