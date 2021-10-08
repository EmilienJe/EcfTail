module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
       'orange': '#F76900',
       'jaune': '#FCD04A',
       'vert': '#9EC64B',
       'bleu': '#3F91C1',
       'violet': '#C078D0',
       'orangee': '#EA7927',
       'gris': '#7C7C7C',
       'grisclair': '#b2b2b2',
      },
      fontFamily:{
        'droidsans' : ['Droid Sans Mono Dotted for Powerline'],
        'droid' : ['Droid Serif'],
        'Neilvard' : ['Neilvard Three'],


      },
      
      letterSpacing:{
        tightest: '-.075em',
        tighter: '-.05em',
       tight: '-.025em',
        normal: '0',
       wide: '.025em',
        wider: '.05em',
       widest: '.1em',
       widwid: '.15em',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
],
}
