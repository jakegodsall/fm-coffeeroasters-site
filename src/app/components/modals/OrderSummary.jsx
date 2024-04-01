"use client";

import { motion } from "framer-motion";

export default function OrderSummary() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.5 } }}
      className="fixed z-30 mx-[2.4rem] my-[3.5rem] bg-off-white "
    >
      <h1>Testing</h1>
      <div>
        <h2></h2>
        <p className="mb-[2.4rem] font-barlow text-[1.5rem] leading-[2.5rem] text-secondary-green">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
      </div>
    </motion.div>
  );
}
