
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, BarChart3, Clock, Target, Cpu, Database, Gauge, Zap, Code2, Rocket, TrendingUp, Globe, Monitor, Smartphone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-zinc-900">
      {/* Enhanced dark background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-dark-float"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-dark-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="grid-pattern-dark absolute inset-0 opacity-30"></div>
      </div>
      
      <div className="dark-container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            {/* Enhanced Trust Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-zinc-800/60 border border-zinc-700/50 mb-10 backdrop-blur-md shadow-2xl animate-slide-up">
              <Code2 className="w-5 h-5 mr-3 text-blue-400 animate-pulse" />
              <span className="text-sm font-semibold text-zinc-300">15+ Years Performance Engineering • 2000+ Websites Optimized</span>
              <div className="ml-4 flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            {/* Enhanced Main Headline */}
            <div className="relative mb-12">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none animate-slide-up">
                <span className="text-white block">Performetix</span>
                <span className="dark-gradient-text block relative text-glow">
                  All Websites
                  <div className="absolute -top-6 -right-12 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse-neon"></div>
                </span>
                <span className="text-zinc-400 block text-6xl md:text-7xl lg:text-8xl">Performance Masters</span>
              </h1>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse-neon"></div>
            </div>
            
            {/* Enhanced Subheading */}
            <p className="text-2xl md:text-3xl text-zinc-300 mb-16 max-w-6xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Elite performance optimization for <span className="font-semibold text-blue-400 text-glow">E-commerce</span>, 
              <span className="font-semibold text-purple-400 text-glow"> SaaS</span>, 
              <span className="font-semibold text-emerald-400 text-glow"> Enterprise</span>, and 
              <span className="font-semibold text-orange-400 text-glow"> Mobile Apps</span> - Built by senior engineers with 15+ years experience
            </p>
            
            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button className="dark-button text-xl h-20 px-16 rounded-2xl group relative overflow-hidden neon-glow hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  <Rocket className="mr-4 h-6 w-6" />
                  Free Performance Audit
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button className="dark-button-outline text-xl h-20 px-16 rounded-2xl group hover:scale-105 transition-all duration-300">
                <Play className="mr-4 h-6 w-6" />
                Live Demo
              </Button>
            </div>
            
            {/* Website Type Performance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center p-6 rounded-2xl bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 group">
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform text-glow">500+</div>
                <div className="text-sm text-zinc-300 font-semibold">E-commerce Sites</div>
                <div className="text-xs text-zinc-500 mt-1">Conversion Optimized</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 shadow-2xl hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300 group">
                <Monitor className="w-8 h-8 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-emerald-400 mb-3 group-hover:scale-110 transition-transform text-glow">300+</div>
                <div className="text-sm text-zinc-300 font-semibold">SaaS Platforms</div>
                <div className="text-xs text-zinc-500 mt-1">User Experience Enhanced</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 group">
                <Database className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform text-glow">200+</div>
                <div className="text-sm text-zinc-300 font-semibold">Enterprise Apps</div>
                <div className="text-xs text-zinc-500 mt-1">Scalability Achieved</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 group">
                <Smartphone className="w-8 h-8 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-orange-400 mb-3 group-hover:scale-110 transition-transform text-glow">1000+</div>
                <div className="text-sm text-zinc-300 font-semibold">Mobile Apps</div>
                <div className="text-xs text-zinc-500 mt-1">Performance Boosted</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Universal Performance Dashboard */}
          <div className="max-w-6xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="dark-glass rounded-3xl p-12 backdrop-blur-xl border border-zinc-700/50 shadow-2xl relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-dark-float"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-2xl animate-dark-float" style={{ animationDelay: '3s' }}></div>
              
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-12 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
                    <TrendingUp className="w-8 h-8 mr-4 text-blue-400" />
                    Universal Performance Analytics
                  </h3>
                  <p className="text-zinc-400 text-lg">All website types • All platforms • All performance metrics</p>
                </div>
                <div className="flex space-x-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-4 h-4 rounded-full bg-purple-400 animate-pulse shadow-lg shadow-purple-400/50" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Enhanced Core Web Vitals - Universal */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 relative z-10">
                <div className="text-center p-8 rounded-2xl bg-zinc-800/60 border border-emerald-500/30 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 group">
                  <div className="flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-bold text-emerald-400 mb-4 group-hover:scale-105 transition-transform text-glow">100</div>
                  <div className="text-zinc-300 font-semibold mb-2">Lighthouse Score</div>
                  <div className="text-sm text-zinc-500">Perfect Performance</div>
                  <div className="mt-4 w-full bg-zinc-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-emerald-400 to-emerald-300 h-3 rounded-full shadow-lg shadow-emerald-400/50" style={{ width: "100%" }}></div>
                  </div>
                </div>
                
                <div className="text-center p-8 rounded-2xl bg-zinc-800/60 border border-blue-500/30 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 group">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-bold text-blue-400 mb-4 group-hover:scale-105 transition-transform text-glow">0.2s</div>
                  <div className="text-zinc-300 font-semibold mb-2">Load Time</div>
                  <div className="text-sm text-zinc-500">Lightning Speed</div>
                  <div className="mt-4 w-full bg-zinc-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-300 h-3 rounded-full shadow-lg shadow-blue-400/50" style={{ width: "98%" }}></div>
                  </div>
                </div>
                
                <div className="text-center p-8 rounded-2xl bg-zinc-800/60 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group">
                  <div className="flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-bold text-purple-400 mb-4 group-hover:scale-105 transition-transform text-glow">800%</div>
                  <div className="text-zinc-300 font-semibold mb-2">ROI Increase</div>
                  <div className="text-sm text-zinc-500">All Website Types</div>
                  <div className="mt-4 w-full bg-zinc-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-300 h-3 rounded-full shadow-lg shadow-purple-400/50" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
              
              {/* Performance Metrics by Website Type */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                <div className="bg-zinc-800/40 rounded-2xl p-6 border border-zinc-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-xl bg-blue-500/20 mr-3 group-hover:scale-110 transition-transform">
                        <Globe className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-zinc-300">E-commerce</span>
                        <div className="text-xs text-zinc-500">Conversion Rate</div>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-blue-400 text-glow">+340%</span>
                  </div>
                </div>
                
                <div className="bg-zinc-800/40 rounded-2xl p-6 border border-zinc-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-xl bg-purple-500/20 mr-3 group-hover:scale-110 transition-transform">
                        <Monitor className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-zinc-300">SaaS</span>
                        <div className="text-xs text-zinc-500">User Engagement</div>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-purple-400 text-glow">+290%</span>
                  </div>
                </div>
                
                <div className="bg-zinc-800/40 rounded-2xl p-6 border border-zinc-700/50 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-xl bg-emerald-500/20 mr-3 group-hover:scale-110 transition-transform">
                        <Database className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-zinc-300">Enterprise</span>
                        <div className="text-xs text-zinc-500">Efficiency Gain</div>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-emerald-400 text-glow">+450%</span>
                  </div>
                </div>
                
                <div className="bg-zinc-800/40 rounded-2xl p-6 border border-zinc-700/50 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 rounded-xl bg-orange-500/20 mr-3 group-hover:scale-110 transition-transform">
                        <Smartphone className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-zinc-300">Mobile</span>
                        <div className="text-xs text-zinc-500">Speed Boost</div>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-orange-400 text-glow">+520%</span>
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
