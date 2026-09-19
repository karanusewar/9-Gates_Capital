import { motion } from 'motion/react';
import { Menu, Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 2xl:px-12 md:py-6 bg-light/95 backdrop-blur-md border-b border-dark/5 shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="flex items-center gap-3 md:gap-5">
        <Logo className="w-8 h-8 md:w-10 md:h-10 text-dark" />
        <div className="text-lg md:text-2xl font-display font-medium tracking-wide text-dark mt-1">
          9GATES
        </div>
      </div>

      <div className="hidden md:flex gap-6 lg:gap-8 font-sans text-xs font-semibold tracking-widest uppercase items-center text-dark">
        <a href="#about" className="hover:opacity-70 transition-colors">
          Philosophy
        </a>
        <a href="#services" className="hover:opacity-70 transition-colors">
          Capabilities
        </a>
        <a href="#sectors" className="hover:opacity-70 transition-colors">
          Sectors
        </a>
        <a href="#work" className="hover:opacity-70 transition-colors">
          Portfolio
        </a>
        <a href="#team" className="hover:opacity-70 transition-colors">
          Team
        </a>
        <button
          onClick={toggleTheme}
          className="hover:opacity-70 transition-colors flex items-center gap-2"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-sm bg-dark text-light hover:opacity-90 transition-all font-semibold tracking-wider border border-dark/10"
        >
          Investor Portal
        </a>
      </div>

      <div className="md:hidden flex items-center gap-4 text-dark">
        <button onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <button>
          <Menu size={28} />
        </button>
      </div>
    </motion.nav>
  );
}
