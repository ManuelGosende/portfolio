import { Theme, useMediaQuery, useTheme } from "@mui/material";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '3rem',
      '@media (max-width:960px)': {
        fontSize: '2.75rem',
      },
      fontFamily: 'MonumentUltrabold, sans-serif',
    },
    h2: {
      fontSize: '2rem',
      '@media (max-width:960px)': {
        fontSize: '0.75rem',
      },
      fontFamily: 'MonumentUltrabold, sans-serif',
    },
    h3: {
      fontSize: '1.25rem',
      '@media (max-width:960px)': {
        fontSize: '0.625rem',
      },
      fontFamily: 'MonumentUltrabold, sans-serif',
    },
    body1: {
      fontSize: '0.875rem',
      fontFamily: 'MonumentRegular, sans-serif',
      lineHeight: '1.5rem',
      '@media (max-width:960px)': {
        fontSize: '0.438rem',
        lineHeight: '0.8rem',
      },
    },
    body2: {
      fontSize: '0.625rem',
      fontFamily: 'MonumentRegular, sans-serif',
      lineHeight: '0.938rem',
      '@media (max-width:960px)': {
        fontSize: '0.3rem',
      },
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
  spacing: [0, 10, 20, 23, 40, 60], // spacing(1): 0px, spacing(2): 10px, spacing(3): 20px ....
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