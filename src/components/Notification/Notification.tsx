import React, {
  FC,
  Fragment,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from "react";
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
  title: string;
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
      className={`bu-mb-[24px] bu-w-full bu-rounded-[6px] bu-shadow-toast ${bgStyles({ theme })}`}>
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
  const { notificationList, remove } = useContext(NoticeContext);

  return (
    <TransitionGroup className="bu-fixed bu-bottom-[32px] bu-left-[32px] bu-z-[9999] bu-w-[384px]">
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
};

export const Notification = () => {
  return ReactDOM.createPortal(<NotificationContainer />, document.body);
};