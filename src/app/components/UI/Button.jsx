import Link from "next/link";

export default function Button({ children }) {
  return (
    <Link
      href="#"
      className="rounded-[0.6rem] bg-primary-green px-[3.1rem] py-[1.6rem] font-fraunces text-[1.8rem] font-black"
    >
      {children}
    </Link>
  );
}
