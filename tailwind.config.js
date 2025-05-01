/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      backgroundImage: {
      'custom-gradient': 'linear-gradient(to right, #644E83, #715B90, #7E69A0, #8975AC)',
    },
    
    keyframes: {
      slideRight: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' },
      },
    },
    animation: {
      slideRight: 'slideRight 9s linear infinite',
    },
  
  },
  },
  plugins: [],
}

