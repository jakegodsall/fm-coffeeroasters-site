import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-full bg-white-to-transparent pt-[13rem]">
      <ul className="flex flex-col items-center gap-[3.2rem] text-center">
        <li className="font-fraunces text-[2.4rem] text-secondary-green">
          <Link href="/">Home</Link>
        </li>
        <li className="font-fraunces text-[2.4rem] text-secondary-green">
          <Link href="/about">About Us</Link>
        </li>
        <li className="font-fraunces text-[2.4rem] text-secondary-green">
          <Link href="/suscribe">Create Your Plan</Link>
        </li>
      </ul>
    </div>
  );
}
