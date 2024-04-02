import clsx from "clsx";

export default function SubscribeRadioButton({
  questionId,
  optionId,
  title,
  description,
  handleOptionSelect,
  formData,
}) {
  // Check that this radio is selected in the form data
  const isChecked = formData && formData[questionId] === optionId;

  return (
    <div
      className={clsx(
        "cursor-pointer rounded-[0.8rem] p-[2.4rem]",
        isChecked
          ? "bg-[#0E8784] transition-all duration-700"
          : "bg-[#F4F1EB] transition-all duration-500",
      )}
    >
      <input
        className="hidden"
        type="radio"
        name={`question-${questionId}`}
        id={`question-${questionId}_option-${optionId}`}
        onChange={() => handleOptionSelect(questionId, optionId)}
        checked={isChecked}
      />
      <label
        htmlFor={`question-${questionId}_option-${optionId}`}
        className={clsx(
          "cursor-pointer",
          isChecked ? "text-off-white" : "text-secondary-green",
        )}
      >
        <h3 className="mb-[1rem] font-fraunces text-[2.4rem] font-black">
          {title}
        </h3>
        <p className="text-[1.4rem] leading-[2.6rem]">{description}</p>
      </label>
    </div>
  );
}
