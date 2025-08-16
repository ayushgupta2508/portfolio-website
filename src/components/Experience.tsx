import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';

export const Experience = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'Unthinkable Solutions',
      location: 'Gurgaon, India',
      period: 'January 2021 – September 2023',
      achievements: {
        en: [
          'Designed and launched a high-performance Know Your Customer (KYC) system using Apache Kafka, enabling a smooth Merchant Onboarding.',
          'Developed and deployed REST APIs with Java microservices, achieving response times under 150ms.',
          'Reduced false positives in KYC checks by 15% through optimized data validation rules.',
          'Executed unit and integration testing with 95% code coverage, reducing production bugs by 50%.',
          'Partnered with cross-functional teams to develop, test, and deploy robust, scalable software solutions for clients.'
        ],
        de: [
          'Entwarf und startete ein leistungsstarkes Know Your Customer (KYC) System mit Apache Kafka, ermöglichte reibungsloses Merchant Onboarding.',
          'Entwickelte und deployte REST APIs mit Java Microservices, erreichte Antwortzeiten unter 150ms.',
          'Reduzierte False Positives in KYC-Prüfungen um 15% durch optimierte Datenvalidierungsregeln.',
          'Führte Unit- und Integrationstests mit 95% Code-Abdeckung durch, reduzierte Produktionsfehler um 50%.',
          'Arbeitete mit funktionsübergreifenden Teams zusammen, um robuste, skalierbare Softwarelösungen für Kunden zu entwickeln, testen und bereitzustellen.'
        ]
      }
    },
    {
      title: 'Java Intern',
      company: 'TechChefz',
      location: 'Noida, India',
      period: 'November 2020 – January 2021',
      achievements: {
        en: [
          'Resolved critical APIs and backend issues, improving overall system stability by 30%.',
          'Wrote 50 test cases, maintaining 99% accuracy in code updates and reduced post-release issues by 35%.'
        ],
        de: [
          'Löste kritische API- und Backend-Probleme, verbesserte die Gesamtsystemstabilität um 30%.',
          'Schrieb 50 Testfälle, hielt 99% Genauigkeit bei Code-Updates aufrecht und reduzierte Post-Release-Probleme um 35%.'
        ]
      }
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('experience.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-card shadow-soft border-0 transition-smooth hover:shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        <span className="font-semibold text-lg">{exp.company}</span>
                        <Badge variant="outline" className="ml-2">
                          {exp.location}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements[language === 'de' ? 'de' : 'en'].map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-3 mt-1">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};