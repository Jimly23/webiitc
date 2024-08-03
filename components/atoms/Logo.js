import Image from "next/image";
import React from "react";

const Logo = ({ children }) => {
  return (
    <Image
      className="w-20 p-2"
      src="/images/LOGO/LOGOFIX2024.png"
      width={900}
      height={900}
      alt="Logo IIT Competition"
      priority
    />
  );
};

export default Logo;
