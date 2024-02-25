import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';

const Logo = styled(Typography)<{ theme: 'light' | 'dark' }>`
  font-size: 2.5rem;
  font-weight: bold;
  color: #0f2b46;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const NavLink = styled(Link)<{ theme: 'light' | 'dark' }>`
  color: #0070f3;
  text-decoration: none;
  &:visited {
    color: #5e5e5e;
  }
  &:hover,
  &:focus {
    color: #003580;
    text-decoration: underline;
  }
`;

const Layout: React.FC<Props> = ({ children, toggleTheme, theme = 'light' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Logo variant="h6" theme={theme}>
            Always On Technologies
          </Logo>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </IconButton>
          <Drawer anchor="right" open={isMobileMenuOpen} onClose={handleMobileMenuToggle}>
            <List>
              <ListItem button>
                <NavLink href="/" passHref theme={theme}>
                  <ListItemText primary="Home" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink href="/cases" passHref theme={theme}>
                  <ListItemText primary="Case Studies" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink href="/clients" passHref theme={theme}>
                  <ListItemText primary="Clients" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink href="/profile" passHref theme={theme}>
                  <ListItemText primary="Consultants" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink href="/contact" passHref theme={theme}>
                  <ListItemText primary="Contact" />
                </NavLink>
              </ListItem>
            </List>
          </Drawer>
          <Button onClick={toggleTheme}>{theme === 'dark' ? <FaSun /> : <FaMoon />}</Button>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
