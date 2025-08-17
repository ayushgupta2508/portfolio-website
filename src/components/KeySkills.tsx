import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import * as ReactIcons from 'react-icons/si';
import { Coffee, Server, Database, Code2, Layers, Container } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  image?: string;
  Icon?: React.ElementType;
  color?: string;
}

export const KeySkills = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation({ threshold: 0.1 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const skillsTrackRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Java', image: '/skills/java.png', color: 'text-[#f89820]' },
    { name: 'JavaScript', image: '/skills/javascript.png', color: 'text-[#f7df1e]' },
    { name: 'PostgreSQL', image: '/skills/postgresql.png', color: 'text-[#336791]' },
    { name: 'MongoDB', Icon: ReactIcons.SiMongodb, color: 'text-[#47a248]' },
    { name: 'Spring Boot', image: '/skills/springboot.png', color: 'text-[#6db33f]' },
    { name: 'ReactJS', image: '/skills/reactjs.png', color: 'text-[#61dafb]' },
    { name: 'Spring Data JPA' , Icon: ReactIcons.SiSpring, color: 'text-[#6db33f]' },
    { name: 'Apache Kafka', image: '/skills/kafka.png', color: 'text-primary' },
    { name: 'Docker', image: '/skills/docker.png', color: 'text-[#2496ed]' },
    { name: 'GitHub', Icon: ReactIcons.SiGithub, color: 'text-foreground' },
    // { name: 'Rest APIs', image: '/skills/rest.png', color: 'text-[#ff6c37]' },
    { name: "Maven", Icon: ReactIcons.SiApachemaven, color: 'text-[#c71a36]' },
  ];

  return (
    <div>
      {/*<div*/}
      {/*  ref={titleRef}*/}
      {/*  className={`text-center mb-8 transition-all duration-700 ${*/}
      {/*    titleVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  <h3 className="text-2xl md:text-3xl font-semibold mb-2">Key Skills</h3>*/}
      {/*</div>*/}

      <div
        ref={skillsRef}
        className={`relative transition-all duration-700 overflow-hidden ${
          skillsVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        {/* Left gradient overlay */} {/* bg-gradient-to-r from-background to-transparent*/}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 z-10 pointer-events-none"></div>

        {/* Infinite scroll container */}
        <div ref={scrollContainerRef} className="overflow-hidden w-full max-w-[90vw] mx-auto">
          <div
            ref={skillsTrackRef}
            className="flex gap-8 md:gap-12 py-4 px-8 animate-infinite-scroll"
          >
            {/* First set of skills */}
            {skills.map((skill, index) => {
              const IconComponent = skill.Icon;
              return (
                <div
                  key={`first-${index}`}
                  className="flex flex-col items-center group cursor-pointer transition-smooth hover:scale-110 flex-shrink-0"
                >
                  <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center bg-card rounded-xl shadow-soft group-hover:shadow-elegant transition-smooth border border-border/50">
                    { skill.Icon ? (
                        <IconComponent className={`w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 ${skill.color}`} />
                    ) : (
                        <img
                            src={skill.image}
                            alt={`${skill.name} icon`}
                            className={`w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16`}
                        />
                    )}
                  </div>
                  <span className="text-sm sm:text-base md:text-lg font-medium mt-3 md:mt-4 text-center">{skill.name}</span>
                </div>
              );
            })}

            {/* Duplicate set of skills for seamless looping */}
            {skills.map((skill, index) => {
              const IconComponent = skill.Icon;
              return (
                <div
                  key={`second-${index}`}
                  className="flex flex-col items-center group cursor-pointer transition-smooth hover:scale-110 flex-shrink-0"
                >
                  <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center bg-card rounded-xl shadow-soft group-hover:shadow-elegant transition-smooth border border-border/50">
                  { skill.Icon ? (
                      <IconComponent className={`w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 ${skill.color}`} />
                      ) : (
                        <img
                            src={skill.image}
                            alt={`${skill.name} icon`}
                            className={`w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16`}
                        />
                  )}
                  </div>
                  <span className="text-sm sm:text-base md:text-lg font-medium mt-3 md:mt-4 text-center">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right gradient overlay */} {/*bg-gradient-to-l from-background to-transparent*/}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};