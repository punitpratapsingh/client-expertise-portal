
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Clock, Zap, TrendingUp, CheckCircle, AlertTriangle, Target, Award, ArrowRight, Sparkles, Trophy, Rocket, Shield, Code2, Cpu } from "lucide-react";

const WebVitalsSection = () => {
  const problems = [
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Largest Contentful Paint",
      subtitle: "Enterprise LCP Optimization",
      description: "Slow loading times cost enterprise businesses millions in revenue. Our 15-year React expertise delivers sub-second LCP performance that drives conversions.",
      impacts: [
        "45% revenue loss from slow loading",
        "60% higher bounce rates on mobile", 
        "Search ranking penalties from Google",
        "Damaged enterprise brand perception"
      ],
      color: "red",
      metric: "> 2.5s",
      status: "Critical Business Impact",
      bgGradient: "from-red-500/20 to-red-600/10"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "First Input Delay",
      subtitle: "React Interaction Optimization",
      description: "Laggy interactions frustrate users and kill conversions. Our senior React engineers eliminate FID with advanced optimization techniques.",
      impacts: [
        "55% drop in user engagement",
        "40% fewer form submissions",
        "Increased customer acquisition costs",
        "Poor mobile user experience"
      ],
      color: "orange",
      metric: "> 100ms",
      status: "Performance Bottleneck",
      bgGradient: "from-orange-500/20 to-orange-600/10"
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Cumulative Layout Shift",
      subtitle: "React Stability Engineering",
      description: "Layout shifts destroy user trust and cause checkout abandonment. Our React experts create perfectly stable interfaces.",
      impacts: [
        "50% checkout abandonment rates",
        "35% decrease in form completions",
        "Lost customer confidence",
        "Mobile usability disasters"
      ],
      color: "purple",
      metric: "> 0.1",
      status: "UX Optimization Required",
      bgGradient: "from-purple-500/20 to-purple-600/10"
    }
  ];

  const solutions = [
    { text: "Advanced React bundle optimization", icon: <Code2 className="w-5 h-5" /> },
    { text: "Server-side rendering optimization", icon: <Rocket className="w-5 h-5" /> },
    { text: "Critical path CSS elimination", icon: <Zap className="w-5 h-5" /> },
    { text: "React Suspense implementation", icon: <Shield className="w-5 h-5" /> },
    { text: "Enterprise CDN configuration", icon: <TrendingUp className="w-5 h-5" /> },
    { text: "React 18 concurrent features", icon: <Cpu className="w-5 h-5" /> }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      red: {
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        text: "text-red-400",
        icon: "text-red-400",
        accent: "bg-red-500"
      },
      orange: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/30", 
        text: "text-orange-400",
        icon: "text-orange-400",
        accent: "bg-orange-500"
      },
      purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        text: "text-purple-400", 
        icon: "text-purple-400",
        accent: "bg-purple-500"
      }
    };
    return colorMap[color] || colorMap.red;
  };

  return (
    <section id="web-vitals" className="py-32 bg-zinc-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern-dark absolute inset-0 opacity-20"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-dark-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-dark-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="dark-container relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-24">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-zinc-800/60 border border-red-500/30 mb-10 backdrop-blur-sm shadow-2xl animate-slide-up">
            <AlertTriangle className="w-6 h-6 mr-3 text-red-400 animate-pulse" />
            <span className="text-lg font-semibold text-red-300">Enterprise Performance Crisis Analysis</span>
            <Sparkles className="w-5 h-5 ml-3 text-orange-400" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-10 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-white block">Core Web Vitals</span>
            <span className="text-red-400 block text-glow">Revenue Crisis</span>
          </h2>
          
          <p className="text-2xl text-zinc-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Poor React performance isn't just technical debt—it's bleeding revenue. Every millisecond costs conversions. 
            Our 15+ year React expertise fixes what others can't.
          </p>
        </div>

        {/* Enhanced Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
          {problems.map((problem, index) => {
            const colors = getColorClasses(problem.color);
            return (
              <Card key={index} className="dark-card dark-card-hover group relative overflow-hidden animate-slide-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
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
                    <h3 className="text-2xl font-bold mb-2 text-white">{problem.title}</h3>
                    <p className={`text-sm font-medium ${colors.text} mb-4`}>{problem.subtitle}</p>
                  </div>
                  <p className="text-zinc-400 mb-8 leading-relaxed text-lg">{problem.description}</p>
                  
                  {/* Enhanced Impact List */}
                  <div className={`bg-gradient-to-br ${problem.bgGradient} border-2 ${colors.border} rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300`}>
                    <p className={`${colors.text} font-bold mb-4 text-lg flex items-center`}>
                      <Target className="w-5 h-5 mr-3" />
                      Enterprise Impact:
                    </p>
                    <ul className="space-y-3">
                      {problem.impacts.map((impact, idx) => (
                        <li key={idx} className="text-zinc-300 flex items-start text-base font-medium">
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
        <div className="dark-glass rounded-3xl p-16 border-2 border-zinc-700/50 backdrop-blur-xl shadow-2xl relative overflow-hidden animate-slide-up" style={{ animationDelay: '1.2s' }}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 mr-6">
                  <Trophy className="w-10 h-10 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-white leading-tight">
                    Our <span className="dark-gradient-text">Solution</span>
                  </h3>
                  <p className="text-lg text-zinc-400 mt-2">Senior React engineering</p>
                </div>
              </div>
              
              <p className="text-2xl text-zinc-300 mb-10 leading-relaxed">
                15+ years of React expertise meets modern performance engineering. We don't just fix symptoms—
                we architect lightning-fast React applications that scale.
              </p>
              
              {/* Enhanced Solutions List */}
              <div className="space-y-5 mb-12">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
                    <div className="p-2 rounded-lg bg-emerald-500/20 mr-4 group-hover:scale-110 transition-transform">
                      <div className="text-emerald-400">
                        {solution.icon}
                      </div>
                    </div>
                    <span className="text-zinc-300 font-semibold text-lg">{solution.text}</span>
                  </div>
                ))}
              </div>

              <Button className="dark-button text-xl h-18 px-12 rounded-2xl group relative overflow-hidden shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Get Enterprise Audit
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            {/* Enhanced Results Stats */}
            <div className="bg-zinc-800/60 rounded-3xl p-10 border-2 border-zinc-700/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              
              <h4 className="text-3xl font-bold mb-10 text-center text-white flex items-center justify-center relative z-10">
                <TrendingUp className="w-8 h-8 mr-4 text-emerald-400" />
                Enterprise Results
              </h4>
              
              <div className="grid grid-cols-2 gap-8 mb-10 relative z-10">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-2 border-blue-500/30 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform text-glow">89%</div>
                  <div className="text-zinc-300 font-semibold">Faster React Apps</div>
                  <div className="text-sm text-zinc-500 mt-1">Load Performance</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-2 border-purple-500/30 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform text-glow">92%</div>
                  <div className="text-zinc-300 font-semibold">CLS Eliminated</div>
                  <div className="text-sm text-zinc-500 mt-1">Perfect Stability</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-2 border-emerald-500/30 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-emerald-400 mb-3 group-hover:scale-110 transition-transform text-glow">76%</div>
                  <div className="text-zinc-300 font-semibold">Better FID</div>
                  <div className="text-sm text-zinc-500 mt-1">React Optimization</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-2 border-orange-500/30 group hover:scale-105 transition-transform">
                  <div className="text-5xl font-bold text-orange-400 mb-3 group-hover:scale-110 transition-transform text-glow">100</div>
                  <div className="text-zinc-300 font-semibold">Lighthouse Score</div>
                  <div className="text-sm text-zinc-500 mt-1">Perfect Performance</div>
                </div>
              </div>
              
              {/* Enhanced Business Impact */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-2xl p-8 border-2 border-emerald-500/30 relative z-10">
                <h5 className="font-bold text-emerald-400 mb-6 flex items-center text-xl">
                  <Award className="w-6 h-6 mr-3" />
                  Enterprise ROI
                </h5>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400 mb-2 text-glow">+67%</div>
                    <p className="text-zinc-300 font-semibold">Revenue Growth</p>
                    <p className="text-sm text-zinc-500">Performance ROI</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400 mb-2 text-glow">-73%</div>
                    <p className="text-zinc-300 font-semibold">Bounce Rate</p>
                    <p className="text-sm text-zinc-500">User Retention</p>
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
