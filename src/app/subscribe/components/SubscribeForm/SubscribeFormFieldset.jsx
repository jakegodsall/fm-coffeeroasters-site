import SubscribeRadioButton from "./SubscribeRadioButton";

export default function SubscribeFormFieldset({ id, question, options }) {
  console.log(question);
  console.log(options);
  return (
    <fieldset>
      <legend>{question}</legend>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <SubscribeRadioButton
              id={option.id}
              title={option.title}
              description={option.description}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
