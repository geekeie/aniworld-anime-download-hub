
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
    // Header
    'nav.home': 'Startseite',
    'nav.privacy': 'Datenschutz',
    'nav.admin': 'Admin',
    'button.download': 'APK herunterladen',
    
    // Hero Section
    'hero.badge': 'Offiziell von aniworld.de',
    'hero.title': 'AniWorld App: Kostenlose APK für Android herunterladen & Animes schauen',
    'hero.description': 'Schaue tausende von Anime-Episoden ohne Abonnementgebühren. Von Attack on Titan bis Your Name, genieße unbegrenzte Streams mit unserer Premium-App-Erfahrung.',
    'hero.stats.episodes': 'Anime-Episoden',
    'hero.stats.series': 'Anime-Serien',
    'hero.stats.users': 'Zufriedene Nutzer',
    'hero.stats.rating': 'Nutzerbewertung',
    'hero.download.button': 'AniWorld APK herunterladen',
    'hero.contact.button': 'Kontaktiere uns',
    'hero.features': '✅ Keine Registrierung erforderlich • ✅ Keine monatlichen Gebühren • ✅ 100% kostenlos für immer',
    
    // Popular Anime Section
    'anime.title': 'Beliebte Anime-Serien',
    'anime.subtitle': 'Entdecke tausende von Anime-Episoden aus deinen Lieblingsserien',
    'anime.attack_on_titan': 'Attack on Titan',
    'anime.your_name': 'Your Name',
    'anime.death_note': 'Death Note',
    'anime.one_piece': 'One Piece',
    'genre.action': 'Action',
    'genre.romance': 'Romantik',
    'genre.thriller': 'Thriller',
    'genre.adventure': 'Abenteuer',
    
    // Features Section
    'features.title': 'Was macht AniWorld besonders',
    'features.subtitle': 'Die ultimative kostenlose Anime-Streaming-Lösung, speziell für Android-Nutzer entwickelt, die Qualität ohne Kompromisse wollen.',
    'features.streaming.title': 'Unbegrenztes Streaming',
    'features.streaming.desc': 'Schaue tausende von Anime-Episoden ohne Abonnementgebühren',
    'features.download.title': 'Offline-Downloads',
    'features.download.desc': 'Lade bis zu 50 Episoden für die Offline-Ansicht überall herunter',
    'features.safe.title': '100% Sicher & Geschützt',
    'features.safe.desc': 'Keine Malware, keine Viren. Offizielle App vom aniworld.de Team',
    'features.devices.title': 'Alle Android-Geräte',
    'features.devices.desc': 'Optimiert für Handys und Tablets mit Android 5.0+',
    'features.language.title': 'Mehrsprachig',
    'features.language.desc': 'Deutsch und Englisch Unterstützung mit mehreren Untertitel-Optionen',
    'features.player.title': 'Pro Player',
    'features.player.desc': 'Erweiterter Video-Player mit Gestensteuerung und Qualitätsoptionen',
    
    // Article Content
    'article.title': 'Warum AniWorld App wählen?',
    'article.subtitle': 'Die ultimative kostenlose Anime-Streaming-Lösung für Android-Nutzer',
    'article.intro': 'AniWorld App ist die ultimative kostenlose Anime-Streaming-Lösung für Android-Nutzer. Wenn du Schwierigkeiten hast, einen zuverlässigen Ort zu finden, um deine Lieblings-Anime-Shows zu schauen, löst diese App dieses Problem sofort.',
    'article.problem': 'Müde davon, monatliche Gebühren für Anime-Streaming zu zahlen? Genervt von Apps, die abstürzen oder begrenzten Inhalt haben? Die AniWorld-Anwendung gibt dir Zugang zu tausenden von Anime-Episoden, ohne einen einzigen Cent auszugeben.',
    'article.official': 'Wir sind das offizielle Team hinter aniworld.de. Wir haben diese Anime-App speziell für Fans erstellt, die Qualitäts-Streaming auf ihren Handys wollen. Keine versteckten Kosten. Keine nervigen Werbungen. Nur pure Anime-Unterhaltung.',
    'article.special.title': 'Was macht AniWorld App besonders',
    'article.special.content1': 'Die AniWorld Anime-App hebt sich von anderen Streaming-Apps in mehreren Bereichen ab. Erstens ist sie völlig kostenlos zu verwenden. Du musst kein Konto erstellen oder Kreditkartendaten angeben.',
    'article.special.content2': 'Zweitens enthält unsere Anime-Streaming-App jeden Typ von Anime-Inhalt, den du dir vorstellen kannst. Action-geladene Serien wie Attack on Titan, romantische Komödien wie Kaguya-sama, Horror-Anime wie Tokyo Ghoul und Slice-of-Life-Shows wie Your Name.',
    'article.features.title': 'Hauptfunktionen der AniWorld Android App',
    'article.library.title': 'Umfassende Anime-Inhaltsbibliothek',
    'article.library.content': 'Unsere kostenlose Anime-App hostet jeden Typ von Anime-Serie, den du dir vorstellen kannst. Beliebte Shounen-Anime wie Dragon Ball Z, One Piece und Bleach. Romantische Anime-Serien einschließlich Your Name, A Silent Voice und Toradora.',
    'article.quality.title': 'Mehrere Videoqualitätsoptionen',
    'article.quality.content': 'Schaue Anime in der Qualität, die zu deinem Gerät und deiner Internetgeschwindigkeit passt. Unsere App bietet 360p für grundlegendes Ansehen bei langsameren Verbindungen. 720p HD für klare, scharfe Bildqualität. 1080p Full HD für das ultimative Seherlebnis.',
    
    // Download Instructions
    'download.title': 'Wie man AniWorld APK herunterlädt',
    'download.subtitle': 'Die AniWorld APK zu bekommen ist einfach. Folge diesen einfachen Schritten, um sofort Anime zu schauen.',
    'download.step1.title': 'Installation aktivieren',
    'download.step1.desc': 'Erlaube "Unbekannte Quellen" in den Sicherheitseinstellungen deines Handys',
    'download.step2.title': 'APK herunterladen',
    'download.step2.desc': 'Besuche aniworld.de und tippe auf den Download-Button',
    'download.step3.title': 'App installieren',
    'download.step3.desc': 'Tippe auf die APK-Datei und folge den Installationsaufforderungen',
    'download.step4.title': 'Schauen beginnen',
    'download.step4.desc': 'Öffne die App und genieße unbegrenztes Anime-Streaming',
    'download.button.main': 'AniWorld APK jetzt herunterladen',
    
    // System Requirements
    'system.title': 'Systemanforderungen',
    'system.minimum': 'Mindestanforderungen',
    'system.recommended': 'Empfohlen',
    
    // FAQ
    'faq.title': 'Häufig gestellte Fragen',
    'faq.cost.question': 'Kostet die App Geld?',
    'faq.cost.answer': 'Nein, die AniWorld App ist völlig kostenlos. Keine versteckten Gebühren oder In-App-Käufe.',
    'faq.safe.question': 'Ist die AniWorld App sicher zu verwenden?',
    'faq.safe.answer': 'Ja, unsere Anime-Streaming-App ist völlig sicher. Wir sind die offiziellen Entwickler von aniworld.de. Die APK-Datei enthält keine Viren oder Malware. Lade immer nur von aniworld.de herunter.',
    'faq.quality.question': 'Welche Videoqualitäten sind verfügbar?',
    'faq.quality.answer': 'Die App bietet 360p, 720p und 1080p Videoqualitätsoptionen. Du kannst verschiedene Qualitätspräferenzen für WiFi und mobile Datennutzung einstellen.',
    'faq.content.question': 'Wie oft fügt ihr neue Inhalte hinzu?',
    'faq.content.answer': 'Wir fügen jede Woche neue Anime-Episoden und -Serien hinzu. Beliebte saisonale Anime erscheinen innerhalb von 24-48 Stunden nach ihrer ursprünglichen Ausstrahlung.',
    
    // Final CTA
    'cta.title': 'Beginne deine Anime-Reise heute',
    'cta.subtitle': 'Schließe dich Millionen von Anime-Fans an, die bereits unbegrenztes Streaming auf ihren Handys genießen. Deine Lieblings-Anime-Abenteuer sind nur einen Download entfernt.',
    'cta.download': 'AniWorld APK kostenlos holen',
    'cta.contact': 'Support kontaktieren',
    'cta.remember': 'Denke daran, nur von unserer offiziellen Website aniworld.de herunterzuladen',
    
    // Footer
    'footer.official': 'Offizielle App von aniworld.de',
    'footer.tagline': 'Kostenloses Anime-Streaming für alle',
    'footer.contact': 'Kontakt',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.privacy': 'Privacy',
    'nav.admin': 'Admin',
    'button.download': 'Download APK',
    
    // Hero Section
    'hero.badge': 'Official from aniworld.de',
    'hero.title': 'AniWorld App: Download Free APK for Android & Watch Animes',
    'hero.description': 'Watch thousands of anime episodes without subscription fees. From Attack on Titan to Your Name, enjoy unlimited streaming with our premium app experience.',
    'hero.stats.episodes': 'Anime Episodes',
    'hero.stats.series': 'Anime Series',
    'hero.stats.users': 'Happy Users',
    'hero.stats.rating': 'User Rating',
    'hero.download.button': 'Download AniWorld APK',
    'hero.contact.button': 'Contact Us',
    'hero.features': '✅ No Registration Required • ✅ No Monthly Fees • ✅ 100% Free Forever',
    
    // Popular Anime Section
    'anime.title': 'Popular Anime Series',
    'anime.subtitle': 'Discover thousands of anime episodes from your favorite series',
    'anime.attack_on_titan': 'Attack on Titan',
    'anime.your_name': 'Your Name',
    'anime.death_note': 'Death Note',
    'anime.one_piece': 'One Piece',
    'genre.action': 'Action',
    'genre.romance': 'Romance',
    'genre.thriller': 'Thriller',
    'genre.adventure': 'Adventure',
    
    // Features Section
    'features.title': 'What Makes AniWorld Special',
    'features.subtitle': 'The ultimate free anime streaming solution designed specifically for Android users who want quality without compromise.',
    'features.streaming.title': 'Unlimited Streaming',
    'features.streaming.desc': 'Watch thousands of anime episodes without any subscription fees',
    'features.download.title': 'Offline Downloads',
    'features.download.desc': 'Download up to 50 episodes for offline viewing anywhere',
    'features.safe.title': '100% Safe & Secure',
    'features.safe.desc': 'No malware, no viruses. Official app from aniworld.de team',
    'features.devices.title': 'All Android Devices',
    'features.devices.desc': 'Optimized for phones and tablets with Android 5.0+',
    'features.language.title': 'Multi-Language',
    'features.language.desc': 'English and German support with multiple subtitle options',
    'features.player.title': 'Pro Player',
    'features.player.desc': 'Advanced video player with gesture controls and quality options',
    
    // Article Content
    'article.title': 'Why Choose AniWorld App?',
    'article.subtitle': 'The ultimate free anime streaming solution for Android users',
    'article.intro': 'AniWorld App is the ultimate free anime streaming solution for Android users. If you\'re struggling to find a reliable place to watch your favorite anime shows, this app solves that problem instantly.',
    'article.problem': 'Tired of paying monthly fees for anime streaming? Fed up with apps that crash or have limited content? The AniWorld application gives you access to thousands of anime episodes without spending a single penny.',
    'article.official': 'We are the official team behind aniworld.de. We created this anime app specifically for fans who want quality streaming on their phones. No hidden costs. No annoying ads. Just pure anime entertainment.',
    'article.special.title': 'What Makes AniWorld App Special',
    'article.special.content1': 'The AniWorld anime app stands out from other streaming apps in several ways. First, it\'s completely free to use. You don\'t need to create an account or provide credit card details.',
    'article.special.content2': 'Second, our anime streaming app contains every type of anime content you can imagine. Action-packed series like Attack on Titan, romantic comedies like Kaguya-sama, horror anime like Tokyo Ghoul, and slice-of-life shows like Your Name.',
    'article.features.title': 'Key Features of AniWorld Android App',
    'article.library.title': 'Comprehensive Anime Content Library',
    'article.library.content': 'Our free anime app hosts every type of anime series you can think of. Popular shounen anime like Dragon Ball Z, One Piece, and Bleach. Romantic anime series including Your Name, A Silent Voice, and Toradora.',
    'article.quality.title': 'Multiple Video Quality Options',
    'article.quality.content': 'Watch anime in the quality that suits your device and internet speed. Our app offers 360p for basic viewing on slower connections. 720p HD for crisp, clear picture quality. 1080p Full HD for the ultimate viewing experience.',
    
    // Download Instructions
    'download.title': 'How to Download AniWorld APK',
    'download.subtitle': 'Getting the AniWorld APK is simple. Follow these easy steps to start watching anime instantly.',
    'download.step1.title': 'Enable Installation',
    'download.step1.desc': 'Allow "Unknown Sources" in your phone\'s security settings',
    'download.step2.title': 'Download APK',
    'download.step2.desc': 'Visit aniworld.de and tap the download button',
    'download.step3.title': 'Install App',
    'download.step3.desc': 'Tap the APK file and follow installation prompts',
    'download.step4.title': 'Start Watching',
    'download.step4.desc': 'Open the app and enjoy unlimited anime streaming',
    'download.button.main': 'Download AniWorld APK Now',
    
    // System Requirements
    'system.title': 'System Requirements',
    'system.minimum': 'Minimum Requirements',
    'system.recommended': 'Recommended',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.cost.question': 'Does the app cost money?',
    'faq.cost.answer': 'No, the AniWorld app is completely free. No hidden charges or in-app purchases.',
    'faq.safe.question': 'Is AniWorld App Safe to Use?',
    'faq.safe.answer': 'Yes, our anime streaming app is completely safe. We are the official developers from aniworld.de. The APK file contains no viruses or malware. Always download only from aniworld.de.',
    'faq.quality.question': 'What video qualities are available?',
    'faq.quality.answer': 'The app offers 360p, 720p, and 1080p video quality options. You can set different quality preferences for WiFi and mobile data usage.',
    'faq.content.question': 'How often do you add new content?',
    'faq.content.answer': 'We add new anime episodes and series every week. Popular seasonal anime appear within 24-48 hours of their original broadcast.',
    
    // Final CTA
    'cta.title': 'Start Your Anime Journey Today',
    'cta.subtitle': 'Join millions of anime fans who already enjoy unlimited streaming on their phones. Your favorite anime adventures are just one download away.',
    'cta.download': 'Get AniWorld APK Free',
    'cta.contact': 'Contact Support',
    'cta.remember': 'Remember to download only from our official website at aniworld.de',
    
    // Footer
    'footer.official': 'Official app from aniworld.de',
    'footer.tagline': 'Free anime streaming for everyone',
    'footer.contact': 'Contact',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de'); // German as primary

  useEffect(() => {
    // Update document lang attribute and URL path
    document.documentElement.lang = language;
    
    // Update URL path for SEO
    const currentPath = window.location.pathname;
    if (language === 'en' && !currentPath.startsWith('/en')) {
      window.history.pushState({}, '', '/en' + currentPath);
    } else if (language === 'de' && currentPath.startsWith('/en')) {
      window.history.pushState({}, '', currentPath.replace('/en', ''));
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
