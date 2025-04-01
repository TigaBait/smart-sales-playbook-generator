
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-navy-900 to-navy-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-600 rounded-full"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-blue-600 rounded-full"></div>
        <div className="absolute bottom-0 right-40 w-40 h-40 bg-purple-600 rounded-full"></div>
      </div>
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stop Guessing, Start Selling: Smarter Sales Processes
          </h1>
          <p className="text-xl text-navy-100 mb-8">
            Expert Sales Playbooks & AI Automation for Founders & Small Teams. Transform your sales performance with proven frameworks and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-teal-600 hover:bg-teal-700"
            >
              Schedule a Free Consultation
            </a>
            <Link
              to="/services/sales-playbook"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Explore Our Services
              <ArrowRight size={16} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
