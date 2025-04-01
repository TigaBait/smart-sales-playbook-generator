
import { Shield, Gauge, UserCheck, Zap } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import FeatureCard from "../common/FeatureCard";

const WhyUsSection = () => {
  const features = [
    {
      title: "Holistic Approach",
      description: "We uniquely combine strategic playbooks with AI implementation for a complete sales solution.",
      icon: Shield
    },
    {
      title: "Small Business Focus",
      description: "Tailored specifically for founders, solopreneurs, and growing companies with unique challenges.",
      icon: UserCheck
    },
    {
      title: "Practical Implementation",
      description: "No theoretical advice. We deliver actionable, measurable solutions you can implement immediately.",
      icon: Gauge
    },
    {
      title: "Technology + Strategy",
      description: "Expert guidance on both foundational sales processes and cutting-edge AI technology.",
      icon: Zap
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Why Smart Sales Process?"
          subtitle="We take a unique approach to sales enablement that sets us apart from traditional consultants and tech providers."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        <div className="mt-16 bg-navy-800 rounded-xl overflow-hidden animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Our Unique Approach</h3>
              <p className="mb-6">
                We believe that effective sales performance requires both strong foundations and modern technology. That's why we:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-teal-600/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-teal-300">Understand Your Business</h4>
                    <p className="text-navy-100">We take time to understand your unique context, challenges, and goals before recommending solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-600/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-teal-300">Build Strong Foundations</h4>
                    <p className="text-navy-100">We create custom sales playbooks that provide structure, consistency, and clarity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-600/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-teal-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-teal-300">Enhance With Technology</h4>
                    <p className="text-navy-100">We implement targeted AI solutions that solve specific problems and deliver measurable results.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 flex items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Focused on Your Success</h3>
                <p className="text-teal-50 mb-6">
                  We specialize in helping founders and small businesses overcome sales challenges that are holding back growth.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h4 className="text-lg font-semibold mb-2 text-white">Our Commitment:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-teal-50">Right-sized solutions for your business</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-teal-50">Focus on practical, measurable results</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-teal-50">Empathetic understanding of your challenges</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-teal-50">Expert guidance through complexity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
