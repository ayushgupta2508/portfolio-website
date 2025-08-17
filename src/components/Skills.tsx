import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Wrench, Layers, Settings } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { KeySkills } from '@/components/KeySkills';

export const Skills = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation({ threshold: 0.1 });

  const skillCategories = [
    {
      icon: Code,
      title: t('skills.languages'),
      skills: [/*'Java', 'JavaScript',*/ 'Python', 'TypeScript']
    },
    {
      icon: Layers,
      title: t('skills.frameworks'),
      skills: [/*'Spring Boot', 'Spring Data JPA', 'ReactJS',*/ 'Node.js', 'Hibernate', 'JUnit']
    },
    {
      icon: Database,
      title: t('skills.databases'),
      skills: ['SQL', 'NoSQL', 'MySQL'/*, 'PostgreSQL', 'MongoDB'*/]
    },
    {
      icon: Cloud,
      title: t('skills.cloud'),
      skills: [/*'Docker', 'Apache Kafka',*/ 'Kubernetes', 'AWS', 'CI/CD']
    },
    {
      icon: Wrench,
      title: t('skills.tools'),
      skills: [/*'GitHub', 'Maven',*/ 'BitBucket', 'IntelliJ IDEA', 'Gradle']
    },
    {
      icon: Settings,
      title: t('skills.other'),
      skills: [/*'REST APIs',*/ 'GraphQL', 'Microservices', 'Agile', 'Scrum', 'Jira', 'Confluence', 'Grafana']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('skills.title')}
          </h2>
        </div>

        <KeySkills />

        <div
            ref={titleRef}
            className={`text-center mt-8 mb-8 transition-all duration-700 ${
                titleVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
            }`}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">Other</h3>
        </div>

        <div 
          ref={skillsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            skillsVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-gradient-card shadow-soft border-0 transition-smooth hover:shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};