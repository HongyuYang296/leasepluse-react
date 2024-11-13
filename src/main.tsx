import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import './assets/css/index.css';
import App from './App';
import { SnackbarProvider } from './assets/contexts/SnackbarManager';
import theme from './theme/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </StrictMode>
);
