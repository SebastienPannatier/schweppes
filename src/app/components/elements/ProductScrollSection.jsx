import React from "react";
import localFont from "next/font/local";
import "@/app/styles/productScrollSection.css";

const monumentExtended = localFont({
  src: "../../fonts/MonumentExtended-Regular.otf",
});

export const ProductScrollSection = ({
  canPicture,
  productName,
  productDesc,
  flavorPicture,
}) => {
  return (
    <div className="w-full h-screen flex items-center relative overflow-hidden">
      <img src={canPicture.src} className="h-[70%]" />
      <div className="flex flex-col w-[25%] h-[50%] relative z-10">
        <h1
          className={
            (monumentExtended.className, "text-4xl font-extrabold mb-[5%]")
          }
        >
          {productName}
        </h1>
        <p className="text-wrap mb-[5%]">{productDesc}</p>
        <button className="bg-[#ED6380] text-3xl text-white rounded-2xl w-[80%] h-[15%] tracking-widest">
          PRE ORDER NOW
        </button>
      </div>
      <img
        src={flavorPicture.src}
        className="absolute right-[-20%] h-[90%] rounded-full z-1"
      />
    </div>
  );
};
