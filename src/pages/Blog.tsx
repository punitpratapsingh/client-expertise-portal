
import { Calendar, Clock, ArrowRight, User, Tag, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to Core Web Vitals in 2024",
    excerpt: "Everything you need to know about Google's Core Web Vitals, from LCP to CLS, and how to optimize them for better search rankings and user experience.",
    image: "/placeholder.svg",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Core Web Vitals",
    slug: "complete-guide-core-web-vitals-2024"
  };

  const blogPosts = [
    {
      title: "5 Performance Optimization Techniques That Increased Our Client's Revenue by 200%",
      excerpt: "Discover the exact strategies we used to dramatically improve website performance and boost conversions for our e-commerce client.",
      image: "/placeholder.svg",
      author: "Mike Rodriguez",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Case Study",
      slug: "performance-optimization-200-percent-revenue-increase"
    },
    {
      title: "Image Optimization: The Ultimate Guide for 2024",
      excerpt: "Learn advanced image optimization techniques including WebP, AVIF, lazy loading, and responsive images to boost your site speed.",
      image: "/placeholder.svg",
      author: "Emily Davis",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Technical Guide",
      slug: "image-optimization-ultimate-guide-2024"
    },
    {
      title: "How to Achieve Perfect Lighthouse Scores: A Step-by-Step Tutorial",
      excerpt: "Follow our comprehensive guide to achieve 100/100 Lighthouse scores across all categories: Performance, Accessibility, Best Practices, and SEO.",
      image: "/placeholder.svg",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "15 min read",
      category: "Tutorial",
      slug: "perfect-lighthouse-scores-tutorial"
    },
    {
      title: "The Hidden Performance Costs of Third-Party Scripts",
      excerpt: "Understand how third-party scripts impact your site's performance and learn strategies to minimize their negative effects.",
      image: "/placeholder.svg",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Performance",
      slug: "hidden-costs-third-party-scripts"
    },
    {
      title: "Mobile Performance Optimization: Beyond the Basics",
      excerpt: "Advanced techniques for optimizing mobile performance, including progressive loading, service workers, and mobile-specific optimizations.",
      image: "/placeholder.svg",
      author: "Alex Johnson",
      date: "March 3, 2024",
      readTime: "11 min read",
      category: "Mobile",
      slug: "mobile-performance-optimization-advanced"
    },
    {
      title: "CDN Strategy: Choosing the Right Content Delivery Network",
      excerpt: "A comprehensive comparison of CDN providers and strategies for implementing an effective content delivery strategy.",
      image: "/placeholder.svg",
      author: "Rachel Green",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Infrastructure",
      slug: "cdn-strategy-content-delivery-network"
    }
  ];

  const categories = [
    "All Posts", "Core Web Vitals", "Performance", "Case Study", 
    "Technical Guide", "Tutorial", "Mobile", "Infrastructure"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 bg-gradient-to-r from-brand-purple via-brand-blue to-purple-600 bg-clip-text text-transparent">
              Performance <span className="text-gray-900">Insights</span> & Best Practices
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Stay ahead with the latest web performance trends, optimization techniques, 
              and expert insights from our team of performance specialists.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search articles, guides, and tutorials..." 
                  className="pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-brand-purple text-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full px-6">
                  Search
                </Button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 
                    ? "bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full px-6" 
                    : "rounded-full px-6 border-gray-300 hover:border-brand-purple hover:text-brand-purple"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Featured</span> Article
            </h2>
            <p className="text-gray-600">Our most comprehensive and popular content</p>
          </div>

          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-white to-purple-50 hover:shadow-3xl transition-all duration-500 group">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 flex items-center justify-center">
                  <TrendingUp className="h-24 w-24 text-brand-purple opacity-50" />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gradient-to-r from-brand-purple to-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-gray-500">Featured</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-purple transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple_light hover:to-blue-500 text-white rounded-full px-6 group-hover:scale-105 transition-transform">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">
              Latest <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-gray-600">Fresh insights and actionable tips for web performance optimization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white group hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-purple-100 flex items-center justify-center">
                  <Tag className="h-12 w-12 text-brand-purple opacity-50" />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-purple transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white rounded-full transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-brand-purple group-hover:to-brand-blue group-hover:border-transparent">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple_light hover:to-blue-500 text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-brand-dark to-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Never Miss a <span className="text-brand-blue">Performance Update</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Get the latest web performance insights, case studies, and optimization tips 
              delivered straight to your inbox every week.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email..." 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full flex-1"
                />
                <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple_light hover:to-blue-500 text-white px-6 rounded-full">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                Join 5,000+ performance enthusiasts. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
