import React from 'react';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import theme from './theme/theme'
import Home from './components/Templates/Home/Home';
import CashAccelerationComp from './components/Templates/CashAccelaration/CashAccelerationComp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  );
}

export default App;
