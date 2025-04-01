
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, BarChart2, Target, Users, Bot, FileText, Send, Zap, Activity, Database, Lock } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/common/FeatureCard";
import CallToAction from "@/components/common/CallToAction";

const AIAutomation = () => {
  const aiTransformations = [
    {
      title: "Improved Efficiency",
      description: "Automate repetitive tasks and free up 30% more time for high-value selling activities.",
      icon: Zap
    },
    {
      title: "Better Forecasting",
      description: "Increase forecast accuracy by up to 28% with AI-powered prediction models.",
      icon: BarChart2
    },
    {
      title: "Enhanced Lead Scoring",
      description: "Focus on the right prospects with AI that can identify high-potential leads.",
      icon: Target
    },
    {
      title: "Personalization at Scale",
      description: "Create tailored outreach that resonates with each prospect without manual effort.",
      icon: Users
    },
    {
      title: "Data-Driven Decisions",
      description: "Base your strategy on patterns and insights extracted from your sales data.",
      icon: Activity
    },
    {
      title: "Revenue Growth",
      description: "Companies implementing AI in sales report 10-30% revenue increases on average.",
      icon: BarChart2
    }
  ];

  const aiCapabilities = [
    {
      title: "Just-in-Time Knowledge Delivery",
      description: "AI retrieves relevant information exactly when needed during sales conversations.",
      icon: Database
    },
    {
      title: "Content Generation Assistance",
      description: "Create personalized emails, proposals, and follow-ups in seconds.",
      icon: FileText
    },
    {
      title: "Real-Time Guidance & Coaching",
      description: "Get recommendations during calls and meetings to improve your approach.",
      icon: Bot
    },
    {
      title: "AI-Powered Lead Scoring",
      description: "Automatically identify and prioritize your most promising prospects.",
      icon: Target
    },
    {
      title: "Personalized Outreach at Scale",
      description: "Tailor communication to each prospect without the manual effort.",
      icon: Send
    },
    {
      title: "Advanced Analytics & Reporting",
      description: "Gain deeper insights into your pipeline and performance trends.",
      icon: Activity
    }
  ];

  const implementationChallenges = [
    {
      title: "Data Privacy & Security",
      description: "Ensuring sensitive customer data is protected while leveraging AI capabilities.",
      icon: Lock
    },
    {
      title: "Integration Complexity",
      description: "Connecting AI solutions with your existing tech stack and workflows.",
      icon: Cpu
    },
    {
      title: "Data Quality Issues",
      description: "Addressing incomplete or inconsistent data that can affect AI performance.",
      icon: Database
    },
    {
      title: "Achieving ROI",
      description: "Selecting the right AI applications that deliver measurable business value.",
      icon: BarChart2
    },
    {
      title: "User Adoption",
      description: "Ensuring your team embraces and effectively uses the new AI tools.",
      icon: Users
    }
  ];

  const processSteps = [
    {
      title: "Assessment",
      description: "We evaluate your current sales process, tech stack, and specific challenges."
    },
    {
      title: "Strategy",
      description: "We develop a tailored AI implementation plan focused on your key objectives."
    },
    {
      title: "Tool Selection",
      description: "We recommend specific AI solutions that address your unique needs."
    },
    {
      title: "Implementation & Integration",
      description: "We help you deploy the solutions and integrate them with your existing systems."
    },
    {
      title: "Training & Optimization",
      description: "We ensure your team can effectively use the tools and continuously improve."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Sales Automation | Smart Sales Process</title>
        <meta name="description" content="Leverage cutting-edge AI technology to enhance sales efficiency, insights, and customer engagement for your small business." />
      </Helmet>
      
      <PageHeader
        title="Supercharge Your Sales with Intelligent Automation"
        subtitle="Leverage AI to automate tasks, provide insights, and personalize engagement to boost revenue and efficiency."
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">How AI is Transforming Sales</h2>
              <p className="text-navy-700 mb-6">
                Artificial Intelligence is revolutionizing how businesses approach sales, enabling small teams to compete with larger organizations through smarter processes and automation.
              </p>
              
              <p className="text-navy-700 mb-6">
                Today's AI tools can help you identify high-potential leads, personalize outreach at scale, automate repetitive tasks, and provide data-driven insights that guide your strategy.
              </p>
              
              <div className="bg-navy-800 text-white p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4">The Impact of AI in Sales</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="bg-teal-600/20 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-400 text-xs">✓</span>
                    </div>
                    <span>Companies using AI in sales report 10-30% revenue increases</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-600/20 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-400 text-xs">✓</span>
                    </div>
                    <span>AI can automate up to 40% of repetitive sales tasks</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-600/20 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-400 text-xs">✓</span>
                    </div>
                    <span>Lead scoring accuracy improves by 35% with AI algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-600/20 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-400 text-xs">✓</span>
                    </div>
                    <span>Sales forecasts become 28% more accurate with AI</span>
                  </li>
                </ul>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Discuss your AI automation needs
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-on-scroll">
              {aiTransformations.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="text-teal-600" size={20} />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Key Areas We Help You Leverage AI"
            subtitle="Strategic implementation of AI in these areas delivers the greatest impact for small sales teams:"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((capability, index) => (
              <FeatureCard
                key={index}
                title={capability.title}
                description={capability.description}
                icon={capability.icon}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">The Right AI Tools Make All the Difference</h3>
                <p className="text-navy-700 mb-4">
                  With hundreds of AI sales tools on the market, choosing the right solutions for your specific needs is critical. We help you navigate this complex landscape to select tools that:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">Solve your most pressing sales challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">Integrate with your existing tech stack</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">Fit within your budget constraints</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">Deliver quick wins and long-term value</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-50 min-w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-teal-600 text-xs">✓</span>
                    </div>
                    <span className="text-navy-700">Can grow and scale with your business</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-navy-800 to-navy-700 p-6 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4">Common Categories of AI Sales Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Cpu className="text-teal-400 mr-3 mt-1" size={16} />
                    <div>
                      <h4 className="font-medium">Conversation Intelligence</h4>
                      <p className="text-navy-100 text-sm">Record, transcribe, and analyze sales calls for coaching and insights</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Cpu className="text-teal-400 mr-3 mt-1" size={16} />
                    <div>
                      <h4 className="font-medium">Sales Enablement Platforms</h4>
                      <p className="text-navy-100 text-sm">Centralize content and provide real-time guidance during sales interactions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Cpu className="text-teal-400 mr-3 mt-1" size={16} />
                    <div>
                      <h4 className="font-medium">Outreach & Engagement Tools</h4>
                      <p className="text-navy-100 text-sm">Personalize communication and automate follow-ups at scale</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Cpu className="text-teal-400 mr-3 mt-1" size={16} />
                    <div>
                      <h4 className="font-medium">Pipeline & Forecast Analytics</h4>
                      <p className="text-navy-100 text-sm">Predict outcomes and identify risks in your sales pipeline</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Cpu className="text-teal-400 mr-3 mt-1" size={16} />
                    <div>
                      <h4 className="font-medium">CRM Enhancements</h4>
                      <p className="text-navy-100 text-sm">Automate data entry and enrich contact information</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Navigating Implementation Challenges</h2>
              <p className="text-navy-700 mb-6">
                While the benefits of AI sales tools are significant, implementation comes with challenges. We help you address these common obstacles:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {implementationChallenges.slice(0, 4).map((challenge, index) => (
                  <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="bg-navy-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                      <challenge.icon className="text-navy-600" size={20} />
                    </div>
                    <h3 className="font-semibold text-navy-900 mb-2">{challenge.title}</h3>
                    <p className="text-sm text-navy-600">{challenge.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Our Approach Ensures Success</h3>
                <p className="text-navy-700 mb-4">
                  We guide you through each step of AI implementation, ensuring you avoid costly mistakes and achieve maximum ROI from your investment.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                >
                  Learn how we can help
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 bg-navy-800 text-white p-8 rounded-xl animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-6">Our AI Implementation Process</h3>
              
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
        title="Implement Smart AI Sales Solutions"
        subtitle="Take the first step toward leveraging AI to transform your sales performance."
        buttonText="Schedule a Free Consultation"
        buttonLink="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
      />
    </>
  );
};

export default AIAutomation;
