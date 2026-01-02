import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F7F2] shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="z-50 relative">
                    <h1 className={`text-3xl font-bold tracking-tighter uppercase ${scrolled ? 'text-[#222]' : 'text-white'}`}>
                        Tok<span className="text-[#E2725B]">Pizza</span>
                    </h1>
                </Link>

                {/* Desktop Menu */}
                <div className={`hidden md:flex items-center space-x-8 font-heading text-lg tracking-wide ${scrolled ? 'text-[#222]' : 'text-white'}`}>
                    <Link to="/" className="hover:text-[#E2725B] transition-colors">Home</Link>
                    <Link to="/menu" className="hover:text-[#E2725B] transition-colors">Pizza</Link>
                    <Link to="/about" className="hover:text-[#E2725B] transition-colors">Vibe</Link>
                    <a href="#contact" className="hover:text-[#E2725B] transition-colors">Location</a>

                    <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-current opacity-80">
                        <a href="https://instagram.com/tokpizzaa" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 relative text-[#E2725B]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`w-8 h-1 mb-1 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <div className={`w-8 h-1 mb-1 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-8 h-1 mb-1 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 bg-[#F9F7F2] z-40 flex flex-col items-center justify-center space-y-8 text-[#222]"
                        >
                            <Link to="/" onClick={() => setIsOpen(false)} className="text-4xl font-heading hover:text-[#E2725B]">Home</Link>
                            <Link to="/menu" onClick={() => setIsOpen(false)} className="text-4xl font-heading hover:text-[#E2725B]">Pizza</Link>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="text-4xl font-heading hover:text-[#E2725B]">Vibe</Link>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl font-heading hover:text-[#E2725B]">Location</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
