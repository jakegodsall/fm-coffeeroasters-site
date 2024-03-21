import Image from "next/image";
import Hero from "./components/Hero";
import CollectionSection from "./components/CollectionSection/CollectionSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection/WhyChooseUsSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center">
      <div className="mb-[12rem] flex w-[90%] flex-col items-center sm:max-w-[68rem] md:max-w-[128rem]">
        <Hero />
      </div>
      <div className="mb-[12rem] w-[90%] sm:max-w-[68rem] md:max-w-[128rem] lg:mb-[9rem]">
        <CollectionSection />
      </div>
      <div className="mb-[12rem] flex w-[90%] flex-col items-center sm:max-w-[68rem] md:max-w-[128rem]">
        <WhyChooseUsSection />
      </div>
      <div className="mb-[12rem] flex w-[90%] flex-col items-center sm:max-w-[68rem] md:max-w-[128rem]">
        <HowItWorksSection />
      </div>
    </main>
  );
}
