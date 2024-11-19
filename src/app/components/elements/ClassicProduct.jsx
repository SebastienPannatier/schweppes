import React from "react";
import can from "@/app/img/defaultCanette/pink.png";

export const ClassicProduct = () => {
  return (
    <div className="w-[25%] aspect-auto bg-[#DBAFC2] rounded-3xl flex justify-center items-center flex-shrink-0">
      <img src={can.src} className="h-[80%]" />
    </div>
  );
};
