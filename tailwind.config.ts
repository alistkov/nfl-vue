import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.vue",
    "./index.html",
  ],
  theme: {
    extend: {
      maxWidth: {
        logo: '48px',
      },
      spacing: {
        header: '10px 20px'
      }
    },
    colors: {
      blue: {
        dark: '#013369',
        light: '#1B48E0'
      },
      white: '#fff',
      dark: '#151515',
      gray: {
        dark: '#ccc',
        mid: '#eee',
        light: '#fafafa'
      },
      textColor: '#333'
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
  },
  plugins: [],
} satisfies Config

