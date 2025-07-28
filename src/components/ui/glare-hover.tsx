import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface GlareHoverProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  glareOpacity?: number;
  transitionDuration?: number;
  disabled?: boolean;
}

export const GlareHover: React.FC<GlareHoverProps> = ({
  children,
  className,
  glareColor = 'rgba(255, 255, 255, 0.3)',
  glareOpacity = 0.25,
  transitionDuration = 600,
  disabled = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!disabled) setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      {children}
      
      {/* Glare Effect */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isHovered
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glareColor}, transparent 40%)`
            : 'transparent',
          opacity: isHovered ? glareOpacity : 0,
          transition: `opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      />
    </div>
  );
};

// Higher-order component for easy wrapping
export const withGlareHover = <P extends object>(
  Component: React.ComponentType<P>,
  glareProps?: Partial<GlareHoverProps>
) => {
  return React.forwardRef<any, P & { glareHoverProps?: Partial<GlareHoverProps> }>((props, ref) => {
    const { glareHoverProps, ...componentProps } = props;
    const finalGlareProps = { ...glareProps, ...glareHoverProps };

    return (
      <GlareHover {...finalGlareProps}>
        <Component {...(componentProps as P)} ref={ref} />
      </GlareHover>
    );
  });
};