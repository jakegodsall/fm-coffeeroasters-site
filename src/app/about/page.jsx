import CommitmentSection from "./components/CommitmentSection";
import Hero from "./components/Hero";
import HqSection from "./components/HqSection/HqSection";
import QualitySection from "./components/QualitySection";

export default function AboutPage() {
  return (
    <main className="px-[2.4rem]">
      <div className="mb-[12rem] overflow-hidden rounded-[1rem]">
        <Hero />
      </div>
      <div className="mb-[12rem]">
        <CommitmentSection />
      </div>
      <div className="mb-[15rem]">
        <QualitySection />
      </div>
      <div className="mb-[12rem]">
        <HqSection />
      </div>
    </main>
  );
}
