export default function WhyChooseUsItem({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center rounded-[0.8rem] bg-primary-green pt-[7.2rem]">
      <div className="mb-[5.6rem]">{icon}</div>
      <div className="flex flex-col items-center px-[3.3rem] text-center text-white">
        <h2 className="mb-[2.4rem] font-fraunces text-[2.4rem]">{title}</h2>
        <p className=" mb-[5rem] *:font-barlow text-[1.5rem] leading-[2.5rem] text-off-white">
          {description}
        </p>
      </div>
    </div>
  );
}
