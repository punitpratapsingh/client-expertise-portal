
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$1,499",
      description: "Perfect for small businesses and blogs",
      features: [
        "Core Web Vitals audit",
        "Basic performance optimization",
        "Image optimization",
        "Basic CSS/JS optimization",
        "One-time implementation",
        "30 days support"
      ],
      mostPopular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "$2,999",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "Everything in Starter",
        "Advanced performance audit",
        "Complete Core Web Vitals optimization",
        "Server-side optimizations",
        "Performance monitoring setup",
        "Custom caching strategy",
        "3 months support",
        "Monthly performance reports"
      ],
      mostPopular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large websites with complex needs",
      features: [
        "Everything in Professional",
        "Comprehensive site-wide optimization",
        "Custom CDN configuration",
        "Advanced monitoring & alerting",
        "Performance budget implementation",
        "CI/CD performance testing",
        "Team training workshop",
        "Dedicated performance engineer",
        "12 months support"
      ],
      mostPopular: false,
      buttonText: "Contact Us"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-brand-dark text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
          <p className="text-lg text-gray-300">
            Choose the plan that fits your needs. All plans include our core optimization techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${
                plan.mostPopular 
                  ? "border-brand-purple bg-white/5" 
                  : "border-gray-700 bg-white/[0.02]"
              } rounded-xl overflow-hidden relative`}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 left-0 w-full bg-brand-purple text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className={`${plan.mostPopular ? "pt-10" : "pt-6"} pb-6 text-center border-b border-gray-700`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="text-4xl font-bold my-4">{plan.price}</div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-purple_light mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  className={`w-full ${
                    plan.mostPopular 
                      ? "bg-brand-purple hover:bg-brand-purple_light" 
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Not sure which plan is right for you? Schedule a free consultation.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
