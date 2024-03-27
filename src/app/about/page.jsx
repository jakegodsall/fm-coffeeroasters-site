import CommitmentSection from "./components/CommitmentSection";
import Hero from "./components/Hero";
import HqSection from "./components/HqSection/HqSection";
import QualitySection from "./components/QualitySection";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center px-[2.4rem] sm:px-[4rem]">
      <div className="mb-[12rem] w-4/5 overflow-hidden rounded-[1rem] sm:max-w-[70rem]">
        <Hero />
      </div>
      <div className="mb-[12rem] w-4/5 sm:max-w-[70rem]">
        <CommitmentSection />
      </div>
      <div className="mb-[15rem] w-4/5 sm:max-w-[70rem]">
        <QualitySection />
      </div>
      <div className="mb-[12rem] w-4/5 sm:max-w-[70rem]">
        <HqSection />
      </div>
    </main>
  );
}
