import * as React from "react"
import { Button, ButtonProps } from "./button"
import { GlareHover } from "./glare-hover"
import { cn } from "@/lib/utils"

interface GlareButtonProps extends ButtonProps {
  glareColor?: string;
  glareOpacity?: number;
  transitionDuration?: number;
  disableGlare?: boolean;
}

const GlareButton = React.forwardRef<HTMLButtonElement, GlareButtonProps>(
  ({ 
    className, 
    variant = "default", 
    glareColor,
    glareOpacity = 0.25,
    transitionDuration = 600,
    disableGlare = false,
    children,
    ...props 
  }, ref) => {
    
    // Determine glare color based on variant and theme
    const getGlareColor = () => {
      if (glareColor) return glareColor;
      
      switch (variant) {
        case "hero":
        case "success":
        case "default":
          return "rgba(163, 247, 191, 0.3)"; // Light green glare
        case "destructive":
          return "rgba(255, 255, 255, 0.2)"; // White glare
        default:
          return "rgba(255, 255, 255, 0.2)"; // Default white glare
      }
    };

    if (disableGlare) {
      return (
        <Button
          className={className}
          variant={variant}
          ref={ref}
          {...props}
        >
          {children}
        </Button>
      );
    }

    return (
      <GlareHover
        glareColor={getGlareColor()}
        glareOpacity={glareOpacity}
        transitionDuration={transitionDuration}
        className={cn("rounded-lg", className)}
      >
        <Button
          className="w-full h-full"
          variant={variant}
          ref={ref}
          {...props}
        >
          {children}
        </Button>
      </GlareHover>
    );
  }
)
GlareButton.displayName = "GlareButton"

export { GlareButton, type GlareButtonProps }