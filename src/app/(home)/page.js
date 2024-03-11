import Image from "next/image";
import Hero from "./components/Hero";
import CollectionSection from "./components/CollectionSection/CollectionSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center">
      <div className="mb-[12rem] flex w-[90%] flex-col items-center sm:max-w-[68rem]">
        <Hero />
      </div>
      <div className="mb-[12rem] w-[80%]">
        <CollectionSection />
      </div>
      <div className="mb-[12rem] flex w-[90%] flex-col items-center sm:max-w-[68rem]">
        <WhyChooseUsSection />
      </div>
      <div className="mb-[12rem] flex w-[90%] flex-col items-center sm:max-w-[68rem]">
        <HowItWorksSection />
      </div>
    </main>
  );
}
