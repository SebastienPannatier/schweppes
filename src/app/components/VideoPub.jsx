import React from "react";

export const VideoPub = () => {
  return (
    <section className="mt-[5%]">
      <video className="w-full" autoPlay muted loop>
        <source src="pub.mp4" type="video/mp4" />
      </video>
    </section>
  );
};
