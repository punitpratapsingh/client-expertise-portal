
import { ArrowRight, TrendingUp, ShoppingCart, Building2, Globe, Smartphone, Zap, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UseCases = () => {
  const useCases = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-brand-purple" />,
      title: "E-commerce Optimization",
      description: "Boost conversion rates and reduce cart abandonment with lightning-fast page loads.",
      metrics: ["40% increase in conversions", "25% reduction in bounce rate", "60% faster checkout"],
      industry: "Retail & E-commerce",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Building2 className="h-8 w-8 text-brand-blue" />,
      title: "Enterprise Websites",
      description: "Scale your corporate website to handle millions of visitors without compromising speed.",
      metrics: ["99.9% uptime achieved", "50% faster load times", "80% better Core Web Vitals"],
      industry: "Enterprise & Corporate",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-500" />,
      title: "Mobile-First Platforms",
      description: "Optimize for mobile users with progressive web app techniques and advanced caching.",
      metrics: ["70% mobile speed improvement", "45% better engagement", "30% increased retention"],
      industry: "Mobile & Apps",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Media & Publishing",
      description: "Deliver content faster with CDN optimization and image compression strategies.",
      metrics: ["65% faster article loading", "35% more page views", "20% ad revenue increase"],
      industry: "Media & Content",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: "SaaS Platforms",
      description: "Improve user experience and reduce churn with optimized application performance.",
      metrics: ["40% faster dashboard loads", "30% reduced churn rate", "50% better user satisfaction"],
      industry: "SaaS & Technology",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
      title: "Financial Services",
      description: "Ensure secure, fast transactions with optimized performance for financial applications.",
      metrics: ["99.99% transaction success", "35% faster processing", "Enhanced security compliance"],
      industry: "Finance & Banking",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const successStories = [
    {
      company: "TechCorp E-commerce",
      improvement: "150% Revenue Increase",
      description: "After optimizing their checkout flow and reducing page load times by 60%, TechCorp saw a massive boost in conversions.",
      metrics: { before: "3.2s", after: "1.1s", improvement: "66%" }
    },
    {
      company: "Global News Platform",
      improvement: "200% Page Views",
      description: "Implementing advanced caching and image optimization led to dramatically improved user engagement.",
      metrics: { before: "4.8s", after: "1.8s", improvement: "62%" }
    },
    {
      company: "FinanceApp Pro",
      improvement: "85% Faster Transactions",
      description: "Critical performance optimizations reduced transaction processing time and improved user trust.",
      metrics: { before: "2.1s", after: "0.3s", improvement: "86%" }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 bg-gradient-to-r from-brand-purple via-brand-blue to-purple-600 bg-clip-text text-transparent">
              Real-World <span className="text-gray-900">Performance</span> Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover how businesses across industries have transformed their digital presence 
              with our performance optimization expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple_light hover:to-blue-500 text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Your Success Story
              </Button>
              <Button variant="outline" className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-3 rounded-full transition-all duration-300">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Industries We <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Transform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to Fortune 500 companies, we've helped businesses across every industry achieve remarkable performance improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                    {useCase.title}
                  </CardTitle>
                  <p className="text-sm text-brand-purple font-semibold">{useCase.industry}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-brand-purple/5 to-brand-blue/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Success</span> Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses. See how our performance optimization strategies drive measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-brand-purple mb-2">{story.improvement}</h3>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">{story.company}</h4>
                    <p className="text-gray-600 leading-relaxed">{story.description}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-6 mt-6">
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-center">
                        <p className="text-gray-500 font-medium">Before</p>
                        <p className="text-2xl font-bold text-red-500">{story.metrics.before}</p>
                      </div>
                      <ArrowRight className="h-6 w-6 text-brand-purple" />
                      <div className="text-center">
                        <p className="text-gray-500 font-medium">After</p>
                        <p className="text-2xl font-bold text-green-500">{story.metrics.after}</p>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-lg font-bold text-brand-purple">{story.metrics.improvement} Improvement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-dark to-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="text-brand-blue">Transform</span> Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Join hundreds of successful businesses that have revolutionized their digital performance. 
              Let's create your success story together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple_light hover:to-blue-500 text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Get Your Free Audit
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;
