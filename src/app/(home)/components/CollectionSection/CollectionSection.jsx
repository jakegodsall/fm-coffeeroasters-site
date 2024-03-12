import granEsperesso from "/public/assets/home/desktop/image-gran-espresso.png";
import planalto from "/public/assets/home/desktop/image-planalto.png";
import piccollo from "/public/assets/home/desktop/image-piccollo.png";
import danche from "/public/assets/home/desktop/image-danche.png";

import CollectionItem from "./CollectionItem";

const COFFEE_DATA = [
  {
    id: 1,
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
    image: granEsperesso,
  },
  {
    id: 2,
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    image: planalto,
  },
  {
    id: 3,
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
    image: piccollo,
  },
  {
    id: 4,
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    image: danche,
  },
];

export default function CollectionSection() {
  return (
    <section className="flex w-full flex-col items-center">
      <h2 className="mb-[2rem] bg-text-linear-gradient bg-clip-text text-center font-fraunces text-[3.5rem] text-transparent sm:text-[8rem]">
        our collection
      </h2>
      <ul className="flex flex-col items-center gap-[4.8rem] sm:relative sm:top-[-5rem] lg:flex-row lg:flex-wrap lg:justify-around lg:gap-x-[0.5rem] lg:gap-y-[3rem]">
        {COFFEE_DATA.map((coffeeItem) => {
          return (
            <li key={coffeeItem.id}>
              <CollectionItem
                name={coffeeItem.name}
                description={coffeeItem.description}
                image={coffeeItem.image}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
