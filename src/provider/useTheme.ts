'use client';
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const useTheme = () => {
  const { theme } = useContext(ThemeContext);

  return {
    theme
  };
};


export default useTheme