
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-24 pb-20 md:pt-32 md:pb-28 meta-hero-bg relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-meta-blue-100/40 rounded-full blur-3xl animate-meta-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-meta-purple-100/30 rounded-full blur-3xl animate-meta-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="meta-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-meta-fade-in">
            {/* Trust Badge */}
            <div className="meta-badge mb-8 animate-meta-scale">
              <Shield className="w-4 h-4 mr-2" />
              <span>Trusted by 1000+ companies worldwide</span>
            </div>
            
            <h1 className="mb-8 meta-text-balance">
              <span className="meta-gradient-text">Accelerate</span> Your Web Performance
            </h1>
            <p className="text-xl text-meta-gray-600 mb-10 max-w-lg leading-relaxed meta-text-balance">
              Boost revenue and user retention by solving Core Web Vitals issues that slow down your website and frustrate your users.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="meta-button text-lg h-14 px-8 rounded-meta-lg shadow-meta-lg hover:shadow-meta-xl group">
                Get Free Performance Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="meta-button-outline text-lg h-14 px-8 rounded-meta-lg">
                View Success Stories
              </Button>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="flex items-center text-meta-gray-700">
                <CheckCircle className="text-meta-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">Lightning fast results in 2 weeks</span>
              </div>
              <div className="flex items-center text-meta-gray-700">
                <CheckCircle className="text-meta-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">Average 40% performance boost</span>
              </div>
              <div className="flex items-center text-meta-gray-700">
                <CheckCircle className="text-meta-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">27% increase in conversions</span>
              </div>
              <div className="flex items-center text-meta-gray-700">
                <CheckCircle className="text-meta-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">100% money-back guarantee</span>
              </div>
            </div>
          </div>
          
          {/* Performance Dashboard */}
          <div className="relative animate-meta-fade-in meta-stagger-2">
            <div className="meta-glass rounded-meta-xl p-8 meta-card-hover animate-meta-float">
              {/* Dashboard Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-xl font-semibold text-meta-gray-800">Performance Dashboard</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-meta-green-400"></div>
                  <div className="w-3 h-3 rounded-full bg-meta-blue-400"></div>
                  <div className="w-3 h-3 rounded-full bg-meta-purple-500"></div>
                </div>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="meta-stat">
                  <div className="meta-stat-number">94</div>
                  <div className="meta-stat-label">Performance Score</div>
                </div>
                <div className="meta-stat">
                  <div className="meta-stat-number">0.8s</div>
                  <div className="meta-stat-label">Load Time</div>
                </div>
                <div className="meta-stat">
                  <div className="meta-stat-number">+118%</div>
                  <div className="meta-stat-label">Improvement</div>
                </div>
              </div>
              
              {/* Core Web Vitals */}
              <div className="space-y-6">
                <div className="bg-white/60 rounded-meta p-4 border border-meta-gray-100">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium text-meta-gray-700">First Contentful Paint</span>
                    <span className="text-sm font-bold text-meta-green-500">0.8s</span>
                  </div>
                  <div className="w-full bg-meta-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-meta-green-400 to-meta-green-500 h-2 rounded-full transition-all duration-1000" style={{ width: "92%" }}></div>
                  </div>
                </div>
                
                <div className="bg-white/60 rounded-meta p-4 border border-meta-gray-100">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium text-meta-gray-700">Largest Contentful Paint</span>
                    <span className="text-sm font-bold text-meta-blue-600">1.2s</span>
                  </div>
                  <div className="w-full bg-meta-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-meta-blue-400 to-meta-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: "88%" }}></div>
                  </div>
                </div>
                
                <div className="bg-white/60 rounded-meta p-4 border border-meta-gray-100">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium text-meta-gray-700">Cumulative Layout Shift</span>
                    <span className="text-sm font-bold text-meta-purple-500">0.01</span>
                  </div>
                  <div className="w-full bg-meta-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-meta-purple-500 to-meta-purple-600 h-2 rounded-full transition-all duration-1000" style={{ width: "96%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating metrics */}
            <div className="absolute -top-4 -right-4 meta-glass rounded-meta-lg p-4 animate-meta-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-meta-green-500" />
                <span className="text-sm font-semibold text-meta-gray-700">+27% Revenue</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 meta-glass rounded-meta-lg p-4 animate-meta-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-meta-blue-500" />
                <span className="text-sm font-semibold text-meta-gray-700">60% Faster</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
