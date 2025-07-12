
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern-light absolute inset-0 opacity-30"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-light-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full blur-3xl animate-light-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="light-container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="light-badge mb-8 animate-slide-up">
            <Zap className="w-4 h-4 mr-2" />
            <span>15+ Years Performance Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-8 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Supercharge Your
            <br />
            <span className="light-gradient-text">Core Web Vitals</span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Expert performance optimization for all website types. We transform slow applications into 
            lightning-fast experiences that boost conversions and delight users.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button className="light-button text-lg h-14 px-10 rounded-xl group relative overflow-hidden shadow-2xl performance-glow">
              <span className="relative z-10">Start Free Analysis</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
            <Button className="light-button-outline text-lg h-14 px-10 rounded-xl">
              View Performance Cases
            </Button>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center p-6 rounded-2xl bg-white/60 border border-slate-200 shadow-lg">
              <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">450%</div>
              <div className="text-slate-600 text-sm">Avg Speed Boost</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/60 border border-slate-200 shadow-lg">
              <Clock className="h-8 w-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">0.8s</div>
              <div className="text-slate-600 text-sm">Load Time Target</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/60 border border-slate-200 shadow-lg">
              <Shield className="h-8 w-8 text-cyan-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
              <div className="text-slate-600 text-sm">Success Rate</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/60 border border-slate-200 shadow-lg">
              <Zap className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">200+</div>
              <div className="text-slate-600 text-sm">Sites Optimized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
