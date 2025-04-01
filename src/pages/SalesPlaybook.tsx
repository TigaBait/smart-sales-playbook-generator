
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, BookOpen, MessageSquare, Shield, BarChart3, FileCheck, Tool, PieChart } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import CallToAction from "@/components/common/CallToAction";

const SalesPlaybook = () => {
  const playBookComponents = [
    {
      title: "Company Info & Value Prop",
      description: "Clear articulation of who you are and the value you deliver",
      icon: FileCheck
    },
    {
      title: "Ideal Customer Profiles & Personas",
      description: "Detailed definition of who to target and why they buy",
      icon: Users
    },
    {
      title: "Sales Process & Methodology",
      description: "Step-by-step guidance through your complete sales cycle",
      icon: Target
    },
    {
      title: "Messaging & Positioning",
      description: "Consistent, compelling language for different scenarios",
      icon: MessageSquare
    },
    {
      title: "Sales Plays & Scenarios",
      description: "Specific action plans for common selling situations",
      icon: BookOpen
    },
    {
      title: "Objection Handling",
      description: "Ready responses to overcome common concerns",
      icon: Shield
    },
    {
      title: "Competitive Intelligence",
      description: "Insight on differentiators and competitive advantages",
      icon: BarChart3
    },
    {
      title: "Tools & Resources",
      description: "Templates, scripts, and assets to support sales activities",
      icon: Tool
    },
    {
      title: "KPIs & Goals",
      description: "Clear metrics to track and measure success",
      icon: PieChart
    }
  ];

  const playBookBenefits = [
    "Teams with playbooks are 54% more likely to meet quota",
    "Reduce new-hire ramp-up time by up to 35%",
    "Increase average selling price by 15-25%",
    "Improve forecast accuracy by 28%",
    "Boost quota attainment by 21% on average"
  ];

  const qualitativeAdvantages = [
    "Consistency across the entire sales organization",
    "Clear articulation of value proposition",
    "Greater win rate through effective qualification",
    "Efficiency through repeatable, optimized processes",
    "Alignment between marketing and sales"
  ];

  const playBookCriteria = [
    {
      title: "Relevant",
      description: "Tailored to your specific products, market, and sales cycle"
    },
    {
      title: "Scalable",
      description: "Designed to grow with your business and adapt to change"
    },
    {
      title: "User-Friendly",
      description: "Easy to access, navigate, and apply in daily sales activities"
    },
    {
      title: "Interactive",
      description: "Dynamic content that engages users, not static documents"
    },
    {
      title: "Actionable",
      description: "Provides clear direction on what to do in specific situations"
    }
  ];

  const commonPitfalls = [
    "Outdated information that quickly becomes irrelevant",
    "Lack of adoption due to poor design or implementation",
    "Poor user experience making it difficult to use",
    "Generic content not tailored to your specific needs",
    "No process for updates and continuous improvement"
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "We learn about your business, goals, customers, and existing sales approach."
    },
    {
      title: "Design",
      description: "We create a custom playbook structure based on your specific needs."
    },
    {
      title: "Build",
      description: "We develop comprehensive content and materials for your playbook."
    },
    {
      title: "Enablement",
      description: "We help you implement and drive adoption across your team."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sales Playbook Creation | Smart Sales Process</title>
        <meta name="description" content="Custom sales playbooks that provide clarity, consistency, and structure for founders and small business sales teams." />
      </Helmet>
      
      <PageHeader
        title="Build Your Blueprint for Sales Success"
        subtitle="Custom Sales Playbooks that provide structure, consistency, and clarity for your sales team."
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">The Power of Playbooks</h2>
              <p className="text-navy-700 mb-6">
                A sales playbook is more than just a document – it's a dynamic guide that aligns your team, clarifies your process, and drives consistent results. It's the difference between hoping for sales success and engineering it.
              </p>
              
              <div className="bg-navy-800 text-white p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold mb-4">Quantifiable Benefits</h3>
                <ul className="space-y-2">
                  {playBookBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div className="bg-teal-600/20 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                        <span className="text-teal-400 text-xs">✓</span>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Qualitative Advantages</h3>
              <ul className="space-y-2 mb-6">
                {qualitativeAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">{advantage}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Discuss your playbook needs
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 animate-on-scroll">
              <h3 className="text-2xl font-semibold text-navy-900 mb-6">Why You Need a Playbook:</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Target className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-1">Target Achievement</h4>
                    <p className="text-navy-600">Teams with well-structured playbooks are 54% more likely to meet or exceed targets.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-1">Faster Onboarding</h4>
                    <p className="text-navy-600">New sales hires ramp up 35% faster when they have a clear playbook to follow.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <MessageSquare className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-1">Consistent Messaging</h4>
                    <p className="text-navy-600">Ensure every team member delivers your value proposition consistently and effectively.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <BookOpen className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-1">Repeatable Process</h4>
                    <p className="text-navy-600">Turn your best practices into a repeatable system that can scale with your business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What's Inside Your Smart Sales Playbook"
            subtitle="Every playbook is custom-built for your business, but includes these essential components:"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {playBookComponents.map((component, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-on-scroll">
                <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <component.icon className="text-teal-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{component.title}</h3>
                <p className="text-navy-600">{component.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <SectionHeading
              title="What Makes a Great Playbook?"
              subtitle="We create playbooks that meet these essential criteria to ensure effectiveness and adoption:"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {playBookCriteria.map((criteria, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center animate-on-scroll">
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{criteria.title}</h3>
                  <p className="text-navy-600">{criteria.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Avoid Common Pitfalls</h2>
              <p className="text-navy-700 mb-6">
                Many sales playbook initiatives fail to deliver results because they fall into these common traps. We help you avoid:
              </p>
              
              <ul className="space-y-4 mb-8">
                {commonPitfalls.map((pitfall, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-red-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-red-600 text-xs">✕</span>
                    </div>
                    <span className="text-navy-700">{pitfall}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Our Approach Ensures Success</h3>
                <p className="text-navy-700 mb-4">
                  We've developed a proven methodology for creating playbooks that get used, deliver results, and continue to provide value as your business evolves.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                >
                  Learn how we're different
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-navy-800 text-white p-8 rounded-xl animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-6">Our Playbook Creation Process</h3>
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="bg-teal-600/20 w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-teal-400 font-bold">{index + 1}</span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="h-full w-0.5 bg-teal-600/20 mx-auto my-2"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-teal-300 mb-2">{step.title}</h4>
                      <p className="text-navy-100">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-navy-700">
                <h4 className="font-semibold text-lg text-white mb-3">Ready to Get Started?</h4>
                <a
                  href="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Schedule Your Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction
        title="Get Your Custom Sales Playbook Blueprint"
        subtitle="Take the first step toward more consistent, efficient, and successful sales."
        buttonText="Schedule a Free Consultation"
        buttonLink="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
      />
    </>
  );
};

export default SalesPlaybook;
