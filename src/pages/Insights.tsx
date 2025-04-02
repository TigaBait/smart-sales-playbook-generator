import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import CallToAction from "@/components/common/CallToAction";

const Insights = () => {
  const blogPosts = [
    {
      id: "signs-need-sales-playbook",
      title: "5 Signs Your Startup Needs a Sales Playbook Now",
      excerpt: "Is your sales process inconsistent? Are new hires taking too long to ramp up? Learn the key indicators that it's time to create a structured sales playbook for your business.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      date: "June 15, 2023",
      author: "Smart Sales Process",
      category: "Sales Playbooks"
    },
    {
      id: "decoding-ai-for-sales",
      title: "Decoding AI for Sales: Where Small Businesses Should Start",
      excerpt: "Confused about how to implement AI in your sales process? This guide breaks down the most practical first steps for small businesses looking to leverage AI without breaking the bank.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "July 22, 2023",
      author: "Smart Sales Process",
      category: "AI Automation"
    },
    {
      id: "essential-components-playbook",
      title: "The Essential Components of a Sales Playbook That Actually Gets Used",
      excerpt: "Many sales playbooks gather dust. Learn the key components that create a sales playbook your team will actually reference and apply in their daily selling activities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      date: "August 10, 2023",
      author: "Smart Sales Process",
      category: "Sales Playbooks"
    },
    {
      id: "avoiding-ai-implementation-pitfalls",
      title: "Avoiding the Pitfalls: Common Mistakes When Implementing Sales AI",
      excerpt: "Learn the most common mistakes businesses make when adopting AI sales tools and how to avoid them to ensure successful implementation and ROI.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      date: "September 5, 2023",
      author: "Smart Sales Process",
      category: "AI Automation"
    },
    {
      id: "choose-right-ai-tools",
      title: "How to Choose the Right AI Sales Tools for Your Budget",
      excerpt: "With hundreds of AI sales tools on the market, how do you select the right ones for your specific needs and budget constraints? This guide will help you navigate the options.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "October 14, 2023",
      author: "Smart Sales Process",
      category: "AI Automation"
    },
    {
      id: "quantifying-roi-sales-tech",
      title: "Quantifying the ROI of Sales Playbooks & Automation",
      excerpt: "How do you measure the impact of your sales enablement investments? Learn the key metrics to track and how to calculate the true ROI of your sales playbooks and AI tools.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      date: "November 8, 2023",
      author: "Smart Sales Process",
      category: "Strategy"
    }
  ];

  const categories = [
    "All",
    "Sales Playbooks",
    "AI Automation",
    "Strategy",
    "Best Practices"
  ];

  const handleReadMoreClick = (e) => {
    e.preventDefault();
    alert("Full blog post coming soon! This feature is under development.");
  };

  return (
    <>
      <Helmet>
        <title>Sales Insights & Resources | Smart Sales Process</title>
        <meta name="description" content="Articles, guides, and resources on sales playbooks, AI automation, and effective sales strategies for founders and small business teams." />
      </Helmet>
      
      <PageHeader
        title="Sales Insights for Founders & Growing Teams"
        subtitle="Practical advice and insights to help you improve your sales process, leverage technology, and drive consistent results."
      />

      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col animate-on-scroll">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-medium bg-teal-50 text-teal-700 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <div className="text-navy-500 text-sm flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">{post.title}</h2>
                      <p className="text-navy-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="mt-auto">
                        <button
                          onClick={handleReadMoreClick}
                          className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                        >
                          Read more
                          <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            
            <div className="md:w-72 lg:w-80">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button 
                          onClick={() => alert(`Filter by ${category} coming soon!`)}
                          className="text-navy-700 hover:text-teal-600 transition-colors"
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Need Personalized Advice?</h3>
                  <p className="text-navy-600 mb-4">Schedule a consultation to discuss your specific sales challenges.</p>
                  <a
                    href="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                  >
                    Book a Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction
        title="Stay Updated with Our Latest Insights"
        subtitle="Subscribe to our newsletter to receive the latest articles, tips, and resources directly in your inbox."
        buttonText="Subscribe Now"
        buttonLink="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </>
  );
};

export default Insights;
