/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#14110f',
          900: '#0c0a09',
          800: '#1a1613',
          700: '#241e1a',
          600: '#322a24',
        },
        espresso: {
          DEFAULT: '#3b2c22',
          light: '#4f3a2c',
          dark: '#2a1f18',
        },
        gold: {
          DEFAULT: '#c9a44c',
          light: '#e3c878',
          dark: '#a07e32',
          deep: '#876724',
        },
        brass: '#b08d57',
        cream: {
          DEFAULT: '#f3ead7',
          soft: '#e8dcc4',
          dim: '#cdbfa3',
        },
        burgundy: {
          DEFAULT: '#6e1f2b',
          light: '#8c2d3a',
        },
        ivory: '#f7f1e3',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['17px', { lineHeight: '1.7' }],
      },
      boxShadow: {
        luxe: '0 24px 60px -20px rgba(0,0,0,0.7)',
        gold: '0 0 0 1px rgba(201,164,76,0.35), 0 18px 40px -18px rgba(0,0,0,0.8)',
        panel: '0 16px 50px -24px rgba(0,0,0,0.85)',
      },
      backgroundImage: {
        'gold-divider':
          'linear-gradient(90deg, transparent, rgba(201,164,76,0.7), transparent)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
};
