import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Projects = () => {
  const { t, language } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      title: 'Merchant Onboarding Platform',
      description: {
        en: 'Developed APIs using Spring Boot, GraphQL, and REST for SaaS integration, supporting 5,000+ users with 99.99% uptime. Reduced onboarding time from 2-3 days to 30-40 minutes via asynchronous processing.',
        de: 'Entwickelte APIs mit Spring Boot, GraphQL und REST für SaaS-Integration, unterstützt 5.000+ Benutzer mit 99,99% Verfügbarkeit. Reduzierte Onboarding-Zeit von 2-3 Tagen auf 30-40 Minuten durch asynchrone Verarbeitung.'
      },
      technologies: ['Spring Boot', 'GraphQL', 'REST', 'Kafka', 'OCR', 'MongoDB', 'Docker'],
      achievements: [
        '5,000+ users supported',
        '99.99% uptime',
        'Reduced onboarding by 95%',
        'Improved data extraction by 40%'
      ]
    },
    {
      title: 'eVyapaar',
      description: {
        en: 'Engineered a service in an agile environment for 1,000+ merchants, boosting financial tracking accuracy by 30%. Implemented real-time payment tracking with Spring Boot and PostgreSQL.',
        de: 'Entwickelte einen Service in einer agilen Umgebung für 1.000+ Händler, verbesserte die Genauigkeit der Finanzverfolgung um 30%. Implementierte Echtzeit-Zahlungsverfolgung mit Spring Boot und PostgreSQL.'
      },
      technologies: ['Spring Boot', 'PostgreSQL', 'Agile'],
      achievements: [
        '1,000+ merchants served',
        '30% improved accuracy',
        '20% reduced discrepancies',
        '50% reduced manual workload'
      ]
    },
    {
      title: 'WebApp Farmbot',
      description: {
        en: 'Designed an intuitive field map UI to visualize real-time position of autonomous bots, enhancing operational visibility for farmers. Developed dashboard interface for monitoring bot activities and field metrics.',
        de: 'Entwarf eine intuitive Feldkarten-UI zur Visualisierung der Echtzeitposition autonomer Bots, verbesserte die operative Sichtbarkeit für Landwirte. Entwickelte Dashboard-Interface zur Überwachung von Bot-Aktivitäten und Feldmetriken.'
      },
      technologies: ['Node.js', 'ReactJS', 'MongoDB'],
      achievements: [
        'Real-time bot tracking',
        'Enhanced farmer visibility',
        'Automated seeding tasks',
        'Improved user engagement'
      ]
    },
    {
      title: 'Fine-tuned LLM for German-French Translation',
      description: {
        en: 'Achieved a BLEU score improvement from 0.25 to 2.40 using LoRA fine-tuning and GenAI-based data augmentation. Scaled training data by 200%, generating 1,400+ synthetic translation pairs.',
        de: 'Erreichte eine BLEU-Score-Verbesserung von 0,25 auf 2,40 mit LoRA-Feinabstimmung und GenAI-basierter Datenaugmentation. Skalierte Trainingsdaten um 200%, generierte 1.400+ synthetische Übersetzungspaare.'
      },
      technologies: ['LoRA', 'GenAI', 'PEFT', 'Groq API'],
      achievements: [
        'BLEU score: 0.25 → 2.40',
        '200% data scaling',
        '1,400+ translation pairs',
        '32B LLM via Groq API'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'animate-fade-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('projects.title')}
          </h2>
        </div>

        <div 
          ref={projectsRef}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            projectsVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          {projects.map((project, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft border-0 transition-smooth hover:shadow-elegant h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description[language === 'de' ? 'de' : 'en']}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};