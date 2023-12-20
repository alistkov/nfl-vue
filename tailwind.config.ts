import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.vue",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#013369',
          light: '#1B48E0'
        },
        dark: '#151515',
        gray: {
          dark: '#ccc',
          mid: '#eee',
          light: '#fafafa'
        },
        textColor: '#333',
        transparent: 'transparent'
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
  },
  plugins: [],
} satisfies Config

