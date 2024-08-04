'use client';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#393E46',
      light: '#00ADB5',
      dark: '#222831',
      contrastText: '#EEEEEE',
    },
    secondary: {
      main: '#CBF1F5',
      light: '#E3FDFD',
      dark: '#A6E3E9',
      contrastText: '#71C9CE',
    },
  },
});

const PageThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default PageThemeProvider;
