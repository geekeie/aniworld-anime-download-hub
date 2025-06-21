
import { Play, Shield, Lock, Eye, Database, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-anime-gradient rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">AniWorld</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-purple-300 transition-colors">Home</Link>
            <Link to="/privacy" className="text-purple-300 font-semibold">Privacy</Link>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-anime-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy <span className="bg-anime-gradient bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl text-gray-300">
                Your privacy and data security are our top priorities at AniWorld
              </p>
              <p className="text-sm text-gray-400 mt-4">Last updated: December 2024</p>
            </div>

            {/* Privacy Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="bg-white/10 border-white/20 backdrop-blur-md text-center">
                <CardContent className="p-6">
                  <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Data Protection</h3>
                  <p className="text-gray-300 text-sm">We use encryption to protect your data</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-md text-center">
                <CardContent className="p-6">
                  <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">No Tracking</h3>
                  <p className="text-gray-300 text-sm">We don't track your viewing habits</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-md text-center">
                <CardContent className="p-6">
                  <Database className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Minimal Data</h3>
                  <p className="text-gray-300 text-sm">We collect only what's necessary</p>
                </CardContent>
              </Card>
            </div>

            {/* Privacy Policy Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <Card className="bg-white/5 border-white/10 backdrop-blur-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                    <li>Device information (model, OS version, screen resolution)</li>
                    <li>App usage statistics (crash reports, performance data)</li>
                    <li>IP address for content delivery optimization</li>
                    <li>Network information for streaming quality adjustment</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Optional feedback and support requests</li>
                    <li>App preferences and settings</li>
                    <li>Downloaded content preferences</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
                  
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-white">App Functionality:</strong> To provide core streaming features and content delivery</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-white">Performance Optimization:</strong> To improve app performance and fix bugs</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-white">Content Recommendations:</strong> To suggest relevant anime based on your preferences</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong className="text-white">Customer Support:</strong> To respond to your questions and provide assistance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
                  
                  <p className="text-gray-300 mb-4">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Secure servers with regular security updates</li>
                    <li>Limited access to personal data by authorized personnel only</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Secure data storage with backup and recovery systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Information Sharing</h2>
                  
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6">
                    <p className="text-red-200 font-semibold">
                      We DO NOT sell, trade, or rent your personal information to third parties.
                    </p>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    We may share information only in these limited circumstances:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>In connection with a business merger or acquisition (with notification)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
                  
                  <p className="text-gray-300 mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-white font-semibold">Access:</span>
                      </div>
                      <p className="text-gray-300 text-sm ml-4">Request access to your personal data</p>
                      
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-white font-semibold">Correction:</span>
                      </div>
                      <p className="text-gray-300 text-sm ml-4">Request correction of inaccurate data</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-white font-semibold">Deletion:</span>
                      </div>
                      <p className="text-gray-300 text-sm ml-4">Request deletion of your data</p>
                      
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-white font-semibold">Portability:</span>
                      </div>
                      <p className="text-gray-300 text-sm ml-4">Request data in portable format</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking</h2>
                  
                  <p className="text-gray-300 mb-4">
                    The AniWorld app uses minimal tracking technologies:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Essential cookies for app functionality</li>
                    <li>Performance cookies to improve user experience</li>
                    <li>No advertising or marketing cookies</li>
                    <li>No third-party tracking scripts</li>
                  </ul>
                  
                  <p className="text-gray-300 mt-4">
                    You can control cookie preferences in your device settings.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                  
                  <p className="text-gray-300 mb-6">
                    If you have questions about this Privacy Policy or your personal data, please contact us:
                  </p>
                  
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span><strong className="text-white">Team:</strong> AniWorld Privacy Team</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Database className="w-5 h-5 text-blue-400" />
                      <span><strong className="text-white">Email:</strong> privacy@aniworld.de</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span><strong className="text-white">Website:</strong> aniworld.de</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mt-6">
                    <p className="text-blue-200 text-sm">
                      <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 72 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/privacy" className="text-purple-300 font-semibold">Privacy Policy</Link>
              <a href="mailto:contact@aniworld.de" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© 2024 AniWorld. Official app from aniworld.de</p>
              <p className="mt-1">Your privacy is our priority</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
