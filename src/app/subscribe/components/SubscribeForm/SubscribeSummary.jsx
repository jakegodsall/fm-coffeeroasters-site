export default function SubscribeSummary({ answers }) {
  return (
    <p className="font-fraunces text-[2.4rem] leading-[4rem]">
      &ldquo;I drink my coffee as{" "}
      <span className="text-[#0E8784]">{answers[0]}</span>, with a{" "}
      <span className="text-[#0E8784]">{answers[1]}</span> type of bean.{" "}
      <span>{answers[2]}</span> ground ala{" "}
      <span className="text-[#0E8784]">{answers[3]}</span>, sent to me{" "}
      <span className="text-[#0E8784]">{answers[4]}</span>.&rdquo;
    </p>
  );
}
