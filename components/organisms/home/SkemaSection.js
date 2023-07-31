import Button from "@/components/atoms/Button";
import SkemaCard from "@/components/atoms/SkemaCard";
import Text from "@/components/atoms/Text";
import Container from "@/components/molecules/Container";
import ParagraphSection from "@/components/molecules/ParagraphSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SkemaSection = () => {
  return (
    <div className="">
      <Container>
        <section id="skema" className="py-12 flex justify-center">
          <div className="w-11/12 mx-auto">
            <div className="text-xs md:text-md w-full ">
              <ParagraphSection
                flashValue={"Show your skill to the world"}
                title={"Begini alur skema dasar dari event ini"}
                description={
                  "Baca baik baik detailnya ya, agar tidak salah langkah"
                }
              />
            </div>
            <ol className="bg-silver/40 p-2 rounded-xl w-full mt-12 grid gap-3 md:gap-0 md:grid-cols-4">
              <SkemaCard
                buttonHref={
                  "https://scribehow.com/shared/Step-by-step_guide_Signing_up_and_joining_a_competition_on_IITC__rrJ9DfysTWe-A0Se9oppIA"
                }
                buttonValue={"Cek info"}
                imgUrl={"/images/chaticon.png"}
                title={"Pendaftaran"}
                description={
                  "Pendaftaran telah ditentukan dan dijadwalkan sesuai perencanaan."
                }
                modalDescription={
                  "Khusus untuk pendaftaran, info lengkap bisa kalian cek lewat tombol dibawah."
                }
              />
              <SkemaCard
                imgUrl={"/images/guardicon.png"}
                title={"Verifikasi Data"}
                description={"Data diri yang kamu masukan harus valid ya!."}
                modalDescription={
                  <div>
                    <ol className="flex flex-col gap-3">
                      <li className="p-2 flex items-center min-h-20 w-full rounded-lg border-2 border-orange-300 bg-orange-50 text-slate-900">
                        Setelah Anda melakukan pendaftaran dan verifikasi email,
                        silahkan login dengan memasukkan email dan password yang
                        valid.
                      </li>
                      <li className="p-2 flex items-center min-h-20 w-full rounded-lg border-2 border-orange-300 bg-orange-50 text-slate-900">
                        Klik profil
                      </li>
                      <li className="p-2 flex items-center min-h-20 w-full rounded-lg border-2 border-orange-300 bg-orange-50 text-slate-900">
                        Lengkapi data sesuai dengan data yang Anda miliki.
                      </li>
                    </ol>
                  </div>
                }
              />
              <SkemaCard
                imgUrl={"/images/calendaricon.png"}
                title={"Pengerjaan & Upload"}
                description={
                  "Waktunya pengerjaan lomba sesuai bidang yang kalian ikuti."
                }
                modalDescription={
                  <div>
                    <p className="p-2 mb-10 text-sm  min-h-20 w-full rounded-lg border-2 border-orange-300 bg-orange-50 text-slate-900">
                      Pengerjaan sudah boleh dilakukan setelah tanggal
                      pendaftaran dibuka yaitu{" "}
                      <span className="font-semibold text-oren">
                        1 Agustus 2023
                      </span>{" "}
                      sampai dengan sebelum tanggal seleksi projek yaitu pada
                      tanggal <br />
                      <span className="font-semibold text-oren">
                        22 September 2023
                      </span>
                    </p>
                  </div>
                }
              />
              <SkemaCard
                imgUrl={"/images/checklisticon.png"}
                title={"Pengumuman"}
                description={"Yang paling ditunggu nih, pengumuman pemenang."}
                modalDescription={
                  <p className="mb-10 p-2  min-h-20 w-full rounded-lg border-2 border-orange-300 bg-orange-50 text-slate-900">
                    Terimakasih kami ucapkan kepada seluruh peserta yang telah
                    mengikuti kegiatan lomba IIT Competition. Dalam berbagai
                    bidang lomba yang telah diikuti sudah memberikan karya-karya
                    terbaik yang luar biasa. Pengumuman pemenang akan diumumkan
                    ketika awarding pada tanggal{" "}
                    <span className="text-oren font-semibold">
                      1 Oktober 2023.
                    </span>
                  </p>
                }
              />
            </ol>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default SkemaSection;
