import { useLayoutEffect, useState } from "react";

const useAlign = (target: HTMLDivElement | null) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useLayoutEffect(() => {
    const wrapper = target;
    if (wrapper) {
      setOffsetX(wrapper.offsetLeft);
      setOffsetY(wrapper.offsetTop);
    }
  }, [target]);

  return {
    offsetX,
    offsetY
  };
};

export default useAlign;
