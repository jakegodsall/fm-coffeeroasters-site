import Image from "next/image";

export default function CollectionItem({ name, description, image }) {
  return (
    <div className="flex w-full flex-col items-center text-center sm:flex-row">
      <Image
        src={image}
        alt={name}
        className="h-[15.1rem] w-[20rem] sm:h-[19.3rem] sm:w-[25.5rem]"
      />
      <div className="max-w-[25.5rem] sm:text-left lg:text-center">
        <h3 className="mb-[1.6rem] font-fraunces text-[2.4rem]">{name}</h3>
        <p className="text-[1.5rem] leading-[2.5rem] text-secondary-green">
          {description}
        </p>
      </div>
    </div>
  );
}
