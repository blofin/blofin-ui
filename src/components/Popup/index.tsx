import { ReactNode, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import styles from "./index.module.scss";
import { contentStyles } from "./styles";
import useLatest from "../../hooks/useLatest";
import useTheme from "../../provider/useTheme";

interface PopupProps {
  title: ReactNode;
  content: ReactNode;
  cancel?: () => void;
  distance?: number;
  disabled?: boolean;
  auto?: boolean;
}

export interface PopupRef {
  open: () => void;
  close: () => void;
}

const Popup = forwardRef<PopupRef, PopupProps>((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        setShow(true);
      },
      close: () => {
        setShow(false);
      }
    };
  });

  const { title, content, cancel, distance = 10, disabled = false, auto } = props;

  const { direction } = useTheme();
  const isRTL = direction === "rtl";

  const [show, setShow] = useState(false);

  const [isToped, setIsToped] = useState(false);

  const [isRight, setIsRight] = useState(false);

  const targetRef = useRef<HTMLDivElement>(null);

  const [targetRefHeight, setTargetRefHeight] = useState(0);

  const popupRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const cancelRef = useLatest(cancel);

  const handleClickOutside = (event: any) => {
    if (
      popupRef.current &&
      document.contains(event.target) &&
      event.target &&
      !popupRef.current.contains(event.target) &&
      show
    ) {
      setShow(false);
      cancelRef.current && cancelRef.current();
    }
  };

  const toggle = () => {
    if (disabled) return;
    setShow(!show);
    if (show) {
      cancelRef.current && cancelRef.current();
    }
  };

  useEffect(() => {
    if (targetRef.current) {
      setTargetRefHeight(targetRef.current.clientHeight);
    }

    if (targetRef.current && contentRef.current && show) {
      const screenHeight = window.innerHeight || document.documentElement.clientHeight;
      const screenWidth = window.innerWidth || document.documentElement.clientWidth;
      const { bottom, left, right } = targetRef.current.getBoundingClientRect();
      const { height, width } = contentRef.current.getBoundingClientRect();

      // RTL 模式：默认右对齐，左边超出才切到左对齐
      // LTR 模式：默认左对齐，右边超出才切到右对齐
      if (isRTL) {
        // RTL: 检查左边是否超出
        if (left - width < 0) {
          setIsRight(false); // 切换到左对齐
        } else {
          setIsRight(true); // 保持右对齐
        }
      } else {
        // LTR: 检查右边是否超出
        if (right + width >= screenWidth) {
          setIsRight(true); // 切换到右对齐
        } else {
          setIsRight(false); // 保持左对齐
        }
      }

      if (!auto) {
        setIsToped(true);
      } else {
        if (bottom + height > screenHeight) {
          setIsToped(false);
        } else {
          setIsToped(true);
        }
      }
    }
  }, [show, auto, isRTL]);

  useEffect(() => {
    if (popupRef.current) {
      document.removeEventListener("click", handleClickOutside);
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  return (
    <div ref={popupRef} className={styles["popup-container"]}>
      <div ref={targetRef} className={styles["popup-title"]} onClick={toggle}>
        {title}
      </div>

      <div
        ref={contentRef}
        className={`${contentStyles({ show })} ${styles["popup-content"]}`}
        style={{
          ...(isToped
            ? { top: distance + targetRefHeight + "px" }
            : { bottom: distance + targetRefHeight + "px" }),
          ...(isRight ? { right: 0 } : { left: 0 })
        }}>
        {show && content}
      </div>
    </div>
  );
});

export default Popup;
