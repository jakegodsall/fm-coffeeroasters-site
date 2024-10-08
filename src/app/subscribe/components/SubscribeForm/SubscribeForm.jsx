"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SubscribeFormFieldset from "./SubscribeFormFieldset";
import SubscribeSummary from "./SubscribeSummary";
import SubmitButton from "@/app/components/UI/SubmitButton";
import OrderSummaryModal from "@/app/components/modals/OrderSummaryModal";
import SubscribeContents from "./SubscribeContents";
import ThankYouModal from "@/app/components/modals/ThankYouModal";

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
    isOpen: false,
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
    isOpen: false,
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
    isOpen: false,
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
    isOpen: false,
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
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [thankYouModalOpen, setThankYouModalOpen] = useState(false);

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
    setOrderModalOpen(true);
  }

  function handleOptionSelect(questionId, optionId) {
    console.log(`Question ID: ${questionId}, Option ID: ${optionId}`);
    setFormData((prevState) => ({
      ...prevState,
      [questionId]: optionId,
    }));

    console.log(Object.keys(formData));
    if (
      questionId !== formQuestions.length &&
      !formQuestions[questionId].isOpen &&
      !Object.keys(formData).includes(String(questionId))
    ) {
      setIsOpen(questionId);
      setIsOpen(questionId + 1);
    }
    if (
      questionId === formQuestions.length &&
      !Object.keys(formData).includes(String(questionId))
    ) {
      setIsOpen(questionId);
    }
  }

  function toggleOrderModal() {
    setOrderModalOpen((prev) => !prev);
  }

  function toggleThankYouModal() {
    setOrderModalOpen(false);
    setThankYouModalOpen((prev) => !prev);
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

  return (
    <section className="relative flex lg:justify-between">
      <div className="hidden w-full max-w-[25.5rem] overflow-y-auto lg:block">
        <SubscribeContents
          formQuestions={formQuestions}
          setIsOpen={setIsOpen}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-[73rem] flex-col items-center"
      >
        <ul className="flex flex-col sm:w-full">
          {formQuestions.map((formQuestion) => (
            <li key={formQuestion.id}>
              <SubscribeFormFieldset
                questionId={formQuestion.id}
                question={formQuestion.question}
                options={formQuestion.options}
                handleOptionSelect={handleOptionSelect}
                isOpen={formQuestion.isOpen}
                setIsOpen={setIsOpen}
                formData={formData}
              />
            </li>
          ))}
        </ul>
        <AnimatePresence>
          {answers.length === 5 && (
            <motion.div
              className="flex flex-col "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="mb-[5.6rem] rounded-[1rem] bg-[#293039] px-[2.4rem] py-[3.7rem] text-off-white">
                <p className="mb-[0.8rem] text-[1.6rem] uppercase text-white opacity-50">
                  Order Summary
                </p>
                <SubscribeSummary answers={answers} />
              </div>
              <div className="lg:ml-auto">
                <SubmitButton
                  isActive={answers.length === 5}
                  onClick={toggleOrderModal}
                >
                  Create my plan!
                </SubmitButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      <AnimatePresence>
        {orderModalOpen && (
          <OrderSummaryModal
            answers={answers}
            closeModal={toggleOrderModal}
            openThankYouModal={toggleThankYouModal}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {thankYouModalOpen && (
          <ThankYouModal closeModal={toggleThankYouModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
