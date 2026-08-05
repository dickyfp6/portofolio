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
          dark: '#020817', // Deep slate for premium look
        },
        foreground: {
          light: '#0f172a',
          dark: '#f8fafc',
        },
        card: {
          light: '#ffffff',
          dark: '#0f172a', // Slate 900
        },
        border: {
          light: '#e2e8f0', // Slate 200
          dark: '#1e293b', // Slate 800
        },
        accent: {
          light: '#6366f1', // Indigo 500
          dark: '#818cf8', // Indigo 400
        },
        muted: {
          light: '#f1f5f9', // Slate 100
          dark: '#1e293b', // Slate 800
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 4px 30px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

export default config
