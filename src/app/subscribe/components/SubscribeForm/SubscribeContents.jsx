const VALUES = [
  "Preferences",
  "Bean Type",
  "Quantity",
  "Grind Option",
  "Deliveries",
];

export default function SubscribeContents({ formQuestions }) {
  console.log(formQuestions);

  return (
    <div>
      <ul className="flex w-full max-w-[25.5rem] flex-col">
        {formQuestions.map((formQuestion) => (
          <li
            key={formQuestion.id}
            className="color-[#333d34b] mb-[2.4rem] flex w-full items-center gap-[2.85rem] border-b-[0.1rem] pb-[2.4rem] font-fraunces text-[2rem]"
          >
            <p>0{formQuestion.id}</p>
            <p>{VALUES[formQuestion.id - 1]}</p>
          </li>
        ))}
        {/* <li className="color-[#333d34b] mb-[2.4rem] w-full border-b-[0.1rem] pb-[2.4rem] font-fraunces text-[2rem]">
          01 Preferences
        </li>
        <li className="color-[#333d34b] mb-[2.4rem] w-full border-b-[0.1rem] pb-[2.4rem] font-fraunces text-[2rem]">
          02 Bean Type
        </li>
        <li className="color-[#333d34b] mb-[2.4rem] w-full border-b-[0.1rem] pb-[2.4rem] font-fraunces text-[2rem]">
          03 Quantity
        </li>
        <li className="color-[#333d34b] mb-[2.4rem] w-full border-b-[0.1rem] pb-[2.4rem] font-fraunces text-[2rem]">
          04 Grind Option
        </li>
        <li className="color-[#333d34b] mb-[2.4rem] w-full border-b-[0.1rem] pb-[2.4rem] font-fraunces text-[2rem]">
          05 Deliveries
        </li> */}
      </ul>
    </div>
  );
}
