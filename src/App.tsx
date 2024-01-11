import React from 'react';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>

  );
}

export default App;
