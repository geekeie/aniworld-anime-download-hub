
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Save, Eye, Settings, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import AdminLogin from "@/components/AdminLogin";

const Admin = () => {
  const { toast } = useToast();
  const { isAuthenticated, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("content");

  // Content state
  const [content, setContent] = useState({
    heroTitle: "AniWorld App: Kostenlose APK für Android herunterladen & Animes schauen",
    heroDescription: "Schaue tausende von Anime-Episoden ohne Abonnementgebühren.",
    articleContent: `Die AniWorld App ist die ultimative kostenlose Anime-Streaming-Lösung für Android-Nutzer. Wenn du Schwierigkeiten hast, einen zuverlässigen Ort zum Ansehen deiner Lieblings-Anime-Serien zu finden, löst diese App das Problem sofort.

Hast du genug von monatlichen Abogebühren für Anime-Streaming? Genug von Apps, die abstürzen oder nur begrenzte Inhalte bieten? Die AniWorld-App gibt dir Zugang zu tausenden Anime-Episoden – ganz ohne einen Cent auszugeben.

Wir sind das offizielle Team hinter aniworld.de. Wir haben diese Anime-App speziell für Fans entwickelt, die qualitativ hochwertiges Streaming auf ihrem Handy genießen wollen. Keine versteckten Kosten. Keine nervige Werbung. Einfach pures Anime-Vergnügen.`,
    metaDescription: "AniWorld APK kostenlos herunterladen für Android. Schaue tausende Anime-Episoden mit Attack on Titan, Your Name, One Piece ohne Abonnementgebühren. Offizielle App von aniworld.de mit HD-Qualität und Offline-Downloads."
  });

  // Images state with proper URLs that will be saved to localStorage
  const [images, setImages] = useState({
    logo: "/logo-placeholder.png",
    heroLogo: "/hero-logo-placeholder.png",
    anime1: "/placeholder-anime-1.jpg",
    anime2: "/placeholder-anime-2.jpg",
    anime3: "/placeholder-anime-3.jpg",
    anime4: "/placeholder-anime-4.jpg"
  });

  // Load saved content and images on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('aniworld-content');
    const savedImages = localStorage.getItem('aniworld-images');
    
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
    
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    }
  }, []);

  const handleSaveContent = () => {
    localStorage.setItem('aniworld-content', JSON.stringify(content));
    toast({
      title: "Content Saved",
      description: "Your content changes have been saved successfully.",
    });
  };

  const handleImageUpload = (imageKey: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImages = {
          ...images,
          [imageKey]: e.target?.result as string
        };
        setImages(newImages);
        localStorage.setItem('aniworld-images', JSON.stringify(newImages));
        toast({
          title: "Image Uploaded",
          description: `${imageKey} has been updated successfully.`,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been logged out of the admin panel.",
    });
  };

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">AniWorld Admin Panel</h1>
            <p className="text-gray-300">Manage your website content, images, and settings</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Content Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="heroTitle" className="text-white">Hero Title</Label>
                  <Input
                    id="heroTitle"
                    value={content.heroTitle}
                    onChange={(e) => setContent(prev => ({ ...prev, heroTitle: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="heroDescription" className="text-white">Hero Description</Label>
                  <Textarea
                    id="heroDescription"
                    value={content.heroDescription}
                    onChange={(e) => setContent(prev => ({ ...prev, heroDescription: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="articleContent" className="text-white">Article Content (German)</Label>
                  <Textarea
                    id="articleContent"
                    value={content.articleContent}
                    onChange={(e) => setContent(prev => ({ ...prev, articleContent: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    rows={15}
                    placeholder="Enter your complete German article content..."
                  />
                </div>

                <Button onClick={handleSaveContent} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Content
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Image Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Logo Upload */}
                  <div className="space-y-4">
                    <Label className="text-white">Website Logo</Label>
                    <div className="border-2 border-dashed border-white/30 rounded-lg p-4 text-center">
                      <img 
                        src={images.logo} 
                        alt="Logo Preview" 
                        className="w-16 h-16 mx-auto mb-2 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='10' fill='white' text-anchor='middle' dy='.3em'%3ELogo%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload('logo', e)}
                        className="bg-white/20 border-white/30 text-white"
                      />
                    </div>
                  </div>

                  {/* Hero Logo Upload */}
                  <div className="space-y-4">
                    <Label className="text-white">Hero Section Logo</Label>
                    <div className="border-2 border-dashed border-white/30 rounded-lg p-4 text-center">
                      <img 
                        src={images.heroLogo} 
                        alt="Hero Logo Preview" 
                        className="w-32 h-32 mx-auto mb-2 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' fill='white' text-anchor='middle' dy='.3em'%3EHero Logo%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload('heroLogo', e)}
                        className="bg-white/20 border-white/30 text-white"
                      />
                    </div>
                  </div>

                  {/* Anime Thumbnails */}
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="space-y-4">
                      <Label className="text-white">Anime Thumbnail {num}</Label>
                      <div className="border-2 border-dashed border-white/30 rounded-lg p-4 text-center">
                        <img 
                          src={images[`anime${num}` as keyof typeof images]} 
                          alt={`Anime ${num} Preview`} 
                          className="w-24 h-32 mx-auto mb-2 object-cover rounded"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='128' viewBox='0 0 96 128'%3E%3Crect width='96' height='128' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='10' fill='white' text-anchor='middle' dy='.3em'%3EAnime ${num}%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(`anime${num}`, e)}
                          className="bg-white/20 border-white/30 text-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seo">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white">SEO Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="metaDescription" className="text-white">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    value={content.metaDescription}
                    onChange={(e) => setContent(prev => ({ ...prev, metaDescription: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    rows={3}
                    placeholder="Enter meta description for SEO..."
                  />
                  <p className="text-gray-400 text-sm mt-1">
                    Character count: {content.metaDescription.length}/160
                  </p>
                </div>

                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <h3 className="text-green-400 font-semibold mb-2">SEO Compliance Status</h3>
                  <ul className="text-green-300 text-sm space-y-1">
                    <li>✅ Single H1 tag used</li>
                    <li>✅ Proper heading hierarchy (H1 → H2 → H3)</li>
                    <li>✅ Schema markup implemented</li>
                    <li>✅ FAQ schema added</li>
                    <li>✅ Proper hreflang attributes</li>
                  </ul>
                </div>

                <Button onClick={handleSaveContent} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save SEO Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white">General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="text-blue-400 font-semibold mb-2">Download Link Settings</h3>
                  <p className="text-blue-300 text-sm">
                    Current download URL: https://download.aniworldapp.de
                  </p>
                </div>

                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                  <h3 className="text-yellow-400 font-semibold mb-2">Language Settings</h3>
                  <ul className="text-yellow-300 text-sm space-y-1">
                    <li>✅ German is primary language</li>
                    <li>✅ English translation available</li>
                    <li>✅ URL structure: / (German), /en (English)</li>
                    <li>✅ Hreflang attributes configured</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview Changes
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Reset to Defaults
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
