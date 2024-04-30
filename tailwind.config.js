/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        rotate: {
          ' 0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: ' rotate(-90deg)',
          },
          '100%': {
            transform: 'rotate(-90deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
