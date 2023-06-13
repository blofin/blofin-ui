import isEmpty from "lodash/isEmpty";
import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BUIComponentSize } from "../../../types/component";
import CloseIcon from "../../assets/icons/close.svg";
import { Button } from "../Button/Button";
import dialogVariants from "./styles";

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
    open,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

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
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-black/[.6]">
          <div className={dialogVariants({ size })}>
            <CloseIcon
              className="w-[24px] h-[24px] absolute right-[20px] cursor-pointer"
              onClick={handleCancel}
            />
            <div>
              {!isEmpty(title) ? (
                <div className="mb-[40px]">{title}</div>
              ) : (
                <div>{title}</div>
              )}
              <div>{content}</div>
            </div>
            {footer ? (
              <>{footer}</>
            ) : (
              <div className="flex justify-end">
                <Button
                  className="mr-[20px]"
                  size="medium"
                  variant="ghost"
                  label={cancelText}
                  onClick={handleCancel}
                ></Button>
                <Button
                  size="medium"
                  variant="primary"
                  label={confirmText}
                  onClick={handleConfirm}
                ></Button>
              </div>
            )}
          </div>
        </div>,
        document.body
      )
    : null;
};
