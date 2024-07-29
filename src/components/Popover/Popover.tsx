import React, { useEffect, useRef, useState } from "react";
import styles from "./popover.module.scss";
import useAlign from "../../hooks/useAlign";
import useClient from "../../hooks/useClient";
import ReactDOM from "react-dom";

export interface PopoverProps {
  /**
   * Popover label
   */
  label: string | React.ReactNode;
  /**
   * Popover content
   */
  content: React.ReactNode;
  trigger?: "click";
  outside?: boolean;
  top?: number;
}

export const Popover = ({ label, content, trigger, outside, top }: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);

  const { isClient } = useClient();

  const { offset } = useAlign(popoverRef.current);

  const displayPopover = () => {
    if (trigger === "click") {
      setShow(true);
    }
  };

  const handleClickOutside = (event: any) => {
    if (popoverRef.current?.contains(event.target)) {
      return;
    }
    setShow(false);
  };

  useEffect(() => {
    if (popoverRef.current) {
      document.removeEventListener("click", handleClickOutside);
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  return (
    <div ref={popoverRef} className={styles["popover-container"]}>
      <label onClick={displayPopover}>{label}</label>
      {isClient && outside ? (
        show &&
        ReactDOM.createPortal(
          <div
            style={{
              left: offset.offsetLeft,
              top: offset.offsetY + offset.clientHeight
            }}
            className={styles["outside-popover"]}>
            {content}
          </div>,
          document.body
        )
      ) : (
        <div className={styles["popover"]}>{content}</div>
      )}
    </div>
  );
};
