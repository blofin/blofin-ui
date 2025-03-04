import React, { FC, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { bgStyles, iconstyles, textStyles, toastVariants } from "./styles";
import Info from "../../assets/icons/info.svg";
import Warning from "../../assets/icons/warning.svg";
import Success from "../../assets/icons/success.svg";
import Danger from "../../assets/icons/danger.svg";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./toast.module.scss";
import useTheme from "../../provider/useTheme";
import { BUIComponentType } from "../../types/component";
import { NoticeContext } from "../../provider/NoticeProvider";

interface ToastMsgProps {
  children: React.ReactNode;
  type: BUIComponentType;
  remove: () => void;
}

type Methods = (msg: string, type: BUIComponentType) => void;

interface ToastRef {
  info: Methods;
  success: Methods;
  warning: Methods;
  danger: Methods;
}

const Icon: FC<{ type: BUIComponentType }> = ({ type }) => {
  const { theme } = useTheme();
  const icons = {
    info: <Info className={iconstyles(type, theme)} />,
    warning: <Warning className={iconstyles(type, theme)} />,
    success: <Success className={iconstyles(type, theme)} />,
    danger: <Danger className={iconstyles(type, theme)} />
  };

  return <>{icons[type]}</>;
};

const ToastMsg: FC<ToastMsgProps> = ({ children, type, remove }) => {
  const { theme } = useTheme();
  useEffect(() => {
    const timer = setTimeout(() => {
      remove();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`bu-mx-auto bu-mb-[12px] bu-w-fit bu-rounded-[8px] bu-shadow-toast ${bgStyles({
        theme
      })}`}>
      <div className={toastVariants({ theme })}>
        <Icon type={type} />
        <span className={textStyles({ theme })}>{children}</span>
      </div>
    </div>
  );
};

const ToastContainer = () => {
  const { toastList, removeToast } = useContext(NoticeContext);

  return (
    <TransitionGroup className="bu-fixed bu-left-[50%] bu-top-[40px] bu-z-[99999] bu-translate-x-[-50%] bu-text-center">
      {toastList.map(({ node, id, type }) => {
        return (
          <CSSTransition
            key={id}
            timeout={300}
            classNames={{
              enter: styles["toast-enter"],
              enterActive: styles["toast-enter-active"],
              exit: styles["toast-exit"],
              exitActive: styles["toast-exit-active"]
            }}
            unmountOnExit>
            <ToastMsg
              type={type}
              remove={() => {
                removeToast(id);
              }}>
              {node}
            </ToastMsg>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export const Toast = () => {
  return ReactDOM.createPortal(<ToastContainer />, document.body);
};
