import React, { useEffect, useRef } from "react";
import "@/app/styles/productScrollSection.css";
import { gsap } from "gsap";

export const ProductScrollSection = ({
  canPicture,
  productName,
  productDesc,
  flavorPicture,
}) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Merci ChatGPT pour m'avoir aidé pour l'animation

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, [canPicture, productName, productDesc, flavorPicture]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen flex items-center relative overflow-hidden"
    >
      <img src={canPicture.src} ref={imageRef} className="h-[70%]" />
      <div className="flex flex-col w-[25%] h-[50%] relative z-10">
        <h1 className="font-monumentExtended text-4xl font-extrabold mb-[5%]">
          {productName}
        </h1>
        <p className="text-wrap mb-[5%]">{productDesc}</p>
        <button className="bg-[#ED6380] hover:bg-[#ED638090] text-3xl text-white rounded-2xl w-[80%] h-[15%] tracking-widest">
          PRE ORDER NOW
        </button>
      </div>
      <div className="absolute right-[-20%] h-[910px] w-[910px] rounded-full overflow-hidden z-1">
        <img
          src={flavorPicture.src}
          className="h-full w-full object-cover"
          alt="Flavor"
        />
      </div>
    </div>
  );
};
