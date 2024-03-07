export default function HowItWorksItem({ id, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="mb-[2.4rem] font-fraunces text-[7.2rem] text-primary-beige">
        0{id}
      </p>
      <h3 className="mb-[2.4rem] font-fraunces text-[2.8rem] text-secondary-green">
        {title}
      </h3>
      <p className="text-[1.5rem] leading-[2.5rem] text-secondary-green">
        {description}
      </p>
    </div>
  );
}
