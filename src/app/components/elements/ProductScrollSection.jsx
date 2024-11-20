import React from "react";
import can from "@/app/img/canette.png";
import background from "@/app/img/background-product/pasteque.png";
import localFont from "next/font/local";
import "@/app/styles/productScrollSection.css";

const monumentExtended = localFont({
  src: "../../fonts/MonumentExtended-Regular.otf",
});

export const ProductScrollSection = () => {
  return (
    <div className="w-full h-screen flex items-center relative overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-4 w-[3%] h-full absolute left-[3%]">
        <div className="marker-active"></div>
        <div className="marker"></div>
        <div className="marker"></div>
      </div>
      <img src={can.src} className="h-[70%]" />
      <div className="flex flex-col w-[25%] h-[50%] relative z-10">
        <h1
          className={
            (monumentExtended.className, "text-4xl font-extrabold mb-[5%]")
          }
        >
          TROPICAL BLISS
        </h1>
        <p className="text-wrap mb-[5%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel natus
          ut perferendis exercitationem facere nam? Rem vitae minima odit eaque,
          accusantium, at, amet quibusdam esse laborum libero hic voluptatibus.
        </p>
        <button className="bg-[#ED6380] text-3xl text-white rounded-2xl w-[80%] h-[15%] tracking-widest">
          PRE ORDER NOW
        </button>
      </div>
      <img
        src={background.src}
        className="absolute right-[-20%] h-[90%] rounded-full z-1"
      />
    </div>
  );
};
