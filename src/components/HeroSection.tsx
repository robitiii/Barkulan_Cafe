import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  children?: ReactNode;
  centered?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = "bg-muted",
  children,
  centered = true,
}: HeroSectionProps) => {
  return (
    <section
      className={`relative w-full min-h-[500px] flex items-center ${backgroundColor}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-secondary/60" />
      )}
      <div className={`container mx-auto px-6 py-20 relative z-10 ${centered ? "text-center" : ""}`}>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${backgroundImage ? "text-white" : "text-foreground"}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg md:text-xl max-w-2xl ${centered ? "mx-auto" : ""} mb-8 ${backgroundImage ? "text-white" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
