
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold gradient-text">Performetix</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/performance-auditing" className="text-gray-700 hover:text-brand-purple transition-colors">Performance Auditing</Link>
            <a href="/#services" className="text-gray-700 hover:text-brand-purple transition-colors">Services</a>
            <a href="/#web-vitals" className="text-gray-700 hover:text-brand-purple transition-colors">Web Vitals</a>
            <a href="/#testimonials" className="text-gray-700 hover:text-brand-purple transition-colors">Testimonials</a>
            <a href="/#team" className="text-gray-700 hover:text-brand-purple transition-colors">Team</a>
            <a href="/#pricing" className="text-gray-700 hover:text-brand-purple transition-colors">Pricing</a>
            <Button className="bg-brand-purple hover:bg-brand-purple_light">Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/performance-auditing" className="text-gray-700 hover:text-brand-purple transition-colors py-2" onClick={toggleMobileMenu}>Performance Auditing</Link>
              <a href="/#services" className="text-gray-700 hover:text-brand-purple transition-colors py-2" onClick={toggleMobileMenu}>Services</a>
              <a href="/#web-vitals" className="text-gray-700 hover:text-brand-purple transition-colors py-2" onClick={toggleMobileMenu}>Web Vitals</a>
              <a href="/#testimonials" className="text-gray-700 hover:text-brand-purple transition-colors py-2" onClick={toggleMobileMenu}>Testimonials</a>
              <a href="/#team" className="text-gray-700 hover:text-brand-purple transition-colors py-2" onClick={toggleMobileMenu}>Team</a>
              <a href="/#pricing" className="text-gray-700 hover:text-brand-purple transition-colors py-2" onClick={toggleMobileMenu}>Pricing</a>
              <Button className="bg-brand-purple hover:bg-brand-purple_light w-full" onClick={toggleMobileMenu}>Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
