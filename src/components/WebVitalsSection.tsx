
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Clock, Zap, TrendingUp, CheckCircle } from "lucide-react";

const WebVitalsSection = () => {
  const problems = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Largest Contentful Paint (LCP)",
      description: "Slow LCP frustrates users waiting for content, leading to high bounce rates and lost revenue.",
      impacts: [
        "25% increase in bounce rate",
        "18% decrease in conversions", 
        "Lower search ranking position"
      ],
      color: "red"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "First Input Delay (FID)",
      description: "Long input delays prevent user interactions, creating frustrating experiences that drive customers away.",
      impacts: [
        "38% lower session duration",
        "23% fewer page views per session",
        "Higher customer acquisition costs"
      ],
      color: "orange"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Cumulative Layout Shift (CLS)",
      description: "Unexpected layout shifts cause misclicks and frustration, damaging user experience and brand perception.",
      impacts: [
        "24% abandonment on checkout",
        "15% decrease in form submissions",
        "Damaged brand perception"
      ],
      color: "purple"
    }
  ];

  const solutions = [
    "Asset optimization and compression",
    "Code splitting and lazy loading", 
    "Layout stabilization techniques",
    "Critical path optimization",
    "Server-side rendering improvements"
  ];

  return (
    <section id="web-vitals" className="meta-section bg-white">
      <div className="meta-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="meta-badge mb-6 animate-meta-scale">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span>Core Web Vitals</span>
          </div>
          <h2 className="mb-8 meta-text-balance">
            Performance Issues <span className="meta-gradient-text">Costing You Revenue</span>
          </h2>
          <p className="text-xl text-meta-gray-600 leading-relaxed meta-text-balance">
            Poor web performance directly impacts your bottom line. Slow websites frustrate users, reduce conversions, and hurt search rankings.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <Card key={index} className="meta-card meta-interactive animate-meta-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`bg-${problem.color}-50 text-${problem.color}-600 rounded-meta-lg w-12 h-12 flex items-center justify-center mb-6`}>
                  {problem.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-meta-gray-900">{problem.title}</h3>
                <p className="text-meta-gray-600 mb-6 leading-relaxed">{problem.description}</p>
                
                {/* Impact List */}
                <div className="bg-red-50 rounded-meta p-4">
                  <p className="text-red-700 font-medium mb-3 text-sm">Business Impact:</p>
                  <ul className="space-y-2">
                    {problem.impacts.map((impact, idx) => (
                      <li key={idx} className="text-sm text-meta-gray-700 flex items-start">
                        <span className="text-red-500 mr-2 flex-shrink-0">•</span>
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
        <div className="meta-glass rounded-meta-xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-meta-gray-900">
                How We <span className="meta-gradient-text">Solve</span> These Problems
              </h3>
              <p className="text-xl text-meta-gray-600 mb-8 leading-relaxed">
                Our systematic approach tackles all Core Web Vitals issues to maximize your site's performance, user experience, and conversions.
              </p>
              
              {/* Solutions List */}
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start animate-meta-fade-in" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                    <CheckCircle className="text-meta-green-500 mr-4 mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-meta-gray-700 font-medium">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Results Stats */}
            <div className="bg-gradient-to-br from-meta-blue-50 to-meta-purple-50 rounded-meta-lg p-8">
              <h4 className="text-2xl font-semibold mb-6 text-center text-meta-gray-900">
                Average Client Improvements
              </h4>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="meta-stat">
                  <div className="meta-stat-number text-3xl">52%</div>
                  <div className="meta-stat-label">Faster LCP</div>
                </div>
                <div className="meta-stat">
                  <div className="meta-stat-number text-3xl">68%</div>
                  <div className="meta-stat-label">Reduced CLS</div>
                </div>
                <div className="meta-stat">
                  <div className="meta-stat-number text-3xl">43%</div>
                  <div className="meta-stat-label">Better FID</div>
                </div>
                <div className="meta-stat">
                  <div className="meta-stat-number text-3xl">94</div>
                  <div className="meta-stat-label">Lighthouse Score</div>
                </div>
              </div>
              
              {/* Business Impact */}
              <div className="bg-meta-green-50 rounded-meta p-6 border border-meta-green-200">
                <h5 className="font-semibold text-meta-green-800 mb-4">Business Impact</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-meta-green-600">+27%</div>
                    <p className="text-sm text-meta-gray-600">Conversion Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-meta-green-600">-32%</div>
                    <p className="text-sm text-meta-gray-600">Bounce Rate</p>
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
