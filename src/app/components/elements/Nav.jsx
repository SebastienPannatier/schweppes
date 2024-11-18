import React from "react";
import localFont from "next/font/local";

const monumentExtended = localFont({
  src: "../../fonts/MonumentExtended-Regular.otf",
});

export const Nav = () => {
  return (
    <nav
      className={
        (monumentExtended.className,
        "flex justify-center gap-12 absolute top-0 w-full h-min font-bold mt-2")
      }
    >
      <a>ABOUT</a>
      <a>SELECTION</a>
      <a>PRODUCT</a>
      <a>CONTACT</a>
    </nav>
  );
};
