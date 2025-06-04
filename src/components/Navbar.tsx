
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-lg fixed w-full z-50 border-b border-slate-200/50 shadow-sm">
      <div className="light-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2 mr-3 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold light-gradient-text group-hover:scale-105 transition-transform duration-300">
                Performetix
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium py-2 px-3 rounded-lg hover:bg-slate-50"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-lg rounded-xl border border-slate-200 py-4 z-50 shadow-xl"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link to="/performance-auditing" className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors font-medium">
                    Performance Auditing
                  </Link>
                  <a href="/#services" className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors">
                    Optimization Services
                  </a>
                  <a href="/#web-vitals" className="block px-6 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors">
                    Web Vitals Analysis
                  </a>
                </div>
              )}
            </div>
            
            <Link to="/use-cases" className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-slate-50">
              Use Cases
            </Link>
            
            <Link to="/blog" className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-slate-50">
              Blog
            </Link>
            
            <a href="/#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-slate-50">
              Testimonials
            </a>
            
            <a href="/#team" className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-slate-50">
              Team
            </a>
            
            <a href="/#pricing" className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2 px-3 rounded-lg hover:bg-slate-50">
              Pricing
            </a>
            
            <Button className="light-button px-6 py-2 rounded-xl text-sm font-medium shadow-lg transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-slate-700 hover:text-blue-600 hover:bg-slate-50">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200 bg-white/95 backdrop-blur-lg rounded-b-xl">
            <div className="flex flex-col space-y-2">
              <Link to="/performance-auditing" className="text-slate-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-slate-50 font-medium" onClick={toggleMobileMenu}>
                Performance Auditing
              </Link>
              <Link to="/use-cases" className="text-slate-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-slate-50 font-medium" onClick={toggleMobileMenu}>
                Use Cases
              </Link>
              <Link to="/blog" className="text-slate-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-slate-50 font-medium" onClick={toggleMobileMenu}>
                Blog
              </Link>
              <a href="/#services" className="text-slate-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-slate-50" onClick={toggleMobileMenu}>
                Services
              </a>
              <a href="/#web-vitals" className="text-slate-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-slate-50" onClick={toggleMobileMenu}>
                Web Vitals
              </a>
              <a href="/#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-slate-50" onClick={toggleMobileMenu}>
                Testimonials
              </a>
              <a href="/#team" className="text-slate-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-slate-50" onClick={toggleMobileMenu}>
                Team
              </a>
              <a href="/#pricing" className="text-slate-700 hover:text-blue-600 transition-colors py-3 px-4 rounded-lg hover:bg-slate-50" onClick={toggleMobileMenu}>
                Pricing
              </a>
              <Button className="light-button mx-4 mt-4 rounded-xl" onClick={toggleMobileMenu}>
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
