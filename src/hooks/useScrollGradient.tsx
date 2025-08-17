import { useState, useEffect } from 'react';

export const useScrollGradient = () => {
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show gradient when scrolled past 20% of hero until near the end of document
      setShowGradient(scrollY > windowHeight * 0.2 && scrollY < documentHeight - windowHeight * 1.2);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showGradient;
};