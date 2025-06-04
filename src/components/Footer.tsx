
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Zap, ArrowRight, ShoppingCart, Monitor, Building, Smartphone, Globe, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const websiteTypes = [
    { name: "E-commerce Optimization", link: "#", icon: <ShoppingCart className="h-4 w-4" /> },
    { name: "SaaS Performance", link: "#", icon: <Monitor className="h-4 w-4" /> },
    { name: "Enterprise Solutions", link: "#", icon: <Building className="h-4 w-4" /> },
    { name: "Mobile App Speed", link: "#", icon: <Smartphone className="h-4 w-4" /> },
    { name: "Content Site Optimization", link: "#", icon: <Globe className="h-4 w-4" /> },
    { name: "Backend Performance", link: "#", icon: <Database className="h-4 w-4" /> }
  ];

  return (
    <footer className="bg-gradient-to-b from-zinc-800 to-zinc-900 text-white pt-20 pb-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-pattern-dark absolute inset-0 opacity-5"></div>
      </div>

      <div className="dark-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2 mr-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold dark-gradient-text">
                Performetix
              </h3>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed max-w-md">
              We optimize performance for ALL website types - from e-commerce to enterprise, 
              SaaS to mobile apps. 15+ years of experience delivering lightning-fast results 
              that drive conversions and boost revenue.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-zinc-200">Performance Updates</h4>
              <div className="flex gap-3 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-800/50 border-zinc-600/30 text-zinc-200 placeholder:text-zinc-500 rounded-xl focus:border-blue-500 transition-colors backdrop-blur-sm"
                />
                <Button className="dark-button px-6 rounded-xl flex-shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-zinc-800/50">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Website Types */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zinc-200">Website Types</h4>
            <ul className="space-y-3">
              {websiteTypes.map((type, index) => (
                <li key={index}>
                  <a href={type.link} className="text-zinc-500 hover:text-blue-400 transition-colors hover:pl-2 duration-300 flex items-center group">
                    <span className="mr-2 group-hover:scale-110 transition-transform">
                      {type.icon}
                    </span>
                    {type.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zinc-200">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  123 Performance Street<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">(123) 456-7890</span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">info@performetix.com</span>
              </li>
            </ul>

            {/* Quick CTA */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30">
              <p className="text-sm text-zinc-300 mb-3">Get your free performance audit</p>
              <Button className="dark-button text-sm h-10 px-4 rounded-lg w-full">
                Start Free Analysis
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-700/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-600 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Performetix. All rights reserved. Optimizing every website type since 2009.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors">Performance SLA</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
