"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const VideoPub = () => {
  const divRight = useRef(null);
  const divLeft = useRef(null);
  const divTop = useRef(null);
  const divBottom = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    // Animate each div to shrink their height/width to 0
    tl.to(divRight.current, { width: 0, duration: 1 }, 0)
      .to(divLeft.current, { width: 0, duration: 1 }, 0)
      .to(divTop.current, { height: 0, duration: 1 }, 0)
      .to(divBottom.current, { height: 0, duration: 1 }, 0);

    return () => {
      ScrollTrigger.killAll(); // Clean up the scroll triggers
    };
  }, []);

  return (
    <section className="mt-[5%] relative" ref={sectionRef}>
      {/* Updated sizes for larger initial dimensions */}
      <div
        className="h-full w-[8%] bg-white absolute right-0"
        ref={divRight}
      ></div>
      <div
        className="h-full w-[8%] bg-white absolute left-0"
        ref={divLeft}
      ></div>
      <div
        className="w-full h-[10%] bg-white absolute top-0"
        ref={divTop}
      ></div>
      <div
        className="w-full h-[10%] bg-white absolute bottom-0"
        ref={divBottom}
      ></div>
      <video className="w-full" autoPlay muted loop>
        <source src="pub.mp4" type="video/mp4" />
      </video>
    </section>
  );
};
