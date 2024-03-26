"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import SubscribeFormFieldset from "./SubscribeFormFieldset";
import SubscribeSummary from "./SubscribeSummary";
import SubmitButton from "@/app/components/UI/SubmitButton";

const FORM_QUESTIONS = [
  {
    id: 1,
    question: "How do you drink your coffee?",
    isOpen: true,
    options: [
      {
        id: 1,
        title: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: 2,
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: 3,
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: 2,
    question: "What type of coffee?",
    isOpen: true,
    options: [
      {
        id: 1,
        title: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: 2,
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: 3,
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: 3,
    question: "How much would you like?",
    isOpen: true,
    options: [
      {
        id: 1,
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: 2,
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: 3,
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: 4,
    question: "Want us to grind them?",
    isOpen: true,
    options: [
      {
        id: 1,
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        id: 2,
        title: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress.",
      },
      {
        id: 3,
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee.",
      },
    ],
  },
  {
    id: 5,
    question: "How often should we deliver?",
    isOpen: true,
    options: [
      {
        id: 1,
        title: "Every week",
        description: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        id: 2,
        title: "Every 2 weeks",
        description: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        id: 3,
        title: "Every month",
        description: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  },
];

export default function SubscribeForm() {
  const [formQuestions, setFormQuestions] = useState(FORM_QUESTIONS);
  const [formData, setFormData] = useState({});

  function setIsOpen(questionId) {
    setFormQuestions((prevState) => {
      return prevState.map((question) => {
        if (question.id === questionId) {
          return { ...question, isOpen: !question.isOpen };
        } else {
          return question;
        }
      });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleOptionSelect(questionId, optionId) {
    console.log(`Question ID: ${questionId}, Option ID: ${optionId}`);
    setFormData((prevState) => ({
      ...prevState,
      [questionId]: optionId,
    }));

    console.log(formData);
  }

  const answers = Object.entries(formData).map((answer) => {
    const [questionId, optionId] = answer;

    const question = formQuestions.filter(
      (question) => question.id === +questionId,
    )[0];
    const answerVerbose = question.options.filter(
      (answer) => answer.id === +optionId,
    )[0].title;

    return answerVerbose;
  });
  console.log(answers);

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <ul className="flex flex-col">
          {formQuestions.map((formQuestion) => (
            <li key={formQuestion.id}>
              <SubscribeFormFieldset
                questionId={formQuestion.id}
                question={formQuestion.question}
                options={formQuestion.options}
                handleOptionSelect={handleOptionSelect}
                isOpen={formQuestion.isOpen}
                setIsOpen={setIsOpen}
              />
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {answers.length === 5 && <SubscribeSummary answers={answers} />}
        </AnimatePresence>
        <SubmitButton isActive={answers.length === 5}>
          Create my plan!
        </SubmitButton>
      </form>
    </section>
  );
}
