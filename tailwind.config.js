/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      xs: '400px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    minWidth: {
      modal: '28em',  
      mobileModal: '18em',  
      icon: '14em',  
      mobileIcon: '10em',
    },
    minHeight: {
      modal: '25em',
      mobileModal: '10em',
      icon: '14em',
      mobileIcon: '10em',
    },
    
    extend: {},
  },
  plugins: [],
}

