
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
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
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <section id="testimonials" className="section-padding bg-brand-purple/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Client <span className="gradient-text">Success Stories</span></h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about our web performance expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <Quote className="h-8 w-8 text-brand-purple/20" />
                </div>
                <p className="text-gray-700 mb-6 min-h-[120px]">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="bg-gray-200 text-brand-purple font-bold h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    {testimonial.logo.substring(0, 2)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <Button variant="outline" size="icon" onClick={prevPage}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array(pageCount)
            .fill(0)
            .map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(index)}
                className={currentPage === index ? "bg-brand-purple" : ""}
              >
                {index + 1}
              </Button>
            ))}
          <Button variant="outline" size="icon" onClick={nextPage}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-16 p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-brand-purple mb-2">500+</h3>
              <p className="text-gray-600">Websites Optimized</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-brand-purple mb-2">42%</h3>
              <p className="text-gray-600">Average Speed Increase</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-brand-purple mb-2">27%</h3>
              <p className="text-gray-600">Conversion Improvement</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-brand-purple mb-2">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
