
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, LayoutDashboard, LineChart, Smartphone, Sparkles, ArrowRight, Cpu, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Neural Performance Analysis",
      description: "Advanced AI-driven diagnostics that identify performance bottlenecks with quantum precision and predictive analytics.",
      link: "/performance-auditing",
      color: "neon-blue",
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Quantum Code Optimization",
      description: "Revolutionary frontend architecture enhancement using machine learning algorithms and next-gen compression techniques.",
      link: "#",
      color: "glow-purple",
      gradient: "from-glow-purple to-neon-pink"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Core Enhancement",
      description: "High-performance backend optimization with distributed computing and intelligent caching algorithms.",
      link: "#",
      color: "neon-green",
      gradient: "from-neon-green to-neon-yellow"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Matrix Optimization",
      description: "Cross-platform performance enhancement designed for multi-device ecosystems and edge computing.",
      link: "#",
      color: "neon-cyan",
      gradient: "from-neon-cyan to-neon-blue"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Monitoring Systems",
      description: "Intelligent real-time performance monitoring with predictive maintenance and automated optimization protocols.",
      link: "#",
      color: "glow-orange",
      gradient: "from-glow-orange to-neon-yellow"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "UX Neural Enhancement",
      description: "Cognitive-optimized user experience improvements powered by behavioral analysis and performance psychology.",
      link: "#",
      color: "neon-pink",
      gradient: "from-neon-pink to-glow-purple"
    }
  ];

  return (
    <section id="services" className="cyber-section relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-32 bg-gradient-to-b from-transparent via-neon-cyan to-transparent opacity-30 animate-data-stream"></div>
        <div className="absolute top-1/3 right-20 w-2 h-40 bg-gradient-to-b from-transparent via-glow-purple to-transparent opacity-30 animate-data-stream" style={{ animationDelay: '2s' }}></div>
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
      </div>

      <div className="cyber-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="cyber-badge mb-8 animate-neon-pulse">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Advanced Solutions</span>
          </div>
          <h2 className="mb-8 text-balance">
            Services That <span className="cyber-gradient-text">Redefine Performance</span>
          </h2>
          <p className="text-xl text-dark-200 leading-relaxed text-balance">
            Cutting-edge optimization technologies designed to transform your digital infrastructure and maximize operational efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="cyber-card cyber-card-hover border-0 group animate-slide-up neon-border" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${service.gradient} text-dark-900 rounded-2xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-neon-sm`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-dark-100 group-hover:text-neon-cyan transition-colors cyber-text-glow">
                  {service.title}
                </h3>
                <p className="text-dark-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* CTA */}
                <Link 
                  to={service.link} 
                  className={`inline-flex items-center text-neon-cyan hover:text-neon-blue font-medium transition-colors group-hover:gap-3 gap-2 cyber-text-glow ${service.link === "#" ? "pointer-events-none opacity-50" : ""}`}
                >
                  Access Module
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="cyber-glass rounded-3xl p-12 max-w-3xl mx-auto neon-border">
            <h3 className="text-3xl font-semibold mb-6 text-dark-100">
              Ready to <span className="cyber-gradient-text">Quantum Leap</span> Your Performance?
            </h3>
            <p className="text-dark-200 mb-8 text-lg">
              Initialize your free neural performance analysis and discover the future of web optimization.
            </p>
            <Button className="cyber-button text-lg h-14 px-10 rounded-2xl group relative overflow-hidden">
              <span className="relative z-10">Launch Analysis Protocol</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
