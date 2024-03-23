export default function SubscribeRadioButton({
  questionId,
  id,
  title,
  description,
}) {
  return (
    <div className="rounded-[0.8rem] bg-[#F4F1EB] p-[2.4rem]">
      <input
        className="hidden"
        type="radio"
        name={`question-${questionId}`}
        id={`answer-${id}`}
      />
      <label htmlFor={`answer-${id}`}>
        <h3 className="mb-[1rem] font-fraunces text-[2.4rem] font-black text-secondary-green">
          {title}
        </h3>
        <p className="text-[1.4rem] leading-[2.6rem] text-secondary-green">
          {description}
        </p>
      </label>
    </div>
  );
}
