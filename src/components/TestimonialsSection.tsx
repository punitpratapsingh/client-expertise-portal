
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote, Users, ShoppingCart, Monitor, Building, Smartphone, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "Our e-commerce conversion rate jumped 340% after Performetix optimized our checkout flow. Black Friday sales hit record highs with zero downtime. Absolutely transformational.",
    author: "Sarah Johnson",
    position: "VP of E-commerce, MegaRetail",
    rating: 5,
    logo: "MR",
    type: "E-commerce",
    icon: <ShoppingCart className="w-4 h-4" />,
    color: "blue"
  },
  {
    id: 2,
    content: "Our SaaS dashboard went from sluggish to lightning-fast. User engagement increased 290% and churn dropped by half. The team's expertise in React optimization is unmatched.",
    author: "Michael Chen",
    position: "CTO, CloudFlow SaaS",
    rating: 5,
    logo: "CF",
    type: "SaaS Platform",
    icon: <Monitor className="w-4 h-4" />,
    color: "purple"
  },
  {
    id: 3,
    content: "Enterprise-grade performance for our global application. 450% efficiency improvement across all regions. Their microservices optimization saved millions in infrastructure costs.",
    author: "Emma Rodriguez",
    position: "Enterprise Architect, GlobalTech",
    rating: 5,
    logo: "GT",
    type: "Enterprise",
    icon: <Building className="w-4 h-4" />,
    color: "emerald"
  },
  {
    id: 4,
    content: "Mobile app performance increased 520% with their optimization. Battery usage dropped, user satisfaction soared. Our app store ratings went from 3.2 to 4.9 stars.",
    author: "David Park",
    position: "Mobile Lead, AppVenture",
    rating: 5,
    logo: "AV",
    type: "Mobile App",
    icon: <Smartphone className="w-4 h-4" />,
    color: "orange"
  },
  {
    id: 5,
    content: "Content delivery speed improved 380% globally. Our media-rich website now loads instantly worldwide. SEO rankings jumped to page 1 across all target keywords.",
    author: "Olivia Martinez",
    position: "Digital Director, MediaFlow",
    rating: 5,
    logo: "MF",
    type: "Content Site",
    icon: <Globe className="w-4 h-4" />,
    color: "cyan"
  },
  {
    id: 6,
    content: "Backend API response times improved 670%. Database queries optimized beyond recognition. Our entire tech stack now performs like a Formula 1 car.",
    author: "James Wilson",
    position: "Backend Architect, DataDyne",
    rating: 5,
    logo: "DD",
    type: "Backend/API",
    icon: <Database className="w-4 h-4" />,
    color: "red"
  }
];

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-600"
          }`}
        />
      ));
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      blue: "from-blue-500 to-cyan-500",
      purple: "from-purple-500 to-pink-500",
      emerald: "from-emerald-500 to-green-500",
      orange: "from-orange-500 to-yellow-500",
      cyan: "from-cyan-500 to-blue-500",
      red: "from-red-500 to-pink-500"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="testimonials" className="dark-section bg-zinc-900">
      <div className="dark-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="dark-badge mb-6 animate-slide-up">
            <Users className="w-4 h-4 mr-2" />
            <span>All Website Types Success Stories</span>
          </div>
          <h2 className="mb-8 text-white">
            Trusted by <span className="dark-gradient-text">Every Industry</span>
          </h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            From e-commerce to enterprise, SaaS to mobile apps - see how our 15+ years of performance expertise transforms every type of website and application.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {displayedTestimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="dark-card dark-card-hover border-0 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <Quote className="h-6 w-6 text-blue-400/50" />
                </div>
                
                {/* Website Type Badge */}
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getColorClasses(testimonial.color)} mr-3`}>
                    <div className="text-white">
                      {testimonial.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-zinc-400">{testimonial.type}</span>
                </div>
                
                {/* Testimonial Content */}
                <p className="text-zinc-300 mb-8 leading-relaxed min-h-[120px]">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className={`bg-gradient-to-br ${getColorClasses(testimonial.color)} text-white font-semibold h-12 w-12 rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                    {testimonial.logo}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-zinc-400">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-16 space-x-3">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevPage} 
            className="rounded-full border-zinc-600 hover:bg-zinc-800 hover:border-blue-500 text-zinc-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {Array(pageCount).fill(0).map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index ? "default" : "outline"}
              size="icon"
              onClick={() => setCurrentPage(index)}
              className={`rounded-full ${
                currentPage === index 
                  ? "bg-blue-500 hover:bg-blue-600 border-blue-500" 
                  : "border-zinc-600 hover:bg-zinc-800 hover:border-blue-500 text-zinc-300"
              }`}
            >
              {index + 1}
            </Button>
          ))}
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextPage} 
            className="rounded-full border-zinc-600 hover:bg-zinc-800 hover:border-blue-500 text-zinc-300"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Universal Stats Section */}
        <div className="dark-glass rounded-3xl p-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="dark-stat-number">2000+</div>
              <div className="dark-stat-label">Total Websites</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="dark-stat-number">500+</div>
              <div className="dark-stat-label">E-commerce Sites</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="dark-stat-number">300+</div>
              <div className="dark-stat-label">SaaS Platforms</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="dark-stat-number">200+</div>
              <div className="dark-stat-label">Enterprise Apps</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="dark-stat-number">1000+</div>
              <div className="dark-stat-label">Mobile Apps</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="dark-stat-number">15+</div>
              <div className="dark-stat-label">Years Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
