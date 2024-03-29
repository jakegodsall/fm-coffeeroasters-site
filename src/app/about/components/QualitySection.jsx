import Image from "next/image";

import qualityImageMobile from "/public/assets/about/mobile/image-quality.jpg";
import qualityImageTablet from "/public/assets/about/tablet/image-quality.jpg";
import qualityImageDesktop from "/public/assets/about/desktop/image-quality.jpg";

export default function QualitySection() {
  return (
    <section className="relative">
      <div className="flex flex-col items-center">
        <Image
          src={qualityImageMobile}
          alt="delicious coffee with a heart shape in the foam"
          width="280"
          height="156"
          className="absolute top-[-8rem] mx-auto w-4/5 max-w-[35rem] rounded-[1rem] sm:hidden"
        />
        <Image
          src={qualityImageTablet}
          alt="delicious coffee with a heart shape in the foam"
          width="573"
          height="320"
          className="absolute top-[-16rem] hidden max-w-[57.3rem] rounded-[1rem] sm:inline xl:hidden"
        />
        <Image
          src={qualityImageDesktop}
          alt="delicious coffee with a heart shape in the foam"
          width="445"
          height="474"
          className="absolute right-[8rem] top-[-9rem] hidden max-w-[44.5rem] rounded-[1rem] xl:inline"
        />
      </div>
      <div className="flex flex-col items-center rounded-[1rem] bg-secondary-green px-[2.4rem] pb-[6.1rem] pt-[14.2rem] text-center sm:px-[7.4rem] sm:pt-[22.4rem] xl:items-start xl:pb-[17.6rem] xl:pt-[9rem] xl:text-left">
        <h2 className="mb-[2.4rem] font-fraunces text-[2.8rem] leading-[2.8rem] text-off-white sm:text-[3.2rem] xl:mb-[3.2rem] xl:max-w-[52rem] xl:text-[4rem]">
          Uncompromising quality
        </h2>
        <p className="font-barlow text-[1.5rem] leading-[2.5rem] text-off-white opacity-80 xl:max-w-[52rem] xl:text-[1.6rem] xl:leading-[2.6rem]">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </section>
  );
}
