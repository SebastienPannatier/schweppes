"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const Products = ({
  name,
  can,
  cardColor,
  buttonColor,
  backFruit1,
  backFruit2,
  backFruit3,
}) => {
  const cardRef = useRef(null);
  const fruit1Ref = useRef(null);
  const fruit2Ref = useRef(null);
  const fruit3Ref = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const fruit1 = fruit1Ref.current;
    const fruit2 = fruit2Ref.current;
    const fruit3 = fruit3Ref.current;

    const animFruit1 = gsap.to(fruit1, {
      scale: 1,
      top: "60%",
      right: "15%",
      duration: 0.3,
      ease: "back.inOut",
      paused: true,
    });

    const animFruit2 = gsap.to(fruit2, {
      scale: 1,
      top: "30%",
      right: "60%",
      duration: 0.5,
      ease: "back.inOut",
      paused: true,
    });

    const animFruit3 = gsap.to(fruit3, {
      scale: 1,
      top: "10%",
      right: "15%",
      duration: 0.7,
      ease: "back.inOut",
      paused: true,
    });

    const handleMouseEnter = () => {
      animFruit1.play();
      animFruit2.play();
      animFruit3.play();
    };
    const handleMouseLeave = () => {
      animFruit1.reverse();
      animFruit2.reverse();
      animFruit3.reverse();
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div
      className={`h-[100%] w-[30%] ${cardColor} rounded-3xl flex flex-col items-center relative z-10`}
      ref={cardRef}
    >
      <a className="font-monumentExtended text-4xl font-extrabold mt-[5%]">
        {name}
      </a>
      <img src={can.src} alt={can.src} className="z-30" />
      <img
        src={backFruit1.src}
        className="absolute top-[35%] scale-0 z-20"
        ref={fruit1Ref}
      />
      <img
        src={backFruit2.src}
        className="absolute top-[35%] scale-0 z-20"
        ref={fruit2Ref}
      />
      <img
        src={backFruit3.src}
        className="absolute top-[35%] scale-0 z-20"
        ref={fruit3Ref}
      />
      <button
        className={`${buttonColor} w-[50%] h-[7%] text-white font-extrabold rounded-2xl absolute bottom-[10%] text-2xl tracking-wider`}
      >
        DISCOVER
      </button>
    </div>
  );
};
