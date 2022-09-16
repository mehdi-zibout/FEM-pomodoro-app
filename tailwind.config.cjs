/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      pc: '1440px',
    },
    fontSize: {
      h1: [
        '100px',
        { lineHeight: '120px', letterSpacing: '-5px', fontWeight: 700 },
      ],
      h2: ['28px', { lineHeight: '34px', fontWeight: 700 }],
      h3: [
        '16px',
        { lineHeight: '19px', letterSpacing: '15px', fontWeight: 700 },
      ],
      h4: [
        '13px',
        { lineHeight: '16px', letterSpacing: '5px', fontWeight: 700 },
      ],
      body1: ['14px', { lineHeight: '18px', fontWeight: 700 }],
      body2: ['12px', { lineHeight: '14px', fontWeight: 700 }],
    },
    colors: {
      red: '#F87070',
      cyan: '#70F3F8',
      purple: '#D881F8',
      white: '#FFFFFF',
      gray: '#EFF1FA',
      black: '#161932',
      blueishGray: '#D7E0FF',
      darkBlue: '#1E213F',
    },
    fontFamily: {
      sans: 'Kumbh Sans',
      serif: 'Roboto Slab',
      mono: 'Space Mono',
    },
    extend: {},
  },
  plugins: [],
};
