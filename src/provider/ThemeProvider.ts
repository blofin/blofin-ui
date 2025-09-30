'use client';
import { createContext } from "react";
import { BUITheme } from "../types/component";

interface ThemeContextProps {
  theme: BUITheme;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light"
});

const ThemeProvider = ThemeContext.Provider;

export { ThemeContext, ThemeProvider };
