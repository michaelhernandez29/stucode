import React from 'react';

import { Box, CssBaseline, Grid, ThemeProvider } from '@mui/material';

import theme from './theme';
import Logo from '../../assets/images/logo.png';

function AuthWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: '100vh' }}>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
          <Grid item xs={11} md={6} lg={3}>
            <img src={Logo} alt="StuCode logo" style={{ width: '100%' }} />
            {children}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default AuthWrapper;
