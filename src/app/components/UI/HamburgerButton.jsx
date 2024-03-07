export default function HamburgerButton() {
  return (
    <div className="w-[1.6rem] flex flex-col gap-[0.3rem] cursor-pointer">
      <div className="w-full h-[0.3rem] bg-secondary-green rounded-full"></div>
      <div className="w-full h-[0.3rem] bg-secondary-green rounded-full"></div>
      <div className="w-full h-[0.3rem] bg-secondary-green rounded-full"></div>
    </div>
  );
}
