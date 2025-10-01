"use client";
import { createContext, ReactNode } from "react";
import { BUITheme } from "../types/component";

interface ThemeContextProps {
  theme: BUITheme;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light"
});

interface ThemeProviderProps {
  value: ThemeContextProps;
  children: ReactNode;
}

const ThemeProvider = ({ value, children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
