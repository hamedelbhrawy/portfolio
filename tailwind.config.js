/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#0F172A',
                    light: '#1E293B',
                },
                gold: {
                    DEFAULT: '#C5A55A',
                    light: '#D4B96B',
                    dark: '#A88B45',
                },
                teal: {
                    DEFAULT: '#1ABC9C',
                    light: '#2DD4BB',
                    dark: '#148F77',
                },
                blue: {
                    electric: '#3B82F6',
                    linkedin: '#0A66C2',
                },
                charcoal: '#333333',
                slate: {
                    soft: '#F1F5F9',
                    muted: '#94A3B8',
                },
            },
            fontFamily: {
                jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
                dm: ['"DM Sans"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
                arabic: ['"IBM Plex Sans Arabic"', 'sans-serif'],
            },
            maxWidth: {
                content: '1200px',
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'fade-up': 'fadeUp 0.6s ease forwards',
                'spin-slow': 'spin 12s linear infinite',
                'spin-slow-reverse': 'spin 16s linear infinite reverse',
                'bounce-x': 'bounceX 1s infinite',
                'data-stream': 'dataStream 3s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                bounceX: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(6px)' },
                },
                dataStream: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '0% 100%' },
                },
            },
        },
    },
    plugins: [],
}
