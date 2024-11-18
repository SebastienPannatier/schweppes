import React from "react";
import "@/app/styles/wave.css";
import localFont from "next/font/local";

const monumentExtended = localFont({
  src: "../fonts/MonumentExtended-Regular.otf",
});

export const Product = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 L 0,150 C 105.09090909090907,150.05741626794259 210.18181818181813,150.11483253588517 311,151 C 411.81818181818187,151.88516746411483 508.3636363636364,153.59808612440193 602,139 C 695.6363636363636,124.40191387559807 786.3636363636365,93.49282296650718 881,103 C 975.6363636363635,112.50717703349282 1074.1818181818182,162.43062200956936 1168,177 C 1261.8181818181818,191.56937799043064 1350.909090909091,170.78468899521533 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#f091a5"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>

      <section className="w-full h-screen bg-[#F091A5] relative m-auto text-9xl text-center">
        <h1 className={(monumentExtended.className, "absolute bottom-0")}>
          EXCLUSIVELY COMING THIS SUMMER 2025 IN YOUR STORES
        </h1>
      </section>

      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 L 0,150 C 112.49760765550238,140.62200956937798 224.99521531100476,131.24401913875596 330,131 C 435.00478468899524,130.75598086124404 532.5167464114833,139.64593301435409 615,134 C 697.4832535885167,128.35406698564591 764.9377990430622,108.17224880382776 857,112 C 949.0622009569378,115.82775119617224 1065.732057416268,143.66507177033492 1167,154 C 1268.267942583732,164.33492822966508 1354.1339712918661,157.16746411483254 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#f091a5"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </>
  );
};
