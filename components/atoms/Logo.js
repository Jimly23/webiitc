import Image from "next/image";
import React from "react";

const Logo = ({ children }) => {
  return (
    <Image
      className="w-24 p-2"
      src="/images/LOGO/logonew.png"
      width={900}
      height={900}
      alt="Logo IIT Competition"
      priority
    />
  );
};

export default Logo;
