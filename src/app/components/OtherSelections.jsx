import React from "react";
import { ClassicProduct } from "@/app/components/elements/ClassicProduct";

import mojito from "@/app/img/defaultCanette/mojito.png";
import agrumes from "@/app/img/defaultCanette/agrumes.png";
import tonic from "@/app/img/defaultCanette/tonic.png";
import pink from "@/app/img/defaultCanette/pink.png";

const classicProductList = [
  {
    productImage: mojito,
    bgColor: "bg-[#1EFF0040]",
  },
  {
    productImage: agrumes,
    bgColor: "bg-[#D8433940]",
  },
  {
    productImage: tonic,
    bgColor: "bg-[#F2C70940]",
  },
  {
    productImage: pink,
    bgColor: "bg-[#DBAFC240]",
  },
];

export const OtherSelections = () => {
  return (
    <section className="w-full h-screen mt-[5%] flex flex-col relative">
      <div className="w-[70%] h-[20%] m-auto relative">
        <a className="font-monumentExtended font-black text-7xl absolute top-0 left-0">
          SIGNATURE
        </a>
        <a className="font-monumentExtended font-black text-7xl absolute bottom-0 right-0">
          FLAVOURS
        </a>
      </div>
      <div className="w-full h-[50%] m-auto flex overflow-hidden relative space-x-4">
        {classicProductList.map((element, i) => {
          return (
            <ClassicProduct
              key={i}
              productImage={classicProductList[i].productImage}
              bgColor={classicProductList[i].bgColor}
            />
          );
        })}
      </div>
    </section>
  );
};
