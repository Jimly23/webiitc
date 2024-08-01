import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import Container from "@/components/molecules/Container";
import NavItem from "@/components/molecules/NavItem";
import NavLink from "@/components/molecules/NavLink";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const tokenC = Cookies.get("token");
    setToken(tokenC ? true : false);
    //console.log(tokenC ? true : false);
  }, []);
  return (
    <header className="fixed top-3 z-40 w-11/12">
      {/* navbar lg */}
      <div className="w-full flex z-30 top-6 bg-white bg-opacity-50 justify-center backdrop-blur-md rounded-full px-4 py-2">
        <Container className="flex w-full justify-between items-center">
          <Logo>IITC</Logo>
          <div className="flex items-center gap-x-5">
            <nav
              className="flex justify-center items-center "
              itemScope
              itemType="https://schema.org/SiteNavigationElement"
            >
              <div className="hidden lg:flex justify-start gap-5 w-full items-center">
                <div className="text-center">
                  <NavItem>
                    <NavLink target="#hero">Home</NavLink>
                    <NavLink target="#about">About</NavLink>
                    <NavLink target="#skema">Skema</NavLink>
                    <NavLink target="#lomba">Lomba</NavLink>
                    <NavLink target="#timeline">Timeline</NavLink>
                    <NavLink target="#faq">FAQ</NavLink>
                  </NavItem>
                </div>
              </div>
              <div className="lg:hidden">
                <button onClick={handleToggleMenu}>
                  {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>
            </nav>
            <div className="hidden lg:block">
              {token ? (
                <Link href={"/dashboard"}>
                  <Button additionals={"w-full"}>Dashboard</Button>
                </Link>
              ) : (
                <Link href={"/login"}>
                  <Button additionals={"w-full"}>Masuk</Button>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>
      {/* navbar mobile sm & md */}
      <div
        className={`${
          isMenuOpen ? "transform translate-y-0" : "transform -translate-y-96 "
        } transition-all duration-500 ease-in-out top-28 left-0 right-0 w-10/12 mx-auto rounded-lg shadow-lg fixed h-fit bg-white flex flex-col z-40 p-5 justify-center items-center text-black`}
      >
        <NavItem show={isMenuOpen}>
          <NavLink target="#hero">Home</NavLink>
          <NavLink target="#about">About</NavLink>
          <NavLink target="#skema">Skema</NavLink>
          <NavLink target="#lomba">Lomba</NavLink>
          <NavLink target="#timeline">Timeline</NavLink>
          <NavLink target="#faq">FAQ</NavLink>
        </NavItem>
        <div className="mt-4 w-full ">
          {token ? (
            <Link href={"/dashboard"}>
              <Button additionals={"w-full"}>Dashboard</Button>
            </Link>
          ) : (
            <Link href={"/signup"}>
              <Button additionals={"w-full"}>Daftar</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
