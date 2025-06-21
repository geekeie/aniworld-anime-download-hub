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
  const { t } = useLanguage();

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
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      genre: t('genre.action')
    },
    {
      title: t('anime.your_name'),
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      genre: t('genre.romance')
    },
    {
      title: t('anime.death_note'),
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      genre: t('genre.thriller')
    },
    {
      title: t('anime.one_piece'),
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      genre: t('genre.adventure')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-anime-gradient rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">AniWorld</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-purple-300 transition-colors">{t('nav.home')}</Link>
            <Link to="/privacy" className="text-white hover:text-purple-300 transition-colors">{t('nav.privacy')}</Link>
            <LanguageToggle />
            <Button className="bg-anime-gradient hover:opacity-90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              <Download className="w-4 h-4 mr-2" />
              {t('button.download')}
            </Button>
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
              <LanguageToggle />
              <Button className="bg-anime-gradient hover:opacity-90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 w-full">
                <Download className="w-4 h-4 mr-2" />
                {t('button.download')}
              </Button>
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
            <Button size="lg" className="bg-anime-gradient hover:opacity-90 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
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
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={anime.image} 
                    alt={anime.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
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

      {/* Full Article Content */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none">
              <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t('article.title')}
                </h1>
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

                <h2 className="text-3xl font-bold text-white mb-6">What Makes AniWorld App Special</h2>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  The AniWorld anime app stands out from other streaming apps in several ways. First, it's completely free to use. You don't need to create an account or provide credit card details.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Second, our anime streaming app contains every type of anime content you can imagine. Action-packed series like Attack on Titan, romantic comedies like Kaguya-sama, horror anime like Tokyo Ghoul, and slice-of-life shows like Your Name. From classic series to brand new seasonal releases, everything is available in one place.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Third, the app includes content for all age groups. Kids can enjoy Pokemon and Doraemon. Teenagers love Naruto and One Piece. Adults can watch mature content like Death Note and Cowboy Bebop.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  The interface is clean and simple. Our official website aniworld.de was designed specifically for German users, but the app serves both English and German speaking audiences. Finding your next anime to watch takes just a few taps.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">Key Features of AniWorld Android App</h2>

                <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Anime Content Library</h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our free anime app hosts every type of anime series you can think of. Popular shounen anime like Dragon Ball Z, One Piece, and Bleach. Romantic anime series including Your Name, A Silent Voice, and Toradora. Horror and thriller anime like Another and Parasyte. Comedy series such as Gintama and KonoSuba.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  We also feature different anime formats. Full TV series with 12-24 episodes per season. Long-running shows with hundreds of episodes. Anime movies from Studio Ghibli and other famous studios. OVAs and special episodes that are hard to find elsewhere.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Multiple Video Quality Options</h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Watch anime in the quality that suits your device and internet speed. Our app offers 360p for basic viewing on slower connections. 720p HD for crisp, clear picture quality. 1080p Full HD for the ultimate viewing experience on larger screens.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  The app automatically detects your internet speed and suggests the best quality. You can also manually select your preferred resolution for each episode.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Advanced Pro Player Features</h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  The built-in video player comes with professional-grade features. Skip opening and ending themes with one tap. Adjust playback speed from 0.5x to 2x for your preference. Enable subtitle timing adjustment if sync issues occur.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  The player supports gesture controls. Swipe left or right to skip 10 seconds. Swipe up or down to adjust volume and brightness. Double-tap to pause or play. These features make watching anime more comfortable and convenient.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Download Episodes for Offline Viewing</h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Going somewhere without internet? Download up to 50 episodes directly to your phone. Perfect for flights, trips, or areas with poor network coverage.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Language Support for Global Audience</h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  The anime app supports both English and German content primarily. Since our official website aniworld.de serves the German market, we understand what German anime fans want. However, the app interface works perfectly in English too.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Subtitles are available in multiple languages including English, German, Spanish, French, Italian, and Portuguese. You can choose between original Japanese audio with subtitles or dubbed versions in English and German where available.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">Optimized for All Android Devices</h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Whether you have a Samsung Galaxy, Xiaomi Redmi, OnePlus, Google Pixel, or any other Android phone, the app runs smoothly. It's specially optimized for devices with 2GB RAM or more, but works fine on older phones too.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  The app adapts to your screen size automatically. Small phone screens get a compact layout. Tablet users enjoy a wider interface with more content visible at once.
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

            <Button size="lg" className="bg-anime-gradient hover:opacity-90 text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl">
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
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl">
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
