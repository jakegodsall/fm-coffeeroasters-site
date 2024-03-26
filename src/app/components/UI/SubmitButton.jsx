import { clsx } from "clsx";

export default function SubmitButton({ children, isActive }) {
  return (
    <input
      className={clsx(
        "rounded-[0.8rem] bg-[#0E8784] px-[3.5rem] py-[1.5rem] font-fraunces text-[1.4rem] text-off-white",
        isActive ? "cursor-pointer" : "cursor-not-allowed",
      )}
      type="submit"
      value={children}
    />
  );
}
