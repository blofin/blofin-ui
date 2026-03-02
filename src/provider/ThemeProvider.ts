import { createContext } from "react";
import { BUITheme } from "..";

export type Direction = "ltr" | "rtl";

interface ThemeContextProps {
  theme: BUITheme;
  direction?: Direction;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  direction: "ltr"
});

const ThemeProvider = ThemeContext.Provider;

export { ThemeContext, ThemeProvider };
