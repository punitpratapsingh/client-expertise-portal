
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, LayoutDashboard, LineChart, Smartphone, Sparkles, ArrowRight, Cpu, Zap, Brain, Shield, TrendingUp, Code2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <LineChart className="h-7 w-7" />,
      title: "Enterprise Performance Auditing",
      description: "Comprehensive React application analysis with advanced tooling and 15+ years of optimization expertise for enterprise-scale applications.",
      features: ["Advanced React Profiling", "Core Web Vitals Deep Dive", "Enterprise Benchmarking"],
      link: "/performance-auditing",
      color: "blue",
      gradient: "from-blue-500/20 to-cyan-500/10"
    },
    {
      icon: <Code2 className="h-7 w-7" />,
      title: "React Performance Engineering",
      description: "Advanced React optimization techniques including bundle splitting, code elimination, and modern React 18+ concurrent features implementation.",
      features: ["React Suspense Optimization", "Bundle Analysis & Splitting", "Component Performance Tuning"],
      link: "#",
      color: "purple",
      gradient: "from-purple-500/20 to-pink-500/10"
    },
    {
      icon: <Database className="h-7 w-7" />,
      title: "Backend & API Optimization",
      description: "Server-side performance engineering with advanced caching strategies, database optimization, and CDN configuration for React applications.",
      features: ["API Response Optimization", "Advanced Caching Layers", "CDN & Edge Computing"],
      link: "#",
      color: "green",
      gradient: "from-emerald-500/20 to-green-500/10"
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Mobile React Optimization",
      description: "Specialized mobile performance optimization for React applications with focus on Core Web Vitals and mobile-specific user experience.",
      features: ["Mobile-First React Architecture", "Progressive Web Apps", "Touch & Gesture Optimization"],
      link: "#",
      color: "cyan",
      gradient: "from-cyan-500/20 to-blue-500/10"
    },
    {
      icon: <Brain className="h-7 w-7" />,
      title: "AI-Powered Monitoring",
      description: "Intelligent performance monitoring with machine learning insights, predictive analytics, and automated optimization recommendations.",
      features: ["Real-time Performance Analytics", "Predictive Performance Insights", "Automated Optimization Alerts"],
      link: "#",
      color: "orange",
      gradient: "from-orange-500/20 to-yellow-500/10"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Enterprise Security & Performance",
      description: "Comprehensive security audits combined with performance optimization for enterprise React applications with compliance requirements.",
      features: ["Security-First Performance", "Compliance Testing", "Enterprise-Grade Monitoring"],
      link: "#",
      color: "red",
      gradient: "from-red-500/20 to-pink-500/10"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      blue: { text: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10" },
      purple: { text: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
      green: { text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
      cyan: { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10" },
      orange: { text: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10" },
      red: { text: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="services" className="py-24 bg-zinc-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern-dark absolute inset-0 opacity-10"></div>
        <div className="absolute top-1/4 left-10 w-2 h-32 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
        <div className="absolute top-1/3 right-20 w-2 h-40 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent"></div>
      </div>

      <div className="dark-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-800/60 border border-cyan-500/30 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm font-medium text-zinc-300">Enterprise Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Senior React</span>
            <br />
            <span className="dark-gradient-text">Performance Engineering</span>
          </h2>
          
          <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            15+ years of React expertise delivering enterprise-grade performance solutions. 
            From initial auditing to advanced optimization, we solve what others can't.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <Card key={index} className="group bg-zinc-800/40 border border-zinc-700/50 rounded-2xl p-8 hover:bg-zinc-800/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm">
                <CardContent className="p-0">
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${service.gradient} ${colors.border} border-2 text-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className={colors.text}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zinc-400">
                          <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA */}
                  <Link 
                    to={service.link} 
                    className={`inline-flex items-center ${colors.text} hover:text-blue-300 font-medium transition-colors group-hover:gap-3 gap-2 ${service.link === "#" ? "pointer-events-none opacity-50" : ""}`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="dark-glass rounded-3xl p-16 max-w-4xl mx-auto border border-zinc-700/50 backdrop-blur-lg">
            <TrendingUp className="h-16 w-16 text-cyan-400 mx-auto mb-8" />
            <h3 className="text-4xl font-bold mb-6 text-white">
              Ready to <span className="dark-gradient-text">Transform</span> Your React Performance?
            </h3>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Get started with a comprehensive enterprise performance audit and discover how our 
              15+ years of React expertise can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="dark-button text-lg h-14 px-10 rounded-xl group relative overflow-hidden shadow-2xl neon-glow">
                <span className="relative z-10">Start Enterprise Audit</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              <Button className="dark-button-outline text-lg h-14 px-10 rounded-xl">
                Schedule Expert Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
