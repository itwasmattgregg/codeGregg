import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  bodyFontFamily: ['Montserrat', 'Sans-serif'],
  scaleRatio: 2.222,
  headerFontFamily: ['Monad', 'Helvetica', 'Arial', 'sans-serif'],
  headerWeight: 500,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '500', '700'],
    },
  ],
  overrideStyles: () => ({
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    img: {
      marginBottom: 0,
    },
  }),
});

export default typography;
export const rhythm = typography.rhythm;
