
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Monitor, Database, Smartphone, Globe, Building, Zap, Shield, Cloud, Code2, TrendingUp, Rocket, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-7 w-7" />,
      title: "E-commerce Performance",
      description: "Boost conversion rates and reduce cart abandonment with lightning-fast checkout flows, optimized product pages, and seamless mobile shopping experiences.",
      features: ["Checkout Flow Optimization", "Product Page Speed Boost", "Mobile Commerce Enhancement"],
      metrics: "+340% Conversion Rate",
      link: "/performance-auditing",
      color: "blue",
      gradient: "from-blue-500/20 to-cyan-500/10"
    },
    {
      icon: <Monitor className="h-7 w-7" />,
      title: "SaaS Platform Optimization",
      description: "Enhance user engagement and reduce churn with optimized dashboards, real-time data loading, and smooth interactive experiences for SaaS applications.",
      features: ["Dashboard Performance", "Real-time Data Optimization", "User Experience Enhancement"],
      metrics: "+290% User Engagement",
      link: "#",
      color: "purple",
      gradient: "from-purple-500/20 to-pink-500/10"
    },
    {
      icon: <Building className="h-7 w-7" />,
      title: "Enterprise Application Performance",
      description: "Scale enterprise applications with advanced caching, microservices optimization, and high-availability performance engineering for mission-critical systems.",
      features: ["Microservices Optimization", "Enterprise Caching", "High-Availability Systems"],
      metrics: "+450% Efficiency Gain",
      link: "#",
      color: "green",
      gradient: "from-emerald-500/20 to-green-500/10"
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Mobile App Performance",
      description: "Optimize mobile applications for superior performance with advanced rendering, efficient memory management, and battery-conscious optimization techniques.",
      features: ["Mobile-First Architecture", "Progressive Web Apps", "Native Performance Optimization"],
      metrics: "+520% Speed Boost",
      link: "#",
      color: "orange",
      gradient: "from-orange-500/20 to-yellow-500/10"
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Content & Media Sites",
      description: "Accelerate content delivery with advanced CDN optimization, image compression, and streaming performance for media-rich websites and blogs.",
      features: ["CDN Optimization", "Media Compression", "Content Streaming"],
      metrics: "+380% Load Speed",
      link: "#",
      color: "cyan",
      gradient: "from-cyan-500/20 to-blue-500/10"
    },
    {
      icon: <Database className="h-7 w-7" />,
      title: "Database & API Performance",
      description: "Optimize backend performance with advanced database tuning, API response optimization, and intelligent caching strategies for all website types.",
      features: ["Database Query Optimization", "API Response Enhancement", "Intelligent Caching Systems"],
      metrics: "+670% Response Time",
      link: "#",
      color: "red",
      gradient: "from-red-500/20 to-pink-500/10"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      blue: { text: "text-blue-600", border: "border-blue-300", bg: "bg-blue-50" },
      purple: { text: "text-purple-600", border: "border-purple-300", bg: "bg-purple-50" },
      green: { text: "text-emerald-600", border: "border-emerald-300", bg: "bg-emerald-50" },
      cyan: { text: "text-cyan-600", border: "border-cyan-300", bg: "bg-cyan-50" },
      orange: { text: "text-orange-600", border: "border-orange-300", bg: "bg-orange-50" },
      red: { text: "text-red-600", border: "border-red-300", bg: "bg-red-50" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern-light absolute inset-0 opacity-20"></div>
        <div className="absolute top-1/4 left-10 w-2 h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute top-1/3 right-20 w-2 h-40 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"></div>
      </div>

      <div className="light-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-200 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">All Website Types</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-slate-900">Universal Performance</span>
            <br />
            <span className="light-gradient-text">Engineering Services</span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            15+ years optimizing every type of website and application. From e-commerce to enterprise, 
            mobile apps to SaaS platforms - we make everything lightning fast.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <Card key={index} className="group bg-white/80 border border-slate-200 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
                <CardContent className="p-0">
                  {/* Icon & Metrics */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`bg-gradient-to-br ${service.gradient} ${colors.border} border-2 text-white rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className={colors.text}>
                        {service.icon}
                      </div>
                    </div>
                    <div className={`${colors.bg} ${colors.border} border px-3 py-1 rounded-full`}>
                      <span className={`${colors.text} text-sm font-bold`}>{service.metrics}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-600">
                          <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA */}
                  <Link 
                    to={service.link} 
                    className={`inline-flex items-center ${colors.text} hover:text-blue-600 font-medium transition-colors group-hover:gap-3 gap-2 ${service.link === "#" ? "pointer-events-none opacity-50" : ""}`}
                  >
                    Optimize Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Universal CTA Section */}
        <div className="text-center">
          <div className="light-glass rounded-3xl p-16 max-w-5xl mx-auto border border-slate-200 backdrop-blur-lg">
            <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-8" />
            <h3 className="text-4xl font-bold mb-6 text-slate-900">
              Ready to <span className="light-gradient-text">Optimize</span> Any Website Type?
            </h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Whether you're running e-commerce, SaaS, enterprise applications, or mobile apps - 
              our 15+ years of performance expertise will transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="light-button text-lg h-14 px-10 rounded-xl group relative overflow-hidden shadow-2xl performance-glow">
                <span className="relative z-10">Start Free Analysis</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
              <Button className="light-button-outline text-lg h-14 px-10 rounded-xl">
                Schedule Performance Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
