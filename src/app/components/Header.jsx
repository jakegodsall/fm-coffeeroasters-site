import Image from "next/image";
import logo from "/public/assets/shared/desktop/logo.svg";
import HamburgerButton from "./UI/HamburgerButton";

export default function Header() {
  return (
    <header className="px-[2.4rem] pt-[3.2rem] flex justify-between items-center">
      <Image
        src={logo}
        alt="logo"
        width="163"
        height="18"
        className="w-[16.3rem] h-[1.8rem]"
      />
      <HamburgerButton />
    </header>
  );
}
