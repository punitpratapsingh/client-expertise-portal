
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-lg fixed w-full z-50 shadow-lg border-b border-gray-100">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-brand-purple via-brand-blue to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Performetix
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-brand-purple transition-colors flex items-center gap-1 font-medium"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link to="/performance-auditing" className="block px-6 py-3 text-gray-700 hover:text-brand-purple hover:bg-purple-50 transition-colors font-medium">
                    Performance Auditing
                  </Link>
                  <a href="/#services" className="block px-6 py-3 text-gray-700 hover:text-brand-purple hover:bg-purple-50 transition-colors">
                    Optimization Services
                  </a>
                  <a href="/#web-vitals" className="block px-6 py-3 text-gray-700 hover:text-brand-purple hover:bg-purple-50 transition-colors">
                    Web Vitals Analysis
                  </a>
                </div>
              )}
            </div>
            
            <Link to="/use-cases" className="text-gray-700 hover:text-brand-purple transition-colors font-medium relative group">
              Use Cases
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link to="/blog" className="text-gray-700 hover:text-brand-purple transition-colors font-medium relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <a href="/#testimonials" className="text-gray-700 hover:text-brand-purple transition-colors font-medium relative group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <a href="/#team" className="text-gray-700 hover:text-brand-purple transition-colors font-medium relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <a href="/#pricing" className="text-gray-700 hover:text-brand-purple transition-colors font-medium relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple_light hover:to-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="hover:bg-purple-50">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 animate-fade-in bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <div className="flex flex-col space-y-4">
              <Link to="/performance-auditing" className="text-gray-700 hover:text-brand-purple transition-colors py-3 px-4 rounded-lg hover:bg-purple-50 font-medium" onClick={toggleMobileMenu}>
                Performance Auditing
              </Link>
              <Link to="/use-cases" className="text-gray-700 hover:text-brand-purple transition-colors py-3 px-4 rounded-lg hover:bg-purple-50 font-medium" onClick={toggleMobileMenu}>
                Use Cases
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-brand-purple transition-colors py-3 px-4 rounded-lg hover:bg-purple-50 font-medium" onClick={toggleMobileMenu}>
                Blog
              </Link>
              <a href="/#services" className="text-gray-700 hover:text-brand-purple transition-colors py-3 px-4 rounded-lg hover:bg-purple-50" onClick={toggleMobileMenu}>
                Services
              </a>
              <a href="/#web-vitals" className="text-gray-700 hover:text-brand-purple transition-colors py-3 px-4 rounded-lg hover:bg-purple-50" onClick={toggleMobileMenu}>
                Web Vitals
              </a>
              <a href="/#testimonials" className="text-gray-700 hover:text-brand-purple transition-colors py-3 px-4 rounded-lg hover:bg-purple-50" onClick={toggleMobileMenu}>
                Testimonials
              </a>
              <a href="/#team" className="text-gray-700 hover:text-brand-purple transition-colors py-3 px-4 rounded-lg hover:bg-purple-50" onClick={toggleMobileMenu}>
                Team
              </a>
              <a href="/#pricing" className="text-gray-700 hover:text-brand-purple transition-colors py-3 px-4 rounded-lg hover:bg-purple-50" onClick={toggleMobileMenu}>
                Pricing
              </a>
              <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple_light hover:to-blue-500 text-white rounded-full shadow-lg mx-4 mt-4" onClick={toggleMobileMenu}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
