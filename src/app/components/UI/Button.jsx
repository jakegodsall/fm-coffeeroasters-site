import Link from "next/link";

export default function Button({ children, href }) {
  return (
    <Link
      href={href}
      className="rounded-[0.6rem] bg-primary-green px-[3.1rem] py-[1.6rem] font-fraunces text-[1.8rem] font-black transition-all duration-300 hover:brightness-150"
    >
      {children}
    </Link>
  );
}
