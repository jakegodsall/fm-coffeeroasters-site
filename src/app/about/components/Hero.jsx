export default function Hero() {
  return (
    <section className="flex w-full flex-col items-center bg-about-hero-mobile bg-cover bg-center bg-no-repeat pt-[11rem] sm:items-start sm:bg-about-hero-tablet lg:bg-about-hero-desktop">
      <div className="mb-[8.7rem] flex max-w-[40rem] flex-col px-[2.4rem] text-center sm:p-0 sm:pl-[5.8rem] sm:text-left lg:max-w-[45rem]">
        <h1 className="mb-[2.4rem] font-fraunces text-[2.8rem] font-black text-white">
          About Us
        </h1>
        <p className="font-barlow text-[1.5rem] text-[#FEFCF7] opacity-80 sm:leading-[2.5rem]">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
  );
}
