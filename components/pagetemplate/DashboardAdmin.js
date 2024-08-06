import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiCategoryAlt, BiLogOutCircle } from "react-icons/bi";
import { CgEditBlackPoint } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
const DashboardAdminTemplate = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("adminKey");
    router.replace("/admin");
  };
  const nav = [
    {
      href: "/admin/dashboard",
      label: (
        <>
          <LuLayoutDashboard /> <p>Dashboard</p>
        </>
      ),
    },
    {
      href: "/admin/users",
      label: (
        <>
          <FaUserCircle /> <p>Users</p>
        </>
      ),
    },
    {
      href: "/admin/teams",
      label: (
        <>
          <RiTeamLine /> <p>Tim</p>
        </>
      ),
    },
    {
      href: "/admin/competition",
      label: (
        <>
          <CgEditBlackPoint /> <p>Lomba</p>
        </>
      ),
    },
    {
      href: "/admin/competitioncategories",
      label: (
        <>
          <BiCategoryAlt /> <p>Kategori Lomba</p>
        </>
      ),
    },
  ];
  return (
    <>
      <main className="bg-slate-200 w-full min-h-screen flex lg:flex-row flex-col">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 bg-blue-400/10 rounded-md fixed top-3 right-3 lg:hidden visible z-50"
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
          } w-full lg:max-w-[250px] bg-white py-12 px-7 fixed flex flex-col items-center justify-start z-20`}
        >
          <Image
            className="w-24"
            src={"/images/LOGO/LOGOFIX2024.png"}
            alt="logo iitc"
            width={1080}
            height={1080}
          />
          <hr className="border border-gray-400/10 w-full my-7" />
          <ul className="gap-3 flex flex-col w-full h-full">
            {nav?.map(({ label, href }, i) => (
              <li key={i} className="w-full text-slate-600">
                <Link href={href} className="flex items-center gap-3">
                  {label}
                </Link>
              </li>
            ))}
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

export default DashboardAdminTemplate;
