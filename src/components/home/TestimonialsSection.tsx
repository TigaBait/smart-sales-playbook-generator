
import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "../common/TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The sales playbook they created completely transformed our approach. We now have consistency across the team and our ramp-up time for new hires has been cut by 40%.",
      author: "[Client Name]",
      role: "Founder",
      company: "Software Startup"
    },
    {
      quote: "Their AI automation recommendations simplified our process while giving us deeper insights. Within 3 months, we saw a 22% increase in our conversion rates.",
      author: "[Client Name]",
      role: "CEO",
      company: "E-commerce Business"
    },
    {
      quote: "As a solopreneur, I was overwhelmed by sales. Smart Sales Process gave me a structured approach and AI tools that allow me to do more with less. Game changer!",
      author: "[Client Name]",
      role: "Independent Consultant"
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from founders and small business leaders who've transformed their sales performance with our help."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl border border-gray-100 shadow-sm animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">54%</div>
              <p className="text-navy-700">Higher quota attainment with proper sales playbooks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">35%</div>
              <p className="text-navy-700">Faster onboarding for new sales team members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">20%+</div>
              <p className="text-navy-700">Average revenue increase with AI implementation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
