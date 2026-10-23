/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f3e8d2',
          300: '#ebd8b2',
          400: '#dec07a',
          500: '#d4af37', // Accent gold
          600: '#b8942b',
          700: '#947220',
          800: '#75581c',
          900: '#5c4519',
        },
        cultural: {
          bg: '#0a0d14',
          card: '#121723',
          border: '#1f293d',
          muted: '#8b9bb4',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
