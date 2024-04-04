import clsx from "clsx";

const VALUES = [
  "Preferences",
  "Bean Type",
  "Quantity",
  "Grind Option",
  "Deliveries",
];

export default function SubscribeContents({ formQuestions, setIsOpen }) {
  console.log(formQuestions);

  return (
    <div>
      <ul className="flex w-full max-w-[25.5rem] flex-col">
        {formQuestions.map((formQuestion) => (
          <li
            key={formQuestion.id}
            className={clsx(
              "mb-[2.4rem] flex w-full items-center border-b-[0.1rem] pb-[2.4rem] font-fraunces text-[2rem]",
              formQuestion.isOpen ? "" : "",
            )}
          >
            <p
              className={clsx(
                "cursor-pointer ",
                formQuestion.isOpen
                  ? "text-[#333d34b]"
                  : "text-[#ADB0B2] hover:text-[#848990]",
              )}
              onClick={() => setIsOpen(formQuestion.id)}
            >
              <span className="mr-[2.85rem]">0{formQuestion.id}</span>
              {VALUES[formQuestion.id - 1]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
