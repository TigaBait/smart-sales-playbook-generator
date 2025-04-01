
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="font-display text-navy-900 font-bold text-2xl">
              <span className="text-teal-600">Smart</span>SalesProcess
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-navy-800 hover:text-teal-600 font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-navy-800 hover:text-teal-600 font-medium transition-colors flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/services/sales-playbook" className="block px-4 py-2 text-sm text-navy-700 hover:bg-teal-50 hover:text-teal-600" role="menuitem">
                    Sales Playbook Creation
                  </Link>
                  <Link to="/services/ai-automation" className="block px-4 py-2 text-sm text-navy-700 hover:bg-teal-50 hover:text-teal-600" role="menuitem">
                    AI Sales Automation
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/why-us" className="text-navy-800 hover:text-teal-600 font-medium transition-colors">
              Why Us
            </Link>
            <Link to="/insights" className="text-navy-800 hover:text-teal-600 font-medium transition-colors">
              Insights
            </Link>
            <Link to="/contact" className="text-navy-800 hover:text-teal-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-navy-800 font-medium" onClick={closeMenu}>
                Home
              </Link>
              <div className="space-y-2 ml-2">
                <h3 className="text-sm text-navy-500 uppercase tracking-wider">Services</h3>
                <Link to="/services/sales-playbook" className="block text-navy-800 font-medium" onClick={closeMenu}>
                  Sales Playbook Creation
                </Link>
                <Link to="/services/ai-automation" className="block text-navy-800 font-medium" onClick={closeMenu}>
                  AI Sales Automation
                </Link>
              </div>
              <Link to="/why-us" className="text-navy-800 font-medium" onClick={closeMenu}>
                Why Us
              </Link>
              <Link to="/insights" className="text-navy-800 font-medium" onClick={closeMenu}>
                Insights
              </Link>
              <Link to="/contact" className="text-navy-800 font-medium" onClick={closeMenu}>
                Contact
              </Link>
              <a
                href="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
                onClick={closeMenu}
              >
                Schedule Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
