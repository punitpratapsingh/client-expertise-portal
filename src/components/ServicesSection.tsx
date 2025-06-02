
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, LayoutDashboard, LineChart, Smartphone, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Performance Auditing",
      description: "Comprehensive analysis of your website's performance metrics, identifying bottlenecks and optimization opportunities.",
      link: "/performance-auditing",
      color: "meta-blue"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Optimization",
      description: "Code refactoring, asset optimization, and implementation of modern web performance best practices.",
      link: "#",
      color: "meta-purple"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Optimization",
      description: "API optimization, database tuning, and server-side improvements for faster data delivery.",
      link: "#",
      color: "meta-green"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Performance",
      description: "Mobile-specific optimizations ensuring fast experiences across all devices and network conditions.",
      link: "#",
      color: "meta-blue"
    },
    {
      icon: <LayoutDashboard className="h-6 w-6" />,
      title: "Monitoring & Analytics",
      description: "Continuous performance monitoring with custom dashboards and alerts to prevent regressions.",
      link: "#",
      color: "meta-purple"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "UX Enhancement",
      description: "Performance-focused UX improvements creating smoother, more responsive user interfaces.",
      link: "#",
      color: "meta-green"
    }
  ];

  return (
    <section id="services" className="meta-section bg-meta-gray-50/50">
      <div className="meta-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="meta-badge mb-6 animate-meta-scale">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Our Expertise</span>
          </div>
          <h2 className="mb-8 meta-text-balance">
            Services That <span className="meta-gradient-text">Deliver Results</span>
          </h2>
          <p className="text-xl text-meta-gray-600 leading-relaxed meta-text-balance">
            We specialize in solving complex web performance challenges that directly impact your revenue and user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="meta-card meta-interactive border-0 group animate-meta-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`bg-${service.color}-50 text-${service.color}-600 rounded-meta-lg w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-meta-gray-900 group-hover:text-meta-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-meta-gray-600 mb-6 leading-relaxed line-height-relaxed">
                  {service.description}
                </p>
                
                {/* CTA */}
                <Link 
                  to={service.link} 
                  className={`inline-flex items-center text-meta-blue-600 hover:text-meta-blue-700 font-medium transition-colors group-hover:gap-2 gap-1 ${service.link === "#" ? "pointer-events-none opacity-50" : ""}`}
                >
                  Learn more 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="meta-glass rounded-meta-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-meta-gray-900">
              Ready to <span className="meta-gradient-text">Boost Performance</span>?
            </h3>
            <p className="text-meta-gray-600 mb-6">
              Get a free performance audit and discover how we can improve your website's speed and user experience.
            </p>
            <Button className="meta-button text-lg h-12 px-8 rounded-meta-lg shadow-meta-lg hover:shadow-meta-xl group">
              Start Free Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
