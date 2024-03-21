import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileMenu({ handleMenuOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.5 } }}
      className="fixed left-0 top-0 z-10 h-screen w-full bg-white-to-transparent pt-[13rem]"
    >
      <ul className="flex flex-col items-center gap-[3.2rem] text-center">
        <li className="font-fraunces text-[2.4rem] text-secondary-green">
          <Link onClick={handleMenuOpen} href="/">
            Home
          </Link>
        </li>
        <li className="font-fraunces text-[2.4rem] text-secondary-green">
          <Link onClick={handleMenuOpen} href="/about">
            About Us
          </Link>
        </li>
        <li className="font-fraunces text-[2.4rem] text-secondary-green">
          <Link onClick={handleMenuOpen} href="/suscribe">
            Create Your Plan
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}
