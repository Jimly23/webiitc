import React from "react";
import Navbar from "./Navbar";
import Container from "@/components/molecules/Container";
import { motion } from "framer-motion";
import HeroBackground from "@/components/atoms/HeroBackground";
import Text from "@/components/atoms/Text";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden h-screen shadow">
      <div className="absolute inset-0 -z-10">
        <HeroBackground />
      </div>

      <div className="pattern-mobile block md:hidden absolute -z-10 -left-[200px] ">
        <Image
          height={1080}
          src={"/images/Website/patternMobile.png"}
          width={1920}
          alt="Hero Background"
          priority
          className=" w-[2000px] object-cover object-no-repeat h-screen max-h-screen mt-20 object-left  lg:object-center  "
        />
      </div>


      <Container className="flex flex-col-reverse lg:flex-row h-[90vh] items-center justify-center z-10">
        <Navbar />

        <div className="w-11/12 mx-auto my-20 mt-[200px] sm:mt-[200px] md:mt-[300px] flex flex-col xl:mt-20  md:flex-row  md:items-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // added y here
            animate={{ opacity: 1, y: 0 }} // and here
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: "100",
              bounce: 0.3,
            }}
            className="font-black sm:min-w-[400px] text-center md:text-start text-slate-800 z-10 text-4xl md:text-3xl lg:text-5xl leading-10 w-11/12  md:w-6/12"
          >
            <Text color={"dark"} additionals="hidden md:block mb-5 text-center w-[250px] border border-orange-500 py-1 rounded-full text-orange-500 bg-orange-100">
              National IT Competition
            </Text>
            
            Tunjukan pada{" "}
            <p className="md:my-5">
              Dunia{" "}
              <span className="text-transparent bg-gradient-to-tr from-orange-500 to bg-yellow-300 bg-clip-text">
                Bahwa Kamu
              </span>{" "}
            </p>
            Bisa

            <Text color={"dark"} additionals="text-center md:text-start my-5 max-w-2xl">
              <span className="font-bold">IITC</span> adalah sebuah event nasional yang diselenggarakan oleh Unit kegiatan mahasiswa INTERMEDIA <span className="font-bold">Universitas Amikom Purwokerto</span>
            </Text>

            <div className="flex items-center justify-center md:justify-start gap-x-3">
              <Link href={"/login"}>
                <Button additionals={"text-sm"}>Daftar Sekarang</Button>
              </Link>
              <Link href={"/login"}>
                <Text color={"dark"} weight={"bold"} additionals="text-start mt-3">Learn More</Text>
              </Link>
            </div>
          </motion.div>

          <div className="flex w-full h-full justify-center max-w-3xl">
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="hidden md:block md:w-7/12 md:bg-contain self-start w-full object-cover bg-red-500 -ml-5 lg:-ml-0"
              >
                <Image
                  src={"/images/bannerIitc.png"}
                  alt="Gambar Tunjukan Skill"
                  width={1080}
                  height={1080}
                  className="min-w-[300px]"
                />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
