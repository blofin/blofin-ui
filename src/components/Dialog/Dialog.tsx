import isEmpty from "lodash/isEmpty";
import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BUIComponentSize, BUITheme } from "../../types/component";
import CloseIcon from "../../assets/icons/close.svg";
import { Button } from "../Button/Button";
import { dialogVariants, textStyles } from "./styles";
import useTheme from "../../provider/useTheme";

interface DialogProps {
  title: string | React.ReactNode;
  size: BUIComponentSize;
  content: string | React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  footer?: null | React.ReactNode;
  cancel?: () => void;
  confirm?: () => void;
  open: boolean;
  theme?: BUITheme;
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
            <CloseIcon
              className={`absolute right-[20px] h-[24px] w-[24px] cursor-pointer ${textStyles({
                theme: getTheme()
              })}`}
              onClick={handleCancel}
            />
            <div className={textStyles({ theme: getTheme() })}>
              {!isEmpty(title) ? (
                <div className="mb-[23px] text-[18px] font-medium leading-[26px] tracking-[-0.2px]">
                  {title}
                </div>
              ) : (
                <div>{title}</div>
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
                  <div className="flex justify-end">
                    <Button
                      size="small"
                      variant="primary"
                      label={confirmText}
                      theme={getTheme()}
                      onClick={handleConfirm}></Button>
                    <Button
                      className="ml-[16px]"
                      size="small"
                      variant="ghost"
                      label={cancelText}
                      theme={getTheme()}
                      onClick={handleCancel}></Button>
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
