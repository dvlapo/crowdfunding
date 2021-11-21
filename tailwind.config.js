module.exports = {
  mode: 'jit',
  // important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg-mobile': "url('/src/assets/image-hero-mobile.jpg')",
        'hero-bg-desktop': "url('/src/assets/image-hero-desktop.jpg')",
      },
      boxShadow: {
        custom: '0 100px 120px rgba(122, 122, 122, 0.6)',
      },
    },
    fontFamily: {
      commissioner: ['Commissioner'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: 'hsl(0, 0%, 0%)',
      lightGray: '#f9f9f9',
      lightishGray: '#ededed',
      darkGray: 'hsl(0, 0%, 48%)',
      moderateCyan: 'hsl(176, 50%, 47%)',
      darkCyan: 'hsl(176, 72%, 28%)',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      full: '9999px',
      large: '12px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
