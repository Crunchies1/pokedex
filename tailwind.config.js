module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'normal': {
          DEFAULT: '#A8A878',
          bg: 'rgba(168, 168, 120, 0.2)',
        },
        'fire': {
          DEFAULT:'#F08030',
          bg: 'rgba(240, 128, 48, 0.2)',
        },
        'water': {
          DEFAULT:'#6890F0',
          bg: 'rgba(104,144,240, 0.2)',
        },
        'grass': {
          DEFAULT:'#78C850',
          bg: 'rgba(120,200,80, 0.2)',
        },
        'poison': {
          DEFAULT:'#A040A0',
          bg: 'rgba(160,64,160, 0.2)',
        },
        'ground': {
          DEFAULT:'#E0C068',
          bg: 'rgba(224,192,104, 0.2)',
        },
        'electric': {
          DEFAULT:'#F8D030',
          bg: 'rgba(248,208,48, 0.2)',
        },
        'flying': {
          DEFAULT:'#A890F0',
          bg: 'rgba(168,144,240, 0.2)',
        },
        'psychic': {
          DEFAULT:'#F85888',
          bg: 'rgba(248,88,136, 0.2)',
        },
        'ghost': {
          DEFAULT:'#705898',
          bg: 'rgba(112,88,152, 0.2)',
        },
        'dark': {
          DEFAULT:'#705848',
          bg: 'rgba(112,88,72, 0.2)',
        },
        'dragon': {
          DEFAULT:'#7038F8',
          bg: 'rgba(112,56,248, 0.2)',
        },
        'fairy': {
          DEFAULT:'#F0B6BC',
          bg: 'rgba(240,182,188, 0.2)',
        },
        'steel': {
          DEFAULT:'#B8B8D0',
          bg: 'rgba(184,184,208, 0.2)',
        },
        'fighting': {
          DEFAULT:'#C03028',
          bg: 'rgba(192,48,40, 0.2)',
        },
        'bug': {
          DEFAULT:'#A8B820',
          bg: 'rgba(168,184,32, 0.2)',
        },
        'ice': {
          DEFAULT:'#98D8D8',
          bg: 'rgba(152,216,216, 0.2)',
        },
        'rock': {
          DEFAULT:'#B8A038',
          bg: 'rgba(184,160,56, 0.2)',
        },
      }
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover']
    },
  },
  plugins: [],
}
