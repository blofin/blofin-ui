import React from "react";

interface Props {
  wrapperClassName?: string;
  innerCircularClassName?: string;
  outerCircularClassName?: string;
  animateClassName?: string;
}

const CircularLoading: React.FC<Props> = ({
  wrapperClassName,
  innerCircularClassName,
  outerCircularClassName,
  animateClassName
}) => {
  return (
    <div className={`bu-relative bu-h-[32px] bu-w-[32px] ${wrapperClassName}`}>
      <div
        className={`bu-absolute bu-h-full bu-w-full bu-rounded-full bu-border-[3px] bu-border-base-line-primary ${outerCircularClassName}`}></div>
      <div className={`bu-absolute bu-h-full bu-w-full bu-animate-spin ${animateClassName}`}>
        <div
          className={`bu-h-full bu-w-full bu-rounded-full bu-border-[3px] bu-border-transparent bu-border-l-base-primary ${innerCircularClassName}`}></div>
      </div>
    </div>
  );
};

export { CircularLoading };
