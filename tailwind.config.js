/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "white-to-transparent":
          "linear-gradient(to bottom, white, white 60%, rgba(255, 255, 255, 0));",
      },
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
