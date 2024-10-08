// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  // darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        'extra-bold': '800',
        black: '900',
      },
      fontFamily: {
        // 'cafedang': ['Cafe24Dangdanghae'],
        'hak': ['HakgyoansimWoojuR'],
        'young': ['Young Serif'],
        'locus': ['locus_sangsang'],
        'sta': ["Staatliches"],
        'dm': ['DM Serif Display'],
        'acc': ['ACCchildrenskyOTF'],
        'nerko': ['Nerko One'],
        'guelmi': ['Ownglyph guelmi'],
        'bayon': ['Bayon'],
        sans: ["Sequel", "locus_sangsang", "Ownglyph guelmi", "HakgyoansimWoojuR", "AppleSDGothicNeo", "Noto Sans KR", "Arial", "sans-serif"],

      },
      colors: {
        primary: colors.blue,
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
              fontFamily:'iA Writer Mono S', 
              fontSize: '0.8rem',
              textDecoration: 'none'
            },
            'h1,h2': {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              fontFamily: ["Sequel"],
              fontSize: '1.5rem',
            },
            h3: {
              fontWeight: '400',
              fontFamily: ["Sequel"]
            },
            code: {
              color: theme('colors.indigo.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            li: {
              // fontFamily: ["LineSeedSans", "IM_Hyemin-Regular"]
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: ["Sequel"],
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
