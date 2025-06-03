
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, LayoutDashboard, LineChart, Smartphone, Sparkles, ArrowRight, Cpu, Zap, Brain, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <LineChart className="h-7 w-7" />,
      title: "Performance Auditing",
      description: "Comprehensive analysis of your website's performance bottlenecks with detailed reports and actionable recommendations.",
      features: ["Core Web Vitals Analysis", "Lighthouse Scoring", "Performance Benchmarking"],
      link: "/performance-auditing",
      color: "neon-blue",
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      icon: <Code className="h-7 w-7" />,
      title: "Frontend Optimization",
      description: "Advanced code optimization techniques to reduce bundle sizes, improve loading speeds, and enhance user experience.",
      features: ["Code Splitting", "Asset Optimization", "Lazy Loading"],
      link: "#",
      color: "glow-purple",
      gradient: "from-glow-purple to-neon-pink"
    },
    {
      icon: <Database className="h-7 w-7" />,
      title: "Backend Enhancement",
      description: "Server-side optimization strategies to improve response times, database queries, and API performance.",
      features: ["Database Optimization", "Caching Strategies", "CDN Implementation"],
      link: "#",
      color: "neon-green",
      gradient: "from-neon-green to-neon-yellow"
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Mobile Optimization",
      description: "Specialized mobile performance enhancements for better user experience across all devices and platforms.",
      features: ["Progressive Web Apps", "Mobile-First Design", "Touch Optimization"],
      link: "#",
      color: "neon-cyan",
      gradient: "from-neon-cyan to-neon-blue"
    },
    {
      icon: <Brain className="h-7 w-7" />,
      title: "AI Monitoring",
      description: "Intelligent performance monitoring with predictive analytics and automated optimization recommendations.",
      features: ["Real-time Analytics", "Predictive Insights", "Automated Alerts"],
      link: "#",
      color: "glow-orange",
      gradient: "from-glow-orange to-neon-yellow"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Security & Performance",
      description: "Comprehensive security audits combined with performance optimization for enterprise-grade solutions.",
      features: ["Security Scanning", "Performance Testing", "Compliance Checks"],
      link: "#",
      color: "neon-pink",
      gradient: "from-neon-pink to-glow-purple"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-dark-900 to-dark-800 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-5"></div>
        <div className="absolute top-1/4 left-10 w-2 h-32 bg-gradient-to-b from-transparent via-neon-cyan to-transparent opacity-20"></div>
        <div className="absolute top-1/3 right-20 w-2 h-40 bg-gradient-to-b from-transparent via-glow-purple to-transparent opacity-20"></div>
      </div>

      <div className="cyber-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-dark-800/60 border border-neon-cyan/20 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-neon-cyan" />
            <span className="text-sm font-medium text-dark-200">Our Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-dark-100">Comprehensive</span>
            <br />
            <span className="cyber-gradient-text">Performance Solutions</span>
          </h2>
          
          <p className="text-xl text-dark-300 leading-relaxed max-w-3xl mx-auto">
            From initial auditing to ongoing optimization, we provide end-to-end performance solutions 
            that drive measurable business results and exceptional user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group bg-dark-800/50 border border-dark-600/30 rounded-2xl p-8 hover:bg-dark-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm">
              <CardContent className="p-0">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${service.gradient} text-dark-900 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 text-dark-100 group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-dark-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-dark-400">
                        <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA */}
                <Link 
                  to={service.link} 
                  className={`inline-flex items-center text-neon-cyan hover:text-neon-blue font-medium transition-colors group-hover:gap-3 gap-2 ${service.link === "#" ? "pointer-events-none opacity-50" : ""}`}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="cyber-glass rounded-3xl p-16 max-w-4xl mx-auto border border-dark-600/30 backdrop-blur-lg">
            <TrendingUp className="h-16 w-16 text-neon-cyan mx-auto mb-8" />
            <h3 className="text-4xl font-bold mb-6 text-dark-100">
              Ready to <span className="cyber-gradient-text">Accelerate</span> Your Performance?
            </h3>
            <p className="text-xl text-dark-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Get started with a comprehensive performance audit and discover how we can 
              transform your website's speed, user experience, and conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="cyber-button text-lg h-14 px-10 rounded-xl group relative overflow-hidden shadow-neon-lg">
                <span className="relative z-10">Start Free Audit</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              <Button variant="outline" className="text-lg h-14 px-10 rounded-xl border-2 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 bg-transparent">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
