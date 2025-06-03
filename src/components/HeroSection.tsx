
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, TrendingUp, ArrowRight, CheckCircle, Cpu, Database, Gauge } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-glow-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Data streams */}
        <div className="absolute left-10 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent opacity-20 animate-data-stream"></div>
        <div className="absolute right-20 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent opacity-20 animate-data-stream" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="cyber-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            {/* Cyber Badge */}
            <div className="cyber-badge mb-8 animate-neon-pulse">
              <Shield className="w-4 h-4 mr-2" />
              <span>Trusted by 1000+ enterprises globally</span>
            </div>
            
            <h1 className="mb-8 text-balance">
              <span className="cyber-text-glow">Quantum</span> Web Performance
            </h1>
            <p className="text-xl text-dark-200 mb-10 max-w-lg leading-relaxed">
              Leverage advanced algorithms and next-gen optimization techniques to eliminate Core Web Vitals bottlenecks and maximize revenue conversion.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button className="cyber-button text-lg h-14 px-8 rounded-xl group relative overflow-hidden">
                <span className="relative z-10">Initialize Performance Scan</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-glow-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button className="cyber-button-outline text-lg h-14 px-8 rounded-xl">
                View Case Studies
              </Button>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="flex items-center text-dark-200">
                <CheckCircle className="text-neon-green mr-3 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">Deploy in 48 hours</span>
              </div>
              <div className="flex items-center text-dark-200">
                <CheckCircle className="text-neon-green mr-3 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">60% performance boost</span>
              </div>
              <div className="flex items-center text-dark-200">
                <CheckCircle className="text-neon-green mr-3 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">AI-powered optimization</span>
              </div>
              <div className="flex items-center text-dark-200">
                <CheckCircle className="text-neon-green mr-3 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">Zero downtime guarantee</span>
              </div>
            </div>
          </div>
          
          {/* Cyber Performance Dashboard */}
          <div className="relative animate-slide-up perspective-1000" style={{ animationDelay: '0.3s' }}>
            <div className="cyber-glass rounded-3xl p-8 cyber-card-hover animate-cyber-float neon-border">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-xl font-semibold text-neon-cyan cyber-text-glow">Neural Performance Core</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-neon-green animate-glow"></div>
                  <div className="w-3 h-3 rounded-full bg-neon-blue animate-glow" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 rounded-full bg-glow-purple animate-glow" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* System Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="cyber-stat">
                  <div className="cyber-stat-number">98</div>
                  <div className="cyber-stat-label">Core Score</div>
                </div>
                <div className="cyber-stat">
                  <div className="cyber-stat-number">0.4s</div>
                  <div className="cyber-stat-label">Load Time</div>
                </div>
                <div className="cyber-stat">
                  <div className="cyber-stat-number">+247%</div>
                  <div className="cyber-stat-label">Efficiency</div>
                </div>
              </div>
              
              {/* Performance Metrics */}
              <div className="space-y-6">
                <div className="hologram-effect rounded-xl p-4">
                  <div className="flex justify-between mb-3">
                    <div className="flex items-center">
                      <Cpu className="w-4 h-4 text-neon-blue mr-2" />
                      <span className="text-sm font-medium text-dark-200">Processing Speed</span>
                    </div>
                    <span className="text-sm font-bold text-neon-blue cyber-text-glow">0.8ms</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-neon-blue to-neon-cyan h-2 rounded-full transition-all duration-1000 shadow-neon-sm" style={{ width: "94%" }}></div>
                  </div>
                </div>
                
                <div className="hologram-effect rounded-xl p-4">
                  <div className="flex justify-between mb-3">
                    <div className="flex items-center">
                      <Database className="w-4 h-4 text-glow-purple mr-2" />
                      <span className="text-sm font-medium text-dark-200">Data Transfer</span>
                    </div>
                    <span className="text-sm font-bold text-glow-purple cyber-text-glow">1.2TB/s</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-glow-purple to-neon-pink h-2 rounded-full transition-all duration-1000 shadow-glow-purple" style={{ width: "89%" }}></div>
                  </div>
                </div>
                
                <div className="hologram-effect rounded-xl p-4">
                  <div className="flex justify-between mb-3">
                    <div className="flex items-center">
                      <Gauge className="w-4 h-4 text-neon-green mr-2" />
                      <span className="text-sm font-medium text-dark-200">System Load</span>
                    </div>
                    <span className="text-sm font-bold text-neon-green cyber-text-glow">0.02%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-neon-green to-neon-yellow h-2 rounded-full transition-all duration-1000 shadow-glow-green" style={{ width: "97%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating metrics */}
            <div className="absolute -top-4 -right-4 cyber-glass rounded-xl p-4 animate-cyber-float neon-border" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-neon-green" />
                <span className="text-sm font-semibold text-neon-green cyber-text-glow">+387% ROI</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 cyber-glass rounded-xl p-4 animate-cyber-float neon-border" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-neon-blue" />
                <span className="text-sm font-semibold text-neon-blue cyber-text-glow">Quantum Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
