import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import * as ReactIcons from 'react-icons/si';
import { Coffee, Server, Database, Code2, Layers, Container } from 'lucide-react';

export const KeySkillsCarousel = () => {
  const { elementRef: carouselRef, isVisible: carouselVisible } = useScrollAnimation({ threshold: 0.1 });

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
      
      <div className="relative overflow-hidden">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrollable Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 pb-4 px-20" style={{ width: 'max-content' }}>
            {keySkills.map((skill, index) => {
              const IconComponent = skill.Icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center group cursor-pointer transition-smooth hover:scale-110"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-card rounded-xl shadow-soft group-hover:shadow-elegant transition-smooth border border-border/50">
                    <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${skill.color}`} />
                  </div>
                  <span className="text-sm font-medium mt-3 text-center">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};