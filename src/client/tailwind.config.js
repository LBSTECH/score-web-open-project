module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform',
      },
      screen: {
        'sm': { 'min': '640px', 'max': '767px' },
        'md': { 'min': '768px', 'max': '1023px' },
        'lg': { 'min': '1024px', 'max': '1279px' },
        'xl': { 'min': '1280px', 'max': '1535px' },
        '2xl': { 'min': '1536px' },
      }
    },
    plugins: [
      require('flowbite/plugin')({
        charts: true,
      })
    ],
  },
}