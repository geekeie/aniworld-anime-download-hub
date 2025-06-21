
import { Download, Play, Shield, Smartphone, Globe, Star, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const features = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "Unlimited Streaming",
      description: "Watch thousands of anime episodes without any subscription fees"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Offline Downloads",
      description: "Download up to 50 episodes for offline viewing anywhere"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Safe & Secure",
      description: "No malware, no viruses. Official app from aniworld.de team"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "All Android Devices",
      description: "Optimized for phones and tablets with Android 5.0+"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Language",
      description: "English and German support with multiple subtitle options"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Pro Player",
      description: "Advanced video player with gesture controls and quality options"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Anime Episodes" },
    { number: "500+", label: "Anime Series" },
    { number: "1M+", label: "Happy Users" },
    { number: "4.8★", label: "User Rating" }
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
          <Button className="bg-anime-gradient hover:opacity-90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
            <Download className="w-4 h-4 mr-2" />
            Download APK
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-anime-gradient opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-bounce-slow">
            Official from aniworld.de
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Download Free
            <span className="bg-anime-gradient bg-clip-text text-transparent block">
              Anime Streaming
            </span>
            App for Android
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-in-left">
            Watch thousands of anime episodes without subscription fees. From Attack on Titan to Your Name, 
            enjoy unlimited streaming with our premium app experience.
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-anime-gradient hover:opacity-90 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
              <Download className="w-6 h-6 mr-3" />
              Download AniWorld APK
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
              <Play className="w-6 h-6 mr-3" />
              Watch Preview
            </Button>
          </div>

          <p className="text-gray-400 text-sm">
            ✅ No Registration Required • ✅ No Monthly Fees • ✅ 100% Free Forever
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Makes AniWorld <span className="bg-anime-gradient bg-clip-text text-transparent">Special</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The ultimate free anime streaming solution designed specifically for Android users who want quality without compromise.
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

      {/* Article Content */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-8">AniWorld App: Your Gateway to Unlimited Anime</h2>
              
              <div className="bg-white/10 rounded-2xl p-8 mb-8 border border-white/20">
                <p className="text-gray-200 text-lg leading-relaxed mb-0">
                  AniWorld App is the ultimate free anime streaming solution for Android users. If you're struggling to find a reliable place to watch your favorite anime shows, this app solves that problem instantly.
                </p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Tired of paying monthly fees for anime streaming? Fed up with apps that crash or have limited content? The AniWorld application gives you access to thousands of anime episodes without spending a single penny.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We are the official team behind aniworld.de. We created this anime app specifically for fans who want quality streaming on their phones. No hidden costs. No annoying ads. Just pure anime entertainment.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">Comprehensive Anime Content Library</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our free anime app hosts every type of anime series you can think of. Popular shounen anime like Dragon Ball Z, One Piece, and Bleach. Romantic anime series including Your Name, A Silent Voice, and Toradora. Horror and thriller anime like Another and Parasyte. Comedy series such as Gintama and KonoSuba.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We also feature different anime formats. Full TV series with 12-24 episodes per season. Long-running shows with hundreds of episodes. Anime movies from Studio Ghibli and other famous studios. OVAs and special episodes that are hard to find elsewhere.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">Multiple Video Quality Options</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Watch anime in the quality that suits your device and internet speed. Our app offers 360p for basic viewing on slower connections. 720p HD for crisp, clear picture quality. 1080p Full HD for the ultimate viewing experience on larger screens.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The app automatically detects your internet speed and suggests the best quality. You can also manually select your preferred resolution for each episode.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">Advanced Pro Player Features</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The built-in video player comes with professional-grade features. Skip opening and ending themes with one tap. Adjust playback speed from 0.5x to 2x for your preference. Enable subtitle timing adjustment if sync issues occur.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The player supports gesture controls. Swipe left or right to skip 10 seconds. Swipe up or down to adjust volume and brightness. Double-tap to pause or play. These features make watching anime more comfortable and convenient.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">Download Episodes for Offline Viewing</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Going somewhere without internet? Download up to 50 episodes directly to your phone. Perfect for flights, trips, or areas with poor network coverage.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">Language Support for Global Audience</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The anime app supports both English and German content primarily. Since our official website aniworld.de serves the German market, we understand what German anime fans want. However, the app interface works perfectly in English too.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Subtitles are available in multiple languages including English, German, Spanish, French, Italian, and Portuguese. You can choose between original Japanese audio with subtitles or dubbed versions in English and German where available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              How to Download <span className="bg-anime-gradient bg-clip-text text-transparent">AniWorld APK</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Getting the AniWorld APK is simple. Follow these easy steps to start watching anime instantly.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-anime-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Enable Installation</h3>
                <p className="text-gray-400 text-sm">Allow "Unknown Sources" in your phone's security settings</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-anime-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Download APK</h3>
                <p className="text-gray-400 text-sm">Visit aniworld.de and tap the download button</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-anime-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Install App</h3>
                <p className="text-gray-400 text-sm">Tap the APK file and follow installation prompts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-anime-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Start Watching</h3>
                <p className="text-gray-400 text-sm">Open the app and enjoy unlimited anime streaming</p>
              </div>
            </div>

            <Button size="lg" className="bg-anime-gradient hover:opacity-90 text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl">
              <Download className="w-8 h-8 mr-4" />
              Download AniWorld APK Now
            </Button>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">System Requirements</h2>
            <Card className="bg-white/10 border-white/20 backdrop-blur-md">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Minimum Requirements</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Android 5.0 or newer</li>
                      <li>• 2GB RAM minimum</li>
                      <li>• 100MB free storage</li>
                      <li>• Internet connection</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Recommended</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Android 7.0 or higher</li>
                      <li>• 4GB RAM for best performance</li>
                      <li>• 5 Mbps for HD streaming</li>
                      <li>• WiFi for downloads</li>
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
              Frequently Asked <span className="bg-anime-gradient bg-clip-text text-transparent">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Does the app cost money?</h3>
                  <p className="text-gray-300">No, the AniWorld app is completely free. No hidden charges or in-app purchases.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Is AniWorld App Safe to Use?</h3>
                  <p className="text-gray-300">Yes, our anime streaming app is completely safe. We are the official developers from aniworld.de. The APK file contains no viruses or malware. Always download only from aniworld.de.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">What video qualities are available?</h3>
                  <p className="text-gray-300">The app offers 360p, 720p, and 1080p video quality options. You can set different quality preferences for WiFi and mobile data usage.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">How often do you add new content?</h3>
                  <p className="text-gray-300">We add new anime episodes and series every week. Popular seasonal anime appear within 24-48 hours of their original broadcast.</p>
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
            Start Your Anime Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join millions of anime fans who already enjoy unlimited streaming on their phones. 
            Your favorite anime adventures are just one download away.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl">
            <Download className="w-8 h-8 mr-4" />
            Get AniWorld APK Free
          </Button>
          <p className="text-white/80 text-sm mt-6">
            Remember to download only from our official website at aniworld.de
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
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© 2024 AniWorld. Official app from aniworld.de</p>
              <p className="mt-1">Free anime streaming for everyone</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
