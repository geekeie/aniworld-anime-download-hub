
import { Download, Play, Shield, Smartphone, Globe, Star, Zap, Heart, Mail, Image, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const features = [
    {
      icon: <Play className="w-8 h-8" />,
      title: t('features.streaming.title'),
      description: t('features.streaming.desc')
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: t('features.download.title'),
      description: t('features.download.desc')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('features.safe.title'),
      description: t('features.safe.desc')
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t('features.devices.title'),
      description: t('features.devices.desc')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('features.language.title'),
      description: t('features.language.desc')
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('features.player.title'),
      description: t('features.player.desc')
    }
  ];

  const stats = [
    { number: "10,000+", label: t('hero.stats.episodes') },
    { number: "500+", label: t('hero.stats.series') },
    { number: "1M+", label: t('hero.stats.users') },
    { number: "4.8★", label: t('hero.stats.rating') }
  ];

  const animeImages = [
    {
      title: t('anime.attack_on_titan'),
      image: "/placeholder-anime-1.jpg", // Placeholder for admin upload
      genre: t('genre.action')
    },
    {
      title: t('anime.your_name'),
      image: "/placeholder-anime-2.jpg", // Placeholder for admin upload
      genre: t('genre.romance')
    },
    {
      title: t('anime.death_note'),
      image: "/placeholder-anime-3.jpg", // Placeholder for admin upload
      genre: t('genre.thriller')
    },
    {
      title: t('anime.one_piece'),
      image: "/placeholder-anime-4.jpg", // Placeholder for admin upload
      genre: t('genre.adventure')
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t('faq.cost.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.cost.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('faq.safe.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('faq.safe.answer')
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-anime-gradient rounded-xl flex items-center justify-center">
              <img 
                src="/logo-placeholder.png" 
                alt="AniWorld Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Play className="w-6 h-6 text-white hidden" />
            </div>
            <span className="text-2xl font-bold text-white">AniWorld</span>
          </div>
          
          {/* Desktop Navigation - Removed Download Button */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-purple-300 transition-colors">{t('nav.home')}</Link>
            <Link to="/privacy" className="text-white hover:text-purple-300 transition-colors">{t('nav.privacy')}</Link>
            <Link to="/admin" className="text-white hover:text-purple-300 transition-colors">{t('nav.admin')}</Link>
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link 
                to="/" 
                className="text-white hover:text-purple-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/privacy" 
                className="text-white hover:text-purple-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.privacy')}
              </Link>
              <Link 
                to="/admin" 
                className="text-white hover:text-purple-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.admin')}
              </Link>
              <LanguageToggle />
            </nav>
          </div>
        )}
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-anime-gradient opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-bounce-slow">
            {t('hero.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-in-left">
            {t('hero.description')}
          </p>
          
          {/* Hero Section Logo */}
          <div className="mb-8">
            <img 
              src="/hero-logo-placeholder.png" 
              alt="AniWorld App Preview" 
              className="mx-auto w-64 h-64 object-contain"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dy='.3em'%3EApp Preview%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-anime-gradient hover:opacity-90 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
              onClick={() => window.open('https://download.aniworldapp.de', '_blank')}
            >
              <Download className="w-6 h-6 mr-3" />
              {t('hero.download.button')}
            </Button>
            <Button size="lg" className="bg-white/10 border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
              <Mail className="w-6 h-6 mr-3" />
              {t('hero.contact.button')}
            </Button>
          </div>

          <p className="text-gray-400 text-sm">
            {t('hero.features')}
          </p>
        </div>
      </section>

      {/* Images Gallery Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('anime.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('anime.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {animeImages.map((anime, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-[3/4] overflow-hidden bg-gray-700 flex items-center justify-center">
                  <img 
                    src={anime.image} 
                    alt={anime.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600' viewBox='0 0 400 600'%3E%3Crect width='400' height='600' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='white' text-anchor='middle' dy='.3em'%3E" + anime.title + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{anime.title}</h3>
                  <Badge className="bg-anime-gradient text-white text-xs">{anime.genre}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-anime-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Article Content - Fixed SEO and Language */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none">
              <header className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t('article.title')}
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t('article.subtitle')}
                </p>
              </header>

              <div className="space-y-8">
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {t('article.intro')}
                  </p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('article.problem')}
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('article.official')}
                </p>

                <h3 className="text-3xl font-bold text-white mb-6">{t('article.special.title')}</h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('article.special.content1')}
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('article.special.content2')}
                </p>

                <h3 className="text-3xl font-bold text-white mb-6">{t('article.features.title')}</h3>

                <h4 className="text-2xl font-bold text-white mb-4">{t('article.library.title')}</h4>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('article.library.content')}
                </p>

                <h4 className="text-2xl font-bold text-white mb-4">{t('article.quality.title')}</h4>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('article.quality.content')}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              {t('download.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              {t('download.subtitle')}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-anime-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">1</div>
                <h3 className="text-lg font-bold text-white mb-2">{t('download.step1.title')}</h3>
                <p className="text-gray-400 text-sm">{t('download.step1.desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-anime-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">2</div>
                <h3 className="text-lg font-bold text-white mb-2">{t('download.step2.title')}</h3>
                <p className="text-gray-400 text-sm">{t('download.step2.desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-anime-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">3</div>
                <h3 className="text-lg font-bold text-white mb-2">{t('download.step3.title')}</h3>
                <p className="text-gray-400 text-sm">{t('download.step3.desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-anime-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">4</div>
                <h3 className="text-lg font-bold text-white mb-2">{t('download.step4.title')}</h3>
                <p className="text-gray-400 text-sm">{t('download.step4.desc')}</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-anime-gradient hover:opacity-90 text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
              onClick={() => window.open('https://download.aniworldapp.de', '_blank')}
            >
              <Download className="w-8 h-8 mr-4" />
              {t('download.button.main')}
            </Button>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('system.title')}</h2>
            <Card className="bg-white/10 border-white/20 backdrop-blur-md">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{t('system.minimum')}</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Android 5.0 oder neuer</li>
                      <li>• 2GB RAM minimum</li>
                      <li>• 100MB freier Speicher</li>
                      <li>• Internetverbindung</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{t('system.recommended')}</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Android 7.0 oder höher</li>
                      <li>• 4GB RAM für beste Leistung</li>
                      <li>• 5 Mbps für HD-Streaming</li>
                      <li>• WiFi für Downloads</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              {t('faq.title')}
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{t('faq.cost.question')}</h3>
                  <p className="text-gray-300">{t('faq.cost.answer')}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{t('faq.safe.question')}</h3>
                  <p className="text-gray-300">{t('faq.safe.answer')}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{t('faq.quality.question')}</h3>
                  <p className="text-gray-300">{t('faq.quality.answer')}</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{t('faq.content.question')}</h3>
                  <p className="text-gray-300">{t('faq.content.answer')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-anime-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
              onClick={() => window.open('https://download.aniworldapp.de', '_blank')}
            >
              <Download className="w-8 h-8 mr-4" />
              {t('cta.download')}
            </Button>
            <Button size="lg" className="bg-white/20 border border-white/30 text-white hover:bg-white/30 font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105">
              <Mail className="w-8 h-8 mr-4" />
              {t('cta.contact')}
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-6">
            {t('cta.remember')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-anime-gradient rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AniWorld</span>
            </div>
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">{t('nav.privacy')}</Link>
              <a href="mailto:contact@aniworld.de" className="text-gray-400 hover:text-white transition-colors">{t('footer.contact')}</a>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© 2024 AniWorld. {t('footer.official')}</p>
              <p className="mt-1">{t('footer.tagline')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
