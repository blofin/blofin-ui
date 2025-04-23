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
  autoClose?: number | boolean;
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

const NotificationMsg: FC<NotificationMsgProps> = ({
  title,
  children,
  autoClose,
  type,
  remove
}) => {
  const { theme } = useTheme();
  useEffect(() => {
    if (autoClose === false) return;
    const delay = typeof autoClose === "number" ? autoClose : 3000;
    const timer = setTimeout(() => {
      remove();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const close = () => {
    remove();
  };

  return (
    <div
      className={`bu-mb-[12px] bu-w-full bu-rounded-[8px] ${bgStyles({
        theme
      })}`}>
      <div className="bu-flex bu-rounded-[8px] bu-px-[16px] bu-py-[12px]">
        <Icon type={type} />
        <div className="w-full bu-flex bu-flex-col">
          <div className="bu-mb-[4px] bu-flex bu-justify-between">
            <span
              className={`bu-w-[260px] bu-break-words bu-text-[16px] bu-font-medium bu-leading-[24px] bu-tracking-[-0.2px] ${textbg(
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
  const {
    notificationListLeftBottom,
    notificationListLeftTop,
    notificationListRightBottom,
    notificationListRightTop,
    remove
  } = useContext(NoticeContext);

  return (
    <>
      <TransitionGroup
        className={`bu-fixed bu-bottom-[32px] bu-left-[32px] bu-z-[99999] bu-w-[360px]`}>
        {notificationListLeftBottom.map(({ title, node, id, type, autoClose, onClose }) => {
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
                autoClose={autoClose}
                remove={() => {
                  onClose?.();
                  remove(id);
                }}>
                {node}
              </NotificationMsg>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <TransitionGroup
        className={`bu-fixed bu-left-[32px] bu-top-[32px] bu-z-[99999] bu-w-[360px]`}>
        {notificationListLeftTop.map(({ title, node, id, type, autoClose, onClose }) => {
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
                autoClose={autoClose}
                remove={() => {
                  onClose?.();
                  remove(id);
                }}>
                {node}
              </NotificationMsg>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <TransitionGroup
        className={`bu-fixed bu-bottom-[32px] bu-right-[8px] bu-z-[99999] bu-w-[360px]`}>
        {notificationListRightBottom.map(({ title, node, id, type, autoClose, onClose }) => {
          return (
            <CSSTransition
              key={id}
              timeout={300}
              classNames={{
                enter: styles["notification-enter-right"],
                enterActive: styles["notification-enter-active-right"],
                exit: styles["notification-exit-right"],
                exitActive: styles["notification-exit-active-right"]
              }}
              unmountOnExit>
              <NotificationMsg
                type={type}
                title={title}
                autoClose={autoClose}
                remove={() => {
                  onClose?.();
                  remove(id);
                }}>
                {node}
              </NotificationMsg>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <TransitionGroup
        className={`bu-fixed bu-right-[8px] bu-top-[32px] bu-z-[99999] bu-w-[360px]`}>
        {notificationListRightTop.map(({ title, node, id, type, autoClose, onClose }) => {
          return (
            <CSSTransition
              key={id}
              timeout={300}
              classNames={{
                enter: styles["notification-enter-right"],
                enterActive: styles["notification-enter-active-right"],
                exit: styles["notification-exit-right"],
                exitActive: styles["notification-exit-active-right"]
              }}
              unmountOnExit>
              <NotificationMsg
                type={type}
                title={title}
                autoClose={autoClose}
                remove={() => {
                  onClose?.();
                  remove(id);
                }}>
                {node}
              </NotificationMsg>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
};

export const Notification = () => {
  return ReactDOM.createPortal(<NotificationContainer />, document.body);
};
