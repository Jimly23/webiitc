import Image from "next/image";
import React from "react";

const HeroBackground = () => {
  return (
    <Image
      height={1080}
      src={"/images/Website/patternHero.svg"}
      width={1920}
      alt="Hero Background"
      priority
      className="w-full object-cover object-no-repeat h-screen max-h-screen mt-20 object-left  lg:object-center  "
    />
  );
};

export default HeroBackground;
