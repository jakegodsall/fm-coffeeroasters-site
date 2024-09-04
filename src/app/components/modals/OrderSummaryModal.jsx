"use client";

import { motion } from "framer-motion";
import SubscribeSummary from "@/app/subscribe/components/SubscribeForm/SubscribeSummary";

export default function OrderSummaryModal({
  answers,
  closeModal,
  openThankYouModal,
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed bottom-0 left-0 top-0 flex w-full flex-col items-center bg-black opacity-50"
        onClick={closeModal}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.1 } }}
        className="fixed left-[50%] top-[50%] z-30 my-[3.5rem] flex w-4/5 translate-x-[-50%] translate-y-[-50%] flex-col items-center overflow-hidden rounded-[0.8rem] bg-off-white sm:max-w-[54rem]"
      >
        <div>
          <h1 className="bg-[#333D4B] p-[2.4rem] font-fraunces text-[2.8rem] text-white sm:px-[5.6rem] sm:py-[4.8rem] sm:text-[4rem]">
            Order Summary
          </h1>
          <div className="px-[2.4rem] pb-[2.4rem] pt-[3.2rem] text-[2.4rem] text-[#83888F] sm:px-[5.6rem]">
            <SubscribeSummary answers={answers} />
            <p className="mb-[2.4rem] font-barlow text-[1.5rem] leading-[2.5rem] text-secondary-green sm:text-[1.6rem] sm:leading-[2.6rem]">
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
          </div>
        </div>
        <p
          className="mb-[2.4rem] rounded-[0.6rem] bg-[#0e8784] px-[3.2rem] py-[1.6rem] font-fraunces text-[1.8rem] text-off-white transition-all duration-300 hover:bg-[#66d2cf] sm:hidden"
          onClick={openThankYouModal}
        >
          Checkout - $14.00 / mo
        </p>
      </motion.div>
    </>
  );
}
