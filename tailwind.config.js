/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'], // Adjust according to your project structure
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        }
      },
      animation: {
        'bounce-custom': 'bounce 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
