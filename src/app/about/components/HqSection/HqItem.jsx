export default function HqItem({ title, address, phone, icon }) {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="mb-[4.8rem]">{icon}</div>
      <h3 className="mb-[2.2rem] font-fraunces text-[2.8rem] text-secondary-green">
        {title}
      </h3>
      {Object.values(address).map((line, idx) => (
        <p
          className="mb-[0.3rem] font-barlow text-[1.6rem] text-secondary-green"
          key={idx}
        >
          {line}
        </p>
      ))}
      <p className="mt-[0.3rem] font-barlow text-[1.6rem] text-secondary-green">
        {phone}
      </p>
    </div>
  );
}
