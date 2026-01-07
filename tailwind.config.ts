import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0a0a0a',
        },
        foreground: {
          light: '#0a0a0a',
          dark: '#ededed',
        },
        card: {
          light: '#f5f5f5',
          dark: '#1a1a1a',
        },
        border: {
          light: '#e5e5e5',
          dark: '#2a2a2a',
        },
        accent: {
          light: '#0070f3',
          dark: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
