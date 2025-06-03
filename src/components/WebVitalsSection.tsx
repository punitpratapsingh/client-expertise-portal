import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Clock, Zap, TrendingUp, CheckCircle, AlertTriangle, Target, Award, ArrowRight } from "lucide-react";

const WebVitalsSection = () => {
  const problems = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Largest Contentful Paint (LCP)",
      description: "Slow content loading frustrates users and drives them away from your site, directly impacting revenue and search rankings.",
      impacts: [
        "25% increase in bounce rate",
        "18% decrease in conversions", 
        "Lower search ranking position"
      ],
      color: "red",
      metric: "> 2.5s",
      status: "Critical"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "First Input Delay (FID)",
      description: "Delayed user interactions create frustrating experiences that damage brand perception and customer satisfaction.",
      impacts: [
        "38% lower session duration",
        "23% fewer page views per session",
        "Higher customer acquisition costs"
      ],
      color: "orange",
      metric: "> 100ms",
      status: "Warning"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Cumulative Layout Shift (CLS)",
      description: "Unexpected layout shifts cause misclicks and user frustration, leading to abandoned transactions and lost revenue.",
      impacts: [
        "24% abandonment on checkout",
        "15% decrease in form submissions",
        "Damaged brand perception"
      ],
      color: "purple",
      metric: "> 0.1",
      status: "Needs Work"
    }
  ];

  const solutions = [
    "Image and asset optimization",
    "Critical rendering path optimization", 
    "Layout stabilization techniques",
    "JavaScript bundle optimization",
    "Server response time improvements",
    "Third-party script management"
  ];

  return (
    <section id="web-vitals" className="py-24 bg-gradient-to-b from-dark-800 to-dark-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-5"></div>
      </div>

      <div className="cyber-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-dark-800/60 border border-red-500/20 mb-8 backdrop-blur-sm">
            <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
            <span className="text-sm font-medium text-dark-200">Core Web Vitals Impact</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-dark-100">Performance Issues</span>
            <br />
            <span className="text-red-400">Costing You Revenue</span>
          </h2>
          
          <p className="text-xl text-dark-300 leading-relaxed">
            Poor web performance directly impacts your bottom line. Slow websites frustrate users, 
            reduce conversions, and hurt search rankings. Here's how we fix it.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-dark-800/50 border border-dark-600/30 rounded-2xl p-8 hover:bg-dark-800/70 transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-0">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`bg-${problem.color}-500/10 text-${problem.color}-400 rounded-xl w-16 h-16 flex items-center justify-center border border-${problem.color}-500/20`}>
                    {problem.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-${problem.color}-400 font-bold text-lg`}>{problem.metric}</div>
                    <div className={`text-${problem.color}-400 text-sm`}>{problem.status}</div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-dark-100">{problem.title}</h3>
                <p className="text-dark-300 mb-6 leading-relaxed">{problem.description}</p>
                
                {/* Impact List */}
                <div className={`bg-${problem.color}-500/5 rounded-xl p-4 border border-${problem.color}-500/10`}>
                  <p className={`text-${problem.color}-400 font-medium mb-3 text-sm flex items-center`}>
                    <Target className="w-4 h-4 mr-2" />
                    Business Impact:
                  </p>
                  <ul className="space-y-2">
                    {problem.impacts.map((impact, idx) => (
                      <li key={idx} className="text-sm text-dark-400 flex items-start">
                        <span className={`text-${problem.color}-500 mr-2 flex-shrink-0 text-lg leading-none`}>•</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution Section */}
        <div className="cyber-glass rounded-3xl p-12 border border-dark-600/30 backdrop-blur-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-neon-green mr-4" />
                <h3 className="text-4xl font-bold text-dark-100">
                  Our <span className="cyber-gradient-text">Solution</span>
                </h3>
              </div>
              
              <p className="text-xl text-dark-300 mb-8 leading-relaxed">
                We systematically address all Core Web Vitals issues using proven optimization 
                techniques that deliver measurable improvements in performance and business metrics.
              </p>
              
              {/* Solutions List */}
              <div className="space-y-4 mb-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-neon-green mr-4 mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-dark-200 font-medium">{solution}</span>
                  </div>
                ))}
              </div>

              <Button className="cyber-button text-lg h-14 px-8 rounded-xl">
                Get Performance Audit
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
            
            {/* Results Stats */}
            <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 rounded-2xl p-8 border border-dark-600/30">
              <h4 className="text-2xl font-semibold mb-8 text-center text-dark-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 mr-3 text-neon-green" />
                Average Client Results
              </h4>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 rounded-xl bg-dark-800/50 border border-neon-blue/20">
                  <div className="text-4xl font-bold text-neon-blue mb-2">68%</div>
                  <div className="text-dark-300 text-sm font-medium">Faster LCP</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-dark-800/50 border border-glow-purple/20">
                  <div className="text-4xl font-bold text-glow-purple mb-2">75%</div>
                  <div className="text-dark-300 text-sm font-medium">Reduced CLS</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-dark-800/50 border border-neon-green/20">
                  <div className="text-4xl font-bold text-neon-green mb-2">58%</div>
                  <div className="text-dark-300 text-sm font-medium">Better FID</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-dark-800/50 border border-neon-yellow/20">
                  <div className="text-4xl font-bold text-neon-yellow mb-2">95+</div>
                  <div className="text-dark-300 text-sm font-medium">Lighthouse Score</div>
                </div>
              </div>
              
              {/* Business Impact */}
              <div className="bg-neon-green/10 rounded-xl p-6 border border-neon-green/20">
                <h5 className="font-semibold text-neon-green mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Business Impact
                </h5>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-green mb-1">+32%</div>
                    <p className="text-sm text-dark-300">Conversion Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-green mb-1">-45%</div>
                    <p className="text-sm text-dark-300">Bounce Rate</p>
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
