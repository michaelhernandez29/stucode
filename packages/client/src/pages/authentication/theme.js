import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22358b',
      light: '#2c45b4',
    },
    secondary: {
      main: '#ff471f',
      light: '#ff7152',
    },
    background: {
      default: '#22358b',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#d1d1d1',
    },
    action: {
      active: '#FFFFFF',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
