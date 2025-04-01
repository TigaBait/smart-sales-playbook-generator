
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll",
      className
    )}>
      <div className="bg-teal-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-teal-600" size={24} />
      </div>
      <h3 className="text-lg font-semibold text-navy-900 mb-2">{title}</h3>
      <p className="text-navy-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
