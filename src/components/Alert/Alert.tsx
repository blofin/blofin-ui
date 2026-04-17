import { useRef, useState, FC, ReactNode, useEffect } from "react";

import { Typography } from "../Typography/Typography";
import { alertIconVariants, alertBgVariants } from "./styles";

import Question from "../../assets/icons/alert-doubt.svg";
import Warning from "../../assets/icons/alert-warning.svg";
import Success from "../../assets/icons/alert-success.svg";
import Danger from "../../assets/icons/alert-danger.svg";
import Close from "../../assets/icons/close.svg";
import Arrow from "../../assets/icons/arrow-right-l-line.svg";

const BarHeight = 36;

export type AlertType = "doubt" | "warning" | "success" | "danger";

export interface Props {
  type: AlertType;
  content: string | ReactNode;
  buttonText?: string;
  showCloseIcon?: boolean;
  showUnderline?: boolean;
  buttonShowArrow?: boolean;
  buttonCallback?: () => void;
}

export const Alert: FC<Props> = ({
  type,
  content,
  buttonText,
  buttonShowArrow = true,
  showCloseIcon = false,
  showUnderline = true,
  buttonCallback
}) => {
  const [isClose, setIsClose] = useState(false);
  const [isMultiRow, setIsMultiRow] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const icons = {
    doubt: <Question className={alertIconVariants({ type })} />,
    warning: <Warning className={alertIconVariants({ type })} />,
    success: <Success className={alertIconVariants({ type })} />,
    danger: <Danger className={alertIconVariants({ type })} />
  };

  const handleClose = () => {
    setIsClose(true);
  };

  const handleButtonClick = () => {
    buttonCallback && buttonCallback();
  };

  useEffect(() => {
    const height = containerRef.current?.getBoundingClientRect()?.height || BarHeight;
    setIsMultiRow(height > BarHeight);
  }, []);

  return (
    <div ref={containerRef} className={alertBgVariants({ type, alignType: isMultiRow })}>
      {icons[type]}
      <div className="bu-flex bu-h-full bu-flex-1">
        {typeof content === "string" ? (
          <Typography
            variant="body4"
            className="bu-break-words bu-break-all bu-leading-[18px] bu-text-base-label">
            {content}
          </Typography>
        ) : (
          content
        )}
      </div>
      {buttonText && (
        <div
          className="ltr:bu-ml-[8px] rtl:bu-mr-[8px] bu-flex bu-cursor-pointer bu-items-center"
          onClick={handleButtonClick}>
          <Typography
            variant="body4"
            weight="medium"
            className={`bu-leading-[18px] !bu-text-base-primary ${
              showUnderline ? "bu-underline" : ""
            }`}>
            {buttonText}
          </Typography>
          {buttonShowArrow && (
            <Arrow className="ltr:bu-ml-[4px] rtl:bu-mr-[4px] rtl:bu-rotate-180 bu-h-[16px] bu-w-[16px] bu-text-[16px] bu-text-base-primary"></Arrow>
          )}
        </div>
      )}
      {showCloseIcon && !isClose && (
        <div className="ltr:bu-ml-[8px] rtl:bu-mr-[8px]" onClick={handleClose}>
          <Close className="bu-h-[16px] bu-w-[16px] bu-cursor-pointer bu-text-[16px] bu-text-base-label-40 hover:bu-text-base-label"></Close>
        </div>
      )}
    </div>
  );
};
