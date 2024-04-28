/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray900: '#121214',
        gray800: '#202024',
        gray300: '#c4c4cc',
        gray100: '#e1e1e6',
        green500: '#00875f',
        green300: '#00b37e',
        /*  gradient: 'linear-gradient(45deg, red 0 50%, blue 50% 100%)', */
      },
      screens: {
        customW: 'calc(100vw - ((100vw - 1180px) / 2))',
        customH: 'calc((656px) * - 0.5rem)',
      },
    },
  },
  plugins: [],
}