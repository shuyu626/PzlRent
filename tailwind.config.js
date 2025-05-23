/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fffdf4',
        'brand-blue': '#1e40af', // 自訂顏色
        primary: {
          DEFAULT: '#ffb901',
          light: '#fefbea',
          dark: '#461a01',
        },
        secondary: {
          DEFAULT: '#444444',
          light: '#d7d3d0',
          dark: '#292524',
        },
      },
      fontFamily: {
        'custom': ['"Noto Sans TC"', 'sans-serif'], // 自訂字型
      },
    },
  },
  plugins: [],
}

