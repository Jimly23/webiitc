import Button from "@/components/atoms/Button";
import Countdown from "@/components/atoms/Countdown";
import FlashParagraph from "@/components/atoms/FlashParagraph";
import { Container } from "../../../components";
import Text from "@/components/atoms/Text";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
const SeminarSection = () => {
  const images = [
    "/images/kala.png",
    "/images/kala2.png",
    "/images/kala3.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="w-full mb-10 min-h-screen  overflow-hidden">
      <Container>
        <div className="w-11/12 mx-auto my-20  flex flex-col  md:flex-row  md:items-center ">
          <motion.article
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="w-11/12  md:w-6/12 flex flex-col space-y-4 ml-3 md:ml-0 justify-center"
          >
            <div className="text-center w-full mt-10 text-xs md:text-md lg:text-lg">
              <FlashParagraph
                isHorizontal={true}
                value={"Daftar Seminar"}
              />
            </div>
            <Text
              size={"mdtitle"}
              additionals={
                "leading-relaxed text-xl md:text-3xl lg:text-4xl mb-10 md:mb-0"
              }
              color={"dark"}
              weight={"bold"}
            >
              Explore Career Journey
            </Text>
            <Text color={"dark"} additionals="text-justify md:text-start ">
              Investasi Skill dan Pengembangan Karier di Dunia Teknologi
            </Text>
            <Link href={"/signup"}>
              <Button size={"lg"} additionals={"w-60"}>
                Daftar Sekarang
              </Button>
            </Link>
          </motion.article>
          {/* <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="md:w-[40%] md:ps-28 lg:ms-[150px] md:bg-contain self-start w-full object-cover bg-red-500 lg:-ml-0"
          >
            <Image
              src={"/images/kala.png"}
              alt="Gambar Tunjukan Skill"
              width={1080}
              height={1080}
            />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="md:w-[40%] md:ps-28 lg:ms-[150px] md:bg-contain self-start w-full object-cover bg-red-500 lg:-ml-0"
          >
            <div className="relative w-full h-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[currentImageIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt="Gambar Tunjukan Skill"
                    width={1080}
                    height={1080}
                    className="w-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SeminarSection;
