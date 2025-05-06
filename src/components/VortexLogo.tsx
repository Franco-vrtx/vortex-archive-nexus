
import { cn } from "@/lib/utils";

interface VortexLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function VortexLogo({ className, size = "md" }: VortexLogoProps) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };

  return (
    <div className={cn(sizes[size], "relative", className)}>
      <img 
        src="/lovable-uploads/984cc2c1-70f0-4895-84ee-d1df6bfd5d16.png" 
        alt="Vortex Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
