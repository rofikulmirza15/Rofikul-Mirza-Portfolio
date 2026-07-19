/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        panel: '#12121a',
        border: '#232330',
        red: {
          accent: '#ef233c',
        },
        blue: {
          accent: '#3a86ff',
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
