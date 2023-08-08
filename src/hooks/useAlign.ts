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
      setOffset({
        offsetX: wrapper.offsetLeft,
        offsetY: wrapper.offsetTop,
        clientWidth: wrapper.clientWidth,
        clientHeight: wrapper.clientHeight,
        offsetLeft: wrapper.offsetLeft,
        offsetRight: document.body.clientWidth - wrapper.offsetLeft - wrapper.clientWidth
      });
    }
  }, [target]);

  return offset
};

export default useAlign;
