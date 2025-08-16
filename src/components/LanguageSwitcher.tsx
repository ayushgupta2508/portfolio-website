import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex bg-secondary rounded-lg p-1">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="text-xs font-medium px-3 py-1 h-auto"
        >
          EN
        </Button>
        <Button
          variant={language === 'de' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('de')}
          className="text-xs font-medium px-3 py-1 h-auto"
        >
          DE
        </Button>
      </div>
    </div>
  );
};