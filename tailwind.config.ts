import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Dynamic colors used in page.tsx for entities, advisors, litigation, etc.
    'bg-red-500/20', 'bg-red-100', 'bg-red-50', 'bg-red-600',
    'bg-green-500/20', 'bg-green-100',
    'bg-blue-500/20', 'bg-blue-100',
    'bg-purple-500/20', 'bg-purple-100',
    'bg-amber-500/20', 'bg-amber-50', 'bg-amber-600',
    'text-red-400', 'text-red-300', 'text-red-500', 'text-red-600', 'text-red-700',
    'text-green-400', 'text-green-600',
    'text-blue-400', 'text-blue-600',
    'text-purple-400', 'text-purple-300', 'text-purple-600',
    'text-amber-400', 'text-amber-500', 'text-amber-700',
    'border-red-100', 'border-amber-100',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
        mono: ["Menlo", "Monaco", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
