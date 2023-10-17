/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        translate: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }, // Adjust the translate value as needed
        },
      },
      animation: {
        'bounce-slow': 'bounce 3.5s infinite', // Custom slow bounce animation
        'bounce-fast': 'bounce 0.5s infinite', // Custom fast bounce animation
        'translate-slow': 'translate 5s linear infinite', // Custom slow translation animation
        'translate-fast': 'translate 1s linear infinite', // Custom fast translation animation
      
      },
    },
  },
  plugins: [],
};
