import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Languages, Award } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <Card className="bg-gradient-card shadow-soft border-0 transition-smooth hover:shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('about.education')}</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-1">
                    {t('education.masters')}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {t('education.masters.school')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('education.masters.location')} • {t('education.masters.period')}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-1">
                    {t('education.bachelors')}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {t('education.bachelors.school')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('education.bachelors.location')} • {t('education.bachelors.period')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-gradient-card shadow-soft border-0 transition-smooth hover:shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Languages className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('about.languages')}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium">{t('language.english')}</p>
                </div>
                <div>
                  <p className="font-medium">{t('language.german')}</p>
                </div>
                <div>
                  <p className="font-medium">{t('language.hindi')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-gradient-card shadow-soft border-0 transition-smooth hover:shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t('about.certifications')}</h3>
              </div>
              
              <div>
                <p className="font-medium text-primary">
                  {t('cert.oracle')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};