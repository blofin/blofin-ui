import React from "react";
import "./popover.scss";

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
    <div className="popover-container relative max-w-fit">
      <label>{label}</label>
      <div className="popover hidden absolute top-6 left-0 z-10 shadow">
        {content}
      </div>
    </div>
  );
};
