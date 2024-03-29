import CommitmentSection from "./components/CommitmentSection";
import Hero from "./components/Hero";
import HqSection from "./components/HqSection/HqSection";
import QualitySection from "./components/QualitySection";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center px-[2.4rem] sm:px-[4rem]">
      <div className="mb-[12rem] w-full overflow-hidden rounded-[1rem] sm:max-w-[70rem] lg:max-w-[128rem]">
        <Hero />
      </div>
      <div className="mb-[12rem] w-full sm:mb-[30rem] sm:max-w-[70rem] lg:max-w-[128rem]">
        <CommitmentSection />
      </div>
      <div className="mb-[15rem] w-full sm:max-w-[70rem] lg:max-w-[128rem]">
        <QualitySection />
      </div>
      <div className="mb-[12rem] w-full sm:max-w-[70rem] lg:max-w-[128rem]">
        <HqSection />
      </div>
    </main>
  );
}
