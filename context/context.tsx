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
}

export const Context = createContext<ContextInterface>({
  menuIsOpen: false,
  setMenuIsOpen: () => false,
});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Context.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => useContext(Context);
