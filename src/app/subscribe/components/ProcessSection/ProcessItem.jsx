export default function ProcessItem({ id, title, description }) {
  return (
    <div className="flex max-w-[33rem] flex-col items-center gap-[2.4rem] text-center sm:items-start sm:text-left">
      <p className="font-fraunces text-[7.2rem] text-primary-beige">0{id}</p>
      <h3 className="font-fraunces text-[2.8rem] font-black text-off-white">
        {title}
      </h3>
      <p className="font-barlow text-[1.5rem] leading-[2.5rem] text-off-white opacity-80">
        {description}
      </p>
    </div>
  );
}
