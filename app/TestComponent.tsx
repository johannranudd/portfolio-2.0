"use client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function TestComponent() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div>
      TestComponent
      <motion.div
        animate={{ x: x, y: y, rotate: rotate }}
        transition={{
          type: "linear",
          duration: 0.1,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        className="absolut bg-blue-500 h-20 w-20 cursor-pointer"
      ></motion.div>
      <div className="mt-10 max-w-[200px]">
        <div className="flex justify-between items-center">
          <input
            type="range"
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
          ></input>
          <span>{x}</span>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="range"
            value={y}
            onChange={(e) => setY(parseFloat(e.target.value))}
          ></input>
          <span>{y}</span>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="range"
            value={rotate}
            onChange={(e) => setRotate(parseFloat(e.target.value))}
          ></input>
          <span>{rotate}</span>
        </div>
      </div>
    </div>
  );
}
