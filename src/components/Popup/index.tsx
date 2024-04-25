import { FC, ReactNode, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import styles from "./index.module.scss";
import useClient from "../../hooks/useClient";
import { contentStyles } from "./styles";

interface PopupProps {
  title: ReactNode;
  content: ReactNode;
  cancel?: () => void;
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

  const { title, content, cancel } = props;

  const [show, setShow] = useState(false);

  const [isToped, setIsToped] = useState(false);

  const targetRef = useRef<HTMLDivElement>(null);

  const popupRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (popupRef.current && !popupRef.current.contains(event.target) && show) {
      setShow(false);
      cancel && cancel();
    }
  };

  useEffect(() => {
    if (targetRef.current && contentRef.current && show) {
      const screenHeight = window.innerHeight || document.documentElement.clientHeight;
      const { bottom } = targetRef.current.getBoundingClientRect();
      const { height } = contentRef.current.getBoundingClientRect();
      if (bottom + height > screenHeight) {
        setIsToped(false);
      } else {
        setIsToped(true);
      }
    }
  }, [show]);

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
      <div ref={targetRef} className={styles["popup-title"]} onClick={() => setShow(!show)}>
        {title}
      </div>

      <div
        ref={contentRef}
        className={`${contentStyles({ show, isToped })} ${styles["popup-content"]}`}>
        {content}
      </div>
    </div>
  );
});

export default Popup;
