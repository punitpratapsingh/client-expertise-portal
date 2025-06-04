
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "Their 15+ year React expertise transformed our enterprise application. Load times dropped by 75% and our conversion rate increased by 40%. Absolutely incredible results.",
    author: "Sarah Johnson",
    position: "VP of Engineering, TechNova Inc.",
    rating: 5,
    logo: "TechNova"
  },
  {
    id: 2,
    content: "After struggling with React performance issues for months, their senior team fixed our Core Web Vitals in just two weeks. Google rankings improved by 300%.",
    author: "Michael Chen",
    position: "CTO, EcoCommerce",
    rating: 5,
    logo: "EcoCommerce"
  },
  {
    id: 3,
    content: "The team's deep React expertise saved our e-commerce platform during Black Friday. Their optimization delivered 500% ROI in the first quarter alone.",
    author: "Emma Rodriguez",
    position: "Digital Director, FashionRetail",
    rating: 5,
    logo: "FashionRetail" 
  },
  {
    id: 4,
    content: "Their methodical approach to React optimization not only improved our Lighthouse scores but also reduced our server costs by 60%. World-class engineering.",
    author: "David Park",
    position: "Head of Technology, HealthPlus",
    rating: 5,
    logo: "HealthPlus"
  },
  {
    id: 5,
    content: "Working with this senior React team was seamless. They identified performance bottlenecks we didn't know existed and delivered enterprise-grade solutions.",
    author: "Olivia Martinez",
    position: "Product Manager, FinServe Solutions",
    rating: 5,
    logo: "FinServe"
  },
  {
    id: 6,
    content: "The difference in our React app's performance is night and day. Our enterprise customers have noticed and mentioned it in every feedback session.",
    author: "James Wilson",
    position: "CEO, LocalBiz Platform",
    rating: 5,
    logo: "LocalBiz"
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

  return (
    <section id="testimonials" className="dark-section bg-zinc-900">
      <div className="dark-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="dark-badge mb-6 animate-slide-up">
            <Users className="w-4 h-4 mr-2" />
            <span>Enterprise Success Stories</span>
          </div>
          <h2 className="mb-8 text-white">
            Trusted by <span className="dark-gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            Don't just take our word for it. Here's what enterprise clients say about our 15+ years of React performance expertise.
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
                
                {/* Testimonial Content */}
                <p className="text-zinc-300 mb-8 leading-relaxed min-h-[120px]">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold h-12 w-12 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    {testimonial.logo.substring(0, 2)}
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

        {/* Stats Section */}
        <div className="dark-glass rounded-3xl p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="dark-stat-number">1000+</div>
              <div className="dark-stat-label">React Apps Optimized</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="dark-stat-number">85%</div>
              <div className="dark-stat-label">Average Speed Increase</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="dark-stat-number">67%</div>
              <div className="dark-stat-label">Revenue Growth</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="dark-stat-number">15+</div>
              <div className="dark-stat-label">Years React Expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
