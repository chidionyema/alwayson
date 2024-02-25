import React, { ReactNode, useState } from 'react';
import Link from 'next/link'; 
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode;
  toggleTheme?: () => void;
  theme?: 'light' | 'dark';
};

const Layout: React.FC<Props> = ({ children, toggleTheme, theme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className={`flex flex-col items-center p-8 md:p-16 lg:p-24 xl:p-32 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition duration-500 ease-in-out`}>
      <header className="w-full flex justify-between items-center mb-12">
        <div className="block md:hidden">
          <button onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
        {toggleTheme && (
          <div className="flex-1 text-right">
            <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
              {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
          </div>
        )}
        <nav className="hidden md:flex md:flex-1 md:justify-center">
          <ul className="flex gap-4">
            <NavItem href="/" label="Home" isActive={router.pathname === '/'} />
            <NavItem href="/contact" label="Contact" isActive={router.pathname === '/contact'} />
            <NavItem href="/casestudies" label="Case Studies" isActive={router.pathname === '/case-studies'} />
            <NavItem href="/clients" label="Clients" isActive={router.pathname === '/clients'} />
            <NavItem href="/profile" label="Consultants" isActive={router.pathname === '/profile'} />
          </ul>
        </nav>
      </header>
      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center">
            <NavItem href="/" label="Home" isActive={router.pathname === '/'} />
            <NavItem href="/contact" label="Contact" isActive={router.pathname === '/contact'} />
            <NavItem href="/case-studies" label="Case Studies" isActive={router.pathname === '/case-studies'} />
            <NavItem href="/clients" label="Clients" isActive={router.pathname === '/clients'} />
            <NavItem href="/profile" label="Consultants" isActive={router.pathname === '/profile'} />
          </ul>
        </nav>
      )}
      {children}
    </main>
  );
};

type NavItemProps = {
  href: string;
  label: string;
  isActive: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ href, label, isActive }) => (
  <li>
    <Link href={href}>
      <a className={`nav-link ${isActive ? 'font-semibold' : ''}`}>
        {label}
      </a>
    </Link>
  </li>
);

export default Layout;
