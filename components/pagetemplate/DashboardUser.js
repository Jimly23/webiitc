import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  BiCategoryAlt,
  BiLogOutCircle,
  BiUser,
  BiUserCircle,
} from "react-icons/bi";
import { CgEditBlackPoint } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const DashboardUserTemplate = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("token");
    router.replace("/login");
  };
  return (
    <>
      <main className="bg-slate-200 w-full min-h-screen flex lg:flex-row flex-col">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 bg-blue-400/10 rounded-md fixed top-3 right-3 z-50 lg:hidden visible"
        >
          {isOpen ? (
            <FiX className="text-2xl text-red" />
          ) : (
            <GiHamburgerMenu className="text-2xl text-blue-400" />
          )}
        </button>
        <div className="w-full lg:max-w-[250px]"></div>
        <nav
          className={`${
            isOpen ? "block" : "lg:block hidden"
          } w-full lg:max-w-[250px] bg-white py-12 px-7 h-full fixed flex flex-col items-center justify-start z-20`}
        >
          <Image
            onClick={() => router.push("/")}
            className="w-24 cursor-pointer"
            src={"/images/LOGO/LOGOFIX2024.png"}
            alt="logo iitc"
            width={1080}
            height={1080}
          />
          <hr className="border border-gray-400/10 w-full my-7" />
          <ul className="gap-3 flex flex-col w-full h-full">
            <li className="w-full text-slate-600">
              <Link href={"/dashboard"} className="flex items-center gap-3">
                <CgEditBlackPoint /> <p>Lomba</p>
              </Link>
            </li>
            <li className="w-full text-slate-600">
              <Link
                href={"/dashboard/profile"}
                className="flex items-center gap-3"
              >
                <BiUserCircle /> <p>Profil</p>
              </Link>
            </li>
            <hr className="border border-gray-400/10 w-full my-4" />
            <button
              onClick={handleLogout}
              className="flex text-slate-600 items-center gap-3"
            >
              <BiLogOutCircle />
              <p>Keluar</p>
            </button>
          </ul>
        </nav>
        <div className="w-full py-8 gap-3 flex flex-col">{children}</div>
      </main>
    </>
  );
};

export default DashboardUserTemplate;
