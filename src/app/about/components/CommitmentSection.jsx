import Image from "next/image";

import commitmentImageMobile from "/public/assets/about/mobile/image-commitment.jpg";
import commitmentImageTablet from "/public/assets/about/tablet/image-commitment.jpg";
import commitmentImageDesktop from "/public/assets/about/desktop/image-commitment.jpg";

export default function CommitmentSection() {
  return (
    <section className="flex flex-col items-center sm:flex-row sm:gap-[7rem]">
      <Image
        src={commitmentImageMobile}
        alt="A barista making an artisan coffee"
        className="mb-[4.8rem] rounded-[0.8rem] sm:mb-0 sm:hidden"
        width="327"
        height="400"
      />
      <Image
        src={commitmentImageTablet}
        alt="A barista making an artisan coffee"
        className="mb-[4.8rem] hidden rounded-[0.8rem] sm:mb-0 sm:inline sm:flex-1"
        width="281"
        height="470"
      />
      <div className="text-center sm:flex-1 sm:text-left">
        <h2 className="mb-[3rem] font-fraunces text-[3.2rem] font-black text-secondary-green">
          Our commitment
        </h2>
        <p className="font-barlow text-[1.5rem] leading-[2.5rem] text-secondary-green opacity-80">
          We&apos;re built on a simple mission and a commitment to doing good
          along the way. We want to make it easy for you to discover and brew
          the world&apos;s best coffee at home. It all starts at the source. To
          locate the specific lots we want to purchase, we travel nearly 60 days
          a year trying to understand the challenges and opportunities in each
          of these places. We collaborate with exceptional coffee growers and
          empower a global community of farmers through with well above
          fair-trade benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
}
