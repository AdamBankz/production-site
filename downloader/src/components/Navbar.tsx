
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl bg-black/60 shadow-lg py-2' : 'py-4'
      }`}
    >
      {/* We're completely removing the navigation content to make the header clean */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
    </header>
  );
};

export default Navbar;
