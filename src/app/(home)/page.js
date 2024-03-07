import Image from "next/image";
import Hero from "./components/Hero";
import CollectionSection from "./components/CollectionSection/CollecitonSection";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center">
      <div className="mb-[12rem] w-[90%]">
        <Hero />
      </div>
      <div className="w-[80%]">
        <CollectionSection />
      </div>
    </main>
  );
}
