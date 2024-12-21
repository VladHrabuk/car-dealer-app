import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        grey: {
          DEFAULT: '#6B6B6B',
          dark: '#4A4A4A',
          light: '#D1D1D1',
        },
      },
      screens: {
        sm: { max: '500px' },
      },
      animation: {
        'spin-fast': 'spin-fast 1.5s ease-in-out infinite',
        'spin-normal': 'spin-normal 2s ease-in infinite',
        'spin-slow': 'spin-slow 2.5s ease-out infinite',
      },
      keyframes: {
        'spin-fast': {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-normal': {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
