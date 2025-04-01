import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, Calendar, Send } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

// Define form validation schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  company: z.string().min(1, { message: "Company name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(1, { message: "Please enter your message" }),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      privacy: false as true, // Type assertion to fix TypeScript error
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", data);
      
      // Step 1: Store the submission in Supabase
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone || null,
          service: data.service,
          message: data.message,
        });

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error(dbError.message);
      }

      console.log("Successfully saved to database, now sending email");

      // Step 2: Send email notification via Edge Function
      const response = await fetch("https://lsjspjfbpchfbngefhdw.supabase.co/functions/v1/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${supabase.supabaseKey}`,
        },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone || "",
          service: data.service,
          message: data.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Email API error:", errorData);
        throw new Error("Failed to send email notification");
      }
      
      const responseData = await response.json();
      console.log("Email sent response:", responseData);
      
      // Success notification
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
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
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interested In *</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Sales Playbook Creation">Sales Playbook Creation</SelectItem>
                              <SelectItem value="AI Sales Automation">AI Sales Automation</SelectItem>
                              <SelectItem value="Both/Integrated Solution">Both/Integrated Solution</SelectItem>
                              <SelectItem value="Unsure/Discovery Call">Unsure/Discovery Call</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message/Goals *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your sales challenges or goals..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="privacy"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
