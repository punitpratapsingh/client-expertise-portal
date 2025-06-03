
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, TrendingUp, ArrowRight, CheckCircle, Cpu, Database, Gauge, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Professional background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-glow-purple/10 rounded-full blur-3xl"></div>
        <div className="grid-pattern absolute inset-0 opacity-5"></div>
      </div>
      
      <div className="cyber-container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-dark-800/60 border border-neon-cyan/20 mb-8 backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2 text-neon-cyan" />
              <span className="text-sm font-medium text-dark-200">Trusted by 1000+ enterprises globally</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none">
              <span className="text-dark-100">Performance</span>
              <br />
              <span className="cyber-gradient-text">Optimization</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-dark-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade web performance solutions that accelerate load times, 
              boost conversions, and maximize revenue through advanced optimization techniques.
            </p>
            
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button className="cyber-button text-lg h-16 px-12 rounded-xl group relative overflow-hidden shadow-neon-lg">
                <span className="relative z-10 flex items-center">
                  Start Free Analysis
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="outline" className="text-lg h-16 px-12 rounded-xl border-2 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 bg-transparent backdrop-blur-sm">
                <Play className="mr-3 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Key Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">60%</div>
                <div className="text-sm text-dark-300 font-medium">Faster Load Times</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">+40%</div>
                <div className="text-sm text-dark-300 font-medium">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-glow-purple mb-2">48h</div>
                <div className="text-sm text-dark-300 font-medium">Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-yellow mb-2">24/7</div>
                <div className="text-sm text-dark-300 font-medium">Monitoring</div>
              </div>
            </div>
          </div>
          
          {/* Performance Dashboard Mockup */}
          <div className="max-w-5xl mx-auto">
            <div className="cyber-glass rounded-2xl p-8 backdrop-blur-lg border border-dark-600/30 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-dark-100 mb-2">Performetix Dashboard</h3>
                  <p className="text-dark-400">Real-time performance analytics</p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 rounded-full bg-glow-purple animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Core Web Vitals */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center p-6 rounded-xl bg-dark-800/50 border border-neon-green/20">
                  <div className="text-4xl font-bold text-neon-green mb-2">98</div>
                  <div className="text-dark-300 text-sm font-medium">Performance Score</div>
                  <div className="text-xs text-dark-400 mt-1">Core Web Vitals</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-dark-800/50 border border-neon-blue/20">
                  <div className="text-4xl font-bold text-neon-blue mb-2">0.8s</div>
                  <div className="text-dark-300 text-sm font-medium">Load Time</div>
                  <div className="text-xs text-dark-400 mt-1">Largest Contentful Paint</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-dark-800/50 border border-glow-purple/20">
                  <div className="text-4xl font-bold text-glow-purple mb-2">+287%</div>
                  <div className="text-dark-300 text-sm font-medium">Revenue Impact</div>
                  <div className="text-xs text-dark-400 mt-1">Conversion Improvement</div>
                </div>
              </div>
              
              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-dark-800/30 rounded-xl p-6 border border-dark-600/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Cpu className="w-5 h-5 text-neon-blue mr-3" />
                      <span className="text-sm font-medium text-dark-200">CPU Usage</span>
                    </div>
                    <span className="text-sm font-bold text-neon-blue">12%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-neon-blue to-neon-cyan h-2 rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>
                
                <div className="bg-dark-800/30 rounded-xl p-6 border border-dark-600/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Database className="w-5 h-5 text-glow-purple mr-3" />
                      <span className="text-sm font-medium text-dark-200">Memory</span>
                    </div>
                    <span className="text-sm font-bold text-glow-purple">68%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-glow-purple to-neon-pink h-2 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                
                <div className="bg-dark-800/30 rounded-xl p-6 border border-dark-600/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Gauge className="w-5 h-5 text-neon-green mr-3" />
                      <span className="text-sm font-medium text-dark-200">Network</span>
                    </div>
                    <span className="text-sm font-bold text-neon-green">94%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-neon-green to-neon-yellow h-2 rounded-full" style={{ width: "94%" }}></div>
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
