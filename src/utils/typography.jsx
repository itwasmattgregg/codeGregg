import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  bodyFontFamily: ["Montserrat", "Sans-serif"],
  scaleRatio: 2.5,
  headerFontFamily: [
    "Monad",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
        '700',
      ],
    }
   ],
   overrideStyles: () => ({
      h1: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
      },
      img: {
        marginBottom: 0,
      }
    })
  })

export default typography
export const rhythm = typography.rhythm
