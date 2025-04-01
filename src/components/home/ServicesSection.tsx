
import { BookOpen, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";

const ServicesSection = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="We offer two core services that work together to transform your sales performance."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sales Playbook Service */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col animate-on-scroll">
            <div className="bg-gradient-to-r from-navy-800 to-navy-700 py-6 px-6">
              <div className="flex items-center mb-3">
                <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <BookOpen className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Sales Playbook Creation</h3>
              </div>
              <p className="text-navy-100">
                Custom sales blueprints that provide clarity, consistency, and structure for your sales team.
              </p>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-600 text-xs">✓</span>
                  </div>
                  <span className="text-navy-700">
                    <strong>Ideal Customer Profiles</strong> - Clearly define who to target
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-600 text-xs">✓</span>
                  </div>
                  <span className="text-navy-700">
                    <strong>Sales Process & Methodology</strong> - Step-by-step guidance
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-600 text-xs">✓</span>
                  </div>
                  <span className="text-navy-700">
                    <strong>Messaging & Positioning</strong> - Consistent, compelling communication
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-600 text-xs">✓</span>
                  </div>
                  <span className="text-navy-700">
                    <strong>Objection Handling</strong> - Ready responses to common concerns
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-600 text-xs">✓</span>
                  </div>
                  <span className="text-navy-700">
                    <strong>KPIs & Goals</strong> - Track and measure success metrics
                  </span>
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-navy-700 font-medium">Teams with playbooks are <span className="text-teal-600">54% more likely</span> to meet their quota and experience <span className="text-teal-600">35% faster</span> new-hire onboarding.</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link
                to="/services/sales-playbook"
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Learn more about Sales Playbooks
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* AI Automation Service */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col animate-on-scroll">
            <div className="bg-gradient-to-r from-teal-700 to-teal-600 py-6 px-6">
              <div className="flex items-center mb-3">
                <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <Cpu className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">AI Sales Automation</h3>
              </div>
              <p className="text-teal-50">
                Leverage cutting-edge AI technology to enhance efficiency, insights, and customer engagement.
              </p>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-600 text-xs">✓</span>
                  </div>
                  <span className="text-navy-700">
                    <strong>AI-Powered Lead Scoring</strong> - Focus on high-potential prospects
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-600 text-xs">✓</span>
                  </div>
                  <span className="text-navy-700">
                    <strong>Content Generation</strong> - Create personalized outreach at scale
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-600 text-xs">✓</span>
                  </div>
                  <span className="text-navy-700">
                    <strong>Real-Time Guidance</strong> - In-the-moment coaching and suggestions
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-600 text-xs">✓</span>
                  </div>
                  <span className="text-navy-700">
                    <strong>Task Automation</strong> - Eliminate repetitive work
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-600 text-xs">✓</span>
                  </div>
                  <span className="text-navy-700">
                    <strong>Advanced Analytics</strong> - Data-driven insights and forecasting
                  </span>
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-navy-700 font-medium">Companies implementing AI in sales report <span className="text-teal-600">10-30% revenue increases</span> and significantly improved productivity.</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link
                to="/services/ai-automation"
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Learn more about AI Automation
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
