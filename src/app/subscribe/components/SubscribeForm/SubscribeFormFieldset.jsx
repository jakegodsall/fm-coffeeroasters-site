import clsx from "clsx";
import SubscribeRadioButton from "./SubscribeRadioButton";

export default function SubscribeFormFieldset({
  questionId,
  question,
  options,
  handleOptionSelect,
  isOpen,
  setIsOpen,
  formData,
}) {
  // console.log("options");
  // console.log(options);
  return (
    <fieldset
      className={clsx(
        "w-full",
        isOpen
          ? "mb-[11rem] transition-all duration-1000 ease-in-out"
          : "mb-0 transition-all duration-1000 ease-in-out",
      )}
    >
      <div className="mb-[3.2rem] flex w-full items-center justify-between gap-[1rem] overflow-hidden">
        <legend className="max-w-[24rem] font-fraunces text-[2.4rem] font-black leading-[2.8rem] text-[#83888f]">
          {question}
        </legend>
        <div
          className={clsx(
            "flex h-[1.2rem] w-[1.8rem] flex-col items-center justify-center",
            isOpen
              ? "scale-[-1] transition-all duration-500"
              : "transition-all duration-500",
          )}
        >
          <svg
            className="h-full w-full cursor-pointer fill-current text-[#0E8784]"
            onClick={() => setIsOpen(questionId)}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      <ul
        className={clsx(
          "flex flex-col gap-[1.6rem] overflow-hidden",
          isOpen
            ? "h-[47rem] transition-all duration-500 ease-in-out"
            : "h-[0] transition-all duration-500 ease-in-out",
        )}
      >
        {options.map((option) => (
          <li key={option.id}>
            <SubscribeRadioButton
              questionId={questionId}
              optionId={option.id}
              title={option.title}
              description={option.description}
              handleOptionSelect={handleOptionSelect}
              formData={formData}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
