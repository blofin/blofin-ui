import React, { FC, useEffect, useImperativeHandle, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./notification.module.scss";
import useTheme from "../../provider/useTheme";
import Info from "../../assets/icons/info.svg";
import Warning from "../../assets/icons/warning.svg";
import Success from "../../assets/icons/success.svg";
import Danger from "../../assets/icons/danger.svg";
import { BUIComponentType } from "../../types/component";
import { bgStyles, closeIconStyles, iconstyles, textStyles, textbg } from "./style";
import CloseIcon from "../../assets/icons/close.svg";

interface NotificationMsgProps {
  title: string;
  children: React.ReactNode;
  type: BUIComponentType;
  remove: () => void;
}

type configType = {
  title: string;
  msg: string;
};

type Methods = (config: configType, type: BUIComponentType) => void;

interface NotificationRef {
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

const NotificationMsg: FC<NotificationMsgProps> = ({ title, children, type, remove }) => {
  const { theme } = useTheme();
  useEffect(() => {
    const timer = setTimeout(() => {
      remove();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const close = () => {
    remove();
  };

  return (
    <div className={`mb-[24px] w-full rounded-[6px] shadow-toast ${bgStyles({ theme })}`}>
      <div className="flex rounded-[6px] px-[24px] py-[16px]">
        <Icon type={type} />
        <div className="flex w-full  flex-col">
          <div className="mb-[8px] flex justify-between">
            <span className={`w-[250px] break-words text-[16px] font-medium leading-[24px] tracking-[-0.2px] ${textbg({ theme })}`}>
              {title}
            </span>
            <CloseIcon onClick={close} className={closeIconStyles({ theme })} />
          </div>

          <span className={textStyles({ theme })}>{children}</span>
        </div>
      </div>
    </div>
  );
};

const NotificationContainer = React.forwardRef((props, ref) => {
  const [notificationList, setNotificationList] = useState<
    { title: string; node: React.ReactNode; id: number; type: BUIComponentType }[]
  >([]);

  const key = useRef(0);

  const open = (config: configType, type: BUIComponentType) => {
    setNotificationList((list) => [
      ...list,
      {
        title: config.title,
        node: config.msg,
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
    setNotificationList((val) => val.filter((item) => item.id !== id));
  };

  return (
    <TransitionGroup className="fixed bottom-[32px] left-[32px] z-[9999] w-[384px]">
      {notificationList.map(({ title, node, id, type }) => {
        return (
          <CSSTransition
            key={id}
            timeout={300}
            classNames={{
              enter: styles["notification-enter"],
              enterActive: styles["notification-enter-active"],
              exit: styles["notification-exit"],
              exitActive: styles["notification-exit-active"]
            }}
            unmountOnExit>
            <NotificationMsg
              type={type}
              title={title}
              remove={() => {
                remove(id);
              }}>
              {node}
            </NotificationMsg>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
});

export const Notification = React.forwardRef((props, ref) => {
  const [iseRender, setIsRender] = useState(false);

  const node = React.useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    node.id = "blofin-notification";
    const notificationContainer = document.getElementById("blofin-notification");
    if (!notificationContainer) {
      document.body.appendChild(node);
      setIsRender(true);
    }
  }, []);

  return iseRender ? ReactDOM.createPortal(<NotificationContainer ref={ref} />, node) : null;
});

export const useNotification = () => {
  const NotificationRef = useRef<NotificationRef>(null);

  const info = (config: configType) => {
    NotificationRef.current?.info(config, "info");
  };

  const success = (config: configType) => {
    NotificationRef.current?.success(config, "success");
  };

  const warning = (config: configType) => {
    NotificationRef.current?.warning(config, "warning");
  };

  const danger = (config: configType) => {
    NotificationRef.current?.danger(config, "danger");
  };

  return {
    methods: {
      info,
      success,
      warning,
      danger
    },
    context: <Notification ref={NotificationRef} />
  };
};
