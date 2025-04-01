
import { Helmet } from "react-helmet-async";
import { Shield, Gauge, UserCheck, Zap, CheckCircle, Target } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/common/FeatureCard";
import CallToAction from "@/components/common/CallToAction";

const WhyUs = () => {
  const coreValues = [
    {
      title: "Holistic Approach",
      description: "We combine foundational sales strategy with cutting-edge technology for complete solutions.",
      icon: Shield
    },
    {
      title: "Small Business Focus",
      description: "We understand the unique challenges facing founders and small teams.",
      icon: UserCheck
    },
    {
      title: "Practical Implementation",
      description: "We deliver actionable, measurable solutions you can implement immediately.",
      icon: Gauge
    },
    {
      title: "Technology + Strategy",
      description: "We provide expert guidance on both processes and technology.",
      icon: Zap
    }
  ];

  const commitments = [
    "Right-sized solutions for your specific business needs",
    "Focus on practical, measurable results",
    "Empathetic understanding of founder challenges",
    "Expert guidance through sales complexity",
    "Continuous support and adaptation as you grow"
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Smart Sales Process | Our Approach</title>
        <meta name="description" content="Learn about our unique approach combining sales playbooks and AI automation to help founders and small businesses achieve sales success." />
      </Helmet>
      
      <PageHeader
        title="Your Partner in Building a High-Performing Sales Engine"
        subtitle="Smart Sales Process offers a unique approach to sales enablement focused on the specific needs of founders and small businesses."
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
              <p className="text-navy-700 mb-6 text-lg">
                To empower founders, solopreneurs, and small businesses to transform their sales performance through expert guidance, proven frameworks, and smart technology implementation.
              </p>
              
              <h3 className="text-xl font-semibold text-navy-900 mb-4">We believe that:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="text-teal-600" size={14} />
                  </div>
                  <span className="text-navy-700">
                    Every business deserves access to expert sales strategies, regardless of size.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="text-teal-600" size={14} />
                  </div>
                  <span className="text-navy-700">
                    The combination of strong process and smart technology creates the most powerful sales engine.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="text-teal-600" size={14} />
                  </div>
                  <span className="text-navy-700">
                    Successful sales transformation starts with understanding your unique context and challenges.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-50 min-w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="text-teal-600" size={14} />
                  </div>
                  <span className="text-navy-700">
                    Technology should be an enabler, not a replacement for solid sales fundamentals.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-navy-800 to-navy-700 p-8 rounded-xl text-white animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-6">Who We Help</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Target className="text-teal-300 mr-2" size={20} />
                    Founders & Entrepreneurs
                  </h4>
                  <p className="text-navy-100">
                    Who need to establish repeatable sales processes to scale beyond their personal networks and initial clients.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Target className="text-teal-300 mr-2" size={20} />
                    Solopreneurs & Consultants
                  </h4>
                  <p className="text-navy-100">
                    Who want to improve their sales approach and leverage AI to do more with limited time and resources.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Target className="text-teal-300 mr-2" size={20} />
                    Small Business Leaders
                  </h4>
                  <p className="text-navy-100">
                    Who need to build more effective sales teams and implement systems that drive consistent results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Unique Approach"
            subtitle="We take a different approach to sales enablement that focuses on the specific needs of founders and small businesses."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coreValues.map((value, index) => (
              <FeatureCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-navy-900 mb-6">The Smart Sales Process Difference</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-900 mb-2">Holistic Methodology</h4>
                    <p className="text-navy-700">
                      We uniquely combine strategic sales playbooks with targeted AI implementation – addressing both the foundational elements and technological enablement.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-navy-900 mb-2">Founder-Focused Solutions</h4>
                    <p className="text-navy-700">
                      Our approach is specifically designed for the constraints and opportunities of smaller organizations, not enterprise solutions scaled down.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-navy-900 mb-2">Practical Implementation</h4>
                    <p className="text-navy-700">
                      We deliver tangible, actionable deliverables – not theoretical advice. Our solutions are designed to be implemented immediately for quick wins.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-navy-900 mb-2">Technology Guidance</h4>
                    <p className="text-navy-700">
                      We help you navigate the complex landscape of sales technology and AI tools, selecting solutions that fit your specific needs and budget.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-700 to-teal-600 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-semibold mb-6">Our Commitment to You</h3>
                
                <ul className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-white/10 min-w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                        <CheckCircle className="text-white" size={14} />
                      </div>
                      <span>{commitment}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-teal-500/30">
                  <h4 className="font-semibold text-lg mb-3">Our Success Is Measured By Your Success</h4>
                  <p className="text-teal-50 mb-4">
                    We're committed to delivering real, measurable improvements in your sales performance.
                  </p>
                  <a
                    href="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-teal-700 hover:bg-teal-50 font-medium py-2 px-4 rounded-md transition-colors duration-200"
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Meet the Expert"
            subtitle=""
            centered
          />
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Placeholder for founder/expert photo */}
              </div>
              <h3 className="text-2xl font-bold text-navy-900">Yon A. Vo</h3>
              <p className="text-navy-600">Founder & Lead Sales Strategist</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-navy-700 mb-4">
                With over 15 years of experience in sales leadership and technology implementation, our founder has helped dozens of small businesses and startups transform their sales processes and leverage cutting-edge tools to drive growth.
              </p>
              
              <p className="text-navy-700 mb-6">
                Prior to founding Smart Sales Process, they led sales teams at both fast-growing startups and established technology companies, giving them unique insight into what works across different environments and stages of growth.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-navy-900 mb-3">Core Expertise:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">Sales Process Design & Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">Sales Playbook Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">AI Sales Tool Implementation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">Sales Team Enablement</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">CRM Strategy & Optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">Sales Technology Stack Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction
        title="Let's Discuss Your Sales Goals"
        subtitle="Schedule a free consultation to explore how our unique approach can help transform your sales performance."
        buttonText="Schedule a Free Consultation"
        buttonLink="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
      />
    </>
  );
};

export default WhyUs;
