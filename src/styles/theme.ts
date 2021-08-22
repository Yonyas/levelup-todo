export const size = {
  largest: '75em', // 1200px
  large: '56.25em', // 900px
  medium: '37.5em', // 600px
  small: '31.25em', // 500px
  smallest: '25em', // 400px
};

const theme = {
  //color
  mainRedColor: '#C71010',
  mainRedDarkColor: '#AF161C',
  mainBackgroundColor: '#325ED9',
  hoverColor: '#FF2E2E',
  selectedColor: '#007A1D',

  //media query
  mq: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
};

export default theme;
