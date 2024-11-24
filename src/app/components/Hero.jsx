"use client";
import React, { useEffect } from "react";
import logo from "@/app/img/logo.png";
import circular_text from "@/app/img/Circular-Text.png";
import scrollImg from "@/app/img/scroll.png";
import parallaxCan from "@/app/img/parallaxCan.png";
import "@/app/styles/hero.css";
import { Nav } from "@/app/components/elements/Nav";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  useEffect(() => {
    gsap.set(".parallax-can", { top: "30%" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallax-can",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(".parallax-can", {
      y: -500,
      ease: "none",
    });
  }, []);

  return (
    <section className="h-screen w-full pt-5 flex relative overflow-hidden">
      <Nav />
      <img src={logo.src} alt={logo.src} className="w-64 absolute left-[2%]" />
      <img
        src={circular_text.src}
        alt={circular_text.src}
        className="w-48 absolute right-[7%] top-[10%] rotateRight"
      />
      <img
        src={parallaxCan.src}
        alt={parallaxCan.src}
        className="absolute z-10 w-[40%] parallax-can rotate-[-50deg] top-[10%] left-[30%]"
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
