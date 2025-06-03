
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, TrendingUp, ArrowRight, CheckCircle, Cpu, Database, Gauge, Play, Sparkles, BarChart3, Clock, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-gradient-to-r from-emerald-200/40 to-blue-200/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
        <div className="grid-pattern-light absolute inset-0 opacity-20"></div>
      </div>
      
      <div className="modern-container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            {/* Enhanced Trust Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/90 border border-blue-200/60 mb-10 backdrop-blur-md shadow-modern-lg animate-slide-up">
              <Sparkles className="w-5 h-5 mr-3 text-blue-600 animate-glow" />
              <span className="text-sm font-semibold text-gray-700">Trusted by 1000+ enterprises globally</span>
              <div className="ml-4 flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            {/* Enhanced Main Headline */}
            <div className="relative mb-12">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none animate-slide-up">
                <span className="text-gray-800 block">Core Web</span>
                <span className="modern-gradient-text block relative">
                  Vitals Mastery
                  <div className="absolute -top-4 -right-8 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                </span>
              </h1>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-modern-pulse"></div>
            </div>
            
            {/* Enhanced Subheading */}
            <p className="text-2xl md:text-3xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Transform your website's performance with <span className="font-semibold text-blue-600">Lightning-Fast LCP</span>, 
              <span className="font-semibold text-purple-600"> Zero-Delay FID</span>, and 
              <span className="font-semibold text-emerald-600"> Stable CLS</span> optimization
            </p>
            
            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button className="modern-button text-xl h-20 px-16 rounded-2xl group relative overflow-hidden shadow-modern-lg hover:shadow-modern-lg hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Get Free Analysis
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button variant="outline" className="text-xl h-20 px-16 rounded-2xl border-3 border-blue-300 text-blue-600 hover:bg-blue-50 bg-white/90 backdrop-blur-md shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300">
                <Play className="mr-4 h-6 w-6" />
                Watch Live Demo
              </Button>
            </div>
            
            {/* Enhanced Key Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-blue-200/50 shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-gray-600 font-semibold">Performance Score</div>
                <div className="text-xs text-gray-500 mt-1">Lighthouse Optimization</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-emerald-200/50 shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl font-bold text-emerald-600 mb-3 group-hover:scale-110 transition-transform">+85%</div>
                <div className="text-sm text-gray-600 font-semibold">Conversion Boost</div>
                <div className="text-xs text-gray-500 mt-1">Revenue Optimization</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-purple-200/50 shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform">0.5s</div>
                <div className="text-sm text-gray-600 font-semibold">Load Time</div>
                <div className="text-xs text-gray-500 mt-1">LCP Optimization</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-orange-200/50 shadow-modern hover:shadow-modern-lg hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl font-bold text-orange-500 mb-3 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm text-gray-600 font-semibold">Monitoring</div>
                <div className="text-xs text-gray-500 mt-1">Real-time Analytics</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Performance Dashboard Mockup */}
          <div className="max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="modern-glass rounded-3xl p-12 backdrop-blur-xl border border-gray-200/80 shadow-glass relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
              
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-12 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-3 flex items-center">
                    <Zap className="w-8 h-8 mr-4 text-blue-600" />
                    Performetix Analytics
                  </h3>
                  <p className="text-gray-600 text-lg">Real-time Core Web Vitals monitoring</p>
                </div>
                <div className="flex space-x-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse shadow-green-glow"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse shadow-modern" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-4 h-4 rounded-full bg-purple-500 animate-pulse shadow-purple-glow" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Enhanced Core Web Vitals */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 relative z-10">
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 shadow-modern hover:shadow-green-glow transition-all duration-500 group">
                  <div className="flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-emerald-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-bold text-emerald-600 mb-4 group-hover:scale-105 transition-transform">98</div>
                  <div className="text-gray-700 font-semibold mb-2">Performance Score</div>
                  <div className="text-sm text-gray-500">Lighthouse Core Web Vitals</div>
                  <div className="mt-4 w-full bg-emerald-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
                
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 shadow-modern hover:shadow-modern-lg transition-all duration-500 group">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-bold text-blue-600 mb-4 group-hover:scale-105 transition-transform">0.7s</div>
                  <div className="text-gray-700 font-semibold mb-2">LCP Load Time</div>
                  <div className="text-sm text-gray-500">Largest Contentful Paint</div>
                  <div className="mt-4 w-full bg-blue-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 shadow-modern hover:shadow-purple-glow transition-all duration-500 group">
                  <div className="flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-bold text-purple-600 mb-4 group-hover:scale-105 transition-transform">+320%</div>
                  <div className="text-gray-700 font-semibold mb-2">Revenue Growth</div>
                  <div className="text-sm text-gray-500">Conversion Optimization</div>
                  <div className="mt-4 w-full bg-purple-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="bg-white/80 rounded-2xl p-8 border border-gray-200/80 shadow-modern hover:shadow-modern-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-xl bg-blue-100 mr-4 group-hover:scale-110 transition-transform">
                        <Cpu className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-gray-700">CPU Usage</span>
                        <div className="text-sm text-gray-500">Optimized Performance</div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000" style={{ width: "8%" }}></div>
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-2xl p-8 border border-gray-200/80 shadow-modern hover:shadow-modern-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-xl bg-purple-100 mr-4 group-hover:scale-110 transition-transform">
                        <Database className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-gray-700">Memory</span>
                        <div className="text-sm text-gray-500">Efficient Usage</div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-purple-600">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000" style={{ width: "45%" }}></div>
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-2xl p-8 border border-gray-200/80 shadow-modern hover:shadow-modern-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-xl bg-emerald-100 mr-4 group-hover:scale-110 transition-transform">
                        <Gauge className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-gray-700">Network</span>
                        <div className="text-sm text-gray-500">Ultra-Fast Speed</div>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-emerald-600">97%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-1000" style={{ width: "97%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
