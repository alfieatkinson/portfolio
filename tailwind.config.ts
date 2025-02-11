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
          light: colors.purple['300'],
          lighter: colors.purple['200'],
          dark: colors.purple['600'],
          'lighter-dark': colors.purple['500']
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
  plugins: []
} satisfies Config