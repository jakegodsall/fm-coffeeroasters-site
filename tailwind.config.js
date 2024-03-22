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
        "text-linear-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 40%) 0%, #FEFCF7 100%)",
        "home-hero-mobile":
          "url(/assets/home/mobile/image-hero-coffeepress.jpg)",
        "home-hero-tablet":
          "url(/assets/home/tablet/image-hero-coffeepress.jpg)",
        "home-hero-desktop":
          "url(/assets/home/desktop/image-hero-coffeepress.jpg)",
        "about-hero-mobile":
          "url(/assets/about/mobile/image-hero-whitecup.jpg)",
        "about-hero-tablet":
          "url(/assets/about/tablet/image-hero-whitecup.jpg)",
        "about-hero-desktop":
          "url(/assets/about/desktop/image-hero-whitecup.jpg)",
        "subscribe-hero-mobile":
          "url(/assets/plan/mobile/image-hero-blackcup.jpg)",
        "subscribe-hero-tablet":
          "url(/assets/plan/tablet/image-hero-blackcup.jpg)",
        "subscribe-hero-desktop":
          "url(/assets/plan/desktop/image-hero-blackcup.jpg)",
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
