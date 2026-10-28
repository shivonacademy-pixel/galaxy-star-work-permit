/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0B2545',
            dark: '#061629',
            light: '#133E87',
            deep: '#0F172A',
          },
          gold: {
            DEFAULT: '#D4AF37',
            light: '#F4DE86',
            dark: '#AA8822',
            champagne: '#DFBA63',
          },
          slate: {
            DEFAULT: '#475569',
            dark: '#334E68',
            light: '#64748B',
            bg: '#F1F5F9',
          },
          green: {
            DEFAULT: '#10B981',
            dark: '#059669',
            light: '#34D399',
          },
          gray: {
            DEFAULT: '#F8FAFC',
            border: '#E2E8F0',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
        'navy': '0 10px 30px -5px rgba(11, 37, 69, 0.2)',
        'card': '0 4px 25px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
