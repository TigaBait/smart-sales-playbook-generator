
import { cn } from "@/lib/utils";

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

const CallToAction = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className,
}: CallToActionProps) => {
  return (
    <section className={cn(
      "bg-gradient-to-r from-navy-900 to-navy-800 text-white py-16",
      className
    )}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-navy-100 mb-8">{subtitle}</p>}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-teal-600 hover:bg-teal-700"
            >
              {buttonText}
            </a>
            {secondaryButtonText && secondaryButtonLink && (
              <a
                href={secondaryButtonLink}
                className="btn-secondary bg-transparent text-white border-white hover:bg-white/10"
              >
                {secondaryButtonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
