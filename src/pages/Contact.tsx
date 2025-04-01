
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, Calendar, Send, AlertCircle } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being typed in
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Please enter your message";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // For now, we'll simulate a successful submission
      // In a real implementation, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success notification
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      // Error notification
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Smart Sales Process</title>
        <meta name="description" content="Get in touch with Smart Sales Process to discuss your sales playbook and AI automation needs. Schedule a free consultation." />
      </Helmet>
      
      <PageHeader
        title="Let's Build Your Smart Sales Process"
        subtitle="Get in touch to discuss your sales challenges and how we can help transform your performance."
      />

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-teal-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Email Us</h3>
                      <p className="text-navy-600 mb-1">
                        <a href="mailto:Sales@SmartSalesProcess.com" className="hover:text-teal-600 transition-colors">
                          Sales@SmartSalesProcess.com
                        </a>
                      </p>
                      <p className="text-navy-600">
                        <a href="mailto:Info@SmartSalesProcess.com" className="hover:text-teal-600 transition-colors">
                          Info@SmartSalesProcess.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-50 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <Calendar className="text-teal-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Schedule a Call</h3>
                      <p className="text-navy-600 mb-3">Book a free 30-minute consultation.</p>
                      <a
                        href="https://calendar.app.google/2LoDYSKqKkXFR9mU8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                      >
                        Schedule Consultation
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Our Process</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <div className="bg-navy-800 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Initial Consultation</h4>
                        <p className="text-navy-600">We discuss your challenges and goals to understand your situation.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-navy-800 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Needs Analysis</h4>
                        <p className="text-navy-600">We assess your current sales process and identify key opportunities.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-navy-800 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Custom Solution</h4>
                        <p className="text-navy-600">We propose a tailored approach to address your specific needs.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-navy-800 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">Implementation</h4>
                        <p className="text-navy-600">We work together to deploy and optimize your new sales solutions.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${
                          errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${
                          errors.company ? "border-red-300 bg-red-50" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        placeholder="Your company"
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${
                          errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
                        placeholder="Your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-navy-700 mb-1">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        errors.service ? "border-red-300 bg-red-50" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    >
                      <option value="">Select a service</option>
                      <option value="Sales Playbook Creation">Sales Playbook Creation</option>
                      <option value="AI Sales Automation">AI Sales Automation</option>
                      <option value="Both/Integrated Solution">Both/Integrated Solution</option>
                      <option value="Unsure/Discovery Call">Unsure/Discovery Call</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.service}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                      Your Message/Goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border ${
                        errors.message ? "border-red-300 bg-red-50" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500`}
                      placeholder="Tell us about your sales challenges or goals..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-navy-600">
                      I agree to the <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
