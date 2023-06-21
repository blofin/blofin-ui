import { createContext } from "react";
import { BUITheme } from "..";

interface ThemeContextProps {
  theme: BUITheme;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light"
});

const ThemeProvider = ThemeContext.Provider;

export { ThemeContext, ThemeProvider };
