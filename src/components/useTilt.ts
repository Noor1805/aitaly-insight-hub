import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export function useTilt(options: VanillaTilt.VanillaTiltOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        max: 25,
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
