
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white" onClick={() => isOpen && setIsOpen(false)}>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">GS</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors duration-300 text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
