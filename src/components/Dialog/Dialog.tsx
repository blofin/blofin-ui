import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BUIComponentSize, BUITheme } from "../../types/component";
import CloseIcon from "../../assets/icons/close.svg";
import { Button } from "../Button/Button";
import { dialogVariants, footerStyles, iconStyles, textStyles } from "./styles";
import useTheme from "../../provider/useTheme";
import { ButtonSize } from "../Button/types";

interface DialogProps {
  title: null | string | React.ReactNode;
  size: BUIComponentSize;
  content: string | React.ReactNode;
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
}

export const Dialog: FC<DialogProps> = (props) => {
  const {
    size,
    title,
    content,
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
    open
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

  const handleConfirm = () => {
    if (confirm) {
      confirm();
    }
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[9999] bg-black/[.6]">
          <div className={dialogVariants({ size, theme: getTheme() })}>
            {!hideIcon && (
              <CloseIcon
                className={`absolute right-[20px] h-[24px] w-[24px] cursor-pointer ${iconStyles({
                  theme: getTheme()
                })}`}
                onClick={handleCancel}
              />
            )}

            <div className={textStyles({ theme: getTheme() })}>
              {title !== null && (
                <div className="mb-[23px] text-[16px] font-medium leading-[26px] tracking-[-0.2px]">
                  {title}
                </div>
              )}

              <div className="mb-[48px] text-[14px] font-normal leading-[20px] tracking-[-0.2px]">
                {content}
              </div>
            </div>
            {footer !== null && (
              <>
                {footer ? (
                  <>{footer}</>
                ) : (
                  <div className={footerStyles({ footerLayout })}>
                    {!hideConfirm && (
                      <Button
                        size={footerSize}
                        variant="primary"
                        theme={getTheme()}
                        onClick={handleConfirm}>
                        {confirmText}
                      </Button>
                    )}

                    {!hideCancel && (
                      <Button
                        className="ml-[16px]"
                        size={footerSize}
                        variant="ghost"
                        theme={getTheme()}
                        onClick={handleCancel}>
                        {cancelText}
                      </Button>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>,
        document.body
      )
    : null;
};
