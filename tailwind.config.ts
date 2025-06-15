import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sx: '500px',
      },
    },
  },
} satisfies Config;
