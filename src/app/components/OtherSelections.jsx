import React from "react";
import { ClassicProduct } from "@/app/components/elements/ClassicProduct";
import localFont from "next/font/local";

import can from "@/app/img/defaultCanette/pink.png";

const classicProductList = [
  {
    productImage: can,
    bgColor: "bg-[#DBAFC2]",
  },
];

const monumentExtended = localFont({
  src: "../fonts/MonumentExtended-Regular.otf",
});

export const OtherSelections = () => {
  return (
    <section className="w-full h-screen mt-[5%] flex flex-col relative">
      <div className="w-[70%] h-[20%] m-auto relative">
        <a
          className={
            (monumentExtended.className,
            "font-black text-7xl absolute top-0 left-0")
          }
        >
          SIGNATURE
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
      <div className="w-full h-[50%] m-auto flex overflow-hidden relative space-x-4">
        <ClassicProduct
          productImage={classicProductList[0].productImage}
          bgColor={classicProductList[0].bgColor}
        />
        <ClassicProduct
          productImage={classicProductList[0].productImage}
          bgColor={classicProductList[0].bgColor}
        />
        <ClassicProduct
          productImage={classicProductList[0].productImage}
          bgColor={classicProductList[0].bgColor}
        />
        <ClassicProduct
          productImage={classicProductList[0].productImage}
          bgColor={classicProductList[0].bgColor}
        />
      </div>
    </section>
  );
};
