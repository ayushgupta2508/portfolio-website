import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check the current theme
    const updateTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Initial check
    updateTheme();

    // Listen for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const handleEmailClick = () => {
    window.open('mailto:ayushgupta258@gmail.com', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/ayushgupta258/', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+4915510354664', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <p className="text-lg text-primary-foreground/80 mb-4 font-medium">
            {t('hero.greeting')}
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Ayush Gupta
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground/90 mb-8">
            {t('hero.title')}
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant transition-smooth"
            >
              <Download className="w-4 h-4 mr-2" />
              {t('hero.downloadCV')}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleEmailClick}
              className={`border-primary-foreground ${
                isDark 
                  ? "text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth" 
                  : "bg-primary-foreground/25 text-white hover:bg-primary-foreground hover:text-primary transition-smooth"
              }`}
            >
              <Mail className="w-4 h-4 mr-2" />
              {t('hero.contactMe')}
            </Button>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-foreground/80">
            <button 
              onClick={handleEmailClick}
              className="flex items-center gap-2 hover:text-primary-foreground transition-smooth"
            >
              <Mail className="w-4 h-4" />
              <span>ayushgupta258@gmail.com</span>
            </button>
            
            <button 
              onClick={handleLinkedInClick}
              className="flex items-center gap-2 hover:text-primary-foreground transition-smooth"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/ayushgupta258</span>
            </button>
            
            <button 
              onClick={handlePhoneClick}
              className="flex items-center gap-2 hover:text-primary-foreground transition-smooth"
            >
              <Phone className="w-4 h-4" />
              <span>+49-15510354664</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};