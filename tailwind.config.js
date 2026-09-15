/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        raven: '#232C3A',
        iridescence: '#1E8AA0',
        sheen: '#37A9BE',
        sky: '#CFE3F0',
        violet: '#7B5CD6',
        coral: '#DE7A72',
        paper: '#F5F5F2',
        midnight: '#1F2630',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      fontWeight: {
        medium: '400',
        semibold: '400',
        bold: '400',
        extrabold: '500',
        black: '400',
      },
      boxShadow: {
        card: '0 18px 50px rgba(35, 44, 58, 0.08)',
        soft: '0 8px 28px rgba(35, 44, 58, 0.06)',
      },
      borderRadius: {
        card: '1.25rem',
      },
    },
  },
  plugins: [],
}
