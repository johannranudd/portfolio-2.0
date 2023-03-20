"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const modalVariant = {
  initialState: {
    opacity: 0,
  },
  animateState: {
    opacity: 1,
  },
  exitState: {
    opacity: 0,
    // transition: {
    //   delay: 1,
    // },
  },
};

const modalVariantChildren = {
  initialState: {
    y: "-100vh",
  },
  animateState: {
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
  exitState: {
    y: "-100vh",
    // transition: {
    //   delay: 0.5,
    //   duration: 1,
    // },
  },
};

export default function ModalComponent() {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  function handleExit() {
    setShowModal(false);
    router.push(`/about`);
  }

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <AnimatePresence mode="wait">
        {showModal && (
          <m.div
            onClick={() => setShowModal(false)}
            key="backdrop"
            variants={modalVariant}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            className={`absolute top-0 left-0 w-full h-full grid place-items-center cursor-pointer bg-[#000000aa]`}
          >
            <m.div
              key="modal"
              variants={modalVariantChildren}
              className="w-48 h-48 grid place-items-center bg-pink-100"
            >
              <p>Im a modal</p>
              <button onClick={handleExit}>To about page</button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
