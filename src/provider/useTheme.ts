import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const useTheme = () => {
  const { theme, direction = "ltr" } = useContext(ThemeContext);

  return {
    theme,
    direction
  };
};

export default useTheme;
