"use client";
import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

export interface ContextInterface {
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<ContextInterface>({
  isShowing: true,
  setIsShowing: () => true,
});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <Context.Provider value={{ isShowing, setIsShowing }}>
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => useContext(Context);
