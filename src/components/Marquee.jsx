import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Marquee = ({ words }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      const totalWidth = marquee.scrollWidth / 2;

      gsap.to(marquee, {
        x: -totalWidth,
        duration: 30,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth)
        }
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  // Repeat the words for loop
  const repeatedWords = Array(40).fill(words).flat();

  return (
    <div className="overflow-hidden w-full bg-darkgray dark:bg-white py-2">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {repeatedWords.map((word, idx) => (
          <span
            key={idx}
            className={`mx-8 text-lg font-semibold ${
              idx % 2=== 1 ? "text-purple" : "text-white dark:text-black"
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