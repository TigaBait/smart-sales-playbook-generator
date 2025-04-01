
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, role, company, className }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll",
      className
    )}>
      <Quote className="text-teal-500 mb-4" size={32} />
      <p className="text-navy-700 mb-6 font-serif italic">{quote}</p>
      <div>
        <p className="font-semibold text-navy-900">{author}</p>
        {(role || company) && (
          <p className="text-navy-500 text-sm">
            {role}{role && company && ", "}{company}
          </p>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
