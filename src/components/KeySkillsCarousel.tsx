import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import * as ReactIcons from 'react-icons/si';
import { Coffee, Server, Database, Code2, Layers, Container } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export const KeySkillsCarousel = () => {
  const { elementRef: carouselRef, isVisible: carouselVisible } = useScrollAnimation({ threshold: 0.1 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showGradients, setShowGradients] = useState({ left: false, right: false });

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const canScrollLeft = container.scrollLeft > 0;
        const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth;
        
        setShowGradients({ left: canScrollLeft, right: canScrollRight });
      }
    };

    // Check on mount and resize
    checkScroll();
    window.addEventListener('resize', checkScroll);
    
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', checkScroll);
    }

    return () => {
      window.removeEventListener('resize', checkScroll);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  const keySkills = [
    { name: 'Java', Icon: Coffee, color: 'text-[#f89820]' },
    { name: 'PostgreSQL', Icon: ReactIcons.SiPostgresql, color: 'text-[#336791]' },
    { name: 'Spring Boot', Icon: Server, color: 'text-[#6db33f]' },
    { name: 'ReactJS', Icon: ReactIcons.SiReact, color: 'text-[#61dafb]' },
    { name: 'Apache Kafka', Icon: Database, color: 'text-primary' },
    { name: 'GitHub', Icon: ReactIcons.SiGithub, color: 'text-foreground' },
    { name: 'Docker', Icon: Container, color: 'text-[#2496ed]' },
    { name: 'JavaScript', Icon: Code2, color: 'text-[#f7df1e]' },
    { name: 'MongoDB', Icon: ReactIcons.SiMongodb, color: 'text-[#47a248]' },
  ];

  return (
    <div 
      ref={carouselRef}
      className={`mb-16 transition-all duration-700 ${
        carouselVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-2xl font-semibold text-center mb-8">Key Technologies</h3>
      
      <div className="relative overflow-hidden flex items-center min-h-[200px]">
        {/* Left Gradient - Only show when can scroll left */}
        {showGradients.left && (
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        )}
        
        {/* Right Gradient - Only show when can scroll right */}
        {showGradients.right && (
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        )}
        
        {/* Scrollable Container */}
        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide w-full">
          <div className="flex gap-12 pb-4 px-32 justify-center" style={{ minWidth: '100%' }}>
            {keySkills.map((skill, index) => {
              const IconComponent = skill.Icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center group cursor-pointer transition-smooth hover:scale-110 flex-shrink-0"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-card rounded-xl shadow-soft group-hover:shadow-elegant transition-smooth border border-border/50">
                    <IconComponent className={`w-12 h-12 md:w-14 md:h-14 ${skill.color}`} />
                  </div>
                  <span className="text-base md:text-lg font-medium mt-4 text-center">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};