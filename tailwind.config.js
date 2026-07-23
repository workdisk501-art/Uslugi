/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      colors: {
        // ── Surfaces ───────────────────────────────────────────────
        canvas:  '#FFFFFF',
        surface: '#F7F8FC',
        dark:    '#0F172A',

        // ── Text ───────────────────────────────────────────────────
        ink:  {
          DEFAULT: '#1E293B',
          mid:     '#64748B',
          low:     '#94A3B8',
          ghost:   '#CBD5E1',
        },

        // ── Indigo — system / process / structure ──────────────────
        indigo: {
          50:  '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },

        // ── Copper — business value / decisions / results ──────────
        copper: {
          50:  '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
        },

        // ── Border ─────────────────────────────────────────────────
        border: '#E2E8F0',
        'border-hi': '#CBD5E1',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
        '5xl': '2rem',
      },
      boxShadow: {
        // Cards
        'card':    '0 1px 3px 0 rgba(15,23,42,0.06), 0 4px 16px -2px rgba(15,23,42,0.08)',
        'card-md': '0 4px 6px -1px rgba(15,23,42,0.06), 0 10px 32px -4px rgba(15,23,42,0.10)',
        'card-lg': '0 8px 16px -4px rgba(15,23,42,0.08), 0 24px 48px -8px rgba(15,23,42,0.12)',
        // Indigo glow
        'indigo-sm': '0 0 0 3px rgba(79,70,229,0.12)',
        'indigo':    '0 4px 20px -4px rgba(79,70,229,0.30)',
        'indigo-lg': '0 8px 32px -4px rgba(79,70,229,0.25)',
        // Copper glow
        'copper':    '0 4px 20px -4px rgba(180,83,9,0.25)',
        // Button
        'btn':       '0 4px 14px -2px rgba(79,70,229,0.35)',
        'btn-hover': '0 6px 20px -2px rgba(79,70,229,0.45)',
      },
      backgroundImage: {
        // Indigo button
        'btn-indigo':       'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
        'btn-indigo-hover': 'linear-gradient(135deg, #818CF8 0%, #6366F1 100%)',
        // Subtle hero tint
        'hero-tint': 'radial-gradient(ellipse 80% 60% at 65% 40%, rgba(79,70,229,0.05) 0%, transparent 70%)',
        // Process card accent
        'indigo-soft': 'linear-gradient(135deg, #EEF2FF 0%, #F7F8FC 100%)',
        'copper-soft': 'linear-gradient(135deg, #FFF7ED 0%, #FFFBF5 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.55s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'draw':       'draw 1.6s ease forwards',
        'float':      'float 7s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        draw: {
          from: { strokeDashoffset: '1000' },
          to:   { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
