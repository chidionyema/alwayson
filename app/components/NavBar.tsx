import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery, Theme } from '@mui/material';
import { Divider } from '@mui/material';

import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';


const NavBar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const matchesSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/clients', label: 'Explore Models' },
    { path: '/profile', label: 'Run Simulations' },
    { path: '/cases', label: 'Leaderboard' },
    { path: '/contact', label: 'Contact' },
  ];

  const lightTheme = createTheme({
    palette: {
      mode: 'light', // Changed from 'type' to 'mode'
      primary: {
        main: '#ff5722',
      },
      secondary: {
        main: '#2196f3',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Changed from 'type' to 'mode'
      primary: {
        main: '#ff5722',
      },
      secondary: {
        main: '#2196f3',
      },
      background: {
        default: '#303030',
        paper: '#424242',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });


  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <AppBar position="static" color={darkMode ? 'default' : 'primary'}>
 
        <Toolbar
  sx={{
    position: 'relative', // Set the Toolbar to have a relative position
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: matchesSm ? '0 1rem' : '0 2rem',
  }}
>
  <Box sx={{ flexGrow: 1 }} />  {/* This creates equal space on the left */}
  
  <Box
    sx={{
      display: 'flex',
      
      alignItems: 'center',
      gap: 1,
      left: '0.2rem',  // Reduced from '2rem' to '1rem'
      marginLeft: '0.2rem',  // Reduced from '2rem' to '1rem'
      justifyContent: 'center',
      textAlign: 'center'
    }}
  >
    <Link href="/" passHref>
      <Typography
        variant="h6"
        component="div"
        sx={{ cursor: 'pointer' }}
      >
        Q-Trader
      </Typography>
    </Link>
    <Divider orientation="vertical" flexItem sx={{ height: 24, mx: 1, bgcolor: 'text.primary' }} />
    {navItems.map((item, index) => (
      <React.Fragment key={item.path}>
        {index > 0 && (
          <Divider orientation="vertical" flexItem sx={{ height: 24, mx: 1, bgcolor: 'text.primary' }} />
        )}
        <Link href={item.path} passHref>
          <Button color="inherit">{item.label}</Button>
        </Link>
      </React.Fragment>
    ))}
  </Box>
  {/* Adding the divider here */}
  <Divider orientation="vertical" flexItem sx={{ height: 24, mt: 1.7, bgcolor: 'text.primary' }} />


  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
      marginLeft: '0.5rem',
      
      flexGrow: 1  // This creates equal space on the right
    }}
  >
    <Button color="inherit" onClick={toggleTheme}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
    <Divider orientation="vertical" flexItem sx={{ height: 24, mx: 1, bgcolor: 'text.primary' }} />

  </Box>
</Toolbar>


          {/* Mobile Navigation Drawer */}
          <Drawer anchor="right" open={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setMobileNavOpen(false)}
              onKeyDown={() => setMobileNavOpen(false)}
            >
              <List>
                {navItems.map((item) => (
                  <Link href={item.path} passHref key={item.path}>
                    <ListItem button>
                      <Typography variant="body1">{item.label}</Typography>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Drawer>
        </AppBar>
      </motion.div>
    </ThemeProvider>
  );
};

export default NavBar;