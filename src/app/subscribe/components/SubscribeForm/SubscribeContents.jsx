"use client";

import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

const VALUES = [
  "Preferences",
  "Bean Type",
  "Quantity",
  "Grind Option",
  "Deliveries",
];

export default function SubscribeContents({ formQuestions, setIsOpen }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const contentsRef = useRef(null);

  function updatePosition() {
    // Get refs to the contents list and its container
    const contents = contentsRef.current;
    const container = contentsRef.current.parentElement;

    // if contents list and container are defined
    if (contents && container) {
      const containerRect = container.getBoundingClientRect();

      // if the coordinate of the top of the container is less than 120px from the top of the viewport
      if (containerRect.top <= 120) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      updatePosition();
    };

    window.addEventListener("scroll", handleScroll);

    updatePosition();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(isScrolling ? "fixed top-[12rem]" : "absolute top-0")}
      ref={contentsRef}
    >
      {/* // <div className="fixed top-[8rem]"> */}
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
