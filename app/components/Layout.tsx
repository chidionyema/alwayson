import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { styled, useTheme as useMuiTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, IconButton, Button,  Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '../ThemeContext'; // Adjust the import path as necessary


// Styled component for navigation links
// Corrected definition for styling a basic HTML element with MUI's styled
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

// Styled components using Material-UI's 'styled' utility
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

// Assuming NavLink needs to be a styled component
const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#FFF' : '#0f2b46',
  textDecoration: 'none',
  '&:hover, &:focus': {
    textDecoration: 'underline',
  },
}));

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme(); // Custom hook to toggle and retrieve the current theme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Dynamically create a theme based on the custom theme context
  const muiTheme = createTheme({
    palette: {
      mode: theme, // Directly use 'light' or 'dark' from the custom theme context
    },
  });

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
                <NavLink href="/" passHref>
                  <ListItemText primary="Home" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink href="/cases" passHref>
                  <ListItemText primary="Case Studies" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink href="/clients" passHref >
                  <ListItemText primary="Clients" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink href="/profile" passHref>
                  <ListItemText primary="Consultants" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink href="/contact" passHref>
                  <ListItemText primary="Contact" />
                </NavLink>
              </ListItem>
            </List>
          </Drawer>
          <Button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</Button>
        </Toolbar>
      </AppBar>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
