"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ListComponent({ data }: any) {
  const [reffyHeight, setReffyHeight] = useState<number>(0);
  const reffy = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const ulRect = reffy.current?.getBoundingClientRect();

    if (ulRect !== undefined) {
      setReffyHeight(ulRect.height);
    }
  }, []);
  return (
    <motion.ul
      custom={reffyHeight}
      ref={reffy}
      variants={listVariant}
      initial="hidden"
      animate={["visible", "raise", "turn"]}
      className="space-y-3 p-2"
    >
      {data?.map((item: any) => {
        const { id, title, body } = item;
        const shortTitle = title.slice(0, 10);
        return (
          <motion.li
            variants={listVariantChildren}
            key={id}
            className="flex py-2 border border-black"
          >
            <strong>{id}</strong>&nbsp; <p>{shortTitle}</p>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

const listVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  raise: {
    y: -150,
    transition: {
      delay: 1,
    },
  },
  turn: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.1,
    },
  },
};

const listVariantChildren = {
  hidden: {
    x: -500,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  raise: {},
  turn: {
    rotate: -10,
    transition: {
      type: "spring",
      stiffness: 1000,
    },
  },
};
