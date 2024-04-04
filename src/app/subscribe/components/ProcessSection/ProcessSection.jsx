import HowItWorksGraphic from "@/app/(home)/components/HowItWorksSection/HowItWorksGraphic";
import ProcessItem from "./ProcessItem";

const PROCESS = [
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

export default function ProcessSection() {
  return (
    <section className="w-full rounded-[0.8rem] bg-secondary-green px-[2.4rem] py-[8rem] sm:px-[4rem] lg:px-[8rem]">
      <div className="hidden sm:block">
        <HowItWorksGraphic />
      </div>
      <ul className="flex w-full flex-col items-center sm:flex-row sm:items-start sm:gap-[1rem]">
        {PROCESS.map((process) => (
          <li key={process.id} className="flex-1">
            <ProcessItem
              id={process.id}
              title={process.title}
              description={process.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
