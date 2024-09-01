import Image from "next/image";
import React from "react";

const HeroBackground = () => {
  return (
    <Image
      height={1080}
      src={"/images/pattern.png"}
      width={1920}
      alt="Hero Background"
      priority
      className="w-full object-cover object-no-repeat h-screen max-h-screen lg:object-right lg:object-contain  "
    />
  );
};

export default HeroBackground;
