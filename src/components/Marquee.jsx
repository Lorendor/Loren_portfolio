import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const words = ["Works", "Showcase"];

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      const totalWidth = marquee.scrollWidth / 2;

      gsap.to(marquee, {
        x: -totalWidth,
        duration: 10,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth)
        }
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  // Repeat the words enough times for a seamless loop
  const repeatedWords = Array(20).fill(words).flat();

  return (
    <div className="overflow-hidden w-full bg-transparent py-2">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {repeatedWords.map((word, idx) => (
          <span
            key={idx}
            className={`mx-8 text-lg font-semibold ${
              word === "Works" ? "text-palegreen" : "text-gray-300"
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;