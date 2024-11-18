import React from "react";
import logo from "@/app/img/logo.png";
import circular_text from "@/app/img/Circular-Text.png";
import scrollImg from "@/app/img/scroll.png";
import "@/app/styles/hero.css";
import localFont from "next/font/local";
import { Nav } from "@/app/components/elements/Nav";

const monumentExtended = localFont({
  src: "../fonts/MonumentExtended-Regular.otf",
});

export const Hero = () => {
  return (
    <section className="h-screen w-full pt-5 flex">
      <Nav />
      <img src={logo.src} alt={logo.src} className="w-64 absolute left-10" />
      <img
        src={circular_text.src}
        alt={circular_text.src}
        className="w-48 absolute right-0 mr-28 top-0 mt-20 rotateLeft"
      />
      <div className="flex w-full">
        <h1
          className={
            (monumentExtended.className,
            "font-extrabold m-auto text-9xl text-center tracking-wide titre")
          }
        >
          NEW AND FRESH FLAVOURS
        </h1>
      </div>
      <img
        src={scrollImg.src}
        alt={scrollImg.src}
        className="absolute bottom-0 left-0 ml-28 mb-20 rotateRight"
      />
    </section>
  );
};
