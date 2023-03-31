"use client";
import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

export interface ContextInterface {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  windowWidth: number;
  setWindowWidth: Dispatch<SetStateAction<number>>;
  heroTextRefNumber: number;
  setHeroTextRefNumber: Dispatch<SetStateAction<number>>;
}

export const Context = createContext<ContextInterface>({
  menuIsOpen: false,
  setMenuIsOpen: () => false,
  windowWidth: 0,
  setWindowWidth: () => {},
  heroTextRefNumber: 0,
  setHeroTextRefNumber: () => 0,
});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [heroTextRefNumber, setHeroTextRefNumber] = useState(0);
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    } else {
      return 0;
    }
  });

  return (
    <Context.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
        windowWidth,
        setWindowWidth,
        heroTextRefNumber,
        setHeroTextRefNumber,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => useContext(Context);
