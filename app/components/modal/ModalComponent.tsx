"use client";

import { motion as m, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { animationSequel } from "../Animations/modalAnimation";

export default function ModalComponent() {
  const [isShown, setIsShown] = useState(false);
  const controls = useAnimation();

  const modalControls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    animationSequel({ controls, modalControls, router, setIsShown });
  }, [isShown]);

  return (
    <div>
      <button onClick={() => setIsShown(true)} className="border border-black">
        Open modal
      </button>
      {isShown && (
        <m.div
          initial={{ opacity: 0 }}
          animate={controls}
          onClick={() =>
            animationSequel(
              { controls, modalControls, router, setIsShown },
              "exit"
            )
          }
          className={`absolute top-0 left-0 w-full h-full grid place-items-center cursor-pointer bg-[#000000aa]`}
        >
          <m.div
            key="modal"
            initial={{ y: -800 }}
            animate={modalControls}
            className="h-48 w-48 grid place-items-center bg-[#def]"
          >
            <m.button className="p-2 border border-black">modal</m.button>
          </m.div>
        </m.div>
      )}
    </div>
  );
}
