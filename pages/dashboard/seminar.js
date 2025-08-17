import { Button } from '@/components'
import DashboardCard from '@/components/atoms/DashboardCard'
import DashboardUserTemplate from '@/components/pagetemplate/DashboardUser'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiCalendar, BiHomeAlt, BiMap } from 'react-icons/bi'
import { BsClock, BsFillCalendarDateFill, BsFillPeopleFill, BsPerson } from 'react-icons/bs'
import { CgLock } from 'react-icons/cg'
import { MdArrowForwardIos } from 'react-icons/md'
import bgseminar from '../../public/images/bgseminar.png'
import Image from 'next/image'
import GetDetailUser from '@/api/user/GetDetailUser'
import Text from '@/components/atoms/Text'
import GetAllSeminarApi from '@/api/seminar/GetAllSeminar'
import GetSeminarById from '@/api/seminar/GetSeminarById'
import CertificateSeminar from '@/components/molecules/CertificateSeminar'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { createRoot } from 'react-dom/client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import GetAllUserApi from '@/api/user/GetAllUser'
import GetAllSeminarUserApi from '@/api/seminar/GetAllSeminarUser'

const SeminarCard = ({ user, certificateNumber }) => {
  const releaseDate = new Date("2025-08-13"); // YYYY-MM-DD
  const today = new Date();

  const isCertificateAvailable = today >= releaseDate;
  const formattedNumber = String(certificateNumber).padStart(3, "0");
  console.log(certificateNumber, 'sertifikat')

  // certificate
  const handleDownloadCertificate = async (name, certificateNumber) => {
    const container = document.createElement("div");
    container.style.width = "1117px";
    container.style.height = "790px";
    // container.style.padding = "10px";
    container.style.fontFamily = "serif";
    container.style.background = "#fff";
    container.style.position = "absolute";
    container.style.top = "-9999px";
    container.style.left = "-9999px";
    console.log(name, certificateNumber)

    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(<CertificateSeminar name={name} certificateNumber={certificateNumber}/>);

    // Tunggu render selesai dengan sedikit delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const canvas = await html2canvas(container);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "pt", [canvas.width, canvas.height]);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`Sertifikat-${name}.pdf`);

    document.body.removeChild(container);
  };

  return (
    <div className="w-11/12 mx-auto bg-white shadow shadow-black/5 rounded-lg">
      <div className="lg:px-8 p-4 lg:py-4 flex lg:flex-row flex-col justify-between items-start">
        <div className="lg:mx-4 lg:my-0 my-3 flex-1 w-full">
          <p className="font-bold text-xl uppercase tracking-wider">
            {user?.name}
          </p>
          <div className="flex gap-1 items-center justify-start">
            <Text color={"text-black"} size={"sm"}>
              {user?.email}
            </Text>
            <BsPerson className="text-dark" />
          </div>
          <div className="mt-3 text-brown font-bold">
          </div>
        </div>
        <div className={`px-4 py-2 ${user?.isActive === "VALID" ? "bg-green-400/20" : "bg-yellow-400/20"} rounded-full max-lg:hidden`}>
          {user?.isActive === "VALID" ? <Text size={"small"} additionals={"text-green-600"}>Pembayaran Berhasil</Text> : <Text size={"small"} additionals={"text-red-600"}>Di Proses</Text>}

        </div>
      </div>
      <div className='lg:px-8 lg:mx-4 p-4 lg:py-4 relative'>
        {/* <div className='flex justify-center gap-2 text-center'>
          {user?.isActive === "VALID" ? <Text size={"small"} additionals={"text-green-600"}>Silahkan cek email untuk melihat detail tiket</Text> : <Text size={"small"} additionals={"text-red-600"}>Tiket akan dikirim lewat email jika pembayaran berhasil di konfirmasi</Text>}
        </div> */}
        {user?.isActive === "VALID" ?
          <>
            <div className='relative'>
              <p
                className="absolute text-white font-medium z-10"
                style={{
                  left: "8.5%",   // posisi horizontal relatif ke lebar gambar
                  top: "10.8%",    // posisi vertikal relatif ke tinggi gambar
                  fontSize: "0.6vw" // ukuran teks relatif ke lebar viewport / container
                }}
              >
                {/* {user?.id} */}
                {formattedNumber}
              </p>
              <img src={'/images/tiketseminar.png'} alt="bgseminar" className='w-full' />
            </div>
            <div className='flex justify-center'>
              {isCertificateAvailable && (
                <button
                  onClick={() => handleDownloadCertificate(user?.name, certificateNumber)}
                  className='text-white mt-10 bg-brown px-4 py-2 rounded-full mx-auto'
                >
                  Cetak Sertifikat
                </button>
              )}
            </div>
          </>
          :
          <div className='flex justify-center gap-2 text-center'>
            <Text size={"small"} additionals={"text-red-600"}>Tiket akan muncul disini jika pembayaran berhasil di konfirmasi</Text>
          </div>
        }

      </div>
    </div>
  );
};

