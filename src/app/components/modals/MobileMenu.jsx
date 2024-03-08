export default function MobileMenu() {
  return (
    <div className="fixed left-0 top-0 z-10 h-screen w-full bg-white-to-transparent pt-[13rem]">
      <ul className="flex flex-col items-center gap-[3.2rem] text-center">
        <li className="font-fraunces text-[2.4rem] text-secondary-green">
          Home
        </li>
        <li className="font-fraunces text-[2.4rem] text-secondary-green">
          About Us
        </li>
        <li className="font-fraunces text-[2.4rem] text-secondary-green">
          Create Your Plan
        </li>
      </ul>
    </div>
  );
}
