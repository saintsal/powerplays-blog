import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Prosto One', 'Eczar'],
  bodyFontFamily: ['Eczar', 'Times', 'serif'],
  headerColor: 'hsla(12,100%,92%,1)',
  bodyColor: 'hsla(207,95%,94%,1)',
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
