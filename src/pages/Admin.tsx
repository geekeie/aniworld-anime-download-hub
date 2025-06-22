
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Save, Eye, Settings, LogOut, Edit, FileText, Download, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import AdminLogin from "@/components/AdminLogin";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Admin = () => {
  const { toast } = useToast();
  const { isAuthenticated, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("content");

  // Content state
  const [content, setContent] = useState({
    heroTitle: "AniWorld App: Kostenlose APK für Android herunterladen & Animes schauen",
    heroDescription: "Schaue tausende von Anime-Episoden ohne Abonnementgebühren.",
    articleContent: `Die AniWorld App ist die ultimative kostenlose Anime-Streaming-Lösung für Android-Nutzer...`,
    metaDescription: "AniWorld APK kostenlos herunterladen für Android. Schaue tausende Anime-Episoden mit Attack on Titan, Your Name, One Piece ohne Abonnementgebühren. Offizielle App von aniworld.de mit HD-Qualität und Offline-Downloads.",
    downloadButtonText: "AniWorld APK herunterladen",
    downloadUrl: "https://download.aniworldapp.de"
  });

  // Ad placement state
  const [adSettings, setAdSettings] = useState({
    beforeDownloadAd: "",
    afterDownloadAd: "",
    sidebarAd: "",
    headerAd: "",
    footerAd: "",
    articleAd: ""
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

  // Rich text editor modules
  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  // Load saved content, images, and ads on component mount
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

  const handleSaveContent = () => {
    localStorage.setItem('aniworld-content', JSON.stringify(content));
    toast({
      title: "Content Saved",
      description: "Your content changes have been saved successfully.",
    });
  };

  const handleSaveAds = () => {
    localStorage.setItem('aniworld-ads', JSON.stringify(adSettings));
    toast({
      title: "Ad Settings Saved",
      description: "Your advertisement placements have been saved successfully.",
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
            <p className="text-gray-300">Manage your website content, images, downloads, and advertisements</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="download">Download</TabsTrigger>
            <TabsTrigger value="ads">Ads</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Edit className="w-5 h-5" />
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
                  <Label className="text-white mb-4 block">Article Content (German) - Rich Text Editor</Label>
                  <div className="bg-white rounded-lg">
                    <ReactQuill
                      theme="snow"
                      value={content.articleContent}
                      onChange={(value) => setContent(prev => ({ ...prev, articleContent: value }))}
                      modules={quillModules}
                      style={{ height: '400px', marginBottom: '50px' }}
                    />
                  </div>
                </div>

                <Button onClick={handleSaveContent} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Content
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="download">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Button Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="downloadUrl" className="text-white">Download URL</Label>
                  <Input
                    id="downloadUrl"
                    value={content.downloadUrl}
                    onChange={(e) => setContent(prev => ({ ...prev, downloadUrl: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    placeholder="https://download.aniworldapp.de"
                  />
                </div>

                <div>
                  <Label htmlFor="downloadButtonText" className="text-white">Download Button Text</Label>
                  <Input
                    id="downloadButtonText"
                    value={content.downloadButtonText}
                    onChange={(e) => setContent(prev => ({ ...prev, downloadButtonText: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    placeholder="AniWorld APK herunterladen"
                  />
                </div>

                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                  <h3 className="text-blue-400 font-semibold mb-2">Download Button Preview</h3>
                  <Button className="bg-anime-gradient hover:opacity-90 text-white px-8 py-3 text-lg">
                    <Download className="w-5 h-5 mr-2" />
                    {content.downloadButtonText}
                  </Button>
                </div>

                <Button onClick={handleSaveContent} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Download Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ads">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Advertisement Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="beforeDownloadAd" className="text-white">Ad Before Download Button</Label>
                  <Textarea
                    id="beforeDownloadAd"
                    value={adSettings.beforeDownloadAd}
                    onChange={(e) => setAdSettings(prev => ({ ...prev, beforeDownloadAd: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    rows={4}
                    placeholder="Enter HTML/JavaScript ad code for placement before download button..."
                  />
                </div>

                <div>
                  <Label htmlFor="afterDownloadAd" className="text-white">Ad After Download Button</Label>
                  <Textarea
                    id="afterDownloadAd"
                    value={adSettings.afterDownloadAd}
                    onChange={(e) => setAdSettings(prev => ({ ...prev, afterDownloadAd: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    rows={4}
                    placeholder="Enter HTML/JavaScript ad code for placement after download button..."
                  />
                </div>

                <div>
                  <Label htmlFor="sidebarAd" className="text-white">Sidebar Advertisement</Label>
                  <Textarea
                    id="sidebarAd"
                    value={adSettings.sidebarAd}
                    onChange={(e) => setAdSettings(prev => ({ ...prev, sidebarAd: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    rows={4}
                    placeholder="Enter HTML/JavaScript ad code for sidebar placement..."
                  />
                </div>

                <div>
                  <Label htmlFor="headerAd" className="text-white">Header Advertisement</Label>
                  <Textarea
                    id="headerAd"
                    value={adSettings.headerAd}
                    onChange={(e) => setAdSettings(prev => ({ ...prev, headerAd: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    rows={3}
                    placeholder="Enter HTML/JavaScript ad code for header placement..."
                  />
                </div>

                <div>
                  <Label htmlFor="articleAd" className="text-white">In-Article Advertisement</Label>
                  <Textarea
                    id="articleAd"
                    value={adSettings.articleAd}
                    onChange={(e) => setAdSettings(prev => ({ ...prev, articleAd: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    rows={4}
                    placeholder="Enter HTML/JavaScript ad code for placement within article content..."
                  />
                </div>

                <div>
                  <Label htmlFor="footerAd" className="text-white">Footer Advertisement</Label>
                  <Textarea
                    id="footerAd"
                    value={adSettings.footerAd}
                    onChange={(e) => setAdSettings(prev => ({ ...prev, footerAd: e.target.value }))}
                    className="bg-white/20 border-white/30 text-white"
                    rows={3}
                    placeholder="Enter HTML/JavaScript ad code for footer placement..."
                  />
                </div>

                <Button onClick={handleSaveAds} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Ad Settings
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
                <CardTitle className="text-white flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  SEO Settings
                </CardTitle>
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
                    <li>✅ Admin panel hidden from indexing</li>
                  </ul>
                </div>

                <Button onClick={handleSaveContent} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save SEO Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
