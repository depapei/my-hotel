"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const VisibilityContext = createContext({
  isNavbarVisible: false,
  setNavbarVisibility: (visible: boolean) => {},
});

export const VisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isNavbarVisible, setNavbarVisibility] = useState(true);
  return (
    <VisibilityContext.Provider
      value={{ isNavbarVisible, setNavbarVisibility }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => useContext(VisibilityContext);
