
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div className={cn(
      "bg-gradient-to-r from-navy-900 to-navy-800 text-white py-20 md:py-28",
      className
    )}>
      <div className="container-custom">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-navy-100">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
