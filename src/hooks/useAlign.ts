import { useLayoutEffect, useState } from "react";

const useAlign = (target: HTMLDivElement | null) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetRight, setOffsetRight] = useState(0);

  useLayoutEffect(() => {
    const wrapper = target;
    if (wrapper) {
      setOffsetX(wrapper.offsetLeft);
      setOffsetLeft(wrapper.offsetLeft);
      setOffsetY(wrapper.offsetTop);
      setClientWidth(wrapper.clientWidth);
      setClientHeight(wrapper.clientHeight);
      setOffsetRight(document.body.clientWidth - wrapper.offsetLeft - wrapper.clientWidth);
    }
  }, [target]);

  console.log( {
    offsetX,
    offsetY,
    clientWidth,
    clientHeight,
    offsetLeft,
    offsetRight
  });

  return {
    offsetX,
    offsetY,
    clientWidth,
    clientHeight,
    offsetLeft,
    offsetRight
  };
};

export default useAlign;
