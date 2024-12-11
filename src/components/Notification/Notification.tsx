import React, { FC, useContext, useEffect, useMemo } from "react";
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
import { NoticeContext } from "../../provider/NoticeProvider";
interface NotificationMsgProps {
  title: React.ReactNode;
  children: React.ReactNode;
  type: BUIComponentType;
  remove: () => void;
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
    <div
      className={`bu-mb-[24px] bu-w-full bu-rounded-[6px] bu-shadow-toast bu-border ${bgStyles({ theme })}`}>
      <div className="bu-flex bu-rounded-[6px] bu-px-[24px] bu-py-[16px]">
        <Icon type={type} />
        <div className="w-full bu-flex bu-flex-col">
          <div className="bu-mb-[8px] bu-flex bu-justify-between">
            <span
              className={`bu-w-[250px] bu-break-words bu-text-[16px] bu-font-medium bu-leading-[24px] bu-tracking-[-0.2px] ${textbg(
                { theme }
              )}`}>
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

const NotificationContainer = () => {
  const { notificationList, remove, position } = useContext(NoticeContext);

  const [positionStyle, enter, enterActive, exit, exitActive] = useMemo(() => {
    const positionStyleMap = {
      leftTop: "bu-top-[32px] bu-left-[32px]",
      leftBottom: "bu-bottom-[32px] bu-left-[32px]",
      rightTop: "bu-top-[32px] bu-right-[8px]",
      rightBottom: "bu-bottom-[32px] bu-right-[8px]"
    };

    const positionStyle = positionStyleMap[position as keyof typeof positionStyleMap];

    const enter =
      position === "leftTop" || position === "leftBottom"
        ? "notification-enter"
        : "notification-enter-right";

    const enterActive =
      position === "leftTop" || position === "leftBottom"
        ? "notification-enter-active"
        : "notification-enter-active-right";

    const exit =
      position === "leftTop" || position === "leftBottom"
        ? "notification-exit"
        : "notification-exit-right";

    const exitActive =
      position === "leftTop" || position === "leftBottom"
        ? "notification-exit-active"
        : "notification-exit-active-right";

    return [positionStyle, enter, enterActive, exit, exitActive];
  }, [position, styles]);

  return (
    <TransitionGroup className={`bu-fixed bu-z-[99999] bu-w-[384px] ${positionStyle}`}>
      {notificationList.map(({ title, node, id, type }) => {
        return (
          <CSSTransition
            key={id}
            timeout={300}
            classNames={{
              enter: styles[enter],
              enterActive: styles[enterActive],
              exit: styles[exit],
              exitActive: styles[exitActive]
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
};

export const Notification = () => {
  return ReactDOM.createPortal(<NotificationContainer />, document.body);
};
