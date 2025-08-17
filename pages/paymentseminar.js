import GetDetailCompetitionsApi from "@/api/homepage/GetDetailCompetitionApi";
import PaySeminarApi from "@/api/payment/PaySeminar";
import GetDetailTeam from "@/api/team/GetDetail";
import { Button } from "@/components";
import Alert from "@/components/atoms/Alert";
import FileInput from "@/components/atoms/FilePond";
import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AiFillCheckCircle,
  AiFillWarning,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { getTwoChar } from "./team";
import { FiCheckCircle, FiCopy } from "react-icons/fi";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiCheckCircle } from "react-icons/bi";
import { IoCopyOutline } from "react-icons/io5";
import GetDetailUser from "@/api/user/GetDetailUser";
import GetAllUserApi from "@/api/user/GetAllUser";
import GetToken from "@/api/utils/GetToken";
import FileInputMultiple from "@/components/atoms/FilePondSeminar";
import Link from "next/link";

const PaymentSeminar = () => {
  const [isSucces, setIsSucces] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [Message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [isHitUser, setIsHitUser] = useState(false);
  const [isHitPay, setIsHitPay] = useState(false);
  const [competition, setCompetition] = useState({});
  const [isHitCompetition, setIsHitCompetition] = useState(true);
  const [user, setUser] = useState({});
  const [isCsr, setIsCsr] = useState(false);
  const router = useRouter();
  const id = router.query?.i;
  const cSlug = router.query?.sl;
  const getUser = () => {
    setIsHitUser(true);
    GetDetailUser()
      .then((res) => {
        // console.log(res);
        // console.log(res.data.user.name);
        setUser(res.data.user);
        setIsHitUser(false);
      })
      .catch((err) => {
        //console.log(err);
      });
  }
  useEffect(() => {
    // console.log("Token yang dikirim:", GetToken({ isAdmin: false }));
    getUser();
  }, [])
  console.log(user);
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  function formatDate(date) {
    const dayIndex = date.getDay();
    const day = days[dayIndex];
    const dateNumber = date.getDate();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    const year = date.getFullYear();

    return `${day}, ${dateNumber} ${month} ${year}`;
  }

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  const handlePay = (e) => {
    e.preventDefault();
    setIsHitPay(true);
    PaySeminarApi({ id, proveOfPayment: images }).then((res) => {
      //console.log(res);
      setMessage(res.message);
      if (res.status == 1) {
        setIsSucces(true);
        router.replace(`/dashboard/seminar`);
      } else {
        setIsWrong(true);
        setIsHitPay(false);
      }
    });
    // .catch((err) => //console.log(err));
  };
  const [copied, setCopied] = useState(false);
  const sisaBukti = Math.max(0, paymentMethods.length - images.length);
  return (
    <>
      <div
        style={{ backgroundImage: `url(../../images/bgseminar.png)` }}
        className="h-48 bg-cover p-3 relative bg-center bg-no-repeat"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="w-11/12 max-w-[500px] left-1/2 -translate-x-1/2 absolute bottom-3">
          <Text size={"smalltitle"} weight={"bold"} color={"white"}>
            {competition.name}
          </Text>
          <div className="flex space-x-2 my-1">
            <Text color={"white"}>Tanggal: </Text>
            <Text color={"white"} weight={"bold"}>
              {formattedDate}
            </Text>
          </div>
          {/* <Text size={"smalltitle"} weight={"bold"} color={"white"}>
            Rp 15.000
          </Text> */}
        </div>
      </div>
      <form
        onSubmit={handlePay}
        className="w-11/12 max-w-[500px] mx-auto pb-12 overflow-hidden"
      >
        <Alert onClose={() => setIsSucces(false)} isOpen={isSucces}>
          <AiFillCheckCircle className="text-green-400 text-xl" />
          <p>{Message}</p>
        </Alert>
        <Alert onClose={() => setIsWrong(false)} isOpen={isWrong}>
          <AiFillWarning className="text-red text-xl" />
          <p>{Message}</p>
        </Alert>

        <div className="flex justify-between items-center my-8 w-full">
          <div className="flex lg:items-center items-start justify-start space-x-3 lg:flex-row flex-col w-full">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="Buaya"
                width={1080}
                height={1080}
                className="lg:w-24 w-full h-24 rounded-md lg:rounded-full object-cover"
              />
            ) : (
              <div className="lg:w-24 w-full h-24 rounded-md lg:rounded-full bg-slate-100 animate-pulse flex justify-center items-center">
                {isCsr && getTwoChar(user.name)}
              </div>
            )}
            <div className="max-lg:mt-3">
              <Text size={"smalltitle"} color={"black"}>
                {user?.name}
              </Text>
              {/* <Text></Text> */}
            </div>
          </div>
          {/* <div className=" text-green-500 max-lg:hidden">Pembayaran</div> */}
        </div>

        {/* <div className="mb-6">
        <Text color={"black"} weight={"bold"}>
          Item Detail
        </Text>
        <Text>Pembayaran Lomba</Text>
      </div> */}

        <div className="py-6 border-y flex justify-center items-center space-x-3">
          {/* <Logo /> */}
          <Text color={"black"} size={"cardtitle"}>
            Syarat Pendaftaran
          </Text>
        </div>

        <ul className="space-y-6 my-6 border-b pb-6">
          {paymentMethods.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center"
            >
              <h5>{!copied && `${item.an}`}</h5>
              <div className="flex items-center w-full justify-between">
                <div className="mr-3 text-end w-full">
                  <Link
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text additionals={"text-blue-500 underline"}>
                      {copied ? "Disalin" : `@iitc_intermedia `}
                    </Text>
                  </Link>
                  {/* <Text size={"small"}>{!copied && `${item.an}`}</Text> */}
                </div>
              </div>
            </li>
          ))}
        </ul>

        
        <div className="py-6">
          <p className="text-sm text-rose-700 italic">Tersisa {sisaBukti} bukti lagi</p>
        </div>

        <FileInputMultiple
          placeholder="Upload bukti pembayaran"
          className="bg-white rounded-xl text-center "
          images={images}
          setImages={setImages}
        />

        <Button isSquare disabled={sisaBukti > 0} additionals={"w-full"} size={"md"} color={"brown"}>
          {isHitPay ? (
            <AiOutlineLoading3Quarters className="text-xl mx-auto text-white animate-spin" />
          ) : (
            "Kirim Bukti Persyaratan"
          )}
        </Button>
        <Button
          isSquare
          additionals={"w-full mt-4"}
          size={"md"}
          color={"outlinedark"}
          onClick={() => router.replace(`/dashboard/seminar`)}
        >
          Batal
        </Button>
      </form>
    </>
  );
};

export default PaymentSeminar;

const paymentMethods = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg",
    value: "https://www.instagram.com/iitc_intermedia?igsh=d3RucXVzY3oydTZz",
    an: "Follow Instagram IITC",
    title: "@iitc_intermedia",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/1280px-BANK_BRI_logo.svg.png",
    value: "https://www.instagram.com/p/DNW9c3lTiCJ/?img_index=1&igsh=dnJlemsxemFvZ29v",
    an: "Share Informasi Acara",
    title: "@iitc_intermedia",
  }
];
