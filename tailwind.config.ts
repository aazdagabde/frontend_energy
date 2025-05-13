// tailwind.config.ts
import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts,scss,css}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light:   '#3B82F6',
          dark:    '#1E40AF',
        },
        secondary: {
          DEFAULT: '#10B981',
          light:   '#6EE7B7',
          dark:    '#047857',
        },
        neutral: {
          100: '#F3F4F6',
          300: '#D1D5DB',
          500: '#6B7280',
          700: '#374151',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
