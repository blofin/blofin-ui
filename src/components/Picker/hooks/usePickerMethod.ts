import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { useRef, useEffect, useCallback, useState, EffectCallback } from 'react';

export const useMount = (callback: EffectCallback) => {
  useEffect(callback, []);
};

const usePickerMethod = (list: any, selectedValue: any) => {
  const pickerColumnsEl = useRef<HTMLDivElement>(null);
  const stepSize = useRef(0);
  const lastOffset = useRef(0);
  const realHeight = useRef(30);

  const [selected, setSelected] = useState(selectedValue);

  // 滚动结束时判断当前选中的值
  const selectedColumnsValue = useCallback(
    (top: number) => {
      let currentIndex = -(top / realHeight.current);
      const floor = Math.floor(currentIndex);
      if (currentIndex - floor > 0.5) {
        currentIndex = floor + 1;
      } else {
        currentIndex = floor;
      }
      if (currentIndex < 0) currentIndex = 0;
      const selectedValue = list[currentIndex].value;
      setSelected(selectedValue); // 当前选中的值

      return { currentIndex };
    },
    [list]
  );

  const handleWheel = throttle((event: any) => {

    event.preventDefault()

    const pickerDom = pickerColumnsEl.current;

    const deltaY = event.deltaY;

    lastOffset.current += -deltaY * 4;

    if (lastOffset.current > 0) {
      lastOffset.current = 0;
    }

    if (lastOffset.current < -((list.length - 1) * realHeight.current)) {
      lastOffset.current = -((list.length - 1) * realHeight.current);
    }

    pickerDom &&
      ((pickerDom.style.transition = 'transform 0.2s'),
      (pickerDom.style.transform = `translateY(${lastOffset.current}px)`));

    debounceSelected();
  });

  const debounceSelected = debounce(() => {
    const { currentIndex } = selectedColumnsValue(lastOffset.current);
    lastOffset.current = -(realHeight.current * currentIndex);
    const pickerDom = pickerColumnsEl.current;
    pickerDom && (pickerDom.style.transform = `translateY(${lastOffset.current}px)`);
  }, 16.7);

  useEffect(() => {
    const pickerDom = pickerColumnsEl.current;

    if (pickerDom && pickerDom.firstElementChild) {
      const firstChildHeight = pickerDom.firstElementChild.getBoundingClientRect().height;
      realHeight.current = firstChildHeight;
    }
    // stepSize.current = realHeight.current * list.length;

    if (pickerDom === null) return;
    pickerDom.addEventListener('wheel', handleWheel, false);

    return () => {
      pickerDom.removeEventListener('wheel', handleWheel);
    };
  }, [list.length, selectedColumnsValue, pickerColumnsEl.current]);

  // 定位到页面对应位置
  const selectPosition = () => {
    list.forEach((item: any, index: number) => {
      if (item.value === selectedValue) {
        selectIndex(index);
      }
    });
    if (!selectedValue) {
      selectIndex(0);
    }
  };

  // 让页面滚动到对应的index位置
  const selectIndex = (index: number) => {
    const pickerDom = pickerColumnsEl.current;
    lastOffset.current = -(realHeight.current * index);
    pickerDom && (pickerDom.style.transform = `translate3D(0, ${lastOffset.current}px, 0)`);
  };

  // 仅在首次进入时才执行此方法
  useMount(() => {
    selectPosition();
  });

  return { pickerColumnsEl, selected, setSelected, selectIndex };
};

export default usePickerMethod;
