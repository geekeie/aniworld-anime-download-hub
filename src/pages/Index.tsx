import { useEffect, useState } from "react";
import { Download, Play, Star, Users, Globe, Shield, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

const Index = () => {
  const { language, t } = useLanguage();
  const [content, setContent] = useState({
    heroTitle: "AniWorld App: Kostenlose APK für Android herunterladen & Animes schauen",
    heroDescription: "Schaue tausende von Anime-Episoden ohne Abonnementgebühren.",
    articleContent: "",
    downloadButtonText: "AniWorld APK herunterladen",
    downloadUrl: "https://download.aniworldapp.de"
  });

  const [images, setImages] = useState({
    logo: "/logo-placeholder.png",
    heroLogo: "/hero-logo-placeholder.png",
    anime1: "/placeholder-anime-1.jpg",
    anime2: "/placeholder-anime-2.jpg",
    anime3: "/placeholder-anime-3.jpg",
    anime4: "/placeholder-anime-4.jpg"
  });

  const [adSettings, setAdSettings] = useState({
    beforeDownloadAd: "",
    afterDownloadAd: "",
    sidebarAd: "",
    headerAd: "",
    articleAd: "",
    footerAd: ""
  });

  // Load saved content, images, and ads
  useEffect(() => {
    const savedContent = localStorage.getItem('aniworld-content');
    const savedImages = localStorage.getItem('aniworld-images');
    const savedAds = localStorage.getItem('aniworld-ads');
    
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
    
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    }

    if (savedAds) {
      setAdSettings(JSON.parse(savedAds));
    }
  }, []);

  const features = [
    { icon: Play, title: t("features.free.title"), description: t("features.free.description") },
    { icon: Smartphone, title: t("features.android.title"), description: t("features.android.description") },
    { icon: Star, title: t("features.quality.title"), description: t("features.quality.description") },
    { icon: Users, title: t("features.community.title"), description: t("features.community.description") },
    { icon: Globe, title: t("features.multilingual.title"), description: t("features.multilingual.description") },
    { icon: Shield, title: t("features.secure.title"), description: t("features.secure.description") },
    { icon: Download, title: t("features.offline.title"), description: t("features.offline.description") },
    { icon: Zap, title: t("features.fast.title"), description: t("features.fast.description") }
  ];

  const faqData = [
    { question: t("faq.cost.question"), answer: t("faq.cost.answer") },
    { question: t("faq.safe.question"), answer: t("faq.safe.answer") },
    { question: t("faq.install.question"), answer: t("faq.install.answer") },
    { question: t("faq.content.question"), answer: t("faq.content.answer") },
    { question: t("faq.languages.question"), answer: t("faq.languages.answer") },
    { question: t("faq.updates.question"), answer: t("faq.updates.answer") }
  ];

  const animeList = [
    { title: "Attack on Titan", genre: "Action, Drama", episodes: "87", image: images.anime1 },
    { title: "Your Name", genre: "Romance, Drama", episodes: "Film", image: images.anime2 },
    { title: "One Piece", genre: "Adventure, Comedy", episodes: "1000+", image: images.anime3 },
    { title: "Death Note", genre: "Thriller, Mystery", episodes: "37", image: images.anime4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Ad */}
      {adSettings.headerAd && (
        <div className="w-full py-2 text-center bg-black/20" dangerouslySetInnerHTML={{ __html: adSettings.headerAd }} />
      )}

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={images.logo} alt="AniWorld Logo" className="w-12 h-12 object-contain" />
          <h2 className="text-2xl font-bold text-white">AniWorld</h2>
        </div>
        <LanguageToggle />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img src={images.heroLogo} alt="AniWorld App" className="w-32 h-32 mx-auto mb-6 object-contain" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {content.heroTitle}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {content.heroDescription}
          </p>
        </div>

        {/* Before Download Ad */}
        {adSettings.beforeDownloadAd && (
          <div className="mb-8" dangerouslySetInnerHTML={{ __html: adSettings.beforeDownloadAd }} />
        )}

        <a href={content.downloadUrl} target="_blank" rel="noopener noreferrer">
          <Button className="bg-anime-gradient hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Download className="w-6 h-6 mr-3" />
            {content.downloadButtonText}
          </Button>
        </a>

        {/* After Download Ad */}
        {adSettings.afterDownloadAd && (
          <div className="mt-8" dangerouslySetInnerHTML={{ __html: adSettings.afterDownloadAd }} />
        )}
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {t("features.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-anime-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Anime Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {t("anime.popular")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animeList.map((anime, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={anime.image} 
                  alt={anime.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{anime.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{anime.genre}</p>
                <p className="text-anime-primary text-sm">{anime.episodes} Episodes</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8 container mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="flex-1">
          {/* Article Section */}
          <article className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8 border border-white/20">
            {content.articleContent ? (
              <div 
                className="prose prose-invert max-w-none text-white"
                dangerouslySetInnerHTML={{ __html: content.articleContent }}
              />
            ) : (
              <div className="text-white space-y-6">
                <h2 className="text-3xl font-bold mb-6">AniWorld App: Kostenlose APK für Android herunterladen & Animes schauen</h2>
                <p>Die AniWorld App ist die ultimative kostenlose Anime-Streaming-Lösung für Android-Nutzer. Wenn du Schwierigkeiten hast, einen zuverlässigen Ort zum Ansehen deiner Lieblings-Anime-Serien zu finden, löst diese App das Problem sofort.</p>
                <p>Hast du genug von monatlichen Abogebühren für Anime-Streaming? Genug von Apps, die abstürzen oder nur begrenzte Inhalte bieten? Die AniWorld-App gibt dir Zugang zu tausenden Anime-Episoden – ganz ohne einen Cent auszugeben.</p>
                <p>Wir sind das offizielle Team hinter aniworld.de. Wir haben diese Anime-App speziell für Fans entwickelt, die qualitativ hochwertiges Streaming auf ihrem Handy genießen wollen. Keine versteckten Kosten. Keine nervige Werbung. Einfach pures Anime-Vergnügen.</p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">Was macht die AniWorld App besonders?</h3>
                <p>Die AniWorld Anime App hebt sich in vielerlei Hinsicht von anderen Streaming-Apps ab. Erstens ist sie komplett kostenlos nutzbar. Du musst kein Konto erstellen und keine Kreditkartendaten angeben.</p>
                <p>Zweitens enthält unsere Anime-Streaming-App jede Art von Anime-Inhalten, die du dir vorstellen kannst. Actionreiche Serien wie Attack on Titan, romantische Komödien wie Kaguya-sama, Horror-Anime wie Tokyo Ghoul und Slice-of-Life-Shows wie Your Name. Von klassischen Serien bis hin zu brandneuen Veröffentlichungen – alles an einem Ort.</p>
                <p>Drittens bietet die App Inhalte für alle Altersgruppen. Kinder genießen Pokemon und Doraemon. Teenager lieben Naruto und One Piece. Erwachsene können sich an reiferen Serien wie Death Note und Cowboy Bebop erfreuen.</p>
                <p>Die Benutzeroberfläche ist sauber und einfach. Unsere offizielle Website aniworld.de wurde speziell für deutsche Nutzer entworfen, aber die App unterstützt sowohl Deutsch als auch Englisch. Dein nächster Anime ist nur wenige Taps entfernt.</p>
              </div>
            )}
            
            {/* In-Article Ad */}
            {adSettings.articleAd && (
              <div className="my-8 text-center" dangerouslySetInnerHTML={{ __html: adSettings.articleAd }} />
            )}
          </article>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">{t("faq.title")}</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        {adSettings.sidebarAd && (
          <div className="lg:w-80">
            <div className="sticky top-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <div dangerouslySetInnerHTML={{ __html: adSettings.sidebarAd }} />
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Footer Ad */}
      {adSettings.footerAd && (
        <div className="w-full py-4 text-center bg-black/20" dangerouslySetInnerHTML={{ __html: adSettings.footerAd }} />
      )}

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md py-8 border-t border-white/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">&copy; 2024 AniWorld. {t("footer.rights")}</p>
        </div>
      </footer>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AniWorld App",
            "operatingSystem": "Android",
            "applicationCategory": "Entertainment",
            "description": content.heroDescription,
            "url": "https://aniworldapp.de",
            "downloadUrl": content.downloadUrl,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default Index;
