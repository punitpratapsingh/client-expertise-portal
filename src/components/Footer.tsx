
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-dark-800 to-dark-900 text-white pt-20 pb-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-5"></div>
      </div>

      <div className="cyber-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-neon-blue to-glow-purple rounded-lg p-2 mr-3">
                <Zap className="h-6 w-6 text-dark-900" />
              </div>
              <h3 className="text-3xl font-bold cyber-gradient-text">
                Performetix
              </h3>
            </div>
            <p className="text-dark-300 mb-6 leading-relaxed max-w-md">
              We help businesses optimize their web performance to increase conversions,
              improve user experience, and boost search rankings through advanced optimization techniques.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-dark-100">Stay Updated</h4>
              <div className="flex gap-3 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-dark-800/50 border-dark-600/30 text-dark-100 placeholder:text-dark-400 rounded-xl focus:border-neon-cyan transition-colors backdrop-blur-sm"
                />
                <Button className="cyber-button px-6 rounded-xl flex-shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-dark-400 hover:text-neon-cyan transition-colors p-2 rounded-lg hover:bg-dark-800/50">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-neon-cyan transition-colors p-2 rounded-lg hover:bg-dark-800/50">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-neon-cyan transition-colors p-2 rounded-lg hover:bg-dark-800/50">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-neon-cyan transition-colors p-2 rounded-lg hover:bg-dark-800/50">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-dark-100">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/performance-auditing" className="text-dark-400 hover:text-neon-cyan transition-colors hover:pl-2 duration-300">
                  Performance Auditing
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-dark-400 hover:text-neon-cyan transition-colors hover:pl-2 duration-300">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-dark-400 hover:text-neon-cyan transition-colors hover:pl-2 duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#services" className="text-dark-400 hover:text-neon-cyan transition-colors hover:pl-2 duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#web-vitals" className="text-dark-400 hover:text-neon-cyan transition-colors hover:pl-2 duration-300">
                  Web Vitals
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-dark-400 hover:text-neon-cyan transition-colors hover:pl-2 duration-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-dark-100">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-neon-cyan mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-dark-400 group-hover:text-dark-200 transition-colors">
                  123 Performance Street<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-neon-cyan mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-dark-400 group-hover:text-dark-200 transition-colors">(123) 456-7890</span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-neon-cyan mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-dark-400 group-hover:text-dark-200 transition-colors">info@performetix.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-700/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Performetix. All rights reserved. Built for performance.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-dark-500 hover:text-dark-300 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
