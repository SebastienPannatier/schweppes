import React from "react";
import logo from "@/app/img/logo.png";
import circular_text from "@/app/img/Circular-Text.png";
import scrollImg from "@/app/img/scroll.png";
import "@/app/styles/hero.css";
import { Nav } from "@/app/components/elements/Nav";

export const Hero = () => {
  return (
    <section className="h-screen w-full pt-5 flex relative">
      <Nav />
      <img src={logo.src} alt={logo.src} className="w-64 absolute left-[2%]" />
      <img
        src={circular_text.src}
        alt={circular_text.src}
        className="w-48 absolute right-[7%] top-[10%] rotateRight"
      />
      <div className="flex w-full h-full">
        <h1 className="font-monumentExtended font-extrabold m-auto text-9xl text-center tracking-wide titre leading-normal">
          NEW AND FRESH
          <br />
          FLAVOURS
        </h1>
      </div>
      <img
        src={scrollImg.src}
        alt={scrollImg.src}
        className="absolute bottom-[10%] left-[10%] rotateLeft"
      />
    </section>
  );
};
