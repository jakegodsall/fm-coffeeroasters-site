import Hero from "./components/Hero";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import SubscribeForm from "./components/SubscribeForm/SubscribeForm";

export default function SubscribePage() {
  return (
    <main className="">
      <div className="mb-[12rem] px-[2.4rem]">
        <Hero />
      </div>
      <div className="mb-[12rem]">
        <ProcessSection />
      </div>
      <div className="mb-[12rem] px-[2.4rem] sm:px-[3.9rem]">
        <SubscribeForm />
      </div>
    </main>
  );
}
