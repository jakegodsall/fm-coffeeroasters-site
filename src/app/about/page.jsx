import CommitmentSection from "./components/CommitmentSection";
import Hero from "./components/Hero";

export default function AboutPage() {
  return (
    <main className="px-[2.4rem]">
      <div className="mb-[12rem] overflow-hidden rounded-[1rem]">
        <Hero />
      </div>
      <div className="mb-[12rem]">
        <CommitmentSection />
      </div>
    </main>
  );
}
