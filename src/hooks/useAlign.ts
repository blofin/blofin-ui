import { useLayoutEffect, useState } from "react";

const useAlign = (target: HTMLDivElement | null) => {
  const [offset, setOffset] = useState({
    offsetX: 0,
    offsetY: 0,
    clientWidth: 0,
    clientHeight: 0,
    offsetLeft: 0,
    offsetRight: 0
  });

  useLayoutEffect(() => {
    const wrapper = target;
    if (wrapper) {
      const { bottom, height, left, right, top, width, x, y }=wrapper.getBoundingClientRect()
      setOffset({
        offsetX: x,
        offsetY: y,
        clientWidth: width,
        clientHeight: height,
        offsetLeft: left,
        offsetRight: document.body.clientWidth - x - width
      });
    }
  }, [target]);

  return offset;
};

export default useAlign;
