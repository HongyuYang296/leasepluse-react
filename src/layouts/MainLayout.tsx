import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '@mui/material/styles';
import { AppBar, CssBaseline, Toolbar } from '@mui/material';

interface LayoutProps {
  title?: string;
}

const MainLayout: React.FC<LayoutProps> = ({ title }) => {
  console.log(title);
  const theme = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          zIndex: theme.zIndex.drawer + 1
        }}
      >
        <Toolbar>
          <Navbar />
        </Toolbar>
      </AppBar>

      <main
        style={{
          flex: 1,
          marginTop: '64px',
          padding: '20px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
