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
import { BUIComponentType } from "../../types/component";

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
    <div className={`bu-mx-auto bu-mb-[24px] bu-w-fit bu-rounded-[6px] bu-shadow-toast ${bgStyles({ theme })}`}>
      <div className={toastVariants({ type })}>
        <Icon type={type} />
        <span className={textStyles({ theme })}>{children}</span>
      </div>
    </div>
  );
};

const ToastContainer = React.forwardRef((props, ref) => {
  const [toastList, setToastList] = useState<
    { node: React.ReactNode; id: number; type: BUIComponentType }[]
  >([]);

  const key = useRef(0);

  const open = (msg: React.ReactNode, type: BUIComponentType) => {
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
    <TransitionGroup className="bu-fixed bu-left-[50%] bu-top-[32px] bu-z-[9999] bu-translate-x-[-50%] bu-text-center">
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
  const [iseRender, setIsRender] = useState(false);

  const node = React.useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    node.id = "blofin-toast";
    const toastContainer = document.getElementById("blofin-toast");
    if (!toastContainer) {
      document.body.appendChild(node);
      setIsRender(true);
    }
  }, []);

  return iseRender ? ReactDOM.createPortal(<ToastContainer ref={ref} />, node) : null;
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
