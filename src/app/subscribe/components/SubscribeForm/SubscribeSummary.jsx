export default function SubscribeSummary({ answers }) {
  console.log(answers);
  return (
    <div className="flex flex-col bg-[#293039] p-[2.4rem]">
      <h5 className="mb-[0.8rem] font-barlow text-[1.6rem] uppercase text-off-white opacity-50">
        Order Summary
      </h5>
      <p className="font-fraunces text-[2.4rem] leading-[4rem] text-off-white">
        I drink my coffee as{" "}
        <span className="text-[#0E8784]">{answers[0]}</span>, with a{" "}
        <span className="text-[#0E8784]">{answers[1]}</span> type of bean.{" "}
        <span>{answers[2]}</span> ground ala{" "}
        <span className="text-[#0E8784]">{answers[3]}</span>, sent to me{" "}
        <span className="text-[#0E8784]">{answers[4]}</span>.
      </p>
    </div>
  );
}
