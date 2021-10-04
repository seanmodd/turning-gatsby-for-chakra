import { createTheme } from '@material-ui/core/styles'

// const green = '#7920ff'
// const darkGreen = '#7920ff'
const tan = '#FECEA8'
const lightRed = '#FF847C'
const red = '#E84A5F'
const offBlack = '#2A363B'
const grey = '#747474'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7920ff',
    },
    secondary: {
      main: '#000033',
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: '4.5rem',
      fontFamily: 'Barlow',
      fontStyle: 'normal',
      fontWeight: 500,
      color: '#7920ff',
    },
    h2: {
      fontFamily: 'Barlow',
      fontSize: '3rem',
      fontWeight: 500,
      color: '#fff',
    },
    h3: {
      fontFamily: 'Barlow',
      fontSize: '2rem',
      fontWeight: 300,
      color: '#7920ff',
    },
    h4: {
      fontFamily: 'Barlow',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '3rem',
      color: '#fff',
    },
    h5: {
      fontFamily: 'Barlow',
      fontSize: '2rem',
      fontWeight: 500,
      fontStyle: 'normal',
      color: '#fff',
    },
    body1: {
      fontFamily: 'Barlow',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: grey,
    },
    body2: {
      fontFamily: 'Barlow',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: '#fff',
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: '#000033',
      },
      label: {
        fontFamily: 'Barlow',
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 400,
      },
    },
  },
})

export default theme
