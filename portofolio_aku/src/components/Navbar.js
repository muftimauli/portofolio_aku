'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    AOS.init({
      duration: 600, // Durasi lebih pendek untuk performa
      easing: 'ease-in-out',
      once: true, // Animasi sekali untuk mengurangi render
      disable: 'mobile', // Nonaktifkan AOS di mobile untuk scroll lebih halus
    });

    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 80, // Offset untuk navbar
          behavior: 'smooth',
        });
      }
      setIsOpen(false);
      setActiveSection(targetId);
    };

    anchors.forEach((anchor) => anchor.addEventListener('click', handleClick));

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick));
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }, // Animasi lebih ringan
  };

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    closed: { opacity: 0, y: '-100%', transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const tabs = [
    { id: 'beranda', label: 'Home', borderColor: 'border-cyan-500', glowColor: '#22d3ee', bgColor: 'bg-cyan-900/30' },
    { id: 'tentang', label: 'Tentang', borderColor: 'border-blue-500', glowColor: '#3b82f6', bgColor: 'bg-blue-900/30' },
    { id: 'projects', label: 'Proyek', borderColor: 'border-red-500', glowColor: '#ef4444', bgColor: 'bg-red-900/30' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md border-b border-cyan-500/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center text-white font-mono">
        {/* Logo Tengah */}
        <div className="flex items-center justify-center">
          <motion.a
            href="#beranda"
            className="text-base sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
            variants={linkVariants}
            whileHover="hover"
          >
            Mufti Mauli Fathurozi
          </motion.a>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex flex-1 justify-center gap-4 text-sm">
          {tabs.map((tab) => (
            <motion.a
              key={tab.id}
              href={`#${tab.id}`}
              className={`relative px-3 py-1.5 rounded-lg transition-all duration-300 font-mono text-xs sm:text-sm ${
                activeSection === tab.id
                  ? `${tab.bgColor} backdrop-blur-md border ${tab.borderColor} text-white shadow-[0_0_8px_${tab.glowColor}]`
                  : `text-gray-300 bg-gray-900/50 border border-gray-700/50 hover:border-${tab.borderColor.split('-')[1]}-500/50`
              }`}
              variants={linkVariants}
              whileHover="hover"
            >
              {tab.label}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Menu untuk Mobile */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md shadow-md border-b border-cyan-500/20"
            initial="closed"
            animate="open"
            variants={menuVariants}
          >
            <div className="flex flex-col items-center py-4 gap-3 text-sm">
              {tabs.map((tab) => (
                <motion.a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-mono w-3/4 text-center text-xs sm:text-sm ${
                    activeSection === tab.id
                      ? `${tab.bgColor} backdrop-blur-md border ${tab.borderColor} text-white shadow-[0_0_8px_${tab.glowColor}]`
                      : `text-gray-300 bg-gray-900/50 border border-gray-700/50 hover:border-${tab.borderColor.split('-')[1]}-500/50`
                  }`}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  {tab.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}