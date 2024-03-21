import Button from "@/app/components/UI/Button";
import HowItWorksItem from "./HowItWorksItem";
import HowItWorksGraphic from "./HowItWorksGraphic";

const HOW_DATA = [
  {
    id: 1,
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    id: 2,
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    id: 3,
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="flex flex-col items-center sm:items-start">
      <h2 className="mb-[8rem] font-fraunces text-[2.4rem] text-grey">
        How it works
      </h2>
      <div className="hidden w-full sm:mb-[4.8rem] sm:block">
        <HowItWorksGraphic />
      </div>
      <ul className="mb-[7.9rem] flex flex-col items-center gap-[5.6rem] sm:grid sm:max-w-[120rem] sm:grid-cols-3 sm:items-start sm:gap-[3rem]">
        {HOW_DATA.map((how) => (
          <li key={how.id}>
            <HowItWorksItem
              id={how.id}
              title={how.title}
              description={how.description}
            />
          </li>
        ))}
      </ul>
      <div className="text-off-white">
        <Button>Create your plan</Button>
      </div>
    </section>
  );
}
