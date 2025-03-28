
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, LayoutDashboard, LineChart, Smartphone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: <LineChart className="h-8 w-8 text-brand-purple" />,
      title: "Performance Auditing",
      description: "Comprehensive audits of your website's performance metrics, identifying all bottlenecks and opportunities for improvement.",
      link: "/performance-auditing"
    },
    {
      icon: <Code className="h-8 w-8 text-brand-purple" />,
      title: "Frontend Optimization",
      description: "Code refactoring, asset optimization, and implementation of modern web performance techniques.",
      link: "#"
    },
    {
      icon: <Database className="h-8 w-8 text-brand-purple" />,
      title: "Backend Optimization",
      description: "API optimization, database tuning, and server-side rendering improvements to speed up data delivery.",
      link: "#"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-brand-purple" />,
      title: "Mobile Performance",
      description: "Mobile-specific optimizations to ensure fast, smooth experiences on all devices and network conditions.",
      link: "#"
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-brand-purple" />,
      title: "Monitoring & Analytics",
      description: "Ongoing performance monitoring with custom dashboards and alerts to prevent future regressions.",
      link: "#"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-brand-purple" />,
      title: "UX Enhancement",
      description: "Performance-focused UX improvements that create smoother, more responsive interfaces users love.",
      link: "#"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our <span className="gradient-text">Expertise</span></h2>
          <p className="text-lg text-gray-600">
            We specialize in solving complex web performance issues that directly impact your revenue and user retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-all group">
              <CardContent className="p-6">
                <div className="bg-brand-purple/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className={`text-brand-purple hover:underline font-medium inline-flex items-center ${service.link === "#" ? "pointer-events-none opacity-50" : ""}`}
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-brand-purple hover:bg-brand-purple_light text-lg h-12 px-8">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
