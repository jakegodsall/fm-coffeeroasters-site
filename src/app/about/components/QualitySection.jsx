import Image from "next/image";

import qualityImageMobile from "/public/assets/about/mobile/image-quality.jpg";
import qualityImageTablet from "/public/assets/about/tablet/image-quality.jpg";
import qualityImageDesktop from "/public/assets/about/desktop/image-quality.jpg";

export default function QualitySection() {
  return (
    <section className="flex flex-col items-center">
      <Image
        src={qualityImageMobile}
        alt="delicious coffee with a heart shape in the foam"
        width="280"
        height="156"
        className="mb-[6.4rem] rounded-[0.8rem] sm:hidden"
      />
      <Image
        src={qualityImageTablet}
        alt="delicious coffee with a heart shape in the foam"
        width="573"
        height="320"
        className="mx-[8rem] mb-[6.4rem] hidden w-[90%] rounded-[0.8rem] sm:inline sm:max-w-[57.3rem]"
      />
      <div className="relative flex w-full flex-col items-center px-[2.4rem] text-center before:absolute before:left-0 before:top-[-14rem] before:-z-10 before:h-[190%] before:w-full before:rounded-[0.8rem] before:bg-secondary-green before:content-[''] sm:before:h-[220%]">
        <div className="max-w-[40rem] sm:max-w-[56rem]">
          <h2 className="mb-[2.4rem] font-fraunces text-[2.8rem] font-black text-off-white">
            Uncompromising quality
          </h2>
          <p className="font-barlow text-[1.5rem] leading-[2.5rem] text-off-white opacity-80">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
}
