"use client";

import * as React from "react";
import { createPortal } from "react-dom";
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

interface DialogComponent extends React.FC<DialogProps> {
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

  const { theme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

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

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    setIsOpen(open);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return isOpen
    ? createPortal(
        <div className={`${styles.mock} ${modalClassName}`} onClick={closeMask}>
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

// ==================== 全局状态管理 ====================

type DialogInstance = {
  id: number;
  props: Omit<DialogProps, "open">;
};

const dialogInstances: DialogInstance[] = [];
let dialogIdCounter = 0;
const subscribers = new Set<() => void>();

const notifySubscribers = () => {
  subscribers.forEach((cb) => cb());
};

const removeDialog = (id: number) => {
  const index = dialogInstances.findIndex((d) => d.id === id);
  if (index !== -1) {
    dialogInstances.splice(index, 1);
    notifySubscribers();
  }
};

// 全局容器组件
const GlobalDialogContainer: React.FC = () => {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  React.useEffect(() => {
    subscribers.add(forceUpdate);
    return () => {
      subscribers.delete(forceUpdate);
    };
  }, []);

  return (
    <>
      {dialogInstances.map((instance) => {
        const handleCancel = () => {
          instance.props.cancel?.();
          removeDialog(instance.id);
        };

        const handleConfirm = () => {
          instance.props.confirm?.();
          removeDialog(instance.id);
        };

        return (
          <Dialog
            key={instance.id}
            {...instance.props}
            open={true}
            cancel={handleCancel}
            confirm={handleConfirm}
          />
        );
      })}
    </>
  );
};

// Dialog.show 方法
const show = (options: Omit<DialogProps, "open">) => {
  if (typeof window === "undefined") {
    console.warn("Dialog.show 仅能在浏览器端调用");
    return () => {};
  }

  const id = dialogIdCounter++;
  dialogInstances.push({ id, props: options });
  notifySubscribers();

  return () => removeDialog(id);
};

Dialog.show = show;

// DialogProvider 用于在应用根部挂载全局容器
export const DialogProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <GlobalDialogContainer />
    </>
  );
};

export { Dialog };
