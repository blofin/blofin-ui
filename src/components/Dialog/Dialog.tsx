import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BUIComponentSize, BUITheme } from "../../types/component";
import CloseIcon from "../../assets/icons/close.svg";
import { Button } from "../Button/Button";
import { dialogVariants, footerStyles, iconStyles, textStyles } from "./styles";
import useTheme from "../../provider/useTheme";
import { ButtonSize } from "../Button/types";
import styles from "./index.module.scss";

export interface DialogProps {
  title: null | string | React.ReactNode;
  size: BUIComponentSize;
  content: string | React.ReactNode;
  maskClosable?: boolean;
  cancelText?: string;
  confirmText?: string;
  footer?: null | React.ReactNode;
  cancel?: () => void;
  confirm?: () => void;
  open: boolean;
  theme?: BUITheme;
  footerLayout?: "right" | "left" | "center";
  footerSize?: ButtonSize;
  hideCancel?: Boolean;
  hideConfirm?: Boolean;
  hideIcon?: Boolean;
  className?: string;
  contentClassName?: string;
  loading?: boolean;
  containerRef?: React.RefObject<HTMLDivElement>;
}

export const Dialog: FC<DialogProps> = (props) => {
  const {
    size,
    title,
    content,
    maskClosable = false,
    cancelText = "",
    confirmText = "",
    footer,
    cancel,
    confirm,
    theme: mode,
    footerLayout,
    footerSize = "small",
    hideCancel = false,
    hideConfirm = false,
    hideIcon = false,
    className,
    contentClassName,
    open,
    loading = false,
    containerRef
  } = props;
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const getTheme = () => {
    return mode ? mode : theme;
  };

  const handleCancel = () => {
    if (cancel) {
      cancel();
    }
  };

  const closeMask = () => {
    maskClosable && handleCancel();
  };

  const handleConfirm = () => {
    if (confirm) {
      confirm();
    }
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    setIsOpen(open);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className={styles.mock} onClick={closeMask}>
          <div
            className={`${styles.dialog} ${dialogVariants({
              size,
              theme: getTheme()
            })} ${className}`}>
            {!hideIcon && (
              <CloseIcon
                className={`${iconStyles({
                  theme: getTheme()
                })}`}
                onClick={handleCancel}
              />
            )}

            <div className={textStyles({ theme: getTheme() })}>
              {title !== null && <div className={styles.title}>{title}</div>}
            </div>
            <div ref={containerRef} className={`${styles.content} ${contentClassName}`}>
              {content}
            </div>
            <div className={footerStyles({ footerLayout })}>
              {footer === null ? null : footer ? (
                footer
              ) : (
                <>
                  {!hideCancel && (
                    <Button
                      size={footerSize}
                      variant="ghost"
                      theme={getTheme()}
                      onClick={handleCancel}>
                      {cancelText}
                    </Button>
                  )}
                  {!hideConfirm && (
                    <Button
                      className={!hideCancel ? "bu-ml-[16px]" : ""}
                      size={footerSize}
                      variant="primary"
                      loading={loading}
                      theme={getTheme()}
                      onClick={handleConfirm}>
                      {confirmText}
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};
