
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, LayoutDashboard, LineChart, Smartphone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      title: "Performance Auditing",
      description: "Comprehensive audits of your website's performance metrics, identifying all bottlenecks and opportunities for improvement.",
      link: "/performance-auditing",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: "Frontend Optimization",
      description: "Code refactoring, asset optimization, and implementation of modern web performance techniques.",
      link: "#",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Backend Optimization",
      description: "API optimization, database tuning, and server-side rendering improvements to speed up data delivery.",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Mobile Performance",
      description: "Mobile-specific optimizations to ensure fast, smooth experiences on all devices and network conditions.",
      link: "#",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-orange-600" />,
      title: "Monitoring & Analytics",
      description: "Ongoing performance monitoring with custom dashboards and alerts to prevent future regressions.",
      link: "#",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-pink-600" />,
      title: "UX Enhancement",
      description: "Performance-focused UX improvements that create smoother, more responsive interfaces users love.",
      link: "#",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Our <span className="gradient-text">Expertise</span></h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We specialize in solving complex web performance issues that directly impact your revenue and user retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="interactive-card group border-0 shadow-lg">
              <CardContent className="p-8">
                <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link 
                  to={service.link} 
                  className={`text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors ${service.link === "#" ? "pointer-events-none opacity-50" : ""}`}
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg h-12 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
