import React, { useState } from "react";
import ReactDOM from "react-dom";
import CloseIcon from "../../assets/icons/close.svg";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import styles from "./index.module.scss";
import { drawerVariants, iconStyles } from "./styles";
export interface DrawerProps {
  title: null | string | React.ReactNode;
  content: string | React.ReactNode;
  drawerContentClass:string;
  cancel?: () => void;
  open: boolean;
  theme?: BUITheme;
  hideIcon?: Boolean;
  placement?: "left" | "right";
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    title,
    content,
    cancel,
    theme: mode,
    hideIcon = false,
    open,
    placement = "right",
    drawerContentClass='bu-w-[300px]'
  } = props;
  const { theme, direction } = useTheme();
  const getTheme = () => {
    return mode ? mode : theme;
  };

  if (!open) {
    return null;
  }

  const handleCancel = () => {
    if (cancel) {
      cancel();
    }
  };
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      event.stopPropagation();
      handleCancel();
    }
  };
  const hiddenTranslateX = placement === "left" ? "-100%" : "100%";
  const drawerStyle = {
    transition: open ? "transform .3s ease-in-out" : "transform .3s ease-in-out, opacity 0.3s ease",
    transform: open ? "translateX(0)" : `translateX(${hiddenTranslateX})`,
    opacity: open ? 1 : 0
  };
  return open
    ? ReactDOM.createPortal(
        <div className={styles.mock} onClick={handleOverlayClick}>
          <div
            className={`${styles.drawerContent}
        ${drawerVariants({
          theme: getTheme()
        })}
        ${styles[placement]} ${drawerContentClass}`}
            style={drawerStyle}>
            <div className={styles.drawerHeader}>
              <div className={styles.title}>{title}</div>
              {!hideIcon && (
                <CloseIcon
                  className={`${iconStyles({
                    theme: getTheme(),
                    direction
                  })}`}
                  onClick={handleCancel}
                />
              )}
            </div>
            <div className={styles.content}>{content}</div>
          </div>
        </div>,
        document.body
      )
    : null;
};
