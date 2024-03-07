import Image from "next/image";
import heroBackground from "/public/assets/home/mobile/image-hero-coffeepress.jpg";
import Button from "@/app/components/UI/Button";

export default function Hero() {
  return (
    <section className="absolute w-[90%] overflow-hidden rounded-[1rem]">
      <div className=" flex flex-col items-center px-[2.4rem] py-[10rem] text-center text-white">
        <Image src={heroBackground} alt="coffeepress" fill className="-z-10" />
        <h1 className="mb-[2.4rem] font-fraunces text-[4rem] font-black leading-[4rem]">
          Great coffee made simple
        </h1>
        <p className="mb-[4rem] text-[1.5rem] font-normal leading-[2.5rem] text-off-white opacity-[0.8]">
          Start your mornings with the world&apos;s best coffees. Try our
          expertly curated artisan coffees from our best roasters delivered
          directly to your door, at your schedule.
        </p>
        <Button>Create your plan</Button>
      </div>
    </section>
  );
}
