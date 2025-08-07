"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RollingGallery from "./RollingGallery";

gsap.registerPlugin(ScrollTrigger);

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
            y: "0%",
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: "power2.out",
          },
          i * 0.8
        );
      });
    }, stackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[hsl(var(--background))]">
      <div className="w-full max-w-6xl mx-auto p-4 border-2rounded-2xl overflow-hidden shadow-[var(--shadow-brand)] mb-12 md:mb-20">
        <div className="relative w-full h-auto md:h-[70vh] xl:h-[85vh] rounded-2xl overflow-hidden">
          <video
            src="/assets/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[hsla(48,95%,44%,0.15)] to-transparent" />
        </div>
      </div>

      <div className="w-full px-4 mb-4">
        <div className="w-full max-w-7xl mx-auto rounded-md overflow-hidden">
          <RollingGallery autoplay pauseOnHover />
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
