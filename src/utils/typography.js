import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Prosto One', 'Eczar'],
  bodyFontFamily: ['Eczar', 'Times', 'serif'],
  headerColor: 'hsla(12,100%,92%,1)',
  bodyColor: 'hsla(207,95%,94%,1)',
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    blockquote: {
     ...adjustFontSizeTo('19px'),
      fontStyle: 'italic',
      padding: rhythm(1),
      marginLeft: rhythm(0),
      marginTop: rhythm(0),
      marginRight: rhythm(0),
      marginBottom: rhythm(1.5),
      backgroundColor: 'rgba(255,255,255,0.05)'
     }
  })
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
