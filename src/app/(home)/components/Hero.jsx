import Image from "next/image";
import heroBackgroundMobile from "/public/assets/home/mobile/image-hero-coffeepress.jpg";
import heroBackgroundTablet from "/public/assets/home/tablet/image-hero-coffeepress.jpg";
import heroBackgroundDesktop from "/public/assets/home/desktop/image-hero-coffeepress.jpg";
import Button from "@/app/components/UI/Button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-[1rem] sm:max-w-[68rem]">
      <div className="flex flex-col items-center px-[2rem] py-[10rem] text-center text-white sm:items-start">
        <Image
          src={heroBackgroundMobile}
          alt="coffeepress"
          fill
          className="-z-10 sm:hidden"
        />
        <Image
          src={heroBackgroundTablet}
          alt="coffeepress"
          fill
          className="-z-10 hidden sm:inline"
        />
        <div className="max-w-[40rem] sm:ml-[5.6rem] sm:text-left">
          <h1 className="mb-[2.4rem] font-fraunces text-[3.8rem] font-black leading-[4rem]">
            Great coffee made simple
          </h1>
          <p className="mb-[4rem] text-[1.5rem] font-normal leading-[2.5rem] text-off-white opacity-[0.8]">
            Start your mornings with the world&apos;s best coffees. Try our
            expertly curated artisan coffees from our best roasters delivered
            directly to your door, at your schedule.
          </p>
          <Button>Create your plan</Button>
        </div>
      </div>
    </section>
  );
}
