
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, centered = false, className }: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-10 animate-on-scroll",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-navy-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
