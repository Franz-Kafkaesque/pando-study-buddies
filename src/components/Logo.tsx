import pandoLogo from "@/assets/pando-logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  const textSizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={pandoLogo} alt="Pando Logo" className={sizeClasses[size]} />
      {showText && (
        <span className={`font-serif font-semibold tracking-tight ${textSizeClasses[size]}`}>
          Pando.
        </span>
      )}
    </div>
  );
};
