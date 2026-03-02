import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
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
  hideCancel?: boolean;
  hideConfirm?: boolean;
  hideIcon?: boolean;
  className?: string;
  contentClassName?: string;
  loading?: boolean;
  containerRef?: React.RefObject<HTMLDivElement>;
  modalClassName?: string;
}

interface DialogComponent extends FC<DialogProps> {
  show: (options: Omit<DialogProps, "open">) => () => void;
}

const Dialog: DialogComponent = (props) => {
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
    containerRef,
    modalClassName
  } = props;

  const { theme, direction } = useTheme();
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
        <div className={`${styles.mock} ${modalClassName}`} onClick={closeMask}>
          <div
            className={`${styles.dialog} ${dialogVariants({
              size,
              theme: getTheme()
            })} ${className}`}>
            {!hideIcon && (
              <CloseIcon
                className={`${iconStyles({
                  theme: getTheme(),
                  direction
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
                      className={!hideCancel ? "ltr:bu-ml-[16px] rtl:bu-mr-[16px]" : ""}
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

const show = (options: Omit<DialogProps, "open">) => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  const root = createRoot(div);

  const destroy = () => {
    root.unmount();
    document.body.removeChild(div);
  };

  const handleCancel = () => {
    if (options.cancel) options.cancel();
    destroy();
  };

  const handleConfirm = () => {
    if (options.confirm) options.confirm();
    destroy();
  };

  root.render(
    <Dialog
      {...options}
      open={true} // 强制打开对话框
      cancel={handleCancel}
      confirm={handleConfirm}
    />
  );

  return destroy;
};

Dialog.show = show;

export { Dialog };
