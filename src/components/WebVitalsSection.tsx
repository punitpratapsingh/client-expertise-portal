
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Clock, Zap, TrendingUp, AlertTriangle, Target, Award, ArrowRight, Sparkles, Trophy, Shield, Code2, Cpu, ShoppingCart, Monitor, Database, Smartphone, Globe, Building } from "lucide-react";

const WebVitalsSection = () => {
  const problems = [
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Largest Contentful Paint",
      subtitle: "Universal LCP Optimization",
      description: "Slow loading destroys conversions across all website types. Our expertise delivers sub-second performance for e-commerce, SaaS, enterprise, and mobile applications.",
      impacts: [
        "E-commerce: 45% revenue loss from slow checkout",
        "SaaS: 60% higher user churn rates", 
        "Enterprise: Productivity losses costing millions",
        "Mobile: 80% abandonment on slow load"
      ],
      color: "red",
      metric: "> 2.5s",
      status: "Universal Performance Crisis",
      bgGradient: "from-red-500/20 to-red-600/10"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "First Input Delay",
      subtitle: "Interactive Experience Optimization",
      description: "Laggy interactions kill user experience across all platforms. Our engineers eliminate FID for seamless interactions on every device and application type.",
      impacts: [
        "Form abandonment: 55% drop across all sites",
        "SaaS dashboard delays frustrate users",
        "Mobile app interactions feel broken",
        "Enterprise workflow disruptions"
      ],
      color: "orange",
      metric: "> 100ms",
      status: "Interaction Bottleneck",
      bgGradient: "from-orange-500/20 to-orange-600/10"
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Cumulative Layout Shift",
      subtitle: "Universal Stability Engineering",
      description: "Layout shifts destroy trust and usability across all website types. Our experts create perfectly stable interfaces for every platform and device.",
      impacts: [
        "E-commerce checkout abandonment: 50%",
        "Content sites lose reader engagement",
        "SaaS dashboard usability disasters",
        "Mobile app user frustration"
      ],
      color: "purple",
      metric: "> 0.1",
      status: "Stability Crisis",
      bgGradient: "from-purple-500/20 to-purple-600/10"
    }
  ];

  const websiteTypes = [
    { icon: <ShoppingCart className="w-6 h-6" />, type: "E-commerce", improvement: "+340%", metric: "Conversions" },
    { icon: <Monitor className="w-6 h-6" />, type: "SaaS", improvement: "+290%", metric: "Engagement" },
    { icon: <Building className="w-6 h-6" />, type: "Enterprise", improvement: "+450%", metric: "Efficiency" },
    { icon: <Smartphone className="w-6 h-6" />, type: "Mobile", improvement: "+520%", metric: "Performance" },
    { icon: <Globe className="w-6 h-6" />, type: "Content", improvement: "+380%", metric: "Load Speed" },
    { icon: <Database className="w-6 h-6" />, type: "Backend", improvement: "+670%", metric: "Response" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      red: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-600",
        icon: "text-red-500",
        accent: "bg-red-500"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200", 
        text: "text-orange-600",
        icon: "text-orange-500",
        accent: "bg-orange-500"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600", 
        icon: "text-purple-500",
        accent: "bg-purple-500"
      }
    };
    return colorMap[color] || colorMap.red;
  };

  return (
    <section id="web-vitals" className="py-32 bg-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern-light absolute inset-0 opacity-30"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-light-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-light-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="light-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-red-50 border border-red-200 mb-10 backdrop-blur-sm shadow-xl animate-slide-up">
            <AlertTriangle className="w-6 h-6 mr-3 text-red-500 animate-pulse" />
            <span className="text-lg font-semibold text-red-600">Universal Performance Crisis Analysis</span>
            <Sparkles className="w-5 h-5 ml-3 text-orange-500" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-10 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-slate-900 block">Core Web Vitals</span>
            <span className="text-red-500 block text-performance-glow">All Websites Crisis</span>
          </h2>
          
          <p className="text-2xl text-slate-600 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Poor performance isn't just technical debt—it's bleeding revenue across every website type. 
            Our 15+ year expertise fixes what others can't, for any platform, any scale.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
          {problems.map((problem, index) => {
            const colors = getColorClasses(problem.color);
            return (
              <Card key={index} className="light-card light-card-hover group relative overflow-hidden animate-slide-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${problem.bgGradient} rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity`}></div>
                <CardContent className="p-0 relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className={`${colors.bg} ${colors.border} border-2 rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className={colors.icon}>
                        {problem.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`${colors.text} font-bold text-2xl mb-1`}>{problem.metric}</div>
                      <div className={`${colors.text} text-sm font-medium px-3 py-1 rounded-full ${colors.bg} border ${colors.border}`}>
                        {problem.status}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">{problem.title}</h3>
                    <p className={`text-sm font-medium ${colors.text} mb-4`}>{problem.subtitle}</p>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">{problem.description}</p>
                  
                  {/* Impact List */}
                  <div className={`bg-gradient-to-br ${problem.bgGradient} border-2 ${colors.border} rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300`}>
                    <p className={`${colors.text} font-bold mb-4 text-lg flex items-center`}>
                      <Target className="w-5 h-5 mr-3" />
                      Cross-Platform Impact:
                    </p>
                    <ul className="space-y-3">
                      {problem.impacts.map((impact, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start text-base font-medium">
                          <div className={`w-2 h-2 ${colors.accent} rounded-full mr-4 mt-2 flex-shrink-0`}></div>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Solution Section */}
        <div className="light-glass rounded-3xl p-16 border-2 border-slate-200 backdrop-blur-xl shadow-2xl relative overflow-hidden animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 mr-6">
                  <Trophy className="w-10 h-10 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-slate-900 leading-tight">
                    Our <span className="light-gradient-text">Universal Solution</span>
                  </h3>
                  <p className="text-lg text-slate-600 mt-2">All website types, one expert team</p>
                </div>
              </div>
              
              <p className="text-2xl text-slate-600 mb-10 leading-relaxed">
                15+ years optimizing every type of website and application. We don't just fix symptoms—
                we architect lightning-fast experiences that scale across all platforms.
              </p>
              
              {/* Website Types Grid */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                {websiteTypes.map((type, index) => (
                  <div key={index} className="flex items-center p-4 rounded-xl bg-white/60 border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
                    <div className="p-2 rounded-lg bg-emerald-50 mr-4 group-hover:scale-110 transition-transform">
                      <div className="text-emerald-600">
                        {type.icon}
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-700 font-semibold text-sm">{type.type}</span>
                      <div className="text-emerald-600 font-bold text-lg">{type.improvement}</div>
                      <div className="text-slate-500 text-xs">{type.metric}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="light-button text-xl h-18 px-12 rounded-2xl group relative overflow-hidden shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Optimize Any Website
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            {/* Results Stats */}
            <div className="bg-white/60 rounded-3xl p-10 border-2 border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
              
              <h4 className="text-3xl font-bold mb-10 text-center text-slate-900 flex items-center justify-center relative z-10">
                <TrendingUp className="w-8 h-8 mr-4 text-emerald-600" />
                Universal Results
              </h4>
              
              <div className="grid grid-cols-2 gap-8 mb-10 relative z-10">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform text-performance-glow">2000+</div>
                  <div className="text-slate-700 font-semibold">Websites Optimized</div>
                  <div className="text-sm text-slate-500 mt-1">All Types & Platforms</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform text-performance-glow">92%</div>
                  <div className="text-slate-700 font-semibold">Perfect Scores</div>
                  <div className="text-sm text-slate-500 mt-1">Lighthouse 100</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-emerald-600 mb-3 group-hover:scale-110 transition-transform text-performance-glow">15+</div>
                  <div className="text-slate-700 font-semibold">Years Experience</div>
                  <div className="text-sm text-slate-500 mt-1">Performance Engineering</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-orange-600 mb-3 group-hover:scale-110 transition-transform text-performance-glow">24/7</div>
                  <div className="text-slate-700 font-semibold">Monitoring</div>
                  <div className="text-sm text-slate-500 mt-1">Performance Guard</div>
                </div>
              </div>
              
              {/* Business Impact */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border-2 border-emerald-200 relative z-10">
                <h5 className="font-bold text-emerald-600 mb-6 flex items-center text-xl">
                  <Award className="w-6 h-6 mr-3" />
                  Universal ROI Impact
                </h5>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2 text-performance-glow">+450%</div>
                    <p className="text-slate-700 font-semibold">Average Growth</p>
                    <p className="text-sm text-slate-500">All Website Types</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2 text-performance-glow">-85%</div>
                    <p className="text-slate-700 font-semibold">Load Time Reduction</p>
                    <p className="text-sm text-slate-500">Universal Performance</p>
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

export default WebVitalsSection;
