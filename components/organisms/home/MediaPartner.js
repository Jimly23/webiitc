import Image from "next/image";
import React from "react";

function MediaPartner() {
  const mediaPartnerLogo = [
    // {
    //   logo : "/images/mediapartner/mediapt1.png",
    //   alt : "medpart1"
    // },
    // {
    //   logo : "/images/mediapartner/mediapt2.png",
    //   alt : "medpart2"
    // },
    // {
    //   logo : "/images/mediapartner/mediapt3.png",
    //   alt : "medpart3"
    // },
    // {
    //   logo : "/images/mediapartner/mediapt4.png",
    //   alt : "medpart4"
    // },
    {
      logo : "/images/mediapartner/mediapt5.png",
      alt : "medpart5"
    },
    // {
    //   logo : "/images/mediapartner/mediapt6.jpg",
    //   alt : "medpart6"
    // },
    {
      logo : "/images/mediapartner/mediapt7.jpeg",
      alt : "medpart7"
    },
    {
      logo : "/images/mediapartner/mediapt8.png",
      alt : "medpart8"
    },
    {
      logo : "/images/mediapartner/mediapt11.jpg",
      alt : "medpart9"
    },
    {
      logo : "/images/mediapartner/mediapt10.png",
      alt : "medpart10"
    },
    {
      logo : "/images/mediapartner/mediapt12.png",
      alt : "medpart12"
    },
  ]
  return (
    <div>
      <div className="max-w-[95rem] flex flex-col items-center justify-center mb-52  px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-5 ">
          <h2 className="lg:text-2xl font-semibold uppercase md:leading-tight text-gray-800 dark:text-gray-300">
            Our Media Partner
          </h2>
        </div>

        <div className=" md:my-16 grid grid-cols-4 sm:flex sm:flex-wrap w-11/12 lg:w-11/12 sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
          {mediaPartnerLogo.map((item, i) => (
            <a key={i} className="flex-shrink-0 transition hover:-translate-y-1" href="#">
              <Image
                height={100}
                width={100}
                src={item.logo}
                alt={item.alt}
                className="w-12 h-12 md:w-20 md:h-20 mx-auto sm:mx-0"
              />
            </a>
          ))}
          {/* <a className="flex-shrink-0 transition hover:-translate-y-1" href="#">
            <Image
              height={100}
              width={100}
              src={"/images/LOGO/LOGOFIX2024.png"}
              alt="medpart1"
              className="w-12 h-12 md:w-20 md:h-20 mx-auto sm:mx-0"
            />
          </a>
          <a className="flex-shrink-0 transition hover:-translate-y-1" href="#">
            <Image
              height={100}
              width={100}
              src={"/images/LOGO/LOGOFIX2024.png"}
              alt="medpart1"
              className="w-12 h-12 md:w-20 md:h-20 mx-auto sm:mx-0"
            />
          </a>
          <a className="flex-shrink-0 transition hover:-translate-y-1" href="#">
            <Image
              height={100}
              width={100}
              src={"/images/LOGO/LOGOFIX2024.png"}
              alt="medpart1"
              className="w-12 h-12 md:w-20 md:h-20 mx-auto sm:mx-0"
            />
          </a> */}
        </div>

        {/* <div className="grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
          <div className="col-span-6 text-center">
            <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              250+
            </h4>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">
              Components
            </h4>
          </div>

          <div className="col-span-6 text-center">
            <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              160+
            </h4>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">
              Starter Pages & Examples
            </h4>
          </div>

          <div className="col-start-4 col-span-6 text-center">
            <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              10+
            </h4>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">
              Tailwind CSS Plugins
            </h4>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MediaPartner;
