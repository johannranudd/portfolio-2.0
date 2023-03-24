"use client";
import { motion as m, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimationWrapper({ children }: any) {
  const path = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <m.div
          key={path}
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
