import React from "react";
import { Products } from "@/app/components/elements/Products";
import localFont from "next/font/local";

import orangeCan from "@/app/img/can/orangeCan.png";
import tropicalCan from "@/app/img/can/tropicalCan.png";
import watermelonCan from "@/app/img/can/watermelonCan.png";

import kiwi from "@/app/img/fruits/pastequeKiwi/kiwi1.png";
import kiwi2 from "@/app/img/fruits/pastequeKiwi/kiwi2.png";
import pasteque from "@/app/img/fruits/pastequeKiwi/pasteque.png";

import dragon1 from "@/app/img/fruits/topical/dragon1.png";
import dragon2 from "@/app/img/fruits/topical/dragon2.png";
import papaya from "@/app/img/fruits/topical/papaya.png";

import orange1 from "@/app/img/fruits/orange/orange1.png";
import orange2 from "@/app/img/fruits/orange/orange2.png";
import citron from "@/app/img/fruits/orange/citron.png";

const monumentExtended = localFont({
  src: "../fonts/MonumentExtended-Regular.otf",
});

const boissons = [
  {
    name: "TROPICAL BLISS",
    cardColor: "bg-[#F091A5]/25",
    buttonColor: "bg-[#F091A5]",
    can: tropicalCan,
    backFruit1: dragon2,
    backFruit2: dragon1,
    backFruit3: papaya,
  },
  {
    name: "PASTEQUE KIWI",
    cardColor: "bg-[#337357]/25",
    buttonColor: "bg-[#337357]",
    can: watermelonCan,
    backFruit1: kiwi,
    backFruit2: kiwi2,
    backFruit3: pasteque,
  },
  {
    name: "ORANGE SANGUINE",
    cardColor: "bg-[#C84C09]/25",
    buttonColor: "bg-[#C84C09]",
    can: orangeCan,
    backFruit1: orange1,
    backFruit2: orange2,
    backFruit3: citron,
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
              can={element.can}
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
