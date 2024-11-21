import React from "react";
import { Products } from "@/app/components/elements/Products";
import localFont from "next/font/local";

import kiwi from "@/app/img/fruits/kiwi1.png";
import kiwi2 from "@/app/img/fruits/kiwi2.png";
import pasteque from "@/app/img/fruits/pasteque.png";

const monumentExtended = localFont({
  src: "../fonts/MonumentExtended-Regular.otf",
});

const boissons = [
  {
    name: "TROPICAL BLISS",
    cardColor: "bg-[#F091A5]/25",
    buttonColor: "bg-[#F091A5]",
    backFruit1: kiwi,
    backFruit2: kiwi2,
    backFruit3: pasteque,
  },
  {
    name: "PASTEQUE KIWI",
    cardColor: "bg-[#337357]/25",
    buttonColor: "bg-[#337357]",
    backFruit1: kiwi,
    backFruit2: kiwi2,
    backFruit3: pasteque,
  },
  {
    name: "ORANGE SANGUINE",
    cardColor: "bg-[#C84C09]/25",
    buttonColor: "bg-[#C84C09]",
    backFruit1: kiwi,
    backFruit2: kiwi2,
    backFruit3: pasteque,
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
              key={i}
              name={element.name}
              cardColor={element.cardColor}
              buttonColor={element.buttonColor}
              backFruit1={element.backFruit1}
              backFruit2={element.backFruit2}
              backFruit3={element.backFruit3}
            />
          );
        })}
      </div>
    </section>
  );
};
