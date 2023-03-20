"use client";
import { motion as m, AnimatePresence } from "framer-motion";

export default function AnimationWrapper({ children }: any) {
  return (
    <>
      <AnimatePresence
      // mode="wait"
      >
        <m.div
          key={123123}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </>
  );
}
