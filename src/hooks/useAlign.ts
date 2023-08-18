import { useEffect, useLayoutEffect, useState } from "react";

const useAlign = (target: HTMLDivElement | null) => {
  const [offset, setOffset] = useState({
    offsetX: 0,
    offsetY: 0,
    clientWidth: 0,
    clientHeight: 0,
    offsetLeft: 0,
    offsetRight: 0
  });

  const getElementPosition = (element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const scrollLeft = document.documentElement.scrollLeft;
    const scrollTop = document.documentElement.scrollTop;
    const left = rect.left + scrollLeft;
    const top = rect.top + scrollTop;
    return { left: left, top: top };
  };

  const resize = () => {
    const wrapper = target;
    if (wrapper) {
      const { height, width } = wrapper.getBoundingClientRect();
      const { left, top } = getElementPosition(wrapper);
      setOffset({
        offsetX: left,
        offsetY: top,
        clientWidth: width,
        clientHeight: height,
        offsetLeft: left,
        offsetRight: document.body.clientWidth - left - width
      });
    }
  };

  useEffect(() => {
    resize();
  }, [target]);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return offset;
};

export default useAlign;
