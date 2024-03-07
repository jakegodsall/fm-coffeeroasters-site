import Image from "next/image";
import logo from "/public/assets/shared/desktop/logo.svg";
import HamburgerButton from "./UI/HamburgerButton";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[2.4rem] pb-[4rem] pt-[3.2rem]">
      <Image
        src={logo}
        alt="logo"
        width="163"
        height="18"
        className="h-[1.8rem] w-[16.3rem]"
      />
      <HamburgerButton />
    </header>
  );
}
