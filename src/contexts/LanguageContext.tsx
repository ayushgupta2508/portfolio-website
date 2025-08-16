import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language data
const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Software Engineer & Full-Stack Developer',
    'hero.description': 'Passionate about creating scalable solutions with Java, Spring Boot, React, and modern technologies. Currently pursuing M.Sc. Computer Science in Germany.',
    'hero.downloadCV': 'Download CV',
    'hero.contactMe': 'Contact Me',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'I am a dedicated software engineer with expertise in full-stack development, microservices architecture, and cloud technologies. Currently pursuing my Master\'s in Computer Science at Rheinland-Pfälzische Technische Universität in Germany.',
    'about.education': 'Education',
    'about.languages': 'Languages',
    'about.certifications': 'Certifications',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.languages': 'Programming Languages',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.databases': 'Databases',
    'skills.cloud': 'Cloud & DevOps',
    'skills.tools': 'Developer Tools',
    'skills.other': 'Other Technologies',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.viewDemo': 'View Demo',
    'projects.viewCode': 'View Code',
    
    // Experience Section
    'experience.title': 'Work Experience',
    'experience.present': 'Present',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to discussing new opportunities and interesting projects.',
    'contact.email': 'Email me at',
    'contact.linkedin': 'Connect on LinkedIn',
    'contact.phone': 'Call me at',
    
    // Education entries
    'education.masters': 'M.Sc. Computer Science',
    'education.masters.school': 'Rheinland-Pfälzische Technische Universität',
    'education.masters.location': 'Kaiserslautern, Germany',
    'education.masters.period': 'October 2023 - Present',
    'education.bachelors': 'Bachelor of Technology in Computer Science Engineering',
    'education.bachelors.school': 'Manav Rachna University',
    'education.bachelors.location': 'Faridabad, India',
    'education.bachelors.period': 'July 2017 - April 2021',
    
    // Language skills
    'language.english': 'English - Fluent (C1)',
    'language.german': 'German - Elementary (A2)',
    'language.hindi': 'Hindi - Native',
    
    // Certifications
    'cert.oracle': 'Oracle Certified Associate Java Programmer',
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.projects': 'Projekte',
    'nav.experience': 'Erfahrung',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.greeting': 'Hallo, ich bin',
    'hero.title': 'Software-Ingenieur & Full-Stack-Entwickler',
    'hero.description': 'Leidenschaftlich für die Entwicklung skalierbarer Lösungen mit Java, Spring Boot, React und modernen Technologien. Studiere derzeit M.Sc. Informatik in Deutschland.',
    'hero.downloadCV': 'Lebenslauf herunterladen',
    'hero.contactMe': 'Kontaktieren Sie mich',
    
    // About Section
    'about.title': 'Über mich',
    'about.description': 'Ich bin ein engagierter Software-Ingenieur mit Expertise in Full-Stack-Entwicklung, Microservices-Architektur und Cloud-Technologien. Studiere derzeit meinen Master in Informatik an der Rheinland-Pfälzischen Technischen Universität in Deutschland.',
    'about.education': 'Bildung',
    'about.languages': 'Sprachen',
    'about.certifications': 'Zertifikate',
    
    // Skills Section
    'skills.title': 'Technische Fähigkeiten',
    'skills.languages': 'Programmiersprachen',
    'skills.frameworks': 'Frameworks & Bibliotheken',
    'skills.databases': 'Datenbanken',
    'skills.cloud': 'Cloud & DevOps',
    'skills.tools': 'Entwicklertools',
    'skills.other': 'Andere Technologien',
    
    // Projects Section
    'projects.title': 'Ausgewählte Projekte',
    'projects.viewDemo': 'Demo anzeigen',
    'projects.viewCode': 'Code anzeigen',
    
    // Experience Section
    'experience.title': 'Berufserfahrung',
    'experience.present': 'Heute',
    
    // Contact Section
    'contact.title': 'Kontakt aufnehmen',
    'contact.description': 'Ich bin immer offen für Diskussionen über neue Möglichkeiten und interessante Projekte.',
    'contact.email': 'E-Mail an',
    'contact.linkedin': 'Auf LinkedIn verbinden',
    'contact.phone': 'Anrufen unter',
    
    // Education entries
    'education.masters': 'M.Sc. Informatik',
    'education.masters.school': 'Rheinland-Pfälzische Technische Universität',
    'education.masters.location': 'Kaiserslautern, Deutschland',
    'education.masters.period': 'Oktober 2023 - Heute',
    'education.bachelors': 'Bachelor of Technology in Computer Science Engineering',
    'education.bachelors.school': 'Manav Rachna University',
    'education.bachelors.location': 'Faridabad, Indien',
    'education.bachelors.period': 'Juli 2017 - April 2021',
    
    // Language skills
    'language.english': 'Englisch - Fließend (C1)',
    'language.german': 'Deutsch - Grundkenntnisse (A2)',
    'language.hindi': 'Hindi - Muttersprache',
    
    // Certifications
    'cert.oracle': 'Oracle Certified Associate Java Programmer',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};