import React from "react";
import localFont from "next/font/local";
import canette from "@/app/img/canette.png";

const monumentExtended = localFont({
  src: "../../fonts/MonumentExtended-Regular.otf",
});

export const Products = ({ name, cardColor, buttonColor }) => {
  return (
    <div
      className={`h-[100%] w-[30%] ${cardColor} rounded-3xl flex flex-col items-center relative`}
    >
      <a
        className={
          (monumentExtended.className, "text-4xl font-extrabold mt-[5%]")
        }
      >
        {name}
      </a>
      <img src={canette.src} alt={canette.src} />
      <button
        className={
          (monumentExtended.className,
          `${buttonColor} w-[50%] h-[7%] text-white font-extrabold rounded-2xl absolute bottom-[10%] text-2xl tracking-wider`)
        }
      >
        DISCOVER
      </button>
    </div>
  );
};
