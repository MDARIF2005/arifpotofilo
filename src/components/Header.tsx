import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/60 backdrop-blur-lg z-50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold rainbow-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Muhammad Arif
          </motion.h1>

          {/* Desktop Menu */}
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-8"
          >
            {menuItems.map(({ id, label }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 transition-all"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-border bg-white px-6 py-2 rounded-full flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="md:hidden mt-4 space-y-4 bg-white/80 backdrop-blur-lg rounded-2xl p-4"
          >
            {menuItems.map(({ id, label }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full gradient-border bg-white px-6 py-2 rounded-full flex items-center justify-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;