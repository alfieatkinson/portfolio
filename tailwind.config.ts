import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fe1ee3',
          lighter: '#663399',
          dark: '#FE1E7E',
          'lighter-dark': '#663399'
        },
        muted: {
          DEFAULT: colors.slate['300'],
          dark: colors.slate['700']
        }
      },
      spacing: {
        18: '4.5rem'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        xl: '3rem'
      }
    },
    screens: {
      ...defaultTheme.screens,
      xs: '480px'
    }
  },
  plugins: [],
} satisfies Config