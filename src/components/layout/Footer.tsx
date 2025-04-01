
import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-display font-bold text-2xl">
              <span className="text-teal-400">Smart</span>SalesProcess
            </div>
            <p className="text-navy-200 max-w-xs">
              Empowering founders, solopreneurs, and small businesses to transform their sales performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-navy-200 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-navy-200 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:Info@SmartSalesProcess.com" className="text-navy-200 hover:text-teal-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/sales-playbook" className="text-navy-200 hover:text-teal-400 transition-colors">
                  Sales Playbook Creation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation" className="text-navy-200 hover:text-teal-400 transition-colors">
                  AI Sales Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/why-us" className="text-navy-200 hover:text-teal-400 transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-navy-200 hover:text-teal-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-navy-200 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-navy-200">
                <Mail size={16} className="mr-2 text-teal-400" />
                <a href="mailto:Sales@SmartSalesProcess.com" className="hover:text-teal-400 transition-colors">
                  Sales@SmartSalesProcess.com
                </a>
              </li>
              <li className="flex items-center text-navy-200">
                <Mail size={16} className="mr-2 text-teal-400" />
                <a href="mailto:Info@SmartSalesProcess.com" className="hover:text-teal-400 transition-colors">
                  Info@SmartSalesProcess.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Schedule Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-navy-300 text-sm">
            &copy; {currentYear} Smart Sales Process. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-navy-300 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-navy-300 hover:text-teal-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
