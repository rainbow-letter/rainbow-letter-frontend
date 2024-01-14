/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans KR', 'sans-serif'],
      OwnglyphMinhyeChae: ['OwnglyphMinhyeChae'],
    },
    extend: {
      fontSize: {
        'heading-1': ['1.875rem', { lineHeight: '130%', fontWeight: '600' }],
        'heading-1-pc': ['3rem', { lineHeight: '130%', fontWeight: '600' }],
        'heading-2': ['1.625rem', { lineHeight: '130%', fontWeight: '500' }],
        'heading-2-pc': ['2.25rem', { lineHeight: '130%', fontWeight: '500' }],
        'heading-3': ['1.25rem', { lineHeight: '130%', fontWeight: '500' }],
        'heading-3-pc': ['1.5rem', { lineHeight: '130%', fontWeight: '500' }],
        'solo-large': ['1.125rem', { lineHeight: '100%', fontWeight: '500' }],
        'solo-medium': ['1rem', { lineHeight: '100%' }],
        'solo-medium-pc': ['1rem', { lineHeight: '100%' }],
        'solo-small': ['0.875rem', { lineHeight: '100%' }],
        'solo-small-pc': ['0.875rem', { lineHeight: '100%' }],
        'solo-label': ['0.875rem', { lineHeight: '100%', fontWeight: '500' }],
        'solo-label-pc': ['1rem', { lineHeight: '100%', fontWeight: '500' }],
        'body-large': ['1.125rem', { lineHeight: '166%', fontWeight: '500' }],
        'body-medium': ['1rem', { lineHeight: '166%' }],
        'body-medium-pc': ['1.25rem', { lineHeight: '166%' }],
        'body-small': ['1rem', { lineHeight: '166%' }],
        'body-small-pc': ['0.875rem', { lineHeight: '166%' }],
        'body-letter': ['1.625rem', { lineHeight: '166%' }],
        'body-letter-pc': ['2.25rem', { lineHeight: '166%' }],
        caption: ['0.875rem', { lineHeight: '166%' }],
        'caption-pc': ['0.75rem', { lineHeight: '166%' }],
      },
      colors: {
        primary: '#FFB347',
        gray: {
          1: '#BDBDBD',
          2: '#F8F8F8',
          3: '#DFDFDF',
        },
        orange: {
          50: '#FFF8ED',
          100: '#FFF1D4',
          400: '#FFB74D',
        },
        alarm: {
          red: '#FB5660',
          blue: '#553FFE',
        },
      },
      textColor: {
        default: '#424242',
        gray: {
          1: '#616161',
          2: '#BDBDBD',
        },
      },
      boxShadow: {
        default: '0px 0px 10px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
