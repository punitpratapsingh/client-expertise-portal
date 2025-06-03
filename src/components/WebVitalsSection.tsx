
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Clock, Zap, TrendingUp, CheckCircle, AlertTriangle, Target, Award, ArrowRight, Sparkles, Trophy, Rocket, Shield } from "lucide-react";

const WebVitalsSection = () => {
  const problems = [
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Largest Contentful Paint",
      subtitle: "LCP Optimization",
      description: "Slow content loading creates frustrated users who abandon your site within seconds, directly impacting revenue and search rankings.",
      impacts: [
        "35% increase in bounce rate",
        "28% decrease in conversions", 
        "Lower Google search rankings",
        "Reduced user engagement"
      ],
      color: "red",
      metric: "> 2.5s",
      status: "Critical Issue",
      bgGradient: "from-red-50 to-red-100/50"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "First Input Delay",
      subtitle: "FID Enhancement",
      description: "Delayed user interactions create frustrating experiences that damage brand perception and customer satisfaction significantly.",
      impacts: [
        "45% lower session duration",
        "33% fewer page views per session",
        "Higher customer acquisition costs",
        "Damaged brand perception"
      ],
      color: "orange",
      metric: "> 100ms",
      status: "Needs Attention",
      bgGradient: "from-orange-50 to-orange-100/50"
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Cumulative Layout Shift",
      subtitle: "CLS Stabilization",
      description: "Unexpected layout shifts cause misclicks and user frustration, leading to abandoned transactions and significant revenue loss.",
      impacts: [
        "34% abandonment on checkout",
        "25% decrease in form submissions",
        "Lost customer trust",
        "Reduced mobile experience"
      ],
      color: "purple",
      metric: "> 0.1",
      status: "Optimization Required",
      bgGradient: "from-purple-50 to-purple-100/50"
    }
  ];

  const solutions = [
    { text: "Advanced image and asset optimization", icon: <Rocket className="w-5 h-5" /> },
    { text: "Critical rendering path optimization", icon: <Zap className="w-5 h-5" /> },
    { text: "Layout stabilization techniques", icon: <Shield className="w-5 h-5" /> },
    { text: "JavaScript bundle optimization", icon: <Target className="w-5 h-5" /> },
    { text: "Server response time improvements", icon: <TrendingUp className="w-5 h-5" /> },
    { text: "Third-party script management", icon: <CheckCircle className="w-5 h-5" /> }
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
    <section id="web-vitals" className="py-32 bg-gradient-to-b from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern-light absolute inset-0 opacity-20"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-red-200/30 to-orange-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="modern-container relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/60 mb-10 backdrop-blur-sm shadow-modern animate-slide-up">
            <AlertTriangle className="w-6 h-6 mr-3 text-red-500 animate-pulse" />
            <span className="text-lg font-semibold text-red-700">Critical Performance Impact Analysis</span>
            <Sparkles className="w-5 h-5 ml-3 text-orange-500" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-10 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-gray-800 block">Core Web Vitals</span>
            <span className="text-red-500 block">Revenue Impact</span>
          </h2>
          
          <p className="text-2xl text-gray-600 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Poor web performance isn't just a technical issue—it's a business crisis. Every millisecond of delay 
            costs revenue, damages user experience, and hurts your competitive advantage.
          </p>
        </div>

        {/* Enhanced Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
          {problems.map((problem, index) => {
            const colors = getColorClasses(problem.color);
            return (
              <Card key={index} className="modern-card modern-card-hover group relative overflow-hidden animate-slide-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${problem.bgGradient} rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity`}></div>
                <CardContent className="p-0 relative z-10">
                  {/* Enhanced Header */}
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
                  
                  {/* Enhanced Content */}
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{problem.title}</h3>
                    <p className={`text-sm font-medium ${colors.text} mb-4`}>{problem.subtitle}</p>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{problem.description}</p>
                  
                  {/* Enhanced Impact List */}
                  <div className={`bg-gradient-to-br ${problem.bgGradient} border-2 ${colors.border} rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300`}>
                    <p className={`${colors.text} font-bold mb-4 text-lg flex items-center`}>
                      <Target className="w-5 h-5 mr-3" />
                      Business Impact Analysis:
                    </p>
                    <ul className="space-y-3">
                      {problem.impacts.map((impact, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start text-base font-medium">
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

        {/* Enhanced Solution Section */}
        <div className="modern-glass rounded-3xl p-16 border-2 border-gray-200/80 backdrop-blur-xl shadow-glass relative overflow-hidden animate-slide-up" style={{ animationDelay: '1.2s' }}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-100 to-blue-100 mr-6">
                  <Trophy className="w-10 h-10 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-gray-800 leading-tight">
                    Our <span className="modern-gradient-text">Solution</span>
                  </h3>
                  <p className="text-lg text-gray-600 mt-2">Enterprise-grade optimization</p>
                </div>
              </div>
              
              <p className="text-2xl text-gray-600 mb-10 leading-relaxed">
                We systematically address all Core Web Vitals issues using proven optimization 
                techniques that deliver measurable improvements in performance and business metrics.
              </p>
              
              {/* Enhanced Solutions List */}
              <div className="space-y-5 mb-12">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start p-4 rounded-xl bg-white/60 border border-gray-200/60 hover:bg-white/80 hover:shadow-modern transition-all duration-300 group">
                    <div className="p-2 rounded-lg bg-emerald-100 mr-4 group-hover:scale-110 transition-transform">
                      <div className="text-emerald-600">
                        {solution.icon}
                      </div>
                    </div>
                    <span className="text-gray-700 font-semibold text-lg">{solution.text}</span>
                  </div>
                ))}
              </div>

              <Button className="modern-button text-xl h-18 px-12 rounded-2xl group relative overflow-hidden shadow-modern-lg hover:shadow-modern-lg hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Get Performance Audit
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            {/* Enhanced Results Stats */}
            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 rounded-3xl p-10 border-2 border-gray-200/80 shadow-modern relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl"></div>
              
              <h4 className="text-3xl font-bold mb-10 text-center text-gray-800 flex items-center justify-center relative z-10">
                <TrendingUp className="w-8 h-8 mr-4 text-emerald-600" />
                Client Success Metrics
              </h4>
              
              <div className="grid grid-cols-2 gap-8 mb-10 relative z-10">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform">78%</div>
                  <div className="text-gray-700 font-semibold">Faster LCP</div>
                  <div className="text-sm text-gray-500 mt-1">Load Speed</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform">85%</div>
                  <div className="text-gray-700 font-semibold">Reduced CLS</div>
                  <div className="text-sm text-gray-500 mt-1">Layout Stability</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-emerald-600 mb-3 group-hover:scale-110 transition-transform">68%</div>
                  <div className="text-gray-700 font-semibold">Better FID</div>
                  <div className="text-sm text-gray-500 mt-1">Interaction Speed</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-orange-500 mb-3 group-hover:scale-110 transition-transform">98+</div>
                  <div className="text-gray-700 font-semibold">Lighthouse Score</div>
                  <div className="text-sm text-gray-500 mt-1">Performance Rating</div>
                </div>
              </div>
              
              {/* Enhanced Business Impact */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/80 rounded-2xl p-8 border-2 border-emerald-200 relative z-10">
                <h5 className="font-bold text-emerald-700 mb-6 flex items-center text-xl">
                  <Award className="w-6 h-6 mr-3" />
                  Revenue Impact Results
                </h5>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">+47%</div>
                    <p className="text-gray-700 font-semibold">Conversion Rate</p>
                    <p className="text-sm text-gray-500">Revenue Growth</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">-58%</div>
                    <p className="text-gray-700 font-semibold">Bounce Rate</p>
                    <p className="text-sm text-gray-500">User Retention</p>
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
