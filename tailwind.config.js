/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nyanza': '#d8f3dc',
        'celadon': '#b7e4c7',
        'celadon-2': '#95d5b2',
        'mint': '#74c69d',
        'mint-2': '#52b788',
        'sea-green': '#40916c',
        'dartmouth-green': '#2d6a4f',
        'brunswick-green': '#1b4332',
        'dark-green': '#081c15',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
