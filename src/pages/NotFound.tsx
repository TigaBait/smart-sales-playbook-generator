
import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Page Not Found | Smart Sales Process</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>
      
      <div className="min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-navy-900 mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-800 mb-4">Page Not Found</h2>
            <p className="text-lg text-navy-600 mb-8">
              We couldn't find the page you're looking for: {location.pathname}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
              >
                <Home size={18} className="mr-2" />
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white border border-navy-200 hover:bg-navy-50 text-navy-800 font-medium py-3 px-6 rounded-md transition-colors duration-200"
              >
                Contact Support
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
            
            <div className="mt-16">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Looking for something specific?</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Link to="/" className="text-teal-600 hover:text-teal-700 font-medium">Home</Link>
                <Link to="/services/sales-playbook" className="text-teal-600 hover:text-teal-700 font-medium">Sales Playbooks</Link>
                <Link to="/services/ai-automation" className="text-teal-600 hover:text-teal-700 font-medium">AI Automation</Link>
                <Link to="/why-us" className="text-teal-600 hover:text-teal-700 font-medium">Why Us</Link>
                <Link to="/insights" className="text-teal-600 hover:text-teal-700 font-medium">Insights</Link>
                <Link to="/contact" className="text-teal-600 hover:text-teal-700 font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
