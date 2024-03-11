"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "/public/assets/shared/desktop/logo.svg";
import HamburgerButton from "./UI/HamburgerButton";
import MobileMenu from "./modals/MobileMenu";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    console.log("clicked");
    setMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="mx-auto flex w-full items-center justify-between px-[2.4rem] pb-[4rem] pt-[3.2rem] sm:max-w-[68rem] sm:px-0">
      <Image
        src={logo}
        alt="logo"
        width="163"
        height="18"
        className="h-[1.8rem] w-[16.3rem]"
      />
      <div className="relative z-20 sm:hidden">
        <HamburgerButton menuOpen={menuOpen} setMenuOpen={handleMenuOpen} />
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-[3.3rem]">
          <li>
            <Link
              className="text-[1.2rem] font-semibold uppercase text-grey"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-[1.2rem] font-semibold uppercase text-grey"
              href="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="text-[1.2rem] font-semibold uppercase text-grey"
              href="/subscribe"
            >
              Subscribe
            </Link>
          </li>
        </ul>
      </div>
      {menuOpen && <MobileMenu />}
    </header>
  );
}
