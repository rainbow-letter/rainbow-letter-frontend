/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: { sans: ['Noto Sans KR', 'sans-serif'] },
    extend: {
      fontSize: {
        heading: {
          1: {
            pc: ['3rem', { lineHeight: '130%', fontWeight: '600' }],
            default: ['1.875rem', { lineHeight: '130%', fontWeight: '600' }],
          },
          2: {
            pc: ['2.25rem', { lineHeight: '130%', fontWeight: '500' }],
            default: ['1.625rem', { lineHeight: '130%', fontWeight: '500' }],
          },
          3: {
            pc: ['1.5rem', { lineHeight: '130%', fontWeight: '500' }],
            default: ['1.25rem', { lineHeight: '130%', fontWeight: '500' }],
          },
        },
        solo: {
          Large: ['1.125rem', { lineHeight: '100%', fontWeight: '500' }],
          medium: {
            pc: ['1rem', { lineHeight: '100%' }],
            default: ['1.25rem', { lineHeight: '100%' }],
          },
          small: {
            pc: ['0.875rem', { lineHeight: '100%' }],
            default: ['1rem', { lineHeight: '100%' }],
          },
          label: {
            pc: ['0.875rem', { lineHeight: '100%', fontWeight: '500' }],
            default: ['1rem', { lineHeight: '100%', fontWeight: '500' }],
          },
        },
        body: {
          large: ['1.125rem', { lineHeight: '166%', fontWeight: '500' }],
          medium: {
            pc: ['1rem', { lineHeight: '166%' }],
            default: ['1.25rem', { lineHeight: '166%' }],
          },
          small: {
            pc: ['0.875rem', { lineHeight: '166%' }],
            default: ['1rem', { lineHeight: '166%' }],
          },
          letter: {
            pc: ['2.25rem', { lineHeight: '166%' }],
            default: ['1.625rem', { lineHeight: '166%' }],
          },
        },
        caption: {
          pc: ['0.75rem', { lineHeight: '166%' }],
          default: ['0.875rem', { lineHeight: '166%' }],
        },
      },
      colors: {
        primary: '#FFB347',
        gray: {
          1: '#BDBDBD',
          2: '#F8F8F8',
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
        heading: {
          black: '#212121',
        },
        gray: {
          1: '#585667',
          2: '#BDBDBD',
        },
      },
    },
  },
  plugins: [],
};
