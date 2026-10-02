const path = require('path');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050b16',
        panel: '#0c1524',
        primary: '#5aa9ff',
        secondary: '#7d5cff',
        accent: '#3be7c7',
        glow: '#87d3ff'
      },
      boxShadow: {
        glow: '0 0 30px rgba(90, 169, 255, 0.35)',
        panel: '0 25px 60px rgba(5, 11, 22, 0.45)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(122, 185, 255, 0.16), transparent 40%)'
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        pulseSoft: 'pulseSoft 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
};
