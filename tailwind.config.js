/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A148C',
        secondary: '#B24BF3',
        dark: '#0F172A',
        light: '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
