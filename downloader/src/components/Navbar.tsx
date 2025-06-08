
import { useState, useEffect } from 'react';
import { Button } from "@downloader/components/ui/button";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
        <Button asChild variant="outline" className="transition-transform duration-200 ease-in-out hover:scale-105">
          <a href="/">TikTok Viewbot</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
