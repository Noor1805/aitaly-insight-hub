"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photos = [1, 2, 3, 4];

const MediaShowcase = () => {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stackRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLDivElement>(".stack-photo");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackRef.current,
          start: "top top",
          end: `+=${items.length * 120}%`,
          scrub: true,
          pin: true,
        },
      });

      items.forEach((item, i) => {
        tl.fromTo(
          item,
          { y: "20%", opacity: 0, scale: 0.95, rotate: -2 },
          { 
            y: "0%", opacity: 1, scale: 1, rotate: 0, 
            duration: 1, ease: "power2.out" 
          },
          i * 0.8
        );
      });
    }, stackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[hsl(var(--background))]">
      {/* Hero video */}
      <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-brand)] w-[98%] mx-auto mb-12 md:mb-20">
        <video
          src="/assets/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[50vh] md:h-[70vh] xl:h-[85vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsla(48,95%,44%,0.15)] to-transparent" />
      </div>

      {/* Stacked photos reveal */}
      <div ref={stackRef} className="relative h-[500vh] mb-6">
      {photos.map((n, i) => (
        <div
          key={n}
          className="sticky top-0 w-[97%] mx-auto h-[100vh]"
          style={{
            zIndex: i,
            pointerEvents: "none", // avoid scroll blocking
          }}
        >
          <div className="w-[97%] mx-auto h-[100vh] overflow-hidden relative rounded-xl">
            <img
              src={`/assets/image${n}.jpg`}
              alt={`Photo ${n}`}
              className="w-[97%] mx-auto h-[100vh] object-cover rounded-xl"
            />
            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default MediaShowcase;
