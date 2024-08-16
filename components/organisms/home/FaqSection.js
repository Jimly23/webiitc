import FaqCard from "@/components/atoms/FaqCard";
import Text from "@/components/atoms/Text";
import Container from "@/components/molecules/Container";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const FaqSection = () => {
  const faqs = [
    {
      q: "Apa itu IITC?",
      a: "IIT (Intermedia Information Technology) Competition 2024 adalah program kerja UKM INTERMEDIA Universitas Amikom Purwokerto yang melibatkan peserta dari seluruh Indonesia, termasuk siswa SMA/SMK/MA, mahasiswa, dan masyarakat umum. Kompetisi ini mencakup perlombaan UI/UX, Web Design, dan Poster Digital, serta webinar dan penjurian yang dilaksanakan secara daring. Tujuannya adalah untuk menambah wawasan, mengasah keterampilan digital, serta mendorong inovasi dan kreativitas peserta dalam bidang teknologi informasi, sehingga dapat memperdalam pengetahuan dan membangun ekosistem teknologi yang lebih dinamis dan inovatif.",
    },
    {
      q: "Siapa yang dapat mengikuti lomba?",
      a: "Peserta dari perlombaan dapat diikuti oleh seluruh masyarakat indonesia",
    },
    {
      q: "Apakah peserta boleh mengikuti lebih dari satu lomba?",
      a: "Peserta boleh mengikuti lebih dari satu lomba pada jenis perlombaan yang berbeda",
    },
    {
      q: "Bagaimana mekanisme pengumpulan hasil karya?",
      a: "-> Pembuatan Akun dan Input Karya  -> Format Karya -> Isi Berkas yang Dikumpulkan -> Pengunggahan dan Pengumpulan Karya -> Persyaratan Tambahan",
    },
    {
      q: "Apa format file untuk pengumpulan hasil karya?",
      a: "Format pengumpulan hasil karya ada yang berupa file .ZIP dan ada yang berupa folder Google Drive",
    },
    {
      q: "Siapa juri lomba ini?",
      a: "Pada lomba IITC ini dewan juri berasal dari divisi keilmuan Intermedia dan beberapa pihak yang mungkin nantinya akan ditugaskan oleh UKM Intermedia sebagai dewan juri tambahan",
    },
    {
      q: "Bagaimana cara juri menilai hasil karya?",
      a: "Juri menilai hasil karya berdasarkan kriteria yang telah ditetapkan dan Mereka menggunakan rubrik penilaian untuk memberikan skor yang objektif dan konsisten.",
    },
    {
      q: "Bagaimana cara membayar biaya pendaftarannya?",
      a: "Pembayaran dapat dilakukan melalui transfer ke rekening bank atau e-wallet yang akan diinformasikan setelah kamu mendaftar.",
    },
    {
      q: "Adakah kontak yang dapat dihubungi?",
      a: (
        <div className="flex flex-col">
          Kamu bisa menghubungi kami secara online melalui instagram atau
          whatsapp kami di{" "}
          <div className="flex gap-3 flex-wrap mt-2">
            <a
              href="https://www.instagram.com/iitc_intermedia/"
              className="font-semibold flex items-center gap-2 text-blue-500 cursor-default lg:cursor-pointer"
            >
              <AiFillInstagram />
              iitc_intermedia
            </a>
            <a
              href="https://wa.me/6285133711081"
              className="font-semibold flex items-center gap-2 text-blue-500 cursor-default lg:cursor-pointer"
            >
              <RiWhatsappFill />
              +62-851-3371-1081 
              (Humas 1)
            </a>
            <a
              href="https://wa.me/6285133711082 "
              className="font-semibold flex items-center gap-2 text-blue-500 cursor-default lg:cursor-pointer"
            >
              <RiWhatsappFill />
              +62-851-3371-1082 
              (Humas 2)
            </a>
          </div>
        </div>
      ),
    },
    {
      q: "Link grup whatsapp nya dimana ya?",
      a: (
        <div className="flex flex-wrap gap-3">
          <span>
            Bagi yang sudah membayar dan sudah di acc oleh admin maka pada
            halaman
          </span>
          <a
            href="https://iitc.intermediaamikom.org/dashboard"
            className="font-semibold flex items-center gap-2 text-blue-500 cursor-default lg:cursor-pointer"
          >
            dashboard
          </a>
          {""} <span>kan muncul alert link grup whatsappnya.</span>
        </div>
      ),
    },
    {
      q: "Apakah bisa mendaftar lebih dari satu lomba?",
      a: "Tentu saja bisa.",
    },
    {
      q: "Siapa saja yang dapat mengikuti lomba?",
      a: "Siapa saja boleh.",
    },
    {
      q: "Apakah wajib melengkapi data profile pada dashboard?",
      a: (
        <div className="flex flex-wrap gap-3">
          <span>Ya, kalian wajib melengkapi</span>
          <a
            href="https://iitc.intermediaamikom.org/dashboard/profile"
            className="font-semibold flex items-center gap-2 text-blue-500 cursor-default lg:cursor-pointer"
          >
            profile
          </a>
          {""} <span>kalian pada dashboard di menu profile.</span>
        </div>
      ),
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" w-full">
      <Container>
        <section
          id="faq"
          className="w-full flex flex-col items-center justify-center py-12"
        >
          <Text size={"title"} additionals={"text-xl md:text-3xl lg:text-4xl"}>
            Frequently Asked Questions
          </Text>
          <motion.div
            className="w-11/12 text-xs md:text-md md:w-8/12 flex flex-col space-y-4 my-10"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ staggerChildren: 0.2 }}
          >
            {faqs.map(({ q, a }, index) => (
              <motion.div className="" key={index} variants={variants}>
                <FaqCard question={q} answer={a} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </Container>
    </div>
  );
};

export default FaqSection;
