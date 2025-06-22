
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Features Section
    'features.title': 'Warum AniWorld wählen?',
    'features.free.title': 'Kostenlos Streaming',
    'features.free.description': 'Schaue tausende von Anime-Episoden ohne Abonnementgebühren',
    'features.android.title': 'Android Optimiert',
    'features.android.description': 'Speziell für Android-Geräte entwickelt',
    'features.quality.title': 'HD Qualität',
    'features.quality.description': 'Genieße Anime in bester Bildqualität',
    'features.community.title': 'Große Community',
    'features.community.description': 'Schließe dich Millionen von Anime-Fans an',
    'features.multilingual.title': 'Mehrsprachig',
    'features.multilingual.description': 'Deutsch und Englisch Unterstützung',
    'features.secure.title': '100% Sicher',
    'features.secure.description': 'Keine Malware, keine Viren - völlig sicher',
    'features.offline.title': 'Offline Downloads',
    'features.offline.description': 'Lade Episoden für die Offline-Ansicht herunter',
    'features.fast.title': 'Schnelles Streaming',
    'features.fast.description': 'Blitzschnelle Ladezeiten und reibungsloses Streaming',

    // Popular Anime Section
    'anime.popular': 'Beliebte Anime-Serien',

    // FAQ Section
    'faq.title': 'Häufig gestellte Fragen',
    'faq.cost.question': 'Kostet die App Geld?',
    'faq.cost.answer': 'Nein, die AniWorld App ist völlig kostenlos. Keine versteckten Gebühren oder In-App-Käufe.',
    'faq.safe.question': 'Ist die AniWorld App sicher zu verwenden?',
    'faq.safe.answer': 'Ja, unsere Anime-Streaming-App ist völlig sicher. Wir sind die offiziellen Entwickler von aniworld.de.',
    'faq.install.question': 'Wie installiere ich die App?',
    'faq.install.answer': 'Lade die APK-Datei herunter, erlaube unbekannte Quellen in den Einstellungen und installiere die App.',
    'faq.content.question': 'Wie oft fügt ihr neue Inhalte hinzu?',
    'faq.content.answer': 'Wir fügen jede Woche neue Anime-Episoden und -Serien hinzu.',
    'faq.languages.question': 'Welche Sprachen werden unterstützt?',
    'faq.languages.answer': 'Die App unterstützt Deutsch und Englisch mit mehreren Untertitel-Optionen.',
    'faq.updates.question': 'Wie oft wird die App aktualisiert?',
    'faq.updates.answer': 'Wir veröffentlichen regelmäßig Updates mit neuen Funktionen und Verbesserungen.',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
  en: {
    // Features Section
    'features.title': 'Why Choose AniWorld?',
    'features.free.title': 'Free Streaming',
    'features.free.description': 'Watch thousands of anime episodes without subscription fees',
    'features.android.title': 'Android Optimized',
    'features.android.description': 'Specially designed for Android devices',
    'features.quality.title': 'HD Quality',
    'features.quality.description': 'Enjoy anime in the best picture quality',
    'features.community.title': 'Large Community',
    'features.community.description': 'Join millions of anime fans',
    'features.multilingual.title': 'Multi-Language',
    'features.multilingual.description': 'German and English support',
    'features.secure.title': '100% Safe',
    'features.secure.description': 'No malware, no viruses - completely safe',
    'features.offline.title': 'Offline Downloads',
    'features.offline.description': 'Download episodes for offline viewing',
    'features.fast.title': 'Fast Streaming',
    'features.fast.description': 'Lightning-fast loading times and smooth streaming',

    // Popular Anime Section
    'anime.popular': 'Popular Anime Series',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.cost.question': 'Does the app cost money?',
    'faq.cost.answer': 'No, the AniWorld app is completely free. No hidden charges or in-app purchases.',
    'faq.safe.question': 'Is AniWorld App Safe to Use?',
    'faq.safe.answer': 'Yes, our anime streaming app is completely safe. We are the official developers from aniworld.de.',
    'faq.install.question': 'How do I install the app?',
    'faq.install.answer': 'Download the APK file, allow unknown sources in settings, and install the app.',
    'faq.content.question': 'How often do you add new content?',
    'faq.content.answer': 'We add new anime episodes and series every week.',
    'faq.languages.question': 'What languages are supported?',
    'faq.languages.answer': 'The app supports German and English with multiple subtitle options.',
    'faq.updates.question': 'How often is the app updated?',
    'faq.updates.answer': 'We regularly release updates with new features and improvements.',

    // Footer
    'footer.rights': 'All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    // Check URL path to determine initial language
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/en')) {
      setLanguage('en');
    } else {
      setLanguage('de');
    }
  }, []);

  useEffect(() => {
    // Update document lang attribute
    document.documentElement.lang = language;
    
    // Update URL path for SEO without page reload
    const currentPath = window.location.pathname;
    if (language === 'en' && !currentPath.startsWith('/en')) {
      const newPath = '/en' + (currentPath === '/' ? '' : currentPath);
      window.history.replaceState({}, '', newPath);
    } else if (language === 'de' && currentPath.startsWith('/en')) {
      const newPath = currentPath.replace('/en', '') || '/';
      window.history.replaceState({}, '', newPath);
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['de']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
