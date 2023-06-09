import { useDarkMode } from "storybook-dark-mode";

const useTheme = () => {
  const mode = useDarkMode() ? "dark" : "light";

  return mode;
};

export default useTheme;
