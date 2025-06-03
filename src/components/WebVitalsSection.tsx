
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

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      red: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-600",
        icon: "text-red-500"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200", 
        text: "text-orange-600",
        icon: "text-orange-500"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600", 
        icon: "text-purple-500"
      }
    };
    return colorMap[color] || colorMap.red;
  };

  return (
    <section id="web-vitals" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern-light absolute inset-0 opacity-20"></div>
      </div>

      <div className="modern-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-50 border border-red-200 mb-8 backdrop-blur-sm">
            <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
            <span className="text-sm font-medium text-red-700">Core Web Vitals Impact</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-gray-800">Performance Issues</span>
            <br />
            <span className="text-red-500">Costing You Revenue</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Poor web performance directly impacts your bottom line. Slow websites frustrate users, 
            reduce conversions, and hurt search rankings. Here's how we fix it.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => {
            const colors = getColorClasses(problem.color);
            return (
              <Card key={index} className="modern-card modern-card-hover">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${colors.bg} ${colors.border} border rounded-xl w-16 h-16 flex items-center justify-center`}>
                      <div className={colors.icon}>
                        {problem.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`${colors.text} font-bold text-lg`}>{problem.metric}</div>
                      <div className={`${colors.text} text-sm`}>{problem.status}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{problem.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{problem.description}</p>
                  
                  {/* Impact List */}
                  <div className={`${colors.bg} ${colors.border} border rounded-xl p-4`}>
                    <p className={`${colors.text} font-medium mb-3 text-sm flex items-center`}>
                      <Target className="w-4 h-4 mr-2" />
                      Business Impact:
                    </p>
                    <ul className="space-y-2">
                      {problem.impacts.map((impact, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className={`${colors.text} mr-2 flex-shrink-0 text-lg leading-none`}>•</span>
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
        <div className="modern-glass rounded-3xl p-12 border border-gray-200 backdrop-blur-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-emerald-600 mr-4" />
                <h3 className="text-4xl font-bold text-gray-800">
                  Our <span className="modern-gradient-text">Solution</span>
                </h3>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We systematically address all Core Web Vitals issues using proven optimization 
                techniques that deliver measurable improvements in performance and business metrics.
              </p>
              
              {/* Solutions List */}
              <div className="space-y-4 mb-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-emerald-500 mr-4 mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{solution}</span>
                  </div>
                ))}
              </div>

              <Button className="modern-button text-lg h-14 px-8 rounded-xl">
                Get Performance Audit
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
            
            {/* Results Stats */}
            <div className="bg-gradient-to-br from-white/80 to-gray-50/80 rounded-2xl p-8 border border-gray-200">
              <h4 className="text-2xl font-semibold mb-8 text-center text-gray-800 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 mr-3 text-emerald-600" />
                Average Client Results
              </h4>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">68%</div>
                  <div className="text-gray-600 text-sm font-medium">Faster LCP</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-purple-50 border border-purple-200">
                  <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
                  <div className="text-gray-600 text-sm font-medium">Reduced CLS</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">58%</div>
                  <div className="text-gray-600 text-sm font-medium">Better FID</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-orange-50 border border-orange-200">
                  <div className="text-4xl font-bold text-orange-500 mb-2">95+</div>
                  <div className="text-gray-600 text-sm font-medium">Lighthouse Score</div>
                </div>
              </div>
              
              {/* Business Impact */}
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h5 className="font-semibold text-emerald-700 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Business Impact
                </h5>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">+32%</div>
                    <p className="text-sm text-gray-600">Conversion Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">-45%</div>
                    <p className="text-sm text-gray-600">Bounce Rate</p>
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
