/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/layouts/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Mercurial"', 'sans-serif'],
        body: ['"Roboto"', 'sans-serif'],
      },
      colors: {
        primary: '#6E2452',   // Deep Purple - Hero + Branding
        secondary: '#87006494', // Accent Pink - CTAs
        text: '#7D7D7D',      // Body Text
        accent: '#AD3B66',    // Optional highlight reuse
        white: '#FFFFFF',
        dark: '#333333',      // Headings & Strong Text
        light: '#F4F4F4',     // Section backgrounds
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      
    },
  },
  plugins: [],
}
