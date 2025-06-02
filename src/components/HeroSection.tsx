
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Shield, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <Shield className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Trusted by 1000+ companies</span>
            </div>
            
            <h1 className="mb-6">
              <span className="gradient-text">Accelerate</span> Your Web Performance
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Boost revenue and retention by solving Core Web Vitals issues
              that are slowing down your website and frustrating your users.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg h-12 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Free Audit
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg h-12 px-8 rounded-xl border-2 hover:bg-white/80 backdrop-blur-sm">
                See Our Results
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center text-gray-600">
                <Zap className="text-yellow-500 mr-2 h-5 w-5" />
                <span>Lightning fast results</span>
              </div>
              <div className="flex items-center text-gray-600">
                <TrendingUp className="text-green-500 mr-2 h-5 w-5" />
                <span>+40% average improvement</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up animate-stagger-2">
            <div className="glass-card rounded-3xl p-8 hover-lift">
              <div className="flex justify-between items-center mb-6">
                <div className="text-xl font-bold text-gray-800">Performance Dashboard</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-1">94</div>
                  <div className="text-xs text-gray-500">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-1">0.8s</div>
                  <div className="text-xs text-gray-500">Load Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-1">+118%</div>
                  <div className="text-xs text-gray-500">Improvement</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">First Contentful Paint</span>
                    <span className="text-sm font-bold text-green-600">0.8s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Largest Contentful Paint</span>
                    <span className="text-sm font-bold text-green-600">1.2s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Cumulative Layout Shift</span>
                    <span className="text-sm font-bold text-green-600">0.01</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
