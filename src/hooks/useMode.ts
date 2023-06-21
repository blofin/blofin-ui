import { useDarkMode } from "storybook-dark-mode";

const useMode = () => {
  const mode = useDarkMode() ? "dark" : "light";

  return mode;
};

export default useMode;
