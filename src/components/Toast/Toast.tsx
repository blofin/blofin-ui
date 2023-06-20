import React, { FC, useEffect, useImperativeHandle, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { bgStyles, textStyles, toastVariants } from "./styles";
import Info from "../../assets/icons/info.svg";
import Warning from "../../assets/icons/warning.svg";
import Success from "../../assets/icons/success.svg";
import Danger from "../../assets/icons/danger.svg";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./toast.module.scss";
import { BUITheme } from "../../types/component";

const Icons = {
  info: <Info className="mr-[16px] h-[24px] w-[24px] text-light-primary" />,
  warning: <Warning className="mr-[16px] h-[24px] w-[24px] text-light-warning" />,
  success: <Success className="mr-[16px] h-[24px] w-[24px] text-light-success" />,
  danger: <Danger className="mr-[16px] h-[24px] w-[24px] text-light-danger" />
};

type ToastType = "info" | "success" | "warning" | "danger";

interface ToastMsgProps {
  children: React.ReactNode;
  type: ToastType;
  remove: () => void;
  theme: BUITheme;
}

type Methods = (msg: string, type: ToastType, theme?: BUITheme) => void;

interface ToastRef {
  info: Methods;
  success: Methods;
  warning: Methods;
  danger: Methods;
}

const ToastMsg: FC<ToastMsgProps> = ({ children, type, remove, theme }) => {
  useEffect(() => {
    setTimeout(() => {
      remove();
    }, 3000);
  }, []);

  return (
    <div className={`rounded-[6px] shadow-toast mx-auto mb-[20px] w-fit ${bgStyles({ theme })}`}>
      <div className={toastVariants({ type })}>
        {Icons[type]}
        <span className={textStyles({theme})}>{children}</span>
      </div>
    </div>
  );
};

const ToastContainer = React.forwardRef((props, ref) => {
  const [toastList, setToastList] = useState<
    { node: React.ReactNode; id: number; type: ToastType }[]
  >([]);

  const [theme, setTheme] = useState<BUITheme>("light");

  const key = useRef(0);

  const open = (msg: React.ReactNode, type: ToastType, theme: BUITheme) => {
    setTheme(theme);
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
    <TransitionGroup className="fixed left-[50%] top-0 translate-x-[-50%] text-center">
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
              theme={theme}
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

  const info = (msg: string, theme: BUITheme) => {
    ToastRef.current?.info(msg, "info", theme);
  };

  const success = (msg: string, theme?: BUITheme) => {
    ToastRef.current?.success(msg, "success");
  };

  const warning = (msg: string, theme?: BUITheme) => {
    ToastRef.current?.warning(msg, "warning");
  };

  const danger = (msg: string, theme?: BUITheme) => {
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
