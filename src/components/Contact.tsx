import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Email */}
            <Card className="bg-gradient-card shadow-soft border-0 transition-smooth hover:shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('contact.email')}</h3>
                <p className="text-muted-foreground mb-6">ayushgupta258@gmail.com</p>
                <Button onClick={handleEmailClick} className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="bg-gradient-card shadow-soft border-0 transition-smooth hover:shadow-elegant">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('contact.linkedin')}</h3>
                <p className="text-muted-foreground mb-6">linkedin.com/in/ayushgupta258</p>
                <Button onClick={handleLinkedInClick} className="w-full">
                  Connect
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="bg-gradient-card shadow-soft border-0 transition-smooth hover:shadow-elegant md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{t('contact.phone')}</h3>
                <p className="text-muted-foreground mb-6">+49-15510354664</p>
                <Button onClick={handlePhoneClick} className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Location */}
          <Card className="bg-gradient-card shadow-soft border-0 transition-smooth hover:shadow-elegant mt-8">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Current Location</h3>
              <p className="text-muted-foreground">
                Kaiserslautern, Germany
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Available for remote work and on-site opportunities
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};