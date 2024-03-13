import React, { FC, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { SortableContent } from "./context";

interface SortableItemProps {
  children: React.ReactNode;
  index: number;
  listLength: number;
}

const SortableItem: FC<SortableItemProps> = ({ children, index, listLength }) => {
  const { direction, onMove } = useContext(SortableContent);

  const [top, setTop] = useState(0);

  const [left, setLeft] = useState(0);

  const [isDragging, setIsDragging] = useState(false);

  const [zIndex, setZIndex] = useState(0);

  const ref = useRef();

  const indexRef = useRef(index);

  console.log(indexRef.current);

  const listLengthRef = useRef(listLength);

  const prevRectRef = useRef(null);

  const animationRef = useRef(null);

  useEffect(() => {
    // 始终保持最新状态 Ref 引用
    indexRef.current = index;
    listLengthRef.current = listLength;
  }, [index, onMove, listLength]);

  useEffect(() => {
    const el: any = ref.current;

    // 存储起始鼠标位置
    let startY = 0;

    let startX = 0;

    let delayedSetZIndexTimeoutId: any;

    const mouseMove = (ev: any) => {
      ev.preventDefault();

      // 获取元素 Rect 并更新 Ref
      const rect = ev.target.getBoundingClientRect();

      prevRectRef.current = rect;

      let latestLeft = 0;
      let latestTop = 0;

      if (direction === "horizontal") {
        latestLeft = ev.clientX - startX;
        console.log("移动", latestLeft, rect.width, indexRef.current, listLengthRef.current - 1);

        if (latestLeft > rect.width / 2 && indexRef.current < listLengthRef.current - 1) {
          // move right

          onMove(indexRef.current, indexRef.current + 1);
          latestLeft -= rect.width;
          startX += rect.width;
        } else if (latestLeft < -rect.width && indexRef.current > 0) {
          console.log("不执行");
          // move left
          onMove(indexRef.current, indexRef.current - 1);
          latestLeft += rect.width;
          startX -= rect.width;
        }

        setLeft(latestLeft);
      } else {
        latestTop = ev.clientY - startY;
        // 检查是否需要更新元素位置
        if (latestTop > rect.height / 2 && indexRef.current < listLengthRef.current - 1) {
          // move down
          // 通知父组件修改列表
          onMove(indexRef.current, indexRef.current + 1);
          // 因为 DOM 位置被改变了，需要同步计算最新位置
          // 可以理解为计算出来的值就是元素发生交换后，松开鼠标再按住鼠标时相关变量的值。
          // 可以试着注释掉这行看看会发生什么，就能理解了（会闪一下）
          latestTop -= rect.height;
          // 开始位置也要更新
          startY += rect.height;
        } else if (latestTop < -rect.height && indexRef.current > 0) {
          // move up
          onMove(indexRef.current, indexRef.current - 1);
          latestTop += rect.height;
          startY -= rect.height;
        }
        setTop(latestTop);
      }
    };

    const mouseUp = (ev: any) => {
      ev.preventDefault();
      document.removeEventListener("mousemove", mouseMove);

      if (direction === "horizontal") {
        setLeft(0);
      } else {
        setTop(0);
      }
      // 结束拖拽
      setIsDragging(false);
      delayedSetZIndexTimeoutId = setTimeout(() => {
        // 延迟设置 zIndex，不然一结束拖拽该元素就会被盖到其他元素下面
        setZIndex(0);
      }, 200);
    };

    const mouseDown = (ev: any) => {
      ev.preventDefault();
      clearTimeout(delayedSetZIndexTimeoutId);
      // 注册事件
      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp, { once: true });
      // 开始拖拽
      setIsDragging(true);
      setZIndex(999);
      // 记录开始位置
      if (direction === "horizontal") {
        startX = ev.clientX;
      } else {
        startY = ev.clientY;
      }
    };
    el.addEventListener("mousedown", mouseDown);
  }, []);

  useLayoutEffect(() => {
    const el: any = ref.current;
    if (isDragging) {
      // 拖拽中的元素不计算
      return;
    }

    if (prevRectRef.current === null) {
      // 元素第一次渲染
      prevRectRef.current = el.getBoundingClientRect();
      return;
    }

    // 如果有动画正在运行则取消，防止拖动速度过快有鬼畜效果
    if (animationRef.current) {
      const animation: any = animationRef.current;
      if (animation.playState === "running") {
        // Cancel previous animation
        animation.cancel();
      }
    }

    const prevRect: any = prevRectRef.current;

    const latestRect = el.getBoundingClientRect();

    const deltaY = latestRect.y - prevRect.y;

    const deltaX = latestRect.x - prevRect.x;

    prevRectRef.current = latestRect;

    if (direction === "horizontal") {
      if (deltaX === 0) {
        return;
      }
      animationRef.current = el.animate(
        [
          {
            left: `${-deltaX}px`
          },
          {
            left: `0px`
          }
        ],
        200
      );
    } else {
      if (deltaY === 0) {
        return;
      }
      animationRef.current = el.animate(
        [
          {
            top: `${-deltaY}px`
          },
          {
            top: `0px`
          }
        ],
        200
      );
    }
  }, [index, isDragging]);

  return (
    <div
      ref={ref as any}
      style={{
        border: "1px solid black",
        padding: "10px",
        background: "white",
        transform: isDragging ? `scale(1.01)` : `scale(1)`,
        top: direction === "vertical" ? `${top}px` : "",
        left: direction === "horizontal" ? `${left}px` : "",
        transition: "transform .1s, box-shadow .1s",
        position: "relative",
        width: "100%",
        boxShadow: isDragging ? "0 0 10px 2px rgba(0, 0, 0, 0.5)" : "0 0 0 0px rgba(0, 0, 0, 0.5)",
        zIndex: zIndex.toString()
      }}>
      {children}
    </div>
  );
};

export default SortableItem;
