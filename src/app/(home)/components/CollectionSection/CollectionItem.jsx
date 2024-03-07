import Image from "next/image";

export default function CollectionItem({ name, description, image }) {
  return (
    <div className="flex w-full flex-col items-center text-center">
      <Image
        src={image}
        alt={name}
        width="200"
        height="151"
        className="h-[15.1rem] w-[20rem]"
      />
      <h3 className="mb-[1.6rem] font-fraunces text-[2.4rem]">{name}</h3>
      <p className="text-[1.5rem] leading-[2.5rem] text-secondary-green">
        {description}
      </p>
    </div>
  );
}
