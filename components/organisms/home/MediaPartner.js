import React from "react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import Marquee from "react-fast-marquee";

const sponsors = [
  { src: "/images/mediapartner/cayo.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/bemswu.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/hmpssi.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/hmpsti.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/hmpsif.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/srt.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/sunsinema.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/adaevent.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/assem.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/infolomba.jpg", alt: "Mediapartner" },
  { src: "/images/mediapartner/csrel.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/eventmahasiswa.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/eventpwt.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/hmftv.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/ikutevent.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/infolombafilm.png", alt: "Mediapartner" },
  { src: "/images/mediapartner/rri.jpg", alt: "Mediapartner" },
  { src: "/images/mediapartner/bmstv.png", alt: "Mediapartner" },
];

const MediaPartner = () => {
  return (
    <div className="py-48 antialiased">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-center text-gray-700 mb-24 flex items-center justify-center gap-2">
          {/* <AiFillHeart className="text-green-500" /> */}
          Media Partner
        </h2>
      </div>

      <div className="w-full">
        <Marquee
          autoFill
          speed={50}
          direction="left"
          pauseOnHover
          className="py-4"
        >
          {sponsors.map((sponsor, index) => (
            <div key={index} className="mx-8 flex justify-center items-center">
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={150}
                height={80}
                className="object-contain h-16 w-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MediaPartner;