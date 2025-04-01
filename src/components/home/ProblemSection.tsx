
import { CheckCircle, XCircle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const ProblemSection = () => {
  const painPoints = [
    "Inefficient or non-existent sales processes",
    "Difficulty hitting sales targets and quotas",
    "Slow new sales hire ramp-up times",
    "Inconsistent team messaging and approach",
    "Struggling to scale sales efforts effectively",
    "Feeling overwhelmed by sales complexity",
    "Uncertainty about leveraging AI for sales growth",
    "Difficulty choosing and implementing the right sales technology",
    "Wasting time on repetitive sales tasks",
    "Missing out on revenue opportunities"
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Are Sales Challenges Slowing Your Growth?"
          subtitle="Many founders and small business leaders face these common sales roadblocks that prevent scaling and consistent revenue."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll">
            <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
              <XCircle className="text-red-500 mr-2" size={20} />
              Common Challenges
            </h3>
            <ul className="space-y-3">
              {painPoints.slice(0, 5).map((point, index) => (
                <li key={index} className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-navy-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll">
            <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
              <XCircle className="text-red-500 mr-2" size={20} />
              What's Holding You Back
            </h3>
            <ul className="space-y-3">
              {painPoints.slice(5).map((point, index) => (
                <li key={index} className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-navy-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-xl p-8 text-white animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-teal-400 mr-2" size={24} />
                The Smart Sales Process Solution
              </h3>
              <p className="mb-4">
                We combine expert <strong>Sales Playbook Creation</strong> with strategic <strong>AI Automation</strong> to deliver a complete solution that addresses these challenges head-on.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-400 mr-2 mt-1" size={16} />
                  <span>Establish clear, repeatable sales processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-400 mr-2 mt-1" size={16} />
                  <span>Create consistent messaging and approach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-400 mr-2 mt-1" size={16} />
                  <span>Reduce ramp-up time for new team members</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-400 mr-2 mt-1" size={16} />
                  <span>Leverage AI to automate repetitive tasks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-400 mr-2 mt-1" size={16} />
                  <span>Make data-driven decisions with AI insights</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-xl font-semibold mb-3 text-teal-300">Proven Results Include:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-teal-900/40 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold text-teal-300">54%</span>
                    </div>
                    <span>More likely to hit targets with proper playbooks</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-900/40 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold text-teal-300">35%</span>
                    </div>
                    <span>Faster onboarding with documented processes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-900/40 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold text-teal-300">20%</span>
                    </div>
                    <span>Average revenue increase with AI implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
