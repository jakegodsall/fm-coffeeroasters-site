import SubscribeRadioButton from "./SubscribeRadioButton";

const arrow = (
  <svg
    className="h-[1.3rem] w-[2.7rem] fill-current text-[#0E8784]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
      fillRule="nonzero"
    />
  </svg>
);

export default function SubscribeFormFieldset({
  questionId,
  question,
  options,
  handleOptionSelect,
}) {
  return (
    <fieldset>
      <div className="mb-[3.2rem] flex items-center">
        <legend className="font-fraunces text-[2.4rem] font-black leading-[2.8rem] text-[#83888f]">
          {question}
        </legend>
        {arrow}
      </div>
      <ul className="flex flex-col gap-[1.6rem]">
        {options.map((option) => (
          <li key={option.id}>
            <SubscribeRadioButton
              questionId={questionId}
              optionId={option.id}
              title={option.title}
              description={option.description}
              handleOptionSelect={handleOptionSelect}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
