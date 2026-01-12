"use client";

import * as React from "react";
import { useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "../../assets/icons/close.svg";
import { useTheme } from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import styles from "./index.module.scss";
import { drawerVariants as drawerThemeVariants, iconStyles } from "./styles";
import { overlayVariants, drawerVariants, transition } from "./animations";
import { useDrawerCallbacks } from "./useDrawerCallbacks";

export interface DrawerProps {
  title: null | string | React.ReactNode;
  content: string | React.ReactNode;
  drawerContentClass: string;
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
    drawerContentClass = 'bu-w-[300px]'
  } = props;
  
  const { theme } = useTheme();
  const { handleCancel, handleOverlayClick, handleKeyDown } = useDrawerCallbacks(cancel);

  // 使用 useMemo 缓存主题计算
  const currentTheme = useMemo(() => mode ?? theme, [mode, theme]);

  // 使用 useMemo 缓存 drawer className
  const drawerClassName = useMemo(
    () => cn(
      styles.drawerContent,
      drawerThemeVariants({ theme: currentTheme }),
      styles[placement],
      drawerContentClass
    ),
    [currentTheme, placement, drawerContentClass]
  );

  // 使用 useMemo 缓存 icon className
  const iconClassName = useMemo(
    () => iconStyles({ theme: currentTheme }),
    [currentTheme]
  );

  // ESC 键盘事件监听
  useEffect(() => {
    if (open && typeof document !== 'undefined') {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [open, handleKeyDown]);

  if (typeof document === 'undefined') {
    return null;
  }

  // 使用 createPortal 渲染到 body
  return createPortal(
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className={styles.mock}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={transition}
          onClick={handleOverlayClick}
        >
          <motion.div
            className={drawerClassName}
            variants={drawerVariants[placement]}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={transition}
          >
            <div className={styles.drawerHeader}>
              <div className={styles.title}>{title}</div>
              {!hideIcon && (
                <CloseIcon
                  className={iconClassName}
                  onClick={handleCancel}
                />
              )}
            </div>
            <div className={styles.content}>{content}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
