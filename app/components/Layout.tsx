import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';

// Adjust the styled components for navigation links and logo
const NavLink = styled('a')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#FFF' : '#0070f3',
  textDecoration: 'none',
  '&:visited': {
    color: theme.palette.mode === 'dark' ? '#CCC' : '#5e5e5e',
  },
  '&:hover, &:focus': {
    color: theme.palette.mode === 'dark' ? '#FFF' : '#003580',
    textDecoration: 'underline',
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: theme.palette.mode === 'dark' ? '#FFF' : '#0f2b46',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const muiTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <AppBar position="static">
        <Toolbar>
          <Logo variant="h6">Always On Technologies</Logo>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </IconButton>
          <Drawer anchor="right" open={isMobileMenuOpen} onClose={handleMobileMenuToggle}>
            <List>
              <ListItem button>
                <Link href="/" passHref>
                  <NavLink>Home</NavLink>
                </Link>
                <Link href="/cases" passHref>
                  <NavLink>Case Studies</NavLink>
                </Link>
              </ListItem>
              {/* Repeat for other navigation links */}
            </List>
          </Drawer>
          <Button onClick={toggleTheme}>{themeMode === 'dark' ? <FaSun /> : <FaMoon />}</Button>
        </Toolbar>
      </AppBar>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
