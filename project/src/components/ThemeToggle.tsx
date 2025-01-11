import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      className="p-2 rounded-lg bg-gray-100 dark:bg-red-600/10 hover:bg-gray-200 dark:hover:bg-red-600/20 transition-all duration-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun size={20} className="text-gray-800 dark:text-yellow-400" />
        ) : (
          <Moon size={20} className="text-gray-800 dark:text-gray-200" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;