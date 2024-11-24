import React from "react";
import Image from "next/image";
import logo from "@/app/img/logo.png";
import { GoArrowUpRight } from "react-icons/go";

export const Footer = () => {
  return (
    <footer className="bg-[#F091A5] h-[40vh] w-full relative">
      <div className="absolute left-0 bottom-0 w-[30%] ml-[3%] mb-[2%]">
        <Image
          src={logo.src}
          alt={logo.src}
          width={logo.width}
          height={logo.height}
          className="w-[50%] mb-[5%]"
        />
        <div className="font-monumentExtended flex w-full justify-between font-extrabold">
          <a>PRIVACY POLICY</a>
          <a>COOKIE POLICY</a>
          <a>TERMS AND CONDITION</a>
        </div>
      </div>
      <div className="font-monumentExtended absolute right-0 bottom-0 mb-[2%] mr-[3%] flex flex-col items-end space-y-5 w-[30%] font text-5xl font-extrabold">
        <a className="flex">
          ABOUT <GoArrowUpRight className="text-3xl" />
        </a>
        <a className="flex">
          SELECTION <GoArrowUpRight className="text-3xl" />
        </a>
        <a className="flex">
          PRODUCT <GoArrowUpRight className="text-3xl" />
        </a>
        <a className="flex">
          CONTACT <GoArrowUpRight className="text-3xl" />
        </a>
      </div>
    </footer>
  );
};
