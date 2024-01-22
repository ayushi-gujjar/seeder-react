import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme'
import Main from './components/pages/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {  

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
