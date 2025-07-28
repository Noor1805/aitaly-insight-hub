import * as React from "react"
import { Card } from "./card"
import { GlareHover } from "./glare-hover"
import { cn } from "@/lib/utils"

interface GlareCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glareColor?: string;
  glareOpacity?: number;
  transitionDuration?: number;
  disableGlare?: boolean;
}

const GlareCard = React.forwardRef<HTMLDivElement, GlareCardProps>(
  ({ 
    className, 
    glareColor = "rgba(163, 247, 191, 0.2)", // Light green default
    glareOpacity = 0.2,
    transitionDuration = 700,
    disableGlare = false,
    children,
    ...props 
  }, ref) => {

    if (disableGlare) {
      return (
        <Card
          className={className}
          ref={ref}
          {...props}
        >
          {children}
        </Card>
      );
    }

    return (
      <GlareHover
        glareColor={glareColor}
        glareOpacity={glareOpacity}
        transitionDuration={transitionDuration}
        className={cn("rounded-lg", className)}
      >
        <Card
          className="w-full h-full hover-lift"
          ref={ref}
          {...props}
        >
          {children}
        </Card>
      </GlareHover>
    );
  }
)
GlareCard.displayName = "GlareCard"

// Re-export Card components for use with GlareCard
export { GlareCard, type GlareCardProps }
export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./card"