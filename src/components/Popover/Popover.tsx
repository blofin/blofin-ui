import React from "react";
import styles from "./popover.module.scss";

export interface PopoverProps {
  /**
   * Popover label
   */
  label: string;
  /**
   * Popover content
   */
  content: React.ReactNode;
}

export const Popover = ({ label, content }: PopoverProps) => {
  return (
    <div className={styles["popover-container"]}>
      <label>{label}</label>
      <div className={styles["popover"]}>{content}</div>
    </div>
  );
};
