import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '3rem',
      letterSpacing: '0.03em',
      '@media (max-width:960px)': {
        fontSize: '1.5rem',
      },
      fontFamily: 'MonumentUltrabold, sans-serif',
    },
    h2: {
      fontSize: '2rem',
      letterSpacing: '0.06em',
      '@media (max-width:960px)': {
        fontSize: '0.75rem',
      },
      fontFamily: 'MonumentUltrabold, sans-serif',
    },
    h3: {
      fontSize: '1.25rem',
      letterSpacing: '0.06em',
      '@media (max-width:960px)': {
        fontSize: '0.625rem',
      },
      fontFamily: 'MonumentUltrabold, sans-serif',
    },
    body1: {
      fontSize: '0.875rem',
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '1.5rem',
      '@media (max-width:960px)': {
        fontSize: '0.6rem',
        lineHeight: '1rem',
      },
    },
    body2: {
      fontSize: '0.625rem',
      fontFamily: 'Poppins, sans-serif',
      lineHeight: '0.938rem',
    },
  },
  palette: {
    primary: {
      light: '#FFFFFF',
      main: '#AFAFAF',
      dark: '#1E1E1E',
    },
    secondary: {
      main: '#07AA79',
    },
  },
  spacing: [0, 10, 20, 23, 40, 60, 100, 200], // spacing(0): 0px, spacing(1): 10px, spacing(2): 20px ....
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});