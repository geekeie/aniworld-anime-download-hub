
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-white hover:text-purple-300 hover:bg-white/10 transition-colors"
    >
      <Languages className="w-4 h-4 mr-2" />
      {language === 'de' ? 'EN' : 'DE'}
    </Button>
  );
};
