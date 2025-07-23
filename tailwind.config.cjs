/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/modules/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        lg: '900px',
        xl: '1200px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        mulish: ['var(--font-mulish)'],
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        'brand-primary': 'var(--brand-primary)',
        'brand-secondary': 'var(--brand-secondary)',
        'brand-tertiary': 'var(--brand-tertiary)',
        destructive: 'var(--destructive)',
        info: 'var(--text-info)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
        'brand-primary': 'var(--brand-primary)',
        'brand-secondary': 'var(--brand-secondary)',
        'brand-tertiary': 'var(--brand-tertiary)',
        border: 'var(--border-primary)',
        hover: 'var(--bg-hover)',
        popover: 'var(--bg-primary)',
        muted: 'var(--bg-muted)',
        info: 'var(--bg-info)',
        'collections-short': 'var(--bg-collections-short)',
        'collections-medium': 'var(--bg-collections-medium)',
        'collections-long': 'var(--bg-collections-long)',
      },
      backgroundImage: {
        'brand-gradient': 'var(--bg-brand-gradient)',
      },
      boxShadow: {
        focus: 'var(--shadow-focus)',
        primary: 'var(--box-shadow-primary)',
      },
      borderRadius: {
        base: 'var(--border-radius)',
      },
      borderColor: {
        primary: 'var(--border-primary)',
        'brand-primary': 'var(--brand-primary)',
        'brand-tertiary': 'var(--brand-tertiary)',
        info: 'var(--border-info)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-down': 'slide-down 0.3s ease-out forwards',
        'slide-up': 'slide-up 0.3s ease-out forwards',
      },
      ringColor: {
        'brand-primary': 'var(--ring-brand-primary)',
      },

      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
        '2md': '1.15rem',
      },
      colors: {
        'payva-purple-50': '#F3EBFF',
        'payva-purple-100': '#EBDBFF',
        'payva-purple-200': '#DCC2FF',
        'payva-purple-300': '#C599FF',
        'payva-purple-400': '#AE70FF',
        'payva-purple-500': '#9747FF',
        'payva-purple-600': '#7526DC',
        'payva-purple-700': '#5F1BB6',
        'payva-purple-800': '#440E8B',
        'payva-purple-900': '#2E0760',
        'payva-purple-950': '#190434',
        'nuetral-50': '#F5F4F5',
        'nuetral-100': '#D6D4D8',
        'nuetral-200': '#BDBBBF',
        'nuetral-300': '#A5A2AA',
        'nuetral-400': '#8E8A94',
        'nuetral-500': '#7F7A85',
        'nuetral-600': '#66626A',
        'nuetral-700': '#46424C',
        'nuetral-800': '#333135',
        'nuetral-900': '#19181B',
        'nuetral-950': '#121113',
        'payva-success': '#8AF5B1',
        'payva-error': '#F58A8A',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
