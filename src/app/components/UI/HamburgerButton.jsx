import clsx from "clsx";

export default function HamburgerButton({ menuOpen, setMenuOpen }) {
  return (
    <div
      onClick={setMenuOpen}
      className="flex w-[1.6rem] cursor-pointer flex-col gap-[0.3rem]"
    >
      <div
        className={clsx(
          "h-[0.3rem] w-full rounded-full bg-secondary-green transition-all duration-300",
          menuOpen &&
            "translate-y-[0.5rem] rotate-45 transition-all duration-300",
        )}
      ></div>
      <div
        className={clsx(
          "h-[0.3rem] w-full rounded-full bg-secondary-green transition-opacity duration-300",
          menuOpen && "opacity-0 transition-opacity duration-300",
        )}
      ></div>
      <div
        className={clsx(
          "h-[0.3rem] w-full rounded-full bg-secondary-green transition-all duration-300",
          menuOpen &&
            "translate-y-[-0.7rem] rotate-[-45deg] transition-all duration-300",
        )}
      ></div>
    </div>
  );
}
