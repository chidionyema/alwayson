import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { styled, useTheme as useMuiTheme, Theme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, ThemeProvider } from '@mui/material';
import { useTheme } from '../ThemeContext'; // Assuming this provides an object with { theme, toggleTheme }

// Defining props for components that require the 'theme' prop.
interface ThemedComponentProps {
  theme: 'light' | 'dark';
}

// Extend the MUI theme to include your custom theme property if needed
declare module '@mui/material/styles' {
  interface Theme {
    customTheme: 'light' | 'dark';
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    customTheme?: 'light' | 'dark';
  }
}

// Usage of the MUI theme within styled components
const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: theme.palette.mode === 'dark' ? '#FFF' : '#0f2b46', // Adjusted to use palette.mode
  textTransform: 'uppercase',
  letterSpacing: '2px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const NavLink = styled(Link)<ThemedComponentProps>(({ theme }) => ({
  color: '#0070f3',
  textDecoration: 'none',
  '&:visited': {
    color: '#5e5e5e',
  },
  '&:hover, &:focus': {
    color: '#003580',
    textDecoration: 'underline',
  },
}));

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { toggleTheme, theme } = useTheme(); // Custom hook to access theme and toggleTheme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <ThemeProvider theme={(outerTheme: Theme) => ({ ...outerTheme, customTheme: theme })}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Logo variant="h6">
              Always On Technologies
            </Logo>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMobileMenuToggle}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </IconButton>
            <Drawer anchor="right" open={isMobileMenuOpen} onClose={handleMobileMenuToggle}>
              <List>
                {/* ListItems with NavLinks */}
              </List>
            </Drawer>
            <Button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</Button>
          </Toolbar>
        </AppBar>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
