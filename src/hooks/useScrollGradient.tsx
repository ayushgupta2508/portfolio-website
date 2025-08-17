import { useState, useEffect } from 'react';

export const useScrollGradient = () => {
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show gradient when scrolled past hero but not at full page coverage
      setShowGradient(scrollY > windowHeight * 0.3 && scrollY < windowHeight * 0.95);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showGradient;
};