const Seminar = () => {
  const router = useRouter();
  const [user, setUser] = useState();
  const [userSeminar, setUserSeminar] = useState({});
  const [certificataNumber, setCertificateNumber] = useState(0);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/login");
    }
  }, [])

  useEffect(() => {
    GetDetailUser()
      .then(async (res) => {
        // console.log("data user : ", res.data);
        const user = res.data.user;
        setUser(user);
        fetchUsers(user);
      })

      .catch((err) => {
        if (err.message) {
          console.log(err.message);
        }
        console.log(err);
      });
  }, []);

  const fetchUsers = (u) => {
    console.log(u?.id, "user id");
    GetSeminarById(u.id).then((res) => {
      setUserSeminar(res?.data);
      getUsers(u.id);
    });
  };


  const getUsers = (targetId) => {
    GetAllSeminarUserApi().then((res) => {
      if (res.status === 1) {
        const users = res.data.users;

        // cari index berdasarkan id
        const index = users.findIndex(user => user.id === targetId);

        if (index !== -1) {
          // tambahkan +1 kalau mau mulai dari 1, bukan 0
          setCertificateNumber(index + 1);
        }
      }
    });
  };


  return (
    <DashboardUserTemplate>
      {userSeminar?.isActive === "VALID" && <SeminarCard user={userSeminar} certificateNumber={certificataNumber}/>}
      {userSeminar?.isActive === "PENDING" && <SeminarCard user={userSeminar} certificateNumber={certificataNumber}/>}
      {userSeminar?.isActive !== "PENDING" && userSeminar?.isActive !== "VALID" &&

        <DashboardCard>
          <ul className="flex items-center gap-2">
            <Link href={"/"}>
              <BiHomeAlt className="text-gray-400" />
            </Link>
            <p>
              <MdArrowForwardIos className="text-xs text-gray-400" />
            </p>
            <p className="text-blue-600 text-sm">Seminar</p>
          </ul>
          <div className="flex justify-between space-y-2 lg:space-y-0 items-center mt-4 lg:flex-row flex-col">
            <h1 className="text-2xl font-semibold ">Seminar Yang Diikuti</h1>
          </div>
          <div className='w-full h-[400px] mt-5 rounded-lg overflow-hidden'>
            <img src="/images/bgseminar.png" alt="Seminar" className="w-full h-full object-cover" />
          </div>
          <div className='md:grid grid-cols-3 gap-x-2 mt-5'>
            <div className='col-span-2'>
              <h5 className='text-2xl font-medium mb-3'>Investasi Skill dan Pengembangan Karier di Dunia Teknologi</h5>
              <div className='md:flex items-center gap-x-2'><BiMap /> <p className='text-normal'>Aula Gedung Fakultas Bisnis dan Ilmu Sosial, Universitas Amikom Purwokerto</p></div>
              <div className='md:flex items-center gap-x-2'><BiCalendar /> <p className='text-normal'>Sabtu, 27 September 2025</p></div>
              <div className='md:flex items-center gap-x-2'><BsClock /> <p className='text-normal'>08.00 - 12.00</p></div>

            </div>
            <div className='mt-5 md:mt-0'>
              <div className='grid grid-cols-2'>
                <div>
                  {/* <p className='text-sm'>Harga</p> */}
                  <h5 className='text-2xl font-bold text-brown'>GRATIS</h5>
                </div>
                {/* <button className='w-full py-2 bg-brown text-white rounded-md mt-3'>Beli Tiket</button> */}
                <Link
                  href={`/paymentseminar?i=${user?.id}`}
                  className="w-full"
                >
                  <Button isSquare additionals={"w-full"} color={"brown"}>
                    Daftar Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </DashboardCard>
      }

    </DashboardUserTemplate>
  )
}

export default Seminar