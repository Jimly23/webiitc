import Button from "@/components/atoms/Button";
import Countdown from "@/components/atoms/Countdown";
import FlashParagraph from "@/components/atoms/FlashParagraph";
import { Container } from "../../../components";
import Text from "@/components/atoms/Text";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdDataExploration, MdDateRange } from "react-icons/md";
import { CgLock } from "react-icons/cg";
import { FaClock } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
const SeminarSection = () => {
  const images = [
    "/images/fuadit.png",
    // "/images/kala2.png",
    // "/images/kala3.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="w-full mb-10 min-h-screen overflow-hidden">
      <Container>
        <div className="w-11/12 mx-auto my-20  flex flex-col  md:flex-row  md:items-center pb-[400px] md:pb-0">
          <motion.article
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="w-11/12  md:w-6/12 flex flex-col space-y-4 ml-3 md:ml-0 justify-center"
          >
            <div className="text-center w-full mt-10 text-xs md:text-md lg:text-lg">
              <FlashParagraph
                isHorizontal={true}
                value={"Must to join this Workshop"}
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
              Investasi Skill dan Pengembangan Karier di Dunia Teknologi
            </Text>
            <div className="pt-5">
              <div className="flex gap-2 mb-2.5 items-start">
                <MdDateRange className="text-brown text-[1.25rem] flex-[1_1_5%]" />
                <Text
                  color={"dark"}
                  additionals="text-justify md:text-start flex-[1_1_calc(95%-0.5rem)]"
                >
                  Sabtu, 27 September 2025
                </Text>
              </div>
              <div className="flex gap-2 mb-2.5 items-start">
                <FaClock className="text-brown text-[1.18rem] flex-[1_1_5%]" />
                <Text
                  color={"dark"}
                  additionals="text-justify md:text-start flex-[1_1_calc(95%-0.5rem)]"
                >
                  08.00 - 12.00 WIB
                </Text>
              </div>
              <div className="flex gap-2 mb-2.5 items-start">
                <IoLocation className="text-brown text-[1.25rem] flex-[1_1_5%]" />
                <Text
                  color={"dark"}
                  additionals="text-justify md:text-start flex-[1_1_calc(95%-0.5rem)]"
                >
                  Aula Gedung Fakultas Bisnis dan Ilmu Sosial, Universitas
                  Amikom Purwokerto
                </Text>
              </div>
            </div>
            <Link href={"/signup"}>
              <Button
                size={"lg"}
                additionals={"w-60 font-medium"}
                color={"dark"}
              >
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
            className="md:w-[50%] md:ps-28 lg:ms-[150px] md:bg-contain self-start w-full object-cover bg-red-500 lg:-ml-0"
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
                  <Image
                    src={"/images/fuadit-nama.png"}
                    alt="Gambar Tunjukan Skill"
                    width={1080}
                    height={1080}
                    className="w-[300px] absolute top-[280px]"
                  />
                  {/* <div className="absolute top-[205px] left-0 right-0 h-60 bg-gradient-to-t from-white to-transparent"></div> */}
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
