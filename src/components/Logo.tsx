interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-serif italic font-normal ${textSizeClasses[size]} text-foreground/90`}>
        pando
      </span>
    </div>
  );
};
