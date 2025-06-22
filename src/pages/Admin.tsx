
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Save, Eye, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("content");

  // Content state
  const [content, setContent] = useState({
    heroTitle: "AniWorld App: Kostenlose APK für Android herunterladen & Animes schauen",
    heroDescription: "Schaue tausende von Anime-Episoden ohne Abonnementgebühren.",
    articleContent: "",
    metaDescription: "Download AniWorld APK kostenlos für Android..."
  });

  // Images state
  const [images, setImages] = useState({
    logo: "/logo-placeholder.png",
    heroLogo: "/hero-logo-placeholder.png",
    anime1: "/placeholder-anime-1.jpg",
    anime2: "/placeholder-anime-2.jpg",
    anime3: "/placeholder-anime-3.jpg",
    anime4: "/placeholder-anime-4.jpg"
  });

  const handleSaveContent = () => {
    // In a real app, this would save to a backend
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
        setImages(prev => ({
          ...prev,
          [imageKey]: e.target?.result as string
        }));
        toast({
          title: "Image Uploaded",
          description: `${imageKey} has been updated successfully.`,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">AniWorld Admin Panel</h1>
          <p className="text-gray-300">Manage your website content, images, and settings</p>
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
                  <Label htmlFor="articleContent" className="text-white">Article Content</Label>
                  <Textarea
                    id="articleContent"
                    value={content.articleContent}
                    onChange={(e) => setContent(prev => ({ ...prev, articleContent: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    rows={10}
                    placeholder="Enter your article content in German..."
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
