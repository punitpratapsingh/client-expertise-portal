
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="mb-4">
              <span className="gradient-text">Accelerate</span> Your Web Performance
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Boost revenue and retention by solving Core Web Vitals issues
              that are slowing down your website and frustrating your users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-purple hover:bg-brand-purple_light text-lg h-12 px-6">
                Get Free Audit
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg h-12 px-6">
                See Our Results
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <Zap className="text-yellow-500 mr-2 h-5 w-5" />
              <span>Used by 1000+ companies worldwide</span>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-purple_light/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-bold">Performance Score</div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="flex justify-between mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500">94</div>
                  <div className="text-xs text-gray-500 mt-1">Before</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-500">43</div>
                  <div className="text-xs text-gray-500 mt-1">After</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500">+118%</div>
                  <div className="text-xs text-gray-500 mt-1">Improvement</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">First Contentful Paint</span>
                    <span className="text-sm font-medium text-green-500">0.8s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Largest Contentful Paint</span>
                    <span className="text-sm font-medium text-green-500">1.2s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Cumulative Layout Shift</span>
                    <span className="text-sm font-medium text-green-500">0.01</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
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
