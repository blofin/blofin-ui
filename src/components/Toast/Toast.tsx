import React, { FC, useEffect, useImperativeHandle, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { bgStyles, iconstyles, textStyles, toastVariants } from "./styles";
import Info from "../../assets/icons/info.svg";
import Warning from "../../assets/icons/warning.svg";
import Success from "../../assets/icons/success.svg";
import Danger from "../../assets/icons/danger.svg";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./toast.module.scss";
import useTheme from "../../provider/useTheme";
import { ToastType } from "./types";

interface ToastMsgProps {
  children: React.ReactNode;
  type: ToastType;
  remove: () => void;
}

type Methods = (msg: string, type: ToastType) => void;

interface ToastRef {
  info: Methods;
  success: Methods;
  warning: Methods;
  danger: Methods;
}

const Icon: FC<{ type: ToastType }> = ({ type }) => {
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
    setTimeout(() => {
      remove();
    }, 3000);
  }, []);

  return (
    <div className={`mx-auto mb-[24px] w-fit rounded-[6px] shadow-toast ${bgStyles({ theme })}`}>
      <div className={toastVariants({ type })}>
        <Icon type={type} />
        <span className={textStyles({ theme })}>{children}</span>
      </div>
    </div>
  );
};

const ToastContainer = React.forwardRef((props, ref) => {
  const [toastList, setToastList] = useState<
    { node: React.ReactNode; id: number; type: ToastType }[]
  >([]);

  const key = useRef(0);

  const open = (msg: React.ReactNode, type: ToastType) => {
    setToastList((list) => [
      ...list,
      {
        node: msg,
        id: key.current,
        type: type
      }
    ]);
    key.current += 1;
  };

  useImperativeHandle(ref, () => {
    return {
      info: open,
      success: open,
      warning: open,
      danger: open
    };
  });

  const remove = (id: number) => {
    setToastList((val) => val.filter((item) => item.id !== id));
  };

  return (
    <TransitionGroup className="fixed left-[50%] z-[9999] top-[32px] translate-x-[-50%] text-center">
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
                remove(id);
              }}>
              {node}
            </ToastMsg>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
});

export const Toast = React.forwardRef((props, ref) => {
  return ReactDOM.createPortal(<ToastContainer ref={ref} />, document.body);
});

export const useToast = () => {
  const ToastRef = useRef<ToastRef>(null);

  const info = (msg: string) => {
    ToastRef.current?.info(msg, "info");
  };

  const success = (msg: string) => {
    ToastRef.current?.success(msg, "success");
  };

  const warning = (msg: string) => {
    ToastRef.current?.warning(msg, "warning");
  };

  const danger = (msg: string) => {
    ToastRef.current?.danger(msg, "danger");
  };

  return {
    methods: {
      info,
      success,
      warning,
      danger
    },
    context: <Toast ref={ToastRef} />
  };
};
