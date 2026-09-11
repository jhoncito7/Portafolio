/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          light: '#818cf8',
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
          900: '#312e81',
        },
        accent: {
          light: '#f472b6',
          DEFAULT: '#ec4899',
          dark: '#db2777',
        },
        ink: {
          DEFAULT: '#111827',
          soft: '#4b5563',
          faint: '#9ca3af',
        },
        night: {
          DEFAULT: '#0f172a',
          soft: '#111c33',
          deep: '#0b1220',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        display: ['Sora', 'Inter', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0, 0, 0, 0.08)',
        card: '0 12px 32px -12px rgba(15, 23, 42, 0.18)',
        glow: '0 24px 60px -18px rgba(99, 102, 241, 0.45)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        gradient: 'gradientMove 14s ease infinite',
        float: 'float 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marqueeReverse 28s linear infinite',
      },
    },
  },
  plugins: [],
}
