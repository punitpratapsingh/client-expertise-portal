
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
              Performetix
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We help businesses optimize their web performance to increase conversions,
              improve user experience, and boost search rankings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors p-2 rounded-full hover:bg-brand-purple/10">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors p-2 rounded-full hover:bg-brand-purple/10">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors p-2 rounded-full hover:bg-brand-purple/10">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors p-2 rounded-full hover:bg-brand-purple/10">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/performance-auditing" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300">
                  Performance Auditing
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#web-vitals" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300">
                  Web Vitals
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-brand-purple mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  123 Performance Street<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-brand-purple mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">(123) 456-7890</span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-brand-purple mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition-colors">info@performetix.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest web performance tips and insights.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 rounded-full focus:border-brand-purple transition-colors"
              />
              <Button className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple_light hover:to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Performetix. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
