import Hero from "./components/Hero";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import SubscribeForm from "./components/SubscribeForm/SubscribeForm";

export default function SubscribePage() {
  return (
    <main className="flex flex-col items-center">
      <div className="mb-[12rem] w-full px-[2.4rem] lg:max-w-[128rem] lg:px-0">
        <Hero />
      </div>
      <div className="mb-[12rem] w-full lg:max-w-[128rem]">
        <ProcessSection />
      </div>
      <div className="mb-[12rem] w-full px-[2.4rem] sm:px-[3.9rem] lg:max-w-[128rem]">
        <SubscribeForm />
      </div>
    </main>
  );
}
