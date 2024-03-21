export default function WhyChooseUsItem({ title, description, icon }) {
  return (
    <div className="flex h-full flex-col items-center rounded-[0.8rem] bg-primary-green pt-[7.2rem] sm:flex-row sm:pl-[7rem] sm:pr-[4.8rem] lg:flex-col lg:items-center lg:px-[4.7rem]">
      <div className="mb-[5.6rem] sm:mr-[5rem] lg:mr-0">{icon}</div>
      <div className="flex flex-col items-center px-[3.3rem] text-center text-white sm:items-start sm:px-0 sm:text-left lg:max-w-[25.5rem] lg:items-center lg:text-center">
        <h2 className="mb-[2.4rem] font-fraunces text-[2.4rem]">{title}</h2>
        <p className=" mb-[5rem] font-barlow text-[1.5rem] leading-[2.5rem] text-off-white">
          {description}
        </p>
      </div>
    </div>
  );
}
