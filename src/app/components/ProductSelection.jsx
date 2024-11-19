import React from "react";
import { Products } from "@/app/components/elements/Products";
import localFont from "next/font/local";

const monumentExtended = localFont({
  src: "../fonts/MonumentExtended-Regular.otf",
});

const boissons = [
  {
    name: "TROPICAL BLISS",
    cardColor: "bg-[#F091A5]/25",
    buttonColor: "bg-[#F091A5]",
  },
  {
    name: "PASTEQUE KIWI",
    cardColor: "bg-[#337357]/25",
    buttonColor: "bg-[#337357]",
  },
  {
    name: "ORANGE SANGUINE",
    cardColor: "bg-[#C84C09]/25",
    buttonColor: "bg-[#C84C09]",
  },
];

export const ProductSelection = () => {
  return (
    <section className="w-full h-screen relative mt-[5%]">
      <div className="w-[70%] h-[20%] m-auto relative">
        <a
          className={
            (monumentExtended.className,
            "font-black text-7xl absolute top-0 left-0")
          }
        >
          EXCLUSIVE
        </a>
        <a
          className={
            (monumentExtended.className,
            "font-black text-7xl absolute bottom-0 right-0")
          }
        >
          FLAVOURS
        </a>
      </div>
      <div className="flex justify-evenly relative h-[75%] w-[95%] mt-[3%] m-auto">
        {boissons.map((element, i) => {
          return (
            <Products
              key={element.name}
              name={element.name}
              cardColor={element.cardColor}
              buttonColor={element.buttonColor}
            />
          );
        })}
      </div>
    </section>
  );
};
