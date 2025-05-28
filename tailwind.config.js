/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fcf9eb',
        'brand-blue': '#1e40af', // 自訂顏色
        primary: {
          DEFAULT: '#ffb901',
          light: '#fcf9eb',
          dark: '#6b4d00',
        },
        accent: {
          DEFAULT: '#45b8af',
          light: '#9dd2cd',
          dark: '#1b8684',
        },
        secondary: {
          DEFAULT: '#f59127',
          light: '#ffb86a',
          dark: '#eb6f4d',
        },
        neutral: {
          DEFAULT: '#949292',
          light: '#d7d3d0',
          dark: '#4f4e4e',
        },
      },
      screens: {
        'xs': '480px', // 新增一個更小的斷點
      },
      fontFamily: {
        'custom': ['"Noto Sans TC"', 'sans-serif'], // 自訂字型
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}

