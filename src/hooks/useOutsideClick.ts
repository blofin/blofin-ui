import { useEffect } from "react";

const useOutsideClick = (
  state: boolean,
  setState: (state: boolean) => void,
  isEnabled: boolean,
  parent: HTMLElement | null,
  contentElemet?: HTMLElement | null
) => {
  const handleClickOutside = (event: any) => {
    if (parent && parent.contains(event.target)) {
      return;
    }

    if (contentElemet && contentElemet.contains(event.target)) {
      return;
    }

    setState(false);
  };

  useEffect(() => {
    if (isEnabled) {
      return;
    }

    if (parent) {
      document.removeEventListener("click", handleClickOutside);
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [state, isEnabled]);
};

export default useOutsideClick;
