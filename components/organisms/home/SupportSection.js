import React from "react";
import Slider from "react-slick";
import { AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SupportSection = () => {
  const settings = {
    dots: true,

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,

    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="overflow-hidden">
      <h2 className="flex items-center justify-center my-10 gap-3">
        <AiFillHeart className="text-green-500" /> Support by :{" "}
      </h2>
      <div className="flex items-center justify-center">
          <div className="w-20 flex justify-center items-center py-2">
            <Image
              src="/images/Sponsor/Mieayam.jpg"
              alt="sponsorship1"
              className="h-18 object-contain  w-full"
              width={1600}
              height={1600}
            />
          </div>
        {/* <Slider {...settings} className="">
          <div className="w-20 flex justify-center items-center py-2">
            <Image
              src="/images/Sponsor/pusko.png"
              alt="sponsorship2"
              className="h-16 object-contain w-full"
              width={1600}
              height={1600}
            />
          </div>
          <div className="w-20 flex justify-center items-center py-2 ">
            <Image
              src="/images/Sponsor/endra.png"
              alt="sponsorship3"
              className="h-16 object-contain   w-full "
              width={1600}
              height={1600}
            />
          </div>
          <div className="w-20 flex justify-center items-center py-2 mx-auto">
            <Image
              src="/images/Sponsor/owb.png"
              alt="sponsorship4"
              className="h-16 object-contain   w-full"
              width={1600}
              height={1600}
            />
          </div>
          <div className="w-20 flex justify-center items-center py-2 mx-auto">
            <Image
              src="/images/Sponsor/kankuy.svg"
              alt="sponsorship5"
              className="h-16 object-contain   w-full"
              width={1600}
              height={1600}
            />
          </div>
        </Slider> */}
      </div>
    </div>
  );
};

export default SupportSection;
