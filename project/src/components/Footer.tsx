import React from 'react';
import { Github, Linkedin, Instagram, Mail, Twitter, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/nortonkhud', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/nortonkhud', label: 'LinkedIn' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com/nortonkhud', label: 'Twitter' },
    { icon: <Instagram size={24} />, url: 'https://instagram.com/norton_jaat', label: 'Instagram' },
    { icon: <Mail size={24} />, url: 'mailto:nortonkhud@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-black/90 border-t border-gray-200 dark:border-red-600/20 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <span className="text-2xl font-bold block mb-4">
              <span className="text-red-600">N</span>avratan{' '}
              <span className="text-red-600">J</span>at
            </span>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Transforming ideas into elegant digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>Bhilwara, Rajasthan</p>
              <p>India</p>
              <p>+91 6367412559</p>
              <p>nortonkhud@gmail.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-red-600/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            © 2024 Navratan Jat. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors duration-200 flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;