
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Rocket, Building, Phone } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Performance Starter",
      price: "$1,499",
      description: "Perfect for small websites and blogs",
      features: [
        "Complete Core Web Vitals audit",
        "Basic performance optimization",
        "Image & asset optimization",
        "CSS/JS minification & compression",
        "Performance monitoring setup",
        "One-time implementation",
        "30 days support & consultation",
        "Performance improvement guarantee"
      ],
      mostPopular: false,
      buttonText: "Start Optimization",
      icon: <Zap className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Performance Pro",
      price: "$2,999", 
      description: "Ideal for e-commerce and growing businesses",
      features: [
        "Everything in Starter plan",
        "Advanced performance engineering",
        "Complete Core Web Vitals optimization",
        "Server-side & CDN optimizations",
        "Real-time performance monitoring",
        "Custom caching strategies",
        "Mobile performance optimization",
        "3 months ongoing support",
        "Monthly performance reports",
        "Performance budget implementation"
      ],
      mostPopular: true,
      buttonText: "Get Pro Optimization",
      icon: <Rocket className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise Performance",
      price: "Custom",
      description: "For large applications and complex systems",
      features: [
        "Everything in Pro plan",
        "Comprehensive site-wide optimization", 
        "Advanced CDN & edge optimization",
        "Microservices performance tuning",
        "CI/CD performance testing integration",
        "Team training & knowledge transfer",
        "Dedicated performance engineer",
        "24/7 monitoring & alerting",
        "12 months premium support",
        "Custom SLA agreements"
      ],
      mostPopular: false,
      buttonText: "Contact Enterprise",
      icon: <Building className="w-5 h-5" />,
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="pricing" className="dark-section bg-zinc-900">
      <div className="dark-container">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="dark-badge mb-6 animate-slide-up">
            <Zap className="w-4 h-4 mr-2" />
            <span>Performance Investment</span>
          </div>
          <h2 className="mb-8 text-white">
            Simple, Transparent <span className="dark-gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            Choose the performance optimization plan that fits your needs. All plans include our 15+ years of expertise and performance improvement guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`dark-card border-0 relative overflow-hidden group animate-slide-up ${
                plan.mostPopular ? "dark-card-hover scale-105" : "dark-card-hover"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular Choice
                </div>
              )}
              
              <CardHeader className={`${plan.mostPopular ? "pt-12" : "pt-8"} pb-6 text-center`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mx-auto mb-4 text-white`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold dark-gradient-text mb-2">{plan.price}</div>
                <p className="text-zinc-400">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-400" />
                      </div>
                      <span className="text-zinc-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="px-8 pb-8">
                <Button 
                  className={`w-full ${
                    plan.mostPopular 
                      ? "dark-button" 
                      : "dark-button-outline"
                  } h-12 text-base font-medium`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="dark-glass rounded-3xl p-12 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not Sure Which Plan? <span className="dark-gradient-text">We're Here to Help</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-8">
              Schedule a free 30-minute consultation to discuss your specific performance needs and get a custom recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-center p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50">
              <Phone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Free Consultation</h4>
              <p className="text-zinc-400 text-sm mb-4">30-minute strategy session to analyze your current performance</p>
              <Button className="dark-button-outline">
                Book Free Call
              </Button>
            </div>
            <div className="text-center p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50">
              <Zap className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Performance Audit</h4>
              <p className="text-zinc-400 text-sm mb-4">Comprehensive analysis of your website's current performance</p>
              <Button className="dark-button-outline">
                Get Free Audit
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 text-sm">
              💡 All plans include our performance improvement guarantee. If we don't improve your Core Web Vitals scores, you don't pay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
