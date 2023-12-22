import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from "../../assets/icons/close.svg";
import useTheme from "../../provider/useTheme";
import { BUIComponentSize, BUITheme } from "../../types/component";
import { ButtonSize } from "../Button/types";
import styles from "./index.module.scss";
import { drawerVariants, iconStyles } from "./styles";
  export interface DrawerProps {
    title: null | string | React.ReactNode;
    width: string;
//   size: BUIComponentSize;
  content: string | React.ReactNode;
  maskClosable?: boolean;
  cancelText?: string;
  confirmText?: string;
  footer?: null | React.ReactNode;
  cancel?: () => void;
//   confirm?: () => void;
  open: boolean;
  theme?: BUITheme;
  footerLayout?: "right" | "left" | "center";
  footerSize?: ButtonSize;
  hideCancel?: Boolean;
  hideConfirm?: Boolean;
  hideIcon?: Boolean;
  className?: string;
  placement?: 'left' | 'right';
  }

  export const Drawer: React.FC<DrawerProps> = (props) => {
    const {
        title,
        width,
        content,
        maskClosable = false,
        cancelText = "",
        confirmText = "",
        footer,
        cancel,
        theme: mode,
        footerLayout,
        footerSize = "small",
        hideCancel = false,
        hideConfirm = false,
        hideIcon = false,
        className,
        open,
        placement = 'right',
      } = props;
    const { theme } = useTheme();
    const [isRendered, setIsRendered] = useState(false);
    const getTheme = () => {
        return mode ? mode : theme;
    };
    const openDrawer = () => {
        setIsRendered(true);
    };

    if (!isRendered && !open) {
      return null;
    }

    const handleCancel = () => {
        setIsRendered(false);
        if (cancel) {
           cancel();
        }
      };
      const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            handleCancel();
        }
      };
    const drawerStyle = {
        width,
        transition: open ? 'transform .3s ease-in-out' : 'transform .3s ease-in-out, opacity 0.3s ease',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        opacity: open ? 1 : 0,
      };
    return open
    ? ReactDOM.createPortal(
      <div className={styles.mock} onClick={handleOverlayClick}>
        <div 
        className={`${styles.drawerContent}
        ${drawerVariants({
            theme: getTheme()
          })}
        ${styles[placement] }`} style={drawerStyle}>
          <div className={styles.drawerHeader}>
            <h2>{title}</h2>
            {!hideIcon && (
              <CloseIcon
                className={`${iconStyles({
                  theme: getTheme()
                })}`}
                onClick={handleCancel}
              />
            )}
          </div>
          <div className={styles.content}>{content}</div>
        </div>
      </div>,
        document.body
    ) : null;
  };
  