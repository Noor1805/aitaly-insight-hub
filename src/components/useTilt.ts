import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

// Manually define the VanillaTilt options type
type TiltOptions = {
  max?: number;
  speed?: number;
  glare?: boolean;
  "max-glare"?: number;
  scale?: number;
  [key: string]: any;
};

declare global {
  interface HTMLDivElement {
    vanillaTilt?: {
      destroy: () => void;
    };
  }
}

export function useTilt(options: TiltOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        max: 35,
        speed: 800,
        glare: true,
        "max-glare": 0.2,
        scale: 1.03,
        ...options,
      });
    }

    return () => {
      ref.current?.vanillaTilt?.destroy();
    };
  }, [options]);

  return ref;
}
