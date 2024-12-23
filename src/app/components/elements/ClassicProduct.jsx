"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import productReference from "@/app/img/defaultCanette/mojito.png";

export const ClassicProduct = ({ productImage, bgColor }) => {
  const productRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const element = productRef.current;
    const image = imageRef.current;

    gsap.set(image, { scale: 1 });

    const handleMouseEnter = () => {
      gsap.to(image, { scale: 1.1, duration: 0.1 });
    };

    const handleMouseLeave = () => {
      gsap.to(image, { scale: 1, duration: 0.1 });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={productRef}
      className={`${bgColor} w-[25%] aspect-auto rounded-3xl flex justify-center items-center flex-shrink-0 relative`}
    >
      <Image
        ref={imageRef}
        src={productImage.src}
        alt={imageRef}
        width={productReference.width}
        height={productReference.height}
        className="w-[30%] transition-transform duration-300"
      />
    </div>
  );
};
