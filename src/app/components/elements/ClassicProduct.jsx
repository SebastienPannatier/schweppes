import React from "react";

export const ClassicProduct = ({ productImage, bgColor }) => {
  return (
    <div
      className={`${bgColor} w-[25%] aspect-auto rounded-3xl flex justify-center items-center flex-shrink-0`}
    >
      <img src={productImage.src} className="h-[80%]" />
    </div>
  );
};
