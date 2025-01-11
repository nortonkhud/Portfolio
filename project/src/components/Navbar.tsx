import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggle } = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg'
          : 'bg-white/50 dark:bg-black/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold group">
            <span className="text-red-600 group-hover:text-red-500 transition-colors duration-200">N</span>avratan{' '}
            <span className="text-red-600 group-hover:text-red-500 transition-colors duration-200">J</span>at
          </Link>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`relative ${
                      location.pathname === item.path
                        ? 'text-red-600'
                        : 'text-gray-700 dark:text-gray-300 hover:text-red-500'
                    } transition-colors duration-200`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                        initial={false}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
            <ThemeToggle isDark={isDark} toggle={toggle} />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle isDark={isDark} toggle={toggle} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-red-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                >
                  <Link
                    to={item.path}
                    className={`${
                      location.pathname === item.path
                        ? 'text-red-600'
                        : 'text-gray-700 dark:text-gray-300 hover:text-red-500'
                    } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;