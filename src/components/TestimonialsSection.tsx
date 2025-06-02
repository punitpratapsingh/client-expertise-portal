
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "They transformed our website performance, cutting load times by 60%. Our conversion rate jumped by 25% in the first month alone.",
    author: "Sarah Johnson",
    position: "VP of Marketing, TechNova Inc.",
    rating: 5,
    logo: "TechNova"
  },
  {
    id: 2,
    content: "After struggling with poor Core Web Vitals scores for months, their team fixed our issues in just two weeks. Google rankings improved dramatically.",
    author: "Michael Chen",
    position: "CTO, EcoCommerce",
    rating: 5,
    logo: "EcoCommerce"
  },
  {
    id: 3,
    content: "The team's deep expertise in performance optimization saved our e-commerce site during peak holiday traffic. ROI was 300% in the first quarter.",
    author: "Emma Rodriguez",
    position: "Digital Director, FashionRetail",
    rating: 5,
    logo: "FashionRetail" 
  },
  {
    id: 4,
    content: "Their methodical approach to fixing our Web Vitals issues not only improved our scores but also reduced our bounce rate by 35%. Incredible results.",
    author: "David Park",
    position: "Head of Digital, HealthPlus",
    rating: 4,
    logo: "HealthPlus"
  },
  {
    id: 5,
    content: "Working with them was seamless. They identified performance bottlenecks we didn't even know existed and fixed them without disrupting our team.",
    author: "Olivia Martinez",
    position: "Product Manager, FinServe Solutions",
    rating: 5,
    logo: "FinServe"
  },
  {
    id: 6,
    content: "The difference in our site's speed is night and day. Our customers have noticed and mentioned it in feedback. Worth every penny.",
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
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-meta-gray-300"
          }`}
        />
      ));
  };

  return (
    <section id="testimonials" className="meta-section bg-meta-gray-50/30">
      <div className="meta-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="meta-badge mb-6 animate-meta-scale">
            <Users className="w-4 h-4 mr-2" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="mb-8 meta-text-balance">
            Trusted by <span className="meta-gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-meta-gray-600 leading-relaxed meta-text-balance">
            Don't just take our word for it. Here's what our clients say about our web performance expertise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {displayedTestimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="meta-card meta-interactive border-0 group animate-meta-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <Quote className="h-6 w-6 text-meta-blue-200" />
                </div>
                
                {/* Testimonial Content */}
                <p className="text-meta-gray-700 mb-8 leading-relaxed min-h-[120px]">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-meta-blue-500 to-meta-purple-500 text-white font-semibold h-12 w-12 rounded-meta flex items-center justify-center mr-4 shadow-meta">
                    {testimonial.logo.substring(0, 2)}
                  </div>
                  <div>
                    <p className="font-semibold text-meta-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-meta-gray-600">{testimonial.position}</p>
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
            className="rounded-full border-meta-gray-300 hover:bg-meta-blue-50 hover:border-meta-blue-300"
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
                  ? "bg-meta-blue-500 hover:bg-meta-blue-600 border-meta-blue-500" 
                  : "border-meta-gray-300 hover:bg-meta-blue-50 hover:border-meta-blue-300"
              }`}
            >
              {index + 1}
            </Button>
          ))}
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextPage} 
            className="rounded-full border-meta-gray-300 hover:bg-meta-blue-50 hover:border-meta-blue-300"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="meta-glass rounded-meta-xl p-12 shadow-meta-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-meta-fade-in">
              <div className="meta-stat-number">500+</div>
              <div className="meta-stat-label">Websites Optimized</div>
            </div>
            <div className="animate-meta-fade-in meta-stagger-1">
              <div className="meta-stat-number">42%</div>
              <div className="meta-stat-label">Average Speed Increase</div>
            </div>
            <div className="animate-meta-fade-in meta-stagger-2">
              <div className="meta-stat-number">27%</div>
              <div className="meta-stat-label">Conversion Improvement</div>
            </div>
            <div className="animate-meta-fade-in meta-stagger-3">
              <div className="meta-stat-number">98%</div>
              <div className="meta-stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
