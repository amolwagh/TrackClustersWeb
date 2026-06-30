/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './privacy/index.html',
    './terms/index.html',
    './src/**/*.{js,css}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#533afd',
        'primary-deep': '#4434d4',
        'primary-press': '#2e2b8c',
        'primary-soft': '#665efd',
        'primary-subdued': '#b9b9f9',
        'brand-dark': '#1c1e54',
        ink: '#0d253d',
        'ink-secondary': '#273951',
        'ink-mute': '#64748d',
        canvas: '#ffffff',
        'canvas-soft': '#f6f9fc',
        'canvas-cream': '#f5e9d4',
        hairline: '#e3e8ee',
        'hairline-input': '#a8c3de',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
