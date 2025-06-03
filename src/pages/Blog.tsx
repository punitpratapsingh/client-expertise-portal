
import { Calendar, Clock, ArrowRight, User, Tag, TrendingUp, Search, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="cyber-section relative">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-2 h-32 bg-gradient-to-b from-transparent via-neon-cyan to-transparent opacity-30 animate-data-stream"></div>
          <div className="absolute top-1/3 right-20 w-2 h-40 bg-gradient-to-b from-transparent via-glow-purple to-transparent opacity-30 animate-data-stream" style={{ animationDelay: '2s' }}></div>
          <div className="grid-pattern absolute inset-0 opacity-10"></div>
        </div>

        <div className="cyber-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-badge mb-8 animate-neon-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Knowledge Base</span>
            </div>
            
            <h1 className="mb-8 text-balance">
              Performance <span className="cyber-gradient-text">Intelligence Hub</span>
            </h1>
            <p className="text-xl text-dark-200 mb-12 leading-relaxed text-balance">
              Advanced insights, optimization techniques, and cutting-edge performance strategies 
              from our team of digital transformation specialists.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative cyber-glass rounded-2xl p-2 neon-border">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-dark-300" />
                <Input 
                  placeholder="Search neural archives..." 
                  className="pl-14 pr-4 py-4 bg-transparent border-0 text-dark-100 placeholder:text-dark-300 text-lg focus:ring-0 focus:outline-none"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 cyber-button rounded-xl px-6">
                  Search
                </Button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 
                    ? "cyber-button rounded-full px-6" 
                    : "cyber-button-outline rounded-full px-6"
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
      <section className="cyber-section">
        <div className="cyber-container">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              <span className="cyber-gradient-text">Featured</span> Analysis
            </h2>
            <p className="text-dark-300 text-center">Our most comprehensive research and insights</p>
          </div>

          <Card className="cyber-card cyber-card-hover border-0 group neon-border">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-neon-blue/20 to-glow-purple/20 flex items-center justify-center relative overflow-hidden">
                  <TrendingUp className="h-24 w-24 text-neon-cyan opacity-50" />
                  <div className="absolute inset-0 hologram-effect"></div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="cyber-badge">
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-neon-cyan cyber-text-glow">Featured</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-dark-100 mb-4 group-hover:text-neon-cyan transition-colors cyber-text-glow">
                  {featuredPost.title}
                </h3>
                
                <p className="text-dark-300 mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-dark-400">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="cyber-button rounded-xl px-6 group-hover:scale-105 transition-transform">
                    Access Data <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="cyber-section">
        <div className="cyber-container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Latest <span className="cyber-gradient-text">Intelligence</span>
            </h2>
            <p className="text-dark-300">Advanced performance insights and strategic analysis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="cyber-card cyber-card-hover border-0 group neon-border animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-48 bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center relative overflow-hidden">
                  <Tag className="h-12 w-12 text-neon-cyan opacity-50" />
                  <div className="absolute inset-0 hologram-effect"></div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="cyber-badge text-xs">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-dark-100 group-hover:text-neon-cyan transition-colors line-clamp-2 leading-tight cyber-text-glow">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-dark-300 mb-6 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-dark-400 mb-6">
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
                  
                  <Button className="cyber-button-outline w-full rounded-xl group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-glow-purple group-hover:border-transparent group-hover:text-dark-900 transition-all duration-300">
                    Access Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="cyber-button text-lg px-10 py-4 rounded-xl shadow-neon-lg hover:shadow-neon-lg transition-all duration-300 transform hover:scale-105">
              Load More Intelligence
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="cyber-section relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="grid-pattern absolute inset-0 opacity-20"></div>
        </div>
        
        <div className="cyber-container">
          <div className="cyber-glass rounded-3xl p-16 max-w-4xl mx-auto text-center neon-border">
            <h2 className="text-4xl font-semibold mb-6 text-dark-100">
              Neural Network <span className="cyber-gradient-text">Subscription</span>
            </h2>
            <p className="text-xl mb-10 text-dark-200 leading-relaxed">
              Receive cutting-edge performance intelligence, optimization protocols, and strategic insights 
              directly to your neural interface every cycle.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Input 
                    placeholder="Enter neural ID..." 
                    className="cyber-glass border border-dark-600/30 text-dark-100 placeholder:text-dark-400 rounded-xl h-12"
                  />
                </div>
                <Button className="cyber-button px-8 rounded-xl">
                  Connect
                </Button>
              </div>
              <p className="text-sm text-dark-400 mt-4">
                Join 5,000+ performance specialists. Disconnect anytime.
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